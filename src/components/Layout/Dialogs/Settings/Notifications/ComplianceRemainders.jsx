import React from "react";
import { Controller, useForm } from "react-hook-form";

import {
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import { XMarkIcon } from "@heroicons/react/24/outline";

import Error from "../../../../Error/Error";
import IntegerInput from "../../../../common/CustomInput/IntegerInput";
import CustomMultiSelect from "../../../../CustomSelect/CustomMultiSelect";

const defaultValues = {
  gstr1: 3,
  gstr3b: 3,
  autoPause: true,
  // gstPush: true,
  // gstEmail: false,
  // gstWhatsapp: false,
  // gstSms: false,
  inr: 3,
  // eInvoicePush: true,
  // eInvoiceEmail: false,
  // eInvoiceWhatsapp: false,
  // eInvoiceSms: false,
  expiryReminder: 4,
  // eWayBillPush: true,
  // eWayBillEmail: false,
  // eWayBillWhatsapp: false,
  // eWayBillSms: false,
  tdsPayment: 3,
  vatReturn: 3,
  // taxPush: true,
  // taxEmail: false,
  // taxWhatsapp: false,
  // taxSms: false,
  gstChannels: [],
  eInvoiceChannels: [],
  eWayBillChannels: [],
  otherTaxesChannels: [],
};

const OPTIONS = ["Push", "Email", "SMS", "WhatsApp"];

const ComplianceRemainders = ({
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
    setValue,
    getValues,
    reset,
    watch,
    clearErrors
  } = useForm({
    defaultValues,
  });

  const resetFields = () => {
    clearErrors();
    handleOpen("compliance");
    reset();
  };

  const onSubmit = async (data) => {
    // console.log(data);
    resetFields();
  };

  return (
    <Dialog
      size="md"
      open={open}
      handler={() => {
        resetFields();
      }}
      className="p-2"
    >
      <DialogHeader className="relative m-0 block">
        <Typography variant="h4" className="pl-2">
          Compliance Remainders
        </Typography>
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
        <DialogBody className="grid grid-cols-12 gap-4 max-h-[40rem] overflow-scroll pl-6">
          <div className="col-span-4">
            <IntegerInput name="gstr1" control={control} label="GSTR-1" />
            <div className="pl-2 rounded justify-center items-center gap-2 flex-col">
              <div className="text-[12px] font-medium font-['Inter']">
                Days before due
              </div>
            </div>
            <Error condition={errors.gstr1} message={errors.gstr1?.message} />
          </div>
          <div className="col-span-4">
            <IntegerInput name="gstr3b" control={control} label="GSTR-3B" />
            <div className="pl-2 rounded justify-center items-center gap-2 flex-col">
              <div className="text-[12px] font-medium font-['Inter']">
                Days before due
              </div>
            </div>
            <Error condition={errors.gstr3b} message={errors.gstr3b?.message} />
          </div>
          <div className="col-span-4">
            <Typography className="text-[14px]">GST Auto Push</Typography>
            <Controller
              name="autoPause"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="If No Sales"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div>
          {/* <div className="col-span-12 -mb-7">
            <Typography className="text-[14px]">GST Channel</Typography>
          </div>
          <div className="col-span-3">
            <Controller
              name="gstPush"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="Push"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="col-span-3">
            <Controller
              name="gstEmail"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="Email"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="col-span-3">
            <Controller
              name="gstWhatsapp"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="Whatsapp"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="col-span-3">
            <Controller
              name="gstSms"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="SMS"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div> */}
          <div className="col-span-7">
            <Typography className="text-[14px]">GST Channel</Typography>
            <Controller
              name="gstChannels"
              control={control}
              render={({ field }) => {
                return (
                  <CustomMultiSelect
                    OPTIONS={OPTIONS}
                    placeholder="Select GST Channels"
                    selectedValues={field.value}
                    setValues={setValue}
                    name="gstChannels"
                  />
                );
              }}
            />
          </div>
          <div className="col-span-5">
            <IntegerInput
              name="inr"
              control={control}
              label="INR Error Digest"
            />
            <div className="pl-2 rounded justify-center items-center gap-2 flex-col">
              <div className="text-[12px] font-medium font-['Inter']">
                Days before due
              </div>
            </div>
            <Error condition={errors.inr} message={errors.inr?.message} />
          </div>
          <div className="col-span-7">
            <Typography className="text-[14px]">E-Invoice Channel</Typography>
            <Controller
              name="eInvoiceChannels"
              control={control}
              render={({ field }) => {
                return (
                  <CustomMultiSelect
                    OPTIONS={OPTIONS}
                    placeholder="Select E-Invoice Channels"
                    selectedValues={field.value}
                    setValues={setValue}
                    name="eInvoiceChannels"
                  />
                );
              }}
            />
          </div>
          {/* <div className="col-span-12 -mb-7">
            <Typography className="text-[14px]">E-Invoice Channel</Typography>
          </div>
          <div className="col-span-3">
            <Controller
              name="eInvoicePush"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="Push"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="col-span-3">
            <Controller
              name="eInvoiceEmail"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="Email"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="col-span-3">
            <Controller
              name="eInvoiceWhatsapp"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="Whatsapp"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="col-span-3">
            <Controller
              name="eInvoiceSms"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="SMS"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div> */}
          <div className="col-span-5">
            <IntegerInput
              name="expiryReminder"
              control={control}
              label="E-Way Bill Expiry Reminder"
            />
            <div className="pl-2 rounded justify-center items-center gap-2 flex-col">
              <div className="text-[12px] font-medium font-['Inter']">
                Before validy end
              </div>
            </div>
            <Error
              condition={errors.expiryReminder}
              message={errors.expiryReminder?.message}
            />
          </div>
          {/* <div className="col-span-12 -mb-7">
            <Typography className="text-[14px]">E-Way Bill Channel</Typography>
          </div>
          <div className="col-span-3">
            <Controller
              name="eWayBillPush"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="Push"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="col-span-3">
            <Controller
              name="eWayBillEmail"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="Email"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="col-span-3">
            <Controller
              name="eWayBillWhatsapp"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="Whatsapp"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="col-span-3">
            <Controller
              name="eWayBillSms"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="SMS"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div> */}
          <div className="col-span-7">
            <Typography className="text-[14px]">E-Way Bill Channel</Typography>
            <Controller
              name="eWayBillChannels"
              control={control}
              render={({ field }) => {
                return (
                  <CustomMultiSelect
                    OPTIONS={OPTIONS}
                    placeholder="Select E-Way Bill Channels"
                    selectedValues={field.value}
                    setValues={setValue}
                    name="eWayBillChannels"
                  />
                );
              }}
            />
          </div>
          <div className="col-span-5">
            <IntegerInput
              name="tdsPayment"
              control={control}
              label="TDS Payment"
            />
            <div className="pl-2 rounded justify-center items-center gap-2 flex-col">
              <div className="text-[12px] font-medium font-['Inter']">
                Day before 7th
              </div>
            </div>
            <Error
              condition={errors.tdsPayment}
              message={errors.tdsPayment?.message}
            />
          </div>
          <div className="col-span-7">
            <Typography className="text-[14px]">Other Taxes Channel</Typography>
            <Controller
              name="otherTaxesChannels"
              control={control}
              render={({ field }) => {
                return (
                  <CustomMultiSelect
                    OPTIONS={OPTIONS}
                    placeholder="Select Other Taxes Channels"
                    selectedValues={field.value}
                    setValues={setValue}
                    name="otherTaxesChannels"
                  />
                );
              }}
            />
          </div>
          <div className="col-span-5">
            <IntegerInput
              name="vatReturn"
              control={control}
              label="VAT Return"
            />
            <div className="pl-2 rounded justify-center items-center gap-2 flex-col">
              <div className="text-[12px] font-medium font-['Inter']">
                Day before due
              </div>
            </div>
            <Error
              condition={errors.vatReturn}
              message={errors.vatReturn?.message}
            />
          </div>

          {/* <div className="col-span-12 -mb-7">
            <Typography className="text-[14px]">Other Taxes Channel</Typography>
          </div>
          <div className="col-span-3">
            <Controller
              name="taxPush"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="Push"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="col-span-3">
            <Controller
              name="taxEmail"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="Email"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="col-span-3">
            <Controller
              name="taxWhatsapp"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="Whatsapp"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="col-span-3">
            <Controller
              name="taxSms"
              control={control}
              render={({ field }) => {
                return (
                  <Checkbox
                    {...field}
                    label="SMS"
                    color="green"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                    labelProps={{
                      className: "text-[14px]",
                    }}
                  />
                );
              }}
            />
          </div> */}
        </DialogBody>
        <DialogFooter className="pt-0">
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
  );
};

export default ComplianceRemainders;
