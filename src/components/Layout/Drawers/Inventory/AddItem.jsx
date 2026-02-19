import React, { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  Drawer,
  IconButton,
  Input,
  Option,
  Popover,
  PopoverContent,
  PopoverHandler,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { Controller, useForm } from "react-hook-form";
import { DayPicker } from "react-day-picker";
import { useSelector } from "react-redux";
import moment from "moment-timezone";

import Error from "@/components/Error/Error";
import { validateDateInFuture } from "@/utils/validation";

const defaultValues = {
  group: "",
  productName: "",
  unitOfMeasure: "",
  taxRate: "",
  purchasePrice: "",
  warehousePlacement: "",
  quantity: "",
  defaultSalesPrice: "",
  expiryDate: new Date(),
  batchNumber: "",
};

const AddItem = ({ open, toggleDrawer }) => {
  const preferences = useSelector((state) => state?.preferences);
  const preference = preferences?.preference || {};
  const currencyNumber = preferences?.currencyNumber || {};
  const {
    dateFormat,
  } = currencyNumber;

  const timezone = preference?.timezone ?? "Asia/Kolkata";

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    clearErrors,
    reset,
  } = useForm({
    defaultValues,
  });

  const [expiryDatePopoverOpen, setExpiryDatePopoverOpen] = useState(false);

  const resetFields = () => {
    toggleDrawer("addItem");
    clearErrors();
    reset();
  };

  const onSubmitHandler = (data) => {
    toggleDrawer("addItem");
    // resetFields();
  };

  return (
    <Drawer
      placement="right"
      className="p-4 overflow-scroll"
      open={open}
      // onClose={() => toggleDrawer("addItem")}
      size={500}
    >
      <div className="relative mt-0 block">
        <Typography variant="h4">Add Item</Typography>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-0 top-0"
          onClick={resetFields}
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
                name="group"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Group"
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      <Option
                        value="Deltamas Logistics Center"
                        className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                      >
                        Deltamas Logistics Center
                      </Option>
                    </Select>
                  );
                }}
              />
              <Error condition={errors.group} message={errors.group?.message} />
            </div>
            <div className="col-span-12">
              <Controller
                name="productName"
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
                      label="Product Name"
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
                condition={errors.productName}
                message={errors.productName?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="unitOfMeasure"
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
                      label="Unit Of Measure"
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
                condition={errors.unitOfMeasure}
                message={errors.unitOfMeasure?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="taxRate"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Tax Rate"
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      <Option
                        value="Deltamas Logistics Center"
                        className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                      >
                        5%
                      </Option>
                      <Option
                        value="Deltamas Logistics Center"
                        className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                      >
                        10%
                      </Option>
                      <Option
                        value="Deltamas Logistics Center"
                        className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                      >
                        15%
                      </Option>
                    </Select>
                  );
                }}
              />
              <Error condition={errors.group} message={errors.group?.message} />
            </div>
            <div className="col-span-12">
              <Controller
                name="purchasePrice"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Purchase Price"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                      icon={
                        <Typography className="-mt-1" variant="small">
                          INR
                        </Typography>
                      }
                    />
                  );
                }}
              />
              <Error
                condition={errors.purchasePrice}
                message={errors.purchasePrice?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="warehousePlacement"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Warehouse Placement"
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      <Option
                        value="Deltamas Logistics Center"
                        className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                      >
                        Deltamas Logistics Center
                      </Option>
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.warehousePlacement}
                message={errors.warehousePlacement?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="quantity"
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
                      label="Quantity"
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
                condition={errors.quantity}
                message={errors.quantity?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="defaultSalesPrice"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Default Sales Price"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                      icon={
                        <Typography className="-mt-1" variant="small">
                          INR
                        </Typography>
                      }
                    />
                  );
                }}
              />
              <Error
                condition={errors.defaultSalesPrice}
                message={errors.defaultSalesPrice?.message}
              />
            </div>
            <div className="col-span-12 relative">
              <label className="text-[12px] absolute -top-2.5 left-3 z-10 bg-white px-1 text-blue-gray-600">
                Expiry Date
              </label>
              <Controller
                name="expiryDate"
                control={control}
                rules={{
                  required: "This field is required",
                  validate: validateDateInFuture,
                }}
                render={({ field }) => {
                  return (
                    <Popover
                      placement="bottom"
                      open={expiryDatePopoverOpen}
                      handler={setExpiryDatePopoverOpen}
                    >
                      <PopoverHandler>
                        <Button
                          variant="outlined"
                          className="flex items-center w-full gap-3 !border-[#B0BEC5] text-[#455a64] font-medium justify-between focus:ring-0 h-[40px] px-3"
                          ripple={false}
                        >
                          {moment(field.value)
                            .tz(timezone)
                            .format(dateFormat)}
                          <img
                            src="/media/icons/calendar.svg"
                            alt="calendar"
                            className="w-5 h-5"
                          />
                        </Button>
                      </PopoverHandler>
                      <PopoverContent className="z-[9999]">
                        <DayPicker
                          selected={field.value}
                          timeZone={timezone}
                          onDayClick={(newDate) => {
                            if (newDate) {
                              field.onChange(newDate);
                              setExpiryDatePopoverOpen(false);
                            }
                          }}
                          showOutsideDays
                          className="border-0"
                          classNames={{
                            caption:
                              "flex justify-center py-2 mb-4 relative items-center",
                            caption_label: "text-sm !font-medium text-gray-900",
                            nav: "flex items-center",
                            nav_button:
                              "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                            nav_button_previous: "absolute left-1.5",
                            nav_button_next: "absolute right-1.5",
                            table: "w-full border-collapse",
                            head_row: "flex !font-medium text-gray-900",
                            head_cell: "m-0.5 w-9 !font-normal text-sm",
                            row: "flex w-full mt-2",
                            cell: "rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                            day: "h-9 w-9 p-0 !font-normal",
                            day_range_end: "day-range-end",
                            day_selected:
                              "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                            day_today: "rounded-md bg-gray-200 text-gray-900",
                            day_outside:
                              "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                            day_disabled: "text-gray-500 opacity-50",
                            day_hidden: "invisible",
                          }}
                          components={{
                            IconLeft: ({ ...props }) => (
                              <ChevronLeftIcon
                                {...props}
                                className="h-4 w-4 stroke-2"
                              />
                            ),
                            IconRight: ({ ...props }) => (
                              <ChevronRightIcon
                                {...props}
                                className="h-4 w-4 stroke-2"
                              />
                            ),
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  );
                }}
              />
              <Error
                condition={errors.expiryDate}
                message={errors.expiryDate?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="batchNumber"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Batch Number"
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
                condition={errors.batchNumber}
                message={errors.batchNumber?.message}
              />
            </div>
            <div className="col-span-12">
              <Button className="w-full" color="green" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Drawer>
  );
};

export default AddItem;
