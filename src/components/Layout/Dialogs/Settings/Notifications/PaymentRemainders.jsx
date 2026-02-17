import React, { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Slider,
  Switch,
  Typography,
} from "@material-tailwind/react";

import { XMarkIcon } from "@heroicons/react/24/outline";

import Error from "@/components/Error/Error";
import IntegerInput from "@/components/common/CustomInput/IntegerInput";
import CustomTime from "@/components/common/CustomTime";

const REMINDERS = [
  {
    name: "Buy",
    isActive: true,
    day: 3,
    time: "09:00",
    onDueDate: true,
    push: true,
    email: false,
    whatsapp: false,
    sms: false,
    // exceptionLists: ["Traders", "Royal Furnish"],
    exceptionLists: "Traders",
  },
  {
    name: "",
    isActive: true,
    day: 0,
    time: "00:00",
    onDueDate: false,
    push: false,
    email: false,
    whatsapp: false,
    sms: false,
    // exceptionLists: [],
    exceptionLists: "",
  },
];

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const ReminderAccordion = ({ name, control, errors, idx }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(idx);
  const [currentName, setCurrentName] = useState(name);

  const handleAccordionOpen = () => setIsAccordionOpen((cur) => !cur);

  return (
    <Accordion
      open={isAccordionOpen == idx}
      className="mb-3 rounded-lg border border-blue-gray-100 px-4"
      icon={<Icon id={idx} open={isAccordionOpen} />}
    >
      <AccordionHeader
        onClick={handleAccordionOpen}
        className="border-b-0 font-normal text-[16px] pb-2 pt-2"
      >
        <div className="w-full flex justify-between">
          {currentName.length > 0 ? currentName : "First Reminder - 7 Days"}
          <Controller
            name={`reminders.${idx}.isActive`}
            control={control}
            render={({ field }) => {
              return (
                <Switch
                  {...field}
                  color="green"
                  checked={field.value}
                  onChange={(e) => {
                    const newValue = e.target.checked;
                    field.onChange(newValue);
                  }}
                />
              );
            }}
          />
        </div>
      </AccordionHeader>
      <AccordionBody>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12">
            <Controller
              name={`reminders.${idx}.name`}
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => {
                return (
                  <Input
                    label="Name"
                    value={field.value}
                    onChange={(e) => {
                      setCurrentName(e.target.value);
                      field.onChange(e.target.value);
                    }}
                    color="green"
                  />
                );
              }}
            />
            <Error
              condition={errors.reminders}
              message={errors?.reminders?.[idx]?.name?.message}
            />
          </div>
          <div className="col-span-6">
            <div className="pl-[2px]">
              <IntegerInput
                name={`reminders.${idx}.day`}
                control={control}
                label="Day"
                labelClass="text-[12px]"
              />
            </div>
            <Error
              condition={errors.reminders}
              message={errors?.reminders?.[idx]?.day?.message}
            />
          </div>
          <div className="col-span-6">
            <Typography className="text-[12px]">Time</Typography>
            <CustomTime
              name={`reminders.${idx}.time`}
              control={control}
              rules={{ required: "This field is required" }}
            />
            <Error
              condition={errors.reminders}
              message={errors?.reminders?.[idx]?.time?.message}
            />
          </div>
          <div className="col-span-12">
            <Controller
              name={`reminders.${idx}.onDueDate`}
              control={control}
              render={({ field }) => (
                <Checkbox
                  label="On Due Date"
                  {...field}
                  color="green"
                  ripple={false}
                  className="h-4 w-4 before:!opacity-0 -ml-3"
                  containerProps={{
                    className: "mr-0",
                  }}
                  labelProps={{
                    className: "text-[14px]",
                  }}
                />
              )}
            />
          </div>
          <div className="col-span-12 -mb-7">
            <Typography className="text-[12px]">Channel</Typography>
          </div>
          <div className="col-span-12 flex justify-between">
            <Controller
              name={`reminders.${idx}.push`}
              control={control}
              render={({ field }) => (
                <Checkbox
                  label="Push"
                  {...field}
                  color="green"
                  ripple={false}
                  className="h-4 w-4 before:!opacity-0 -ml-3"
                  containerProps={{
                    className: "mr-0",
                  }}
                  labelProps={{
                    className: "text-[14px]",
                  }}
                />
              )}
            />
            <Controller
              name={`reminders.${idx}.email`}
              control={control}
              render={({ field }) => (
                <Checkbox
                  label="Email"
                  {...field}
                  color="green"
                  ripple={false}
                  className="h-4 w-4 before:!opacity-0"
                  containerProps={{
                    className: "mr-0",
                  }}
                  labelProps={{
                    className: "text-[14px]",
                  }}
                />
              )}
            />
            <Controller
              name={`reminders.${idx}.whatsapp`}
              control={control}
              render={({ field }) => (
                <Checkbox
                  label="Whatsapp"
                  {...field}
                  color="green"
                  ripple={false}
                  className="h-4 w-4 before:!opacity-0"
                  containerProps={{
                    className: "mr-0",
                  }}
                  labelProps={{
                    className: "text-[14px]",
                  }}
                />
              )}
            />
            <Controller
              name={`reminders.${idx}.sms`}
              control={control}
              render={({ field }) => (
                <Checkbox
                  label="SMS"
                  {...field}
                  color="green"
                  ripple={false}
                  className="h-4 w-4 before:!opacity-0"
                  containerProps={{
                    className: "mr-0",
                  }}
                  labelProps={{
                    className: "text-[14px]",
                  }}
                />
              )}
            />
          </div>
          <div className="col-span-12">
            <Controller
              name={`reminders.${idx}.exceptionLists`}
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <Input label="Expections List" {...field} color="green" />
              )}
            />
            <Error
              condition={errors.reminders}
              message={errors?.reminders?.[idx]?.exceptionLists?.message}
            />
          </div>
        </div>
      </AccordionBody>
    </Accordion>
  );
};

