import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import {
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Option,
  Radio,
  Select,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Error from "../../../../Error/Error";
import CustomTime from "../../../../common/CustomTime";
import IntegerInput from "../../../../common/CustomInput/IntegerInput";

const ALERT_DAYS = ["7 Days", "15 Days", "30 Days", "60 Days"];

const defaultValues = {
  category: "group_wise",
  item: "",
  reorderPoint: 3,
  negativeStock: false,
  alertBefore: "30 Days",
  trackedBatches: false,
  groupByWarehouse: false,
  push: false,
  email: false,
  whatsapp: false,
  sms: false,
  frequency: "immediate",
  timing: "05:00",
  dailySendTime: false,
};

const LowStock = ({ open, handleOpen, upsertHandler, initialData }) => {
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
    // console.log(data);
    handleOpen("lowStock");
    reset();
  };

  return (
    <>
      <Dialog
        size="md"
        open={open}
        handler={() => {
          handleOpen("lowStock");
        }}
        className="p-4"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4">Low Stock & Expiry Alerts</Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={() => {
              handleOpen("lowStock");
            }}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogBody className="grid grid-cols-12">
            {/* <div className="col-span-12 mb-2 flex items-center">
              <Typography variant="small" className="w-[90px]">
                Low Stock
              </Typography>
              <div className="h-[1px] bg-[#B0BEC5] w-full"></div>
            </div> */}
            <div className="col-span-12">
              <Typography variant="small">Category</Typography>
            </div>
            <div className="col-span-12">
              <Controller
                name="category"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <div className="flex gap-6">
                    <Radio
                      name={field.name}
                      value="group_wise"
                      checked={field.value === "group_wise"}
                      onChange={field.onChange}
                      label="Group wise"
                      color="green"
                      ripple={false}
                      className="h-4 w-4 before:!opacity-0"
                      containerProps={{
                        className: "mr-0 -ml-3",
                      }}
                    />
                    <Radio
                      name={field.name}
                      value="item_wise"
                      checked={field.value === "item_wise"}
                      onChange={field.onChange}
                      label="Item wise"
                      color="green"
                      ripple={false}
                      className="h-4 w-4 before:!opacity-0"
                      containerProps={{
                        className: "mr-0",
                      }}
                    />
                  </div>
                )}
              />
              <Error
                condition={errors.category}
                message={errors.category?.message}
              />
            </div>
            <div className="col-span-12 mb-4">
              <Controller
                name="item"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <Input {...field} label="Item" color="green" />
                )}
              />
              <Error condition={errors.item} message={errors.item?.message} />
            </div>
            <div className="col-span-4">
              <IntegerInput
                name="reorderPoint"
                control={control}
                label="Reorder Point"
              />
              <Error
                condition={errors.reorderPoint}
                message={errors.reorderPoint?.message}
              />
            </div>
            <div className="col-span-6 ml-3 mt-5">
              <Controller
                name="negativeStock"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    label="Include Negative Stock"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                  />
                )}
              />
            </div>
            {/* <div className="col-span-12 my-3 flex items-center">
              <Typography variant="small" className="w-[60px]">
                Expiry
              </Typography>
              <div className="h-[1px] bg-[#B0BEC5] w-full"></div>
            </div> */}
            <div className="col-span-12 mt-5">
              <Controller
                name="alertBefore"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Alert Before"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {ALERT_DAYS.map((day) => (
                        <Option
                          key={day}
                          value={day}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {day}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.alertBefore}
                message={errors.alertBefore?.message}
              />
            </div>
            <div className="col-span-6">
              <Controller
                name="trackedBatches"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    label="Only for tracked batches"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0 -ml-3",
                    }}
                  />
                )}
              />
            </div>
            <div className="col-span-6">
              <Controller
                name="groupByWarehouse"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    label="Group by warehouse"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                  />
                )}
              />
            </div>
            {/* <div className="col-span-12 mt-3 mb-2 flex items-center">
              <Typography variant="small" className="w-[180px]">
                Delivery & Schedule
              </Typography>
              <div className="h-[1px] bg-[#B0BEC5] w-full"></div>
            </div> */}
            <div className="col-span-12 mt-2">
              <Typography variant="small">Channel</Typography>
            </div>
            <div className="col-span-3">
              <Controller
                name="push"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    label="Push"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0 -ml-3",
                    }}
                  />
                )}
              />
            </div>
            <div className="col-span-3">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    label="Email"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                  />
                )}
              />
            </div>
            <div className="col-span-3">
              <Controller
                name="whatsapp"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    label="Whatsapp"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                  />
                )}
              />
            </div>
            <div className="col-span-3">
              <Controller
                name="sms"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    label="SMS"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                  />
                )}
              />
            </div>
            <div className="col-span-12 mt-2">
              <Typography variant="small">Frequency</Typography>
            </div>
            <div className="col-span-12 mb-2">
              <Controller
                name="frequency"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <div className="flex gap-6">
                    <Radio
                      name={field.name}
                      value="immediate"
                      checked={field.value === "immediate"}
                      onChange={field.onChange}
                      label="Immediate"
                      color="green"
                      ripple={false}
                      className="h-4 w-4 before:!opacity-0"
                      containerProps={{
                        className: "mr-0 -ml-3",
                      }}
                    />
                    <Radio
                      name={field.name}
                      value="dialy"
                      checked={field.value === "dialy"}
                      onChange={field.onChange}
                      label="Daily"
                      color="green"
                      ripple={false}
                      className="h-4 w-4 before:!opacity-0"
                      containerProps={{
                        className: "mr-0",
                      }}
                    />
                    <Radio
                      name={field.name}
                      value="weekly"
                      checked={field.value === "weekly"}
                      onChange={field.onChange}
                      label="Weekly"
                      color="green"
                      ripple={false}
                      className="h-4 w-4 before:!opacity-0"
                      containerProps={{
                        className: "mr-0",
                      }}
                    />
                  </div>
                )}
              />
              <Error
                condition={errors.frequency}
                message={errors.frequency?.message}
              />
            </div>
            <div className="col-span-4">
              <CustomTime
                name="timing"
                control={control}
                label="Time"
                rules={{ required: "Time is required" }}
              />
              <Error
                condition={errors.timing}
                message={errors.timing?.message}
              />
            </div>
            <div className="col-span-6">
              <Controller
                name="dailySendTime"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    label="Daily send-time"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0 ml-2",
                    }}
                  />
                )}
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

export default LowStock;
