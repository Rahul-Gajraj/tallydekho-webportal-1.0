import React from "react";

import {
  Card,
  CardBody,
  Input,
  Option,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import EmptyData from "../../common/EmptyData";

const PAYMENTS_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "text-center",
  },
  {
    head: "Payment No.",
  },
  {
    head: "Party / Ledger",
  },
  {
    head: "Mode",
  },
  {
    head: "Reference",
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
  {
    head: "Actions",
  },
];

const PAYMENTS_TABLE_ROW = [
  {
    date: "10 Jul 2025",
    paymentNo: "PAY-201",
    party: "ABC Traders",
    mode: "Bank",
    reference: "UTR-9882XX",
    amount: "₹42,000",
    status: "Cleared",
  },
  {
    date: "09 Jul 2025",
    paymentNo: "PAY-200",
    party: "Raj Agencies",
    mode: "Cash",
    reference: "-",
    amount: "₹12,500",
    status: "Cleared",
  },
  {
    date: "08 Jul 2025",
    paymentNo: "PAY-199",
    party: "Metro Logistics",
    mode: "Bank",
    reference: "UTR-7721AB",
    amount: "₹28,400",
    status: "Pending",
  },
  {
    date: "08 Jul 2025",
    paymentNo: "PAY-198",
    party: "Office Mart",
    mode: "Bank",
    reference: "CHQ-221045",
    amount: "₹7,250",
    status: "Cleared",
  },
];

const RECEIPTS_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "text-center",
  },
  {
    head: "Receipt No.",
  },
  {
    head: "Party / Ledger",
  },
  {
    head: "Mode",
  },
  {
    head: "Reference",
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
  {
    head: "Actions",
  },
];

const RECEIPTS_TABLE_ROW = [
  {
    date: "10 Jul 2025",
    receiptNo: "REC-201",
    party: "XYZ Exports",
    mode: "UPI",
    reference: "UTR-982776",
    amount: "₹36,000",
    status: "Cleared",
  },
  {
    date: "09 Jul 2025",
    receiptNo: "REC-200",
    party: "PP Enterprises",
    mode: "Bank",
    reference: "UTR-671234",
    amount: "₹28,500",
    status: "Cleared",
  },
  {
    date: "08 Jul 2025",
    receiptNo: "REC-199",
    party: "Bright Associates",
    mode: "Cash",
    reference: "-",
    amount: "₹18,750",
    status: "Pending",
  },
  {
    date: "08 Jul 2025",
    receiptNo: "REC-198",
    party: "Global Traders",
    mode: "UPI",
    reference: "UTR-772198",
    amount: "₹24,200",
    status: "Cleared",
  },
];

