import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Select,
  Option,
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
  Switch,
} from "@material-tailwind/react";
import moment from "moment";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { Controller, useForm } from "react-hook-form";
import { DayPicker } from "react-day-picker";

import Error from "../../../Error/Error";

const defaultValues = {
  isOptional: false,
  voucherNumber: "",
  voucherDate: new Date(),
  partyName: "",
  searchInvoice: "",
  amount: "",
  paymentMethods: "",
  bankName: "",
  referenceNumber: "",
  phoneNumber: "",
  narration: "",
};

const PaymentVoucher = ({ open, toggleDrawer }) => {
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

  const [customers, setCustomers] = useState(["Yash", "Shirish", "Manish"]);
  const [paymentMethods, setPaymentMethods] = useState(["Bank", "Cash", "UPI"]);
  const [bankNames, setBankNames] = useState(["SBI", "PNB"]);

  const [searchInvoice, setReferenceInvoice] = useState([
    "Aadhar",
    "Pancard",
    "Passport",
  ]);

  const [debitNotePopoverOpen, setDebitNotePopoverOpen] = useState(false);

  const resetFields = () => {
    toggleDrawer("paymentVoucher");
    clearErrors();
    reset();
  };

  const onSubmitHandler = (data) => {
    console.log(data);
    resetFields();
  };

  return (
    <>
      <Drawer
        placement="right"
        className="p-4 overflow-scroll"
        open={open}
        // onClose={() => toggleDrawer("paymentVoucher")}
        size={500}
      >
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="relative mt-0 flex justify-between">
            <Typography variant="h4">Payment Voucher</Typography>
            <div className="flex gap-3">
              <Controller
                name="isOptional"
                control={control}
                render={({ field }) => {
                  return (
                    <Switch
                      color="green"
                      label="Regular"
                      ripple={true}
                      checked={field.value}
                      onChange={(e) => {
                        const newValue = e.target.checked;
                        field.onChange(newValue);
                      }}
                    />
                  );
                }}
              />
              <IconButton size="sm" variant="text" onClick={resetFields}>
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
          </div>
          <div className="space-y-4 pb-6 pt-5">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12">
                <Controller
                  name="voucherNumber"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        color="green"
                        label="Voucher Number"
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
                  condition={errors.voucherNumber}
                  message={errors.voucherNumber?.message}
                />
              </div>
              <div className="col-span-12 relative">
                <label className="text-[12px] absolute -top-2.5 left-3 z-10 bg-white px-1 text-blue-gray-600">
                  Voucher Date
                </label>
                <Controller
                  name="voucherDate"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Popover
                        placement="bottom"
                        open={debitNotePopoverOpen}
                        handler={setDebitNotePopoverOpen}
                      >
                        <PopoverHandler>
                          <Button
                            variant="outlined"
                            className="flex items-center w-full gap-3 !border-[#B0BEC5] text-[#455a64] font-medium justify-between focus:ring-0 h-[40px] px-3"
                            ripple={false}
                          >
                            {moment(field.value).format("DD MMM, yyyy")}
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
                            onDayClick={(newDate) => {
                              if (newDate) {
                                field.onChange(newDate);
                                setDebitNotePopoverOpen(false);
                              }
                            }}
                            showOutsideDays
                            className="border-0"
                            classNames={{
                              caption:
                                "flex justify-center py-2 mb-4 relative items-center",
                              caption_label:
                                "text-sm !font-medium text-gray-900",
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
                  condition={errors.voucherDate}
                  message={errors.voucherDate?.message}
                />
              </div>
              <div className="col-span-12">
                <Controller
                  name="partyName"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Select
                        label="Party Name"
                        value={field.value}
                        onChange={(val) => {
                          field.onChange(val);
                        }}
                        color="green"
                      >
                        {customers.map((customer) => (
                          <Option
                            key={customer}
                            value={customer}
                            className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                          >
                            {customer}
                          </Option>
                        ))}
                      </Select>
                    );
                  }}
                />
                <Error
                  condition={errors.partyName}
                  message={errors.partyName?.message}
                />
              </div>
              <div className="col-span-12">
                <Controller
                  name="searchInvoice"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Select
                        label="Invoice"
                        value={field.value}
                        onChange={(val) => {
                          field.onChange(val);
                        }}
                        color="green"
                      >
                        {searchInvoice.map((document) => (
                          <Option
                            key={document}
                            value={document}
                            className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                          >
                            {document}
                          </Option>
                        ))}
                      </Select>
                    );
                  }}
                />
                <Error
                  condition={errors.searchInvoice}
                  message={errors.searchInvoice?.message}
                />
              </div>
              <div className="col-span-12">
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
              <div className="col-span-12">
                <Controller
                  name="paymentMethods"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Select
                        label="Payment Methods"
                        value={field.value}
                        onChange={(val) => {
                          field.onChange(val);
                        }}
                        color="green"
                      >
                        {paymentMethods.map((methods) => (
                          <Option
                            key={methods}
                            value={methods}
                            className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                          >
                            {methods}
                          </Option>
                        ))}
                      </Select>
                    );
                  }}
                />
                <Error
                  condition={errors.paymentMethods}
                  message={errors.paymentMethods?.message}
                />
              </div>
              <div className="col-span-12">
                <Controller
                  name="bankName"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Select
                        label="Bank Name"
                        value={field.value}
                        onChange={(val) => {
                          field.onChange(val);
                        }}
                        color="green"
                      >
                        {bankNames.map((bankName) => (
                          <Option
                            key={bankName}
                            value={bankName}
                            className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                          >
                            {bankName}
                          </Option>
                        ))}
                      </Select>
                    );
                  }}
                />
                <Error
                  condition={errors.bankName}
                  message={errors.bankName?.message}
                />
              </div>
              <div className="col-span-12">
                <Controller
                  name="referenceNumber"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        color="green"
                        label="Reference Number"
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
                  condition={errors.referenceNumber}
                  message={errors.referenceNumber?.message}
                />
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
                        label="Narration / Notes"
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
          </div>
        </form>
        {/* <DialogFooter>
          <Button className="ml-auto" onClick={handleOpen}>
            submit
          </Button>
        </DialogFooter> */}
      </Drawer>
    </>
  );
};

export default PaymentVoucher;