const PaymentRemainders = ({
  open,
  handleOpen,
  upsertHandler,
  initialData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    reset,
    watch,
    clearErrors,
  } = useForm({
    defaultValues: {
      reminders: REMINDERS,
    },
  });

  const [currentbalance, setCurrentBalance] = useState(500);
  const percentage = ((currentbalance - 0) / 500) * 100;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "reminders",
  });

  const resetFields = () => {
    clearErrors();
    handleOpen("payment");
    reset();
  };

  const onSubmit = async (data) => {
    resetFields();
  };

  return (
    <Dialog
      size="md"
      open={open}
      handler={() => {
        resetFields();
      }}
      className="p-4"
    >
      <DialogHeader className="relative m-0 block">
        <Typography variant="h4">Payment Remainders</Typography>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-3.5 top-3.5"
          onClick={() => {
            resetFields();
          }}
        >
          <XMarkIcon className="h-4 w-4 stroke-2" />
        </IconButton>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogBody className="grid grid-cols-12 gap-4 max-h-[42rem] overflow-scroll">
          {/* <div className="col-span-12">
            <Typography>Avoid Remainder</Typography>
          </div> */}
          <div className="col-span-12 -mb-3">
            <Typography>Stop if customer balance</Typography>
          </div>
          <div className="col-span-12">
            <div className="w-full">
              <input
                type="range"
                min={0}
                max={500}
                value={currentbalance}
                onChange={(e) => setCurrentBalance(Number(e.target.value))}
                className="w-full h-2 appearance-none rounded-full cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #81C784 0%, #81C784 ${percentage}%, #E0E0E0 ${percentage}%, #E0E0E0 100%)`,
                }}
              />

              <div className="flex justify-between">
                <Typography>0</Typography>
                <Typography>100</Typography>
                <Typography>200</Typography>
                <Typography>300</Typography>
                <Typography>400</Typography>
                <Typography>500</Typography>
              </div>
              <div className="flex justify-center">
                <Typography className="!text-[#31977a]">
                  Current: {currentbalance}
                </Typography>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <Typography>List of Reminders</Typography>
          </div>
          <div className="col-span-12">
            {fields.map((item, idx) => (
              <div key={idx}>
                <ReminderAccordion
                  control={control}
                  {...item}
                  //   key={idx}
                  idx={idx}
                  errors={errors}
                />
              </div>
            ))}
          </div>
          {fields.length < 4 && (
            <div className="col-span-12">
              <Button
                className="w-full"
                color="green"
                onClick={() =>
                  append({
                    name: "",
                    isActive: true,
                    day: "0",
                    time: "00:00 AM",
                    onDueDate: false,
                    push: false,
                    email: false,
                    whatsapp: false,
                    sms: false,
                    // exceptionLists: [],
                    exceptionLists: "",
                  })
                }
              >
                Add Reminder
              </Button>
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" color="green" type="submit">
            Save
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};

export default PaymentRemainders;
