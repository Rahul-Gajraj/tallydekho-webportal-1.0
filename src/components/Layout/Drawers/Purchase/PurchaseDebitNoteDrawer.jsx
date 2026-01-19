import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Select,
  Option,
  Input,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Popover,
  PopoverHandler,
  PopoverContent,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Switch,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Textarea,
} from "@material-tailwind/react";
import moment from "moment";

import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import { Controller, useForm } from "react-hook-form";
import { DayPicker } from "react-day-picker";

import AddProductDialog from "../../Dialogs/Sales/AddProductDrawer";
import Error from "../../../Error/Error";

const ITEM_TABLE_HEAD = [
  "Warehouse",
  "Product",
  "Quantity",
  "Discount",
  "Tax",
  "Unit Price",
  "Actions",
];

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

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const PurchaseDebitNoteDrawer = ({ open, toggleDrawer }) => {
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

  const [customers, setCustomers] = useState(["Yash", "Shirish", "Manish"]);

  const [referenceInvoice, setReferenceInvoice] = useState([
    "Aadhar",
    "Pancard",
    "Passport",
  ]);

  const [debitNotePopoverOpen, setDebitNotePopoverOpen] = useState(false);

  const [products, setProducts] = useState([]);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  

  //   console.log(customers);
  //   console.log(selectedCustomer);
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

  const handleSummaryAccordionOpen = () => {
    setIsSummaryOpen((prev) => !prev);
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

  const onSubmitHandler = (data) => {
    console.log(data);
    reset();
    toggleDrawer("purchaseDebitNote");
  };

  return (
    <>
      <Drawer
        placement="right"
        className="p-4 overflow-scroll"
        open={open}
        // onClose={() => toggleDrawer("purchaseDebitNote")}
        size={750}
      >
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="relative mt-0 flex justify-between">
            <Typography variant="h4">Purchase Debit Note</Typography>
            <Controller
              name="isOptional"
              control={control}
              render={({ field }) => {
                return (
                  <Switch
                    color="green"
                    label="Optional/Regular"
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
            <IconButton
              size="sm"
              variant="text"
              onClick={() => toggleDrawer("purchaseDebitNote")}
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
                        size="md"
                        containerProps={{ className: "!min-w-full" }}
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
                            className="flex items-center w-full gap-3 !border-[#B0BEC5] text-[#455a64] font-medium justify-between focus:ring-0 h-[40px] px-3"
                            ripple={false}
                          >
                            {moment(field.value).format("DD MMM, yyyy")}
                            <CalendarDaysIcon
                              strokeWidth={2}
                              className="w-4 h-4"
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
                      <table className="w-full min-w-max table-auto text-left">
                        <thead>
                          <tr>
                            {ITEM_TABLE_HEAD.map((head) => (
                              <th key={head} className="px-4 pt-4">
                                <Typography
                                  variant="small"
                                  className="font-bold leading-none"
                                >
                                  {head}
                                </Typography>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((item) => {
                            const {
                              id,
                              warehouse,
                              product,
                              qty,
                              discount,
                              tax,
                              unitPrice,
                            } = item;
                            return (
                              <tr key={id}>
                                <td className="p-2 px-4">
                                  <Typography
                                    variant="small"
                                    className="font-normal"
                                  >
                                    {warehouse}
                                  </Typography>
                                </td>
                                <td className="p-2 px-4">
                                  <Typography
                                    variant="small"
                                    className="font-normal"
                                  >
                                    {product}
                                  </Typography>
                                </td>
                                <td className="p-2 px-4">
                                  <Typography
                                    variant="small"
                                    className="font-normal"
                                  >
                                    {qty || 0}
                                  </Typography>
                                </td>
                                <td className="p-2 px-4">
                                  <Typography
                                    variant="small"
                                    className="font-normal"
                                  >
                                    {discount || 0}
                                  </Typography>
                                </td>
                                <td className="p-2 px-4">
                                  <Typography
                                    variant="small"
                                    className="font-normal"
                                  >
                                    {tax || 0}
                                  </Typography>
                                </td>
                                <td className="p-2 px-4">
                                  <Typography
                                    variant="small"
                                    className="font-normal"
                                  >
                                    {unitPrice || 0}
                                  </Typography>
                                </td>
                                <td className="p-2 px-4">
                                  <div className="flex gap-3">
                                    <img
                                      src="/media/common/edit.svg"
                                      alt="edit"
                                      className="h-5 cursor-pointer"
                                      onClick={() => {
                                        setSelectedItem(item);
                                        handleDialogsOpen("product");
                                      }}
                                    />
                                    <img
                                      src="/media/common/delete.svg"
                                      alt="delete"
                                      className="h-5 cursor-pointer"
                                      onClick={() => deleteProductHandler(id)}
                                    />
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
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
                <Accordion
                  open={isSummaryOpen}
                  className="rounded-lg border border-blue-gray-100"
                  icon={<Icon id={1} open={isSummaryOpen} />}
                >
                  <AccordionHeader
                    onClick={handleSummaryAccordionOpen}
                    className="border-b-0 transition-colors font-medium text-md bg-[#f4f5f6] px-4 rounded-lg overflow-auto"
                  >
                    Total Amount (₹125,000)
                  </AccordionHeader>
                  <AccordionBody className="pt-0 text-base font-normal px-4">
                    <table className="min-w-full table-auto text-left">
                      <tbody>
                        <tr>
                          <td className="p-4 px-0 border-b border-blue-gray-50">
                            <Typography variant="small" className="font-normal">
                              Subtotal
                            </Typography>
                          </td>
                          <td className="p-4 px-0 border-b border-blue-gray-50">
                            <Typography
                              variant="small"
                              className="font-normal pl-3 float-right"
                            >
                              ₹5,000
                            </Typography>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 px-0 border-b border-blue-gray-50">
                            <Typography variant="small" className="font-normal">
                              Taxes
                            </Typography>
                          </td>
                          <td className="p-4 px-0 border-b border-blue-gray-50">
                            <Typography
                              variant="small"
                              className="font-normal pl-3 float-right"
                            >
                              ₹5,000
                            </Typography>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 px-0 border-b border-blue-gray-50">
                            <Typography variant="small" className="font-normal">
                              Discount
                            </Typography>
                          </td>
                          <td className="p-4 px-0 border-b border-blue-gray-50">
                            <Typography
                              variant="small"
                              className="font-normal pl-3 float-right"
                            >
                              ₹5,000
                            </Typography>
                          </td>
                        </tr>
                        <tr>
                          <td className="pt-4 px-0">
                            <Typography variant="small" className="font-normal">
                              Logistics
                            </Typography>
                          </td>
                          <td className="pt-4 px-0">
                            <Typography
                              variant="small"
                              className="font-normal pl-3 float-right"
                            >
                              ₹5,000
                            </Typography>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionBody>
                </Accordion>
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
      <AddProductDialog
        open={areDialogsOpen.product}
        handleOpen={handleDialogsOpen}
        upsertHandler={upsertProductHandler}
        initialData={selectedItem}
      />
    </>
  );
};

export default PurchaseDebitNoteDrawer;
