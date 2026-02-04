import React, { useState } from "react";

import {
  Button,
  Drawer,
  IconButton,
  Input,
  Option,
  Select,
  Switch,
  Textarea,
  Typography,
} from "@material-tailwind/react";

import { Controller, useForm } from "react-hook-form";

import Error from "../../../Error/Error";

const defaultValues = {
  name: "",
  underGroup: "Duities & Taxes",
  openingBalance: "",
  typeOfDuty: "",
  percentage: "",
};

const UNDER_GROUP = [
  "Sundry Debtors",
  "Sundry Creditors",
  "Duities & Taxes",
  "Custom Groups",
];

const TAX = ["CGST", "SGST", "IGST", "CESS", "Others"];

const DuitiesTaxes = ({ open, toggleDrawer }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    reset,
  } = useForm({
    defaultValues,
  });

  const [isCredit, setIsCredit] = useState(false);

  const onSubmitHandler = (data) => {
    console.log(data);
    reset();
    toggleDrawer("duitiesTaxes");
  };

  return (
    <>
      <Drawer
        placement="right"
        className="p-4 overflow-scroll"
        open={open}
        // onClose={() => toggleDrawer("duitiesTaxes")}
        size={500}
      >
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="relative mt-0 flex justify-between">
            <Typography variant="h4">Duities & Taxes</Typography>
            <IconButton
              size="sm"
              variant="text"
              // className="!absolute right-0 top-0"
              onClick={() => {
                reset();
                toggleDrawer("duitiesTaxes");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="space-y-4 pb-6">
            <div className="grid grid-cols-12 gap-4 mt-5">
              <div className="col-span-12">
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        color="green"
                        label="Name"
                        {...field}
                        onChange={(value) => {
                          //   onChange(value);
                          field.onChange(value);
                        }}
                      />
                    );
                  }}
                />
                <Error condition={errors.name} message={errors.name?.message} />
              </div>
              {/* <div className="col-span-12">
                <Controller
                  name="underGroup"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Select
                        label="Under (Group)"
                        value={field.value}
                        onChange={(val) => {
                          field.onChange(val);
                        }}
                        color="green"
                      >
                        {UNDER_GROUP.map((group) => (
                          <Option
                            key={group}
                            value={group}
                            className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                          >
                            {group}
                          </Option>
                        ))}
                      </Select>
                    );
                  }}
                />
                <Error
                  condition={errors.underGroup}
                  message={errors.underGroup?.message}
                />
              </div> */}
              <div className="col-span-12 ">
                <div className="flex rounded-md ring-1 focus-within:ring-2 ring-inset ring-[#b0bec5] h-[40px] items-center focus-within:ring-[#108f6f]">
                  <Controller
                    name="openingBalance"
                    control={control}
                    rules={{
                      required: "This field is required",
                    }}
                    render={({ field }) => {
                      return (
                        <div className="relative w-full">
                          <label className="text-[12px] absolute -top-2.5 left-3 z-10 bg-white px-1 text-blue-gray-600">
                            Opening Balance
                          </label>
                          <input
                            type="number"
                            {...field}
                            onChange={(value) => {
                              //   onChange(value);
                              field.onChange(value);
                            }}
                            placeholder="0.00"
                            className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-600 sm:text-sm/6 focus:border-0 w-full"
                          />
                        </div>
                      );
                    }}
                  />
                  <div className="flex justify-between items-center gap-3 mr-4">
                    <Typography variant="small">Dr</Typography>
                    <Switch
                      color="green"
                      // label="Optional/Regular"
                      checked={isCredit}
                      onChange={(e) => {
                        const newValue = e.target.checked;
                        setIsCredit(newValue);
                      }}
                      ripple={true}
                    />
                    <Typography variant="small">Cr</Typography>
                  </div>
                </div>
                <Error
                  condition={errors.openingBalance}
                  message={errors.openingBalance?.message}
                />
              </div>
              <div className="col-span-12">
                <Controller
                  name="typeOfDuty"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Select
                        label="Type of Duty / Tax"
                        value={field.value}
                        onChange={(val) => {
                          field.onChange(val);
                        }}
                        color="green"
                      >
                        {TAX.map((tax) => (
                          <Option
                            key={tax}
                            value={tax}
                            className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                          >
                            {tax}
                          </Option>
                        ))}
                      </Select>
                    );
                  }}
                />
                <Error
                  condition={errors.typeOfDuty}
                  message={errors.typeOfDuty?.message}
                />
              </div>
              <div className="col-span-12">
                <Controller
                  name="percentage"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        color="green"
                        label="Percentage of Calculation"
                        type="number"
                        inputMode="numeric"
                        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        {...field}
                        onChange={(value) => {
                          //   onChange(value);
                          field.onChange(value);
                        }}
                        icon={<Typography variant="small">%</Typography>}
                      />
                    );
                  }}
                />
                <Error
                  condition={errors.percentage}
                  message={errors.percentage?.message}
                />
              </div>
              <div className="col-span-12">
                <Button
                  className="w-full"
                  color="green"
                  type="submit"
                  style={{ color: "white !importannt" }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default DuitiesTaxes;
