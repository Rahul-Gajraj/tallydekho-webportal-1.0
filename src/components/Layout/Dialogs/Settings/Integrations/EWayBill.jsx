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
  apiUsername: "",
  apiPassword: "",
  gspClientId: "",
  gspClientSecret: "",
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

const EWayBill = ({ open, handleOpen, upsertHandler, initialData }) => {
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

  //   useEffect(() => {
  //     if (initialData) {
  //       reset(initialData);
  //     } else {
  //       reset(defaultValues);
  //     }
  //   }, [initialData]);

  const onSubmit = async (data) => {
    // console.log(data);
    handleOpen("eWayBill");
    reset();
  };

  return (
    <>
      <Dialog
        size="md"
        open={open}
        handler={() => {
          handleOpen("eWayBill");
        }}
        className="p-4"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4">E-Way Bill</Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={() => {
              handleOpen("eWayBill");
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
                name="apiUsername"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input {...field} label="API Username" color="green" />
                  );
                }}
              />
              <Error
                condition={errors.apiUsername}
                message={errors.apiUsername?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="apiPassword"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input {...field} label="API Password" color="green" />
                  );
                }}
              />
              <Error
                condition={errors.apiPassword}
                message={errors.apiPassword?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="gspClientId"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input {...field} label="GSP Client ID" color="green" />
                  );
                }}
              />
              <Error
                condition={errors.gspClientId}
                message={errors.gspClientId?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="gspClientSecret"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input {...field} label="GSP Client Secret" color="green" />
                  );
                }}
              />
              <Error
                condition={errors.gspClientSecret}
                message={errors.gspClientSecret?.message}
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

export default EWayBill;
