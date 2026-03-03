import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  Button,
  Card,
  CardBody,
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

import PurchaseRegisterFilterTable from "./Table/PurchaseRegisterFilterTable";
import DeliveryRegisterFilterTable from "./Table/DeliveryRegisterFilterTable";
import PurchaseOrderFilterTable from "./Table/PurchaseOrderFilterTable";
import DebitNoteFilterTable from "./Table/DebitNoteFilterTable";

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
                <PurchaseRegisterFilterTable isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="purchase_order">
                <PurchaseOrderFilterTable isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="delivery_register">
                <DeliveryRegisterFilterTable isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="debit_notes_register">
                <DebitNoteFilterTable isLoading={isLoading} />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default PurchaseInfo;
