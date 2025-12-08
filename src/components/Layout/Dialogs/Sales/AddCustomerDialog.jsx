import React from "react";
import { Controller, useForm } from "react-hook-form";

import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Checkbox,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Error from "../../../Error/Error";

const defaultValues = {
  name: "",
  mobile: "",
  email: "",
  billingAddress: "",
  sameAsBilling: false,
  shippingAddress: "",
  gstinNumber: "",
};

const AddCustomerDialog = ({ open, handleOpen, addHandler }) => {
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

  const onSubmit = async (data) => {
    // console.log(data);
    addHandler(data ? data.name : "");
    handleOpen("customer");
    reset();
  };

  return (
    <>
      <Dialog
        size="sm"
        open={open}
        handler={() => {
          handleOpen("customer");
        }}
        className="p-4"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Add Customer
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Fill the form for information
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={() => {
              handleOpen("customer");
            }}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form id="sign_in_form" onSubmit={handleSubmit(onSubmit)}>
          <DialogBody className="flex flex-col pb-6">
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
                    size="lg"
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
            <div className="flex gap-4 my-4">
              <Input color="green" size="lg" label="Mobile" />
              <Input color="green" size="lg" label="Email" />
            </div>
            <Textarea rows={2} label="Billing Address" color="green" />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="ml-2 leading-none"
                >
                  Same as billing address
                </Typography>
              }
              ripple={false}
              className="before:!bg-transparent my-1"
              color="green"
              labelProps={{
                className: "leading-none",
              }}
              containerProps={{
                className: "p-0",
              }}
            />
            <Textarea
              rows={2}
              label="Shipping Address"
              color="green"
              // className="pt-2"
              containerProps={{ className: "mt-4" }}
            />
            <Input
              color="green"
              size="lg"
              // containerProps={{
              //   className: "!min-w-full",
              // }}
              label="GSTIN/VAT Number"
              containerProps={{ className: "mt-2" }}
            />
          </DialogBody>
          <DialogFooter>
            <Button
              className="ml-auto"
              color="green"
              //   onClick={() => {
              //     handleOpen("customer");
              //   }}
              type="submit"
            >
              Add Product
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default AddCustomerDialog;
