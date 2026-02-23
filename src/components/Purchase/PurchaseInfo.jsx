import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Input,
  Option,
  Popover,
  PopoverContent,
  PopoverHandler,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

import {
  MagnifyingGlassIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import moment from "moment-timezone";

import EmptyData from "../common/EmptyData";

const PURCHASE_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "pl-4",
  },
  {
    head: "Purchase #",
  },
  {
    head: "Supplier",
  },
  {
    head: "Amount",
  },
  {
    head: "Status",
  },
  {
    head: "Valid up to",
  },
  {
    head: "Docs",
  },
];

const PURCHASE_TABLE_ROW = [
  {
    date: "2025-11-02",
    purchaseNumber: "PUR-5001",
    supplier: "Sigma Suppliers",
    amount: "₹ 32,000",
    status: "Unpaid",
    docs: "Receipt",
  },
  {
    date: "2025-11-08",
    purchaseNumber: "PUR-5002",
    supplier: "Omega Traders",
    amount: "₹ 15,000",
    status: "Paid",
    docs: "Note",
  },
];

const ORDER_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "pl-4",
  },
  {
    head: "PO #",
  },
  {
    head: "Supplier",
  },
  {
    head: "Amount",
  },
  {
    head: "Status",
  },
  {
    head: "Docs",
  },
];

const ORDER_TABLE_ROW = [
  {
    date: "2025-11-03",
    poNumber: "	PO-6001",
    supplier: "Sigma Suppliers",
    amount: "₹ 32,000",
    status: "Pending",
    docs: "Quotation",
  },
];

const DELIVERY_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "pl-4",
  },
  {
    head: "DN #",
  },
  {
    head: "Supplier",
  },
  {
    head: "Amount",
  },
  {
    head: "Status",
  },
  {
    head: "Vehicle No.",
  },
  {
    head: "Docs",
  },
];

const DELIVERY_TABLE_ROW = [
  {
    date: "2025-11-06",
    dnNumber: "DN-7001",
    supplier: "Omega Traders",
    amount: "₹ 24,500",
    status: "Delivered",
    vehicleNumber: "MH12-AB-1234",
    docs: "Invoice",
  },
];

const DEBIT_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "pl-4",
  },
  {
    head: "DN #",
  },
  {
    head: "Supplier",
  },
  {
    head: "Amount",
  },
  {
    head: "Status",
  },
  {
    head: "Docs",
  },
];

const DEBIT_TABLE_ROW = [
  {
    date: "2025-11-07",
    dnNumber: "DN-8001",
    supplier: "Sigma Suppliers",
    amount: "₹ 1,200",
    status: "Issued",
    docs: "Invoice",
  },
];

