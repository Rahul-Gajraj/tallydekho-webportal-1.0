import React from "react";

import {
  Button,
  Drawer,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";

import { Controller, useForm } from "react-hook-form";

import Error from "../../../Error/Error";

const defaultValues = {
  warehouseCode: "",
  name: "",
  phoneNumber: "",
  email: "",
  address: "",
  zipCode: "",
  racks: "",
  label: "",
  narration: "",
};

const AddWarehouse = ({ open, toggleDrawer }) => {
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

  const onSubmitHandler = (data) => {
    console.log(data);
    reset();
    toggleDrawer("addWarehouse");
  };

  return (
    <Drawer
      placement="right"
      className="p-4 overflow-scroll"
      open={open}
      // onClose={() => toggleDrawer("addWarehouse")}
      size={500}
    >
      <div className="relative mt-0 block">
        <Typography variant="h4">Add Warehouse</Typography>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-0 top-0"
          onClick={() => toggleDrawer("addWarehouse")}
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
      <div className="space-y-4 pb-6 pt-5">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12">
              <Controller
                name="warehouseCode"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      size="md"
                      containerProps={{ className: "!min-w-full" }}
                      label="Warehouse Code"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error
                condition={errors.warehouseCode}
                message={errors.warehouseCode?.message}
              />
            </div>
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
                      size="md"
                      containerProps={{ className: "!min-w-full" }}
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
            <div className="col-span-12">
              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Phone Number"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error
                condition={errors.phoneNumber}
                message={errors.phoneNumber?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Email"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.email} message={errors.email?.message} />
            </div>
            <div className="col-span-12">
              <Controller
                name="address"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Address"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error
                condition={errors.address}
                message={errors.address?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="zipCode"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Zip Code"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error
                condition={errors.zipCode}
                message={errors.zipCode?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="racks"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Racks"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.racks} message={errors.racks?.message} />
            </div>
            <div className="col-span-12">
              <Controller
                name="label"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Label"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.label} message={errors.label?.message} />
            </div>
            <div className="col-span-12">
              <Controller
                name="narration"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Narration"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error
                condition={errors.narration}
                message={errors.narration?.message}
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
        </form>
      </div>
    </Drawer>
  );
};

export default AddWarehouse;
