import React, { useEffect, useState } from "react";
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
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Error from "../../../Error/Error";

const defaultValues = {
  logisticsType: "",
  amount: "",
  trackingNumber: "",
  remark: "",
  taxOnLogistics: "",
};

const AddLogisticsDialog = ({
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
  } = useForm({
    defaultValues,
  });

  const logisticsType = ["Courier", "Transport", "Freight", "Custom"];
  const taxOnLogistics = [
    "Single Tax Rate",
    "Applied to All Logistics Entries",
  ];

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset(defaultValues);
    }
  }, [initialData]);

  const onSubmit = async (data) => {
    // console.log(data);
    upsertHandler(data);
    handleOpen("logistics");
    reset();
  };

  return (
    <>
      <Dialog
        size="md"
        open={open}
        handler={() => {
          handleOpen("logistics");
        }}
        className="p-4"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4">Add Logistics</Typography>
          <Typography className="mt-1 font-normal">
            Fill the form for information
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={() => {
              handleOpen("logistics");
            }}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form id="sign_in_form" onSubmit={handleSubmit(onSubmit)}>
          <DialogBody className="pb-6 grid gird-cols-12 gap-2">
            <div className="col-span-12">
              <Controller
                name="logisticsType"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Logistics Type"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {logisticsType.map((logisticType) => (
                        <Option
                          key={logisticType}
                          value={logisticType}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {logisticType}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.logisticsType}
                message={errors.logisticsType?.message}
              />
            </div>
            <div className="col-span-6">
              <div>
                <Controller
                  name="amount"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        color="green"
                        size="lg"
                        containerProps={{ className: "!min-w-full mt-2" }}
                        label="Amount"
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
                  condition={errors.amount}
                  message={errors.amount?.message}
                />
              </div>
            </div>
            <div className="col-span-6">
              <div>
                <Controller
                  name="trackingNumber"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        color="green"
                        size="lg"
                        containerProps={{ className: "!min-w-full mt-2" }}
                        label="Tracking Number"
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
                  condition={errors.trackingNumber}
                  message={errors.trackingNumber?.message}
                />
              </div>
            </div>
            <div className="col-span-12">
              <Controller
                name="remark"
                control={control}
                // rules={{
                //   required: "This field is required",
                // }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      size="lg"
                      containerProps={{ className: "!min-w-full my-2" }}
                      label="Remarks (Optional)"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              {/* <Error
                condition={errors.amount}
                message={errors.amount?.message}
              /> */}
            </div>
            <div className="col-span-12">
              <Controller
                name="taxOnLogistics"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Tax On Logistics"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {taxOnLogistics.map((tax) => (
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
                condition={errors.logisticsType}
                message={errors.logisticsType?.message}
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
              {initialData ? "Update" : "Add"}
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default AddLogisticsDialog;