const PurchaseInfo = ({ isLoading }) => {
  const preferences = useSelector((state) => state?.preferences);
  const preference = preferences?.preference || {};
  const currencyNumber = preferences?.currencyNumber || {};
  const { dateFormat } = currencyNumber;

  const timezone = preference?.timezone ?? "Asia/Kolkata";

  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false);

  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(),
  });

  return (
    <>
      <Card className="col-span-6 shadow-sm border border-gray-200 !rounded-lg flex my-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center m-7 mb-2">
          <div className="flex items-center gap-2">
            <Typography variant="small" className="font-normal shrink-0">
              Date Range
            </Typography>
            <Popover
              open={isDateRangeOpen}
              handler={setIsDateRangeOpen}
              placement="bottom"
            >
              <PopoverHandler>
                <Button
                  variant="outlined"
                  className={`flex items-center gap-3 font-normal ${
                    isDateRangeOpen ? "border-[#108f6f]" : "border-[#b0bec5]"
                  } hover:border-[2px] ${
                    isDateRangeOpen ? "!border-[2px]" : "broder-px"
                  } hover:border-[#108f6f] shadow-none h-[40px]`}
                >
                  {moment(date.from).tz(timezone).format(dateFormat)}-{" "}
                  {moment(date.to).tz(timezone).format(dateFormat)}
                  <img
                    src="/media/icons/calendar.svg"
                    alt="calendar"
                    className="w-5 h-5"
                  />
                </Button>
              </PopoverHandler>
              <PopoverContent className="z-20">
                <DayPicker
                  mode="range"
                  selected={date}
                  timeZone={timezone}
                  onSelect={setDate}
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
          </div>
          <div className="flex items-center gap-2 lg:!ml-auto">
            <div className="flex items-center gap-2">
              <Select
                className="bg-white-600"
                label="Status"
                // value={value}
                // onChange={(val) => setValue(val)}
                containerProps={{
                  style: {
                    minWidth: "100px",
                  },
                }}
                color="green"
              >
                <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                  All
                </Option>
                <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                  Paid
                </Option>
                <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                  Unpaid
                </Option>
              </Select>
              <Select
                className="bg-white-600"
                label="Invoice Type"
                // value={value}
                // onChange={(val) => setValue(val)}
                containerProps={{
                  style: {
                    minWidth: "150px",
                  },
                }}
                color="green"
              >
                <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                  All
                </Option>
                <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                  Purchase Invoice
                </Option>
                <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                  Debit Note
                </Option>
              </Select>
            </div>
            <Input
              label="Search in registers..."
              icon={<MagnifyingGlassIcon className="h-5" />}
              className="w-[150px]"
              color="green"
            />
          </div>
        </div>

        <CardBody className="pt-4">
          <Tabs value="purchase_register">
            <TabsHeader>
              <Tab value="purchase_register">Purchase Register</Tab>
              <Tab value="purchase_order">Purchase Order (PO)</Tab>
              <Tab value="delivery_register">Delivery Register</Tab>
              <Tab value="debit_notes_register">Debit Notes Register</Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="purchase_register">
                <table className="w-full min-w-max table-auto">
                  <thead>
                    <tr>
                      {PURCHASE_TABLE_HEAD.map(({ head, customeStyle }) => (
                        <th
                          key={head}
                          className={`border-b border-gray-300 pb-4 ${customeStyle}`}
                        >
                          <div className="flex">
                            <Typography variant="small" className="!font-bold">
                              {head}
                            </Typography>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {isLoading ? (
                    <tbody>
                      {[...Array(2)].map((_, index) => (
                        <tr key={index} className="animate-pulse">
                          {PURCHASE_TABLE_HEAD.map((_, idx) => (
                            <td
                              key={idx}
                              className="py-4 border-b border-gray-300"
                            >
                              <div className="h-4 bg-gray-300 rounded w-24"></div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tbody>
                      {PURCHASE_TABLE_ROW.length > 0 ? (
                        PURCHASE_TABLE_ROW.map(
                          (
                            {
                              date,
                              purchaseNumber,
                              supplier,
                              amount,
                              status,
                              validUpTo,
                              docs,
                            },
                            index
                          ) => {
                            const classes = "!py-4 border-b border-gray-300";
                            return (
                              <tr key={index}>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal ml-4"
                                  >
                                    {date || "-"}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {purchaseNumber || "-"}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {supplier || "-"}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {amount || "-"}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <div className="w-max">
                                    <Chip
                                      variant="ghost"
                                      value={status}
                                      className={`${
                                        status === "Paid"
                                          ? "bg-[#ECFDF5] text-[#4F8A75]"
                                          : status === "Unpaid"
                                          ? "bg-red-50 text-red-400"
                                          : "bg-amber-50 text-amber-800"
                                      } normal-case`}
                                    />
                                  </div>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {validUpTo ?? "-"}
                                  </Typography>
                                </td>
                                <td className="border-b border-gray-300">
                                  <img
                                    src="/media/common/docs.svg"
                                    alt="docs"
                                    className="w-5 h-5 ml-2"
                                  />
                                </td>
                              </tr>
                            );
                          }
                        )
                      ) : (
                        <EmptyData />
                      )}
                    </tbody>
                  )}
                </table>
              </TabPanel>
              <TabPanel value="purchase_order">
                <table className="w-full min-w-max table-auto">
                  <thead>
                    <tr>
                      {ORDER_TABLE_HEAD.map(({ head, customeStyle }) => (
                        <th
                          key={head}
                          className={`border-b border-gray-300 pb-4 ${customeStyle}`}
                        >
                          <div className="flex">
                            <Typography variant="small" className="!font-bold">
                              {head}
                            </Typography>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {isLoading ? (
                    <tbody>
                      {[...Array(1)].map((_, index) => (
                        <tr key={index} className="animate-pulse">
                          {ORDER_TABLE_HEAD.map((_, idx) => (
                            <td
                              key={idx}
                              className="py-4 border-b border-gray-300"
                            >
                              <div className="h-4 bg-gray-300 rounded w-24"></div>
                            </td>
                          ))}
                          <td className="py-4 border-b border-gray-300">
                            <div className="h-4 bg-gray-300 rounded w-20"></div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tbody>
                      {ORDER_TABLE_ROW.length > 0 ? (
                        ORDER_TABLE_ROW.map(
                          (
                            { date, poNumber, supplier, amount, status, docs },
                            index
                          ) => {
                            const classes = "!py-4 border-b border-gray-300";
                            return (
                              <tr key={index}>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal ml-4"
                                  >
                                    {date}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {poNumber}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {supplier}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {amount}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <div className="w-max">
                                    <Chip
                                      variant="ghost"
                                      value={status}
                                      className={`${
                                        status === "Paid"
                                          ? "bg-[#ECFDF5] text-[#4F8A75]"
                                          : status === "Unpaid"
                                          ? "bg-red-50 text-red-400"
                                          : "bg-amber-50 text-amber-800"
                                      } normal-case`}
                                    />
                                  </div>
                                </td>
                                <td className="border-b border-gray-300">
                                  <img
                                    src="/media/common/docs.svg"
                                    alt="docs"
                                    className="w-5 h-5 ml-2"
                                  />
                                </td>
                              </tr>
                            );
                          }
                        )
                      ) : (
                        <EmptyData />
                      )}
                    </tbody>
                  )}
                </table>
              </TabPanel>
              <TabPanel value="delivery_register">
                <table className="w-full min-w-max table-auto">
                  <thead>
                    <tr>
                      {DELIVERY_TABLE_HEAD.map(({ head, customeStyle }) => (
                        <th
                          key={head}
                          className={`border-b border-gray-300 pb-4 ${customeStyle}`}
                        >
                          <div className="flex">
                            <Typography variant="small" className="!font-bold">
                              {head}
                            </Typography>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {isLoading ? (
                    <tbody>
                      {[...Array(1)].map((_, index) => (
                        <tr key={index} className="animate-pulse">
                          {DELIVERY_TABLE_HEAD.map((_, idx) => (
                            <td
                              key={idx}
                              className="py-4 border-b border-gray-300"
                            >
                              <div className="h-4 bg-gray-300 rounded w-24"></div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tbody>
                      {DELIVERY_TABLE_ROW.length > 0 ? (
                        DELIVERY_TABLE_ROW.map(
                          (
                            {
                              date,
                              dnNumber,
                              supplier,
                              amount,
                              status,
                              vehicleNumber,
                              docs,
                            },
                            index
                          ) => {
                            const classes = "!py-4 border-b border-gray-300";
                            return (
                              <tr key={index}>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal ml-4"
                                  >
                                    {date}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {dnNumber}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {supplier}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {amount}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <div className="w-max">
                                    <Chip
                                      variant="ghost"
                                      value={status}
                                      className={`${
                                        status === "Delivered"
                                          ? "bg-[#ECFDF5] text-[#4F8A75]"
                                          : status === "Not Delivered"
                                          ? "bg-red-50 text-red-400"
                                          : "bg-amber-50 text-amber-800"
                                      } normal-case`}
                                    />
                                  </div>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {vehicleNumber}
                                  </Typography>
                                </td>
                                <td className="border-b border-gray-300">
                                  <img
                                    src="/media/common/docs.svg"
                                    alt="docs"
                                    className="w-5 h-5 ml-2"
                                  />
                                </td>
                              </tr>
                            );
                          }
                        )
                      ) : (
                        <EmptyData />
                      )}
                    </tbody>
                  )}
                </table>
              </TabPanel>
              <TabPanel value="debit_notes_register">
                <table className="w-full min-w-max table-auto">
                  <thead>
                    <tr>
                      {DEBIT_TABLE_HEAD.map(({ head, customeStyle }) => (
                        <th
                          key={head}
                          className="border-b border-gray-300 pb-4 pl-4"
                        >
                          <div className="flex">
                            <Typography variant="small" className="!font-bold">
                              {head}
                            </Typography>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {isLoading ? (
                    <tbody>
                      {[...Array(1)].map((_, index) => (
                        <tr key={index} className="animate-pulse">
                          {DEBIT_TABLE_HEAD.map((_, idx) => (
                            <td
                              key={idx}
                              className="py-4 border-b border-gray-300 pl-4"
                            >
                              <div className="h-4 bg-gray-300 rounded w-24"></div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tbody>
                      {DEBIT_TABLE_ROW.length > 0 ? (
                        DEBIT_TABLE_ROW.map(
                          (
                            { date, dnNumber, supplier, amount, status, docs },
                            index
                          ) => {
                            const classes = "!p-4 border-b border-gray-300";
                            return (
                              <tr key={index}>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {date}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {dnNumber}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {supplier}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal"
                                  >
                                    {amount}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <div className="w-max">
                                    <Chip
                                      variant="ghost"
                                      value={status}
                                      className={`${
                                        status === "Issued"
                                          ? "bg-[#ECFDF5] text-[#4F8A75]"
                                          : status === "Not Issued"
                                          ? "bg-red-50 text-red-400"
                                          : "bg-amber-50 text-amber-800"
                                      } normal-case`}
                                    />
                                  </div>
                                </td>
                                <td className="border-b border-gray-300">
                                  <img
                                    src="/media/common/docs.svg"
                                    alt="docs"
                                    className="w-5 h-5 ml-2"
                                  />
                                </td>
                              </tr>
                            );
                          }
                        )
                      ) : (
                        <EmptyData />
                      )}
                    </tbody>
                  )}
                </table>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default PurchaseInfo;