const PaymentReceiptRegister = ({ isLoading }) => {
  return (
    <>
      <Card>
        <CardBody>
          <Tabs value="payments_register">
            <TabsHeader>
              <Tab className="!font-medium" value="payments_register">
                Payments Register
              </Tab>
              <Tab className="!font-medium" value="receipt_register">
                Receipts Register
              </Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="payments_register">
                <div className="flex items-center gap-2 flex-wrap justify-between">
                  <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[370px]">
                    <span className="pl-3">
                      <img src="/media/custom/search-sm.svg" />
                    </span>
                    <input
                      id="header-search-input"
                      name="header-search-input"
                      type="text"
                      placeholder="Search party name / payment no / bank ref no"
                      className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
                      // value={itemsListSearchText}
                      // onChange={(e) => setItemsListSearchText(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Period"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          2024-2025
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          2025-2026
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Mode"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Bank
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Cash
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          UPI
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Status"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
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
                    </div>
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Type"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Type 1
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Type 2
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[130px]">
                      <Input
                        label="Total Payments"
                        readOnly
                        value="₹548,000"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                    <div className="w-[130px]">
                      <Input
                        label="Cash Payments"
                        readOnly
                        value="₹120,000"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                    <div className="w-[130px]">
                      <Input
                        label="Bank Payments"
                        readOnly
                        value="₹428,000"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                  </div>
                </div>
                <table className="mt-4 min-w-full table-auto text-left">
                  <thead>
                    <tr>
                      {PAYMENTS_TABLE_HEAD.map(({ head, customeStyle }) => (
                        <th
                          key={head}
                          className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                        >
                          <Typography
                            variant="small"
                            className="font-normal leading-none pl-3"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {isLoading ? (
                    <tbody>
                      {[...Array(4)].map((_, index) => (
                        <tr key={index} className="animate-pulse">
                          {PAYMENTS_TABLE_HEAD.map((_, idx) => (
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
                      {PAYMENTS_TABLE_ROW.length > 0 ? (
                        PAYMENTS_TABLE_ROW.map((row, index) => {
                          const {
                            date,
                            paymentNo,
                            party,
                            mode,
                            reference,
                            amount,
                            status,
                          } = row;
                          const isLast =
                            index === PAYMENTS_TABLE_ROW.length - 1;
                          const classes =
                            "p-4 px-0 border-b border-blue-gray-50";

                          return (
                            <tr key={index}>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {date}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {paymentNo}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {party}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {mode}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {reference}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {amount}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {status}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 -960 960 960"
                                  className="w-5 h-5 ml-3"
                                  fill="#108f6f"
                                >
                                  <path d="M360-440h240q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440Zm0 120h240q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400H360q-17 0-28.5 11.5T320-360q0 17 11.5 28.5T360-320Zm0 120h120q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280H360q-17 0-28.5 11.5T320-240q0 17 11.5 28.5T360-200ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm480-520H580q-25 0-42.5-17.5T520-660v-140H240v640h480v-440ZM240-800v200-200 640-640Z" />
                                </svg>
                              </td>
                              <td className={classes}>
                                <div className="flex gap-3 pl-3">
                                  <Typography
                                    variant="small"
                                    className="font-normal cursor-pointer"
                                    color="green"
                                  >
                                    Share PDF
                                  </Typography>
                                  <Typography
                                    variant="small"
                                    className="font-normal cursor-pointer"
                                    color="green"
                                  >
                                    Download
                                  </Typography>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <EmptyData colSpan={9} />
                      )}
                    </tbody>
                  )}
                </table>
              </TabPanel>
              <TabPanel value="receipt_register">
                <div className="flex items-center gap-2 flex-wrap justify-between">
                  <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[370px]">
                    <span className="pl-3">
                      <img src="/media/custom/search-sm.svg" />
                    </span>
                    <input
                      id="header-search-input"
                      name="header-search-input"
                      type="text"
                      placeholder="Search by receipt no / bank ref no"
                      className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
                      // value={itemsListSearchText}
                      // onChange={(e) => setItemsListSearchText(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Period"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          2024-2025
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          2025-2026
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Mode"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Bank
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Cash
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Status"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
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
                    </div>
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Type"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Type 1
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Type 2
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[130px]">
                      <Input
                        label="Total Receipts"
                        readOnly
                        value="₹1,126,000"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                    <div className="w-[130px]">
                      <Input
                        label="Cash Receipts"
                        readOnly
                        value="₹210,000"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                    <div className="w-[130px]">
                      <Input
                        label="Bank Receipts"
                        readOnly
                        value="₹916,000"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                  </div>
                </div>
                <table className="mt-4 min-w-full table-auto text-left">
                  <thead>
                    <tr>
                      {RECEIPTS_TABLE_HEAD.map(({ head, customeStyle }) => (
                        <th
                          key={head}
                          className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                        >
                          <Typography
                            variant="small"
                            className="font-normal leading-none pl-3"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {isLoading ? (
                    <tbody>
                      {[...Array(4)].map((_, index) => (
                        <tr key={index} className="animate-pulse">
                          {RECEIPTS_TABLE_HEAD.map((_, idx) => (
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
                      {RECEIPTS_TABLE_ROW.length > 0 ? (
                        RECEIPTS_TABLE_ROW.map((row, index) => {
                          const {
                            date,
                            receiptNo,
                            party,
                            mode,
                            reference,
                            amount,
                            status,
                          } = row;
                          const isLast =
                            index === PAYMENTS_TABLE_ROW.length - 1;
                          const classes =
                            "p-4 px-0 border-b border-blue-gray-50";

                          return (
                            <tr key={index}>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {date}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {receiptNo}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {party}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {mode}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {reference}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {amount}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {status}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 -960 960 960"
                                  className="w-5 h-5 ml-3"
                                  fill="#108f6f"
                                >
                                  <path d="M360-440h240q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440Zm0 120h240q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400H360q-17 0-28.5 11.5T320-360q0 17 11.5 28.5T360-320Zm0 120h120q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280H360q-17 0-28.5 11.5T320-240q0 17 11.5 28.5T360-200ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm480-520H580q-25 0-42.5-17.5T520-660v-140H240v640h480v-440ZM240-800v200-200 640-640Z" />
                                </svg>
                              </td>
                              <td className={classes}>
                                <div className="flex gap-3 pl-3">
                                  <Typography
                                    variant="small"
                                    className="font-normal cursor-pointer"
                                    color="green"
                                  >
                                    Share PDF
                                  </Typography>
                                  <Typography
                                    variant="small"
                                    className="font-normal cursor-pointer"
                                    color="green"
                                  >
                                    Download
                                  </Typography>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <EmptyData colSpan={9} />
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

export default PaymentReceiptRegister;
