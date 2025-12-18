import React, { useState } from "react";

import {
  Card,
  CardBody,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";

import ReceivablesDocsDrawer from "./ReceivablesDocsDrawer";

const INVOICE_REGISTER_HEAD = [
  {
    head: "Invoice Date",
    customeStyle: "text-center",
  },
  {
    head: "Invoice No.",
  },
  {
    head: "Customer",
  },
  {
    head: "Due Date",
  },
  {
    head: "Aging",
  },
  {
    head: "Amount",
  },
  {
    head: "Received",
  },
  {
    head: "Balance",
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

const INVOICE_REGISTER_TABLE_ROWS = [
  {
    invoiceDate: "10 Jul 2025",
    invoiceNo: "INV-889",
    customer: "XYZ Exports",
    dueDate: "10 Jul 2025",
    aging: "31-90 days",
    amount: "₹320,000",
    received: "₹40,000",
    balance: "₹280,500",
    status: "Overdue",
  },
  {
    invoiceDate: "25 Jul 2025",
    invoiceNo: "INV-902",
    customer: "Global Traders",
    dueDate: "25 Jul 2025",
    aging: "0-30 days",
    amount: "₹26,000",
    received: "₹0",
    balance: "₹260,500",
    status: "Due Soon",
  },
  {
    invoiceDate: "15 Apr 2025",
    invoiceNo: "INV-812",
    customer: "PP Enterprises",
    dueDate: "15 May 2025",
    aging: "> 90 days",
    amount: "₹410,000",
    received: "₹200,000",
    balance: "₹210,000",
    status: "On Track",
  },
];

const ReceivablesInvoiceTable = () => {
  const [isDrawerOpen, setOpenDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setOpenDrawer(prev => !prev);
  }

  return (
    <>
      <Card className="mt-5">
        <CardBody>
          <div className="flex items-center gap-2 flex-wrap justify-between">
            <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[330px]">
              <span className="pl-3">
                <img src="/media/custom/search-sm.svg" />
              </span>
              <input
                id="header-search-input"
                name="header-search-input"
                type="text"
                placeholder="Search by narration / voucher no / ledger"
                className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0 text-black"
                // value={itemsListSearchText}
                // onChange={(e) => setItemsListSearchText(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="w-[150px]">
                <Select
                  className="bg-white-600"
                  label="Period"
                  containerProps={{
                    style: {
                      minWidth: "150px",
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
              <div className="w-[150px]">
                <Select
                  className="bg-white-600"
                  label="Customer"
                  containerProps={{
                    style: {
                      minWidth: "150px",
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
                    XYZ Exports
                  </Option>
                  <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                    Global Traders
                  </Option>
                  <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                    PP Enterprises
                  </Option>
                </Select>
              </div>
              <div className="w-[150px]">
                <Select
                  className="bg-white-600"
                  label="Status"
                  containerProps={{
                    style: {
                      minWidth: "150px",
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
                    Overdue
                  </Option>
                  <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                    Due Soon
                  </Option>
                  <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                    On Track
                  </Option>
                </Select>
              </div>
              <div className="w-[150px]">
                <Input
                  label="Total"
                  readOnly
                  value="₹72,200"
                  containerProps={{
                    style: {
                      minWidth: "150px",
                    },
                  }}
                  className="pointer-events-none bg-[#f5f7f9]"
                />
              </div>
              <div className="w-[150px]">
                <Input
                  label="Overdue"
                  readOnly
                  value="₹48,300"
                  containerProps={{
                    style: {
                      minWidth: "150px",
                    },
                  }}
                  className="pointer-events-none bg-[#f5f7f9]"
                />
              </div>
              <div className="w-[150px]">
                <Input
                  label="Due 7 Days"
                  readOnly
                  value="₹36,000"
                  containerProps={{
                    style: {
                      minWidth: "150px",
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
                {INVOICE_REGISTER_HEAD.map(({ head, customeStyle }) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70 pl-3"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {INVOICE_REGISTER_TABLE_ROWS.map((row, index) => {
                const {
                  invoiceDate,
                  invoiceNo,
                  customer,
                  dueDate,
                  aging,
                  amount,
                  received,
                  balance,
                  status
                } = row;
                const isLast = index === INVOICE_REGISTER_TABLE_ROWS.length - 1;
                const classes = "p-4 px-0 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {invoiceDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {invoiceNo}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {customer}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {dueDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {aging}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {received}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {balance}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {status}
                      </Typography>
                    </td>
                    <td className={classes} onClick={() => handleToggleDrawer()}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        className="w-5 h-5 ml-3 cursor-pointer"
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
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <ReceivablesDocsDrawer open={isDrawerOpen} toggleDrawer={handleToggleDrawer} data={{}} />
    </>
  );
};

export default ReceivablesInvoiceTable;
