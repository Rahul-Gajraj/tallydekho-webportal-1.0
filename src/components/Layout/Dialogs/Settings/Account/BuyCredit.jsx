import React, { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Input,
  ListItem,
  Radio,
  Textarea,
  Typography,
} from "@material-tailwind/react";

import { XMarkIcon } from "@heroicons/react/24/outline";

import { Controller, useForm } from "react-hook-form";

import Error from "../../../../Error/Error";

const CustomRadio = ({ label, value }) => {
  return (
    <div className="flex items-center gap-2">
      <Typography>₹{value}</Typography>
      <Typography className="text-[12px]">({label})</Typography>
    </div>
  );
};

const defaultValues = {
  credit: "199",
  name: "Party A",
  email: "",
  mobile: "",
  companyName: "",
  state: "",
  gstNumber: "",
  address: "",
};

const BuyCredit = ({ open, handleOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    reset,
    watch,
  } = useForm({
    defaultValues,
  });

  const onSubmit = async (data) => {
    console.log(data);
    // handleOpen("payment");
    // reset();
  };

  return (
    <Dialog
      size="md"
      open={open}
      handler={() => {
        handleOpen();
      }}
      className="p-4"
    >
      <DialogHeader className="relative m-0 block">
        <Typography variant="h4">Buy Credit</Typography>
        <Typography>Add credit to your account</Typography>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-3.5 top-3.5"
          onClick={() => {
            handleOpen("payment");
          }}
        >
          <XMarkIcon className="h-4 w-4 stroke-2" />
        </IconButton>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogBody className="grid grid-cols-12 gap-4 max-h-[42rem] overflow-scroll">
          <div className="col-span-12">
            <Typography>Choose a credit</Typography>
          </div>
          <div className="col-span-12">
            <Controller
              name="credit"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <div className="grid grid-cols-12 gap-2">
                  {[
                    { value: "199", label: "200 Credits" },
                    { value: "449", label: "500 Credits" },
                    { value: "849", label: "1000 Credits" },
                  ].map((item) => (
                    <Card
                      key={item.value}
                      className={`border shadow-none col-span-4 cursor-pointer transition p-0`}
                      onClick={() => field.onChange(item.value)}
                    >
                      <ListItem className="block hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]">
                        <Radio
                          name={field.name}
                          value={item.value}
                          checked={field.value === item.value}
                          onChange={() => field.onChange(item.value)}
                          label={<CustomRadio {...item} />}
                          className="h-4 w-4"
                          containerProps={{
                            className: "scale-75",
                          }}
                          color="green"
                        />
                      </ListItem>
                    </Card>
                  ))}
                </div>
              )}
            />

            <Error condition={errors.credit} message={errors.credit?.message} />
          </div>
          <div className="col-span-12">
            <Controller
              name="name"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => {
                return <Input label="Name" {...field} color="green" />;
              }}
            />
            <Error condition={errors.name} message={errors?.name?.message} />
          </div>
          <div className="col-span-6">
            <Controller
              name="email"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => {
                return <Input label="Email" {...field} color="green" />;
              }}
            />
            <Error condition={errors.email} message={errors?.email?.message} />
          </div>
          <div className="col-span-6">
            <Controller
              name="mobile"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => {
                return <Input label="Mobile" {...field} color="green" />;
              }}
            />
            <Error
              condition={errors.mobile}
              message={errors?.mobile?.message}
            />
          </div>
          <div className="col-span-12">
            <Controller
              name="companyName"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => {
                return <Input label="Company Name" {...field} color="green" />;
              }}
            />
            <Error
              condition={errors.companyName}
              message={errors?.companyName?.message}
            />
          </div>
          <div className="col-span-12">
            <Controller
              name="state"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => {
                return <Input label="State" {...field} color="green" />;
              }}
            />
            <Error condition={errors.state} message={errors?.state?.message} />
          </div>
          <div className="col-span-12">
            <Controller
              name="gstNumber"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => {
                return <Input label="GST Number" {...field} color="green" />;
              }}
            />
            <Error
              condition={errors.gstNumber}
              message={errors?.gstNumber?.message}
            />
          </div>
          <div className="col-span-12">
            <Controller
              name="address"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => {
                return (
                  <Textarea rows={2} label="Address" {...field} color="green" />
                );
              }}
            />
            <Error
              condition={errors.address}
              message={errors?.address?.message}
            />
          </div>
          <div className="col-span-12">
            <Button
              className="w-full"
              color="green"
              type="submit"
              style={{ color: "white !importannt" }}
            >
              Buy Now
            </Button>
          </div>
        </DialogBody>
      </form>
    </Dialog>
  );
};

export default BuyCredit;
