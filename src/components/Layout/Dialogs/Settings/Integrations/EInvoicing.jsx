import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Switch,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Error from "../../../../Error/Error";

const defaultValues = {
  gstProvider: "",
  irpClientId: "",
  irpClientSecret: "",
  userName: "",
  password: "",
  gstin: "",
  companyName: "",
};

const GST_PROVIDERS = [
  "Clear Tax",
  "Tally Solutions",
  "Master Data Management",
  "GSTIN",
  "Other",
];

const EInvoicing = ({ open, handleOpen, upsertHandler, initialData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    reset,
    watch,
    clearErrors
  } = useForm({
    defaultValues,
  });

  //   useEffect(() => {
  //     if (initialData) {
  //       reset(initialData);
  //     } else {
  //       reset(defaultValues);
  //     }
  //   }, [initialData]);

  const resetFields = () => {
    clearErrors();
    handleOpen("eInvoicing");
    reset();
  };

  const onSubmit = async (data) => {
    // console.log(data);
    resetFields();
  };

  return (
    <>
      <Dialog
        size="md"
        open={open}
        handler={() => {
          resetFields();
        }}
        className="p-4"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4">E-Invoice</Typography>
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
          <DialogBody className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Controller
                name="gstProvider"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="GST Providers"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {GST_PROVIDERS.map((gstProvider) => (
                        <Option
                          key={gstProvider}
                          value={gstProvider}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {gstProvider}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.gstProvider}
                message={errors.gstProvider?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="irpClientId"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input {...field} label="IRP Client ID" color="green" />
                  );
                }}
              />
              <Error
                condition={errors.irpClientId}
                message={errors.irpClientId?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="irpClientSecret"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input {...field} label="IRP Client Secret" color="green" />
                  );
                }}
              />
              <Error
                condition={errors.irpClientSecret}
                message={errors.irpClientSecret?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="userName"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input {...field} label="User Name (IRP)" color="green" />
                  );
                }}
              />
              <Error
                condition={errors.userName}
                message={errors.userName?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return <Input {...field} label="Password" color="green" />;
                }}
              />
              <Error
                condition={errors.password}
                message={errors.password?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="gstin"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return <Input {...field} label="GSTIN" color="green" />;
                }}
              />
              <Error condition={errors.gstin} message={errors.gstin?.message} />
            </div>
            <div className="col-span-12">
              <Controller
                name="companyName"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input {...field} label="Company Name" color="green" />
                  );
                }}
              />
              <Error
                condition={errors.companyName}
                message={errors.companyName?.message}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              className="ml-auto"
              color="green"
              type="submit"
              style={{ color: "white !importannt" }}
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default EInvoicing;
