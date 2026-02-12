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
  currency: "",
  dateFormat: "",
  timeFormat: "",
  thousandsFormat: "",
  negativeFormat: "",
  //   decimalPlacement: "0.00",
};

const CURRENCIES = [
  "INR",
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "CAD",
  "AUD",
  "CHF",
  "CHY",
  "SGD",
];

const DATE_FORMATES = [
  "DD/MM/YYYY",
  "MM/DD//YYYY",
  "YYYY-MM-DD",
  "DD-MM-YYYY",
  "MM-DD-YYYY",
];

const TIME_FORMATES = ["24-hour", "12-hour"];

const THOUSAND_FORMATES = [
  "12 34 567,89",
  "12,345,678.90",
  "12.345.678.90",
  "12 345 678.90",
];

const NEGATIVE_FORMATES = ["-1234", "(1234)", "1234-", "1234"];

const CurrencyFormat = ({ open, handleOpen, upsertHandler, initialData }) => {
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
    handleOpen("currency");
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
          <Typography variant="h4">Currency Format</Typography>
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
                name="currency"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Currency"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {CURRENCIES.map((currency) => (
                        <Option
                          key={currency}
                          value={currency}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {currency}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.currency}
                message={errors.currency?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="dateFormat"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Date Format"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {DATE_FORMATES.map((dateFormat) => (
                        <Option
                          key={dateFormat}
                          value={dateFormat}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {dateFormat}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.dateFormat}
                message={errors.dateFormat?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="timeFormat"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Time Format"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {TIME_FORMATES.map((timeFormat) => (
                        <Option
                          key={timeFormat}
                          value={timeFormat}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {timeFormat}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.timeFormat}
                message={errors.timeFormat?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="thousandsFormat"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Thousands Separator"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {THOUSAND_FORMATES.map((thousandsFormat) => (
                        <Option
                          key={thousandsFormat}
                          value={thousandsFormat}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {thousandsFormat}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.thousandsFormat}
                message={errors.thousandsFormat?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="negativeFormat"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Thousands Separator"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {NEGATIVE_FORMATES.map((negativeFormat) => (
                        <Option
                          key={negativeFormat}
                          value={negativeFormat}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {negativeFormat}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.negativeFormat}
                message={errors.negativeFormat?.message}
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

export default CurrencyFormat;
