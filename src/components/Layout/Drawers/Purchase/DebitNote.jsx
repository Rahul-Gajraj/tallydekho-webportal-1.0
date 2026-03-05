import React, { useState } from "react";
import { useSelector } from "react-redux";

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
  Card,
  Switch,
} from "@material-tailwind/react";
import moment from "moment-timezone";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { Controller, useForm } from "react-hook-form";
import { DayPicker } from "react-day-picker";

import AddProductDialog from "../../Dialogs/Sales/AddProductDrawer";
import Error from "@/components/Error/Error";
import SummaryAccordion from "../Sales/SummaryAccordion";
import ProductFilterTable from "../Table/ProductFilterTable";

const defaultValues = {
  isOptional: false,
  noteNumber: "",
  debitNoteDate: new Date(),
  customerName: "",
  referenceInvoice: "",
  narration: "",

  items: [],
  logistics: [],
};

const DebitNote = ({ open, toggleDrawer }) => {
  const preferences = useSelector((state) => state?.preferences);
  const preference = preferences?.preference || {};
  const currencyNumber = preferences?.currencyNumber || {};
  const { dateFormat } = currencyNumber;

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

  const [customers, setCustomers] = useState(["Yash", "Shirish", "Manish"]);

  const [referenceInvoice, setReferenceInvoice] = useState([
    "Aadhar",
    "Pancard",
    "Passport",
  ]);

  const [debitNotePopoverOpen, setDebitNotePopoverOpen] = useState(false);

  const [products, setProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const [areDialogsOpen, setAreDialogsOpen] = useState({
    customer: false,
    product: false,
    logistics: false,
  });

  const handleDialogsOpen = (key) => {
    setAreDialogsOpen((prev) => {
      return { ...prev, [key]: !prev[key] };
    });
  };

  const upsertProductHandler = (productInfo) => {
    if (productInfo.id) {
      setProducts((prev) =>
        prev.map((p) => {
          return p.id == productInfo.id ? productInfo : p;
        })
      );
    } else {
      setProducts((prev) => [...prev, { ...productInfo, id: Date.now() }]);
    }
  };

  const deleteProductHandler = (id) => {
    setProducts(products.filter((p) => p.id != id));
  };

  const resetFields = () => {
    toggleDrawer("purchaseDebitNote");
    clearErrors();
    reset();
  };

  const onSubmitHandler = (data) => {
    toggleDrawer("purchaseDebitNote");
    // clearErrors();
  };

  return (
    <>
      <Drawer
        placement="right"
        className="p-4 overflow-scroll"
        open={open}
        // onClose={() => toggleDrawer("purchaseDebitNote")}
        size={900}
      >
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="relative mt-0 flex justify-between">
            <Typography variant="h4">Debit Note</Typography>
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
                  name="noteNumber"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        color="green"
                        label="Debit Note Number"
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
                  condition={errors.noteNumber}
                  message={errors.noteNumber?.message}
                />
              </div>
              <div className="col-span-6 relative">
                <label className="text-[12px] absolute -top-2.5 left-3 z-10 bg-white px-1 text-blue-gray-600">
                  Debit Note Date
                </label>
                <Controller
                  name="debitNoteDate"
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
                            className={`flex items-center w-full gap-3 text-[#455a64] font-medium justify-between focus:ring-0 h-[40px] px-3 ${
                              debitNotePopoverOpen
                                ? "border-[#108f6f] !border-[2px]"
                                : "border-[#b0bec5]"
                            } hover:border-[#108f6f]`}
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
                  condition={errors.debitNoteDate}
                  message={errors.debitNoteDate?.message}
                />
              </div>
              <div className="col-span-6">
                <Controller
                  name="customerName"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Select
                        label="Customer Name"
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
                  condition={errors.customerName}
                  message={errors.customerName?.message}
                />
              </div>
              <div className="col-span-6">
                <Controller
                  name="referenceInvoice"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Select
                        label="Reference Invoice"
                        value={field.value}
                        onChange={(val) => {
                          field.onChange(val);
                        }}
                        color="green"
                      >
                        {referenceInvoice.map((document) => (
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
                  condition={errors.referenceInvoice}
                  message={errors.referenceInvoice?.message}
                />
              </div>
              <div className="col-span-6">
                <Controller
                  name="narration"
                  control={control}
                  // rules={{
                  //   required: "This field is required",
                  // }}
                  render={({ field }) => {
                    return (
                      <Input
                        color="green"
                        label="Narration/Notes"
                        {...field}
                        onChange={(value) => {
                          //   onChange(value);
                          field.onChange(value);
                        }}
                      />
                    );
                  }}
                />
              </div>
              <div className="col-span-12 flex gap-3 items-center">
                <Typography className="w-[120px]" variant="h6">
                  Return Items
                </Typography>
                <div className="h-[1px] bg-[#B0BEC5] w-full"></div>
              </div>
              <div className="col-span-12">
                {products.length == 0 ? (
                  <Card
                    className="border border-[#B0BEC5] h-[100px] cursor-pointer flex items-center justify-center"
                    onClick={() => handleDialogsOpen("product")}
                  >
                    <Typography>Add Return Items</Typography>
                  </Card>
                ) : (
                  <>
                    <Card className="max-h-[300px] border border-[#B0BEC5] overflow-scroll">
                      <ProductFilterTable
                        products={products}
                        setSelectedItem={setSelectedItem}
                        handleDialogsOpen={handleDialogsOpen}
                        deleteProductHandler={deleteProductHandler}
                      />
                    </Card>
                    <Button
                      color="green"
                      className="normal-case w-full mt-4"
                      onClick={() => {
                        setSelectedItem(null);
                        handleDialogsOpen("product");
                      }}
                    >
                      Add Return Items
                    </Button>
                  </>
                )}
              </div>
              <div className="col-span-12">
                <SummaryAccordion products={products} />
              </div>
              <div className="col-span-12">
                <Button className="w-full" color="green" type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Drawer>
      <AddProductDialog
        open={areDialogsOpen.product}
        handleOpen={handleDialogsOpen}
        upsertHandler={upsertProductHandler}
        initialData={selectedItem}
      />
    </>
  );
};

export default DebitNote;
