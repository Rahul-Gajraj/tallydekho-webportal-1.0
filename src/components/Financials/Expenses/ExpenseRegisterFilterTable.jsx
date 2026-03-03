import React from "react";

import {
  Card,
  CardBody,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const EXPENSES_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "text-center",
    value: "date",
  },
  {
    head: "Voucher No.",
    value: "voucherNo",
  },
  {
    head: "Category",
    value: "category",
  },
  {
    head: "Mode",
    value: "mode",
  },
  {
    head: "Amount",
    value: "amount",
  },
  {
    head: "Status",
    value: "status",
  },
  {
    head: "Docs",
    value: "docs",
  },
  {
    head: "Actions",
    value: "actions",
  },
];

const EXPENSES_TABLE_ROW = [
  {
    date: "09 Dec 2025",
    voucherNo: "EXP/25-26/143",
    category: "Travel - Client Visit",
    mode: "Bank",
    amount: "₹12,500",
    status: "Paid",
  },
  {
    date: "09 Dec 2025",
    voucherNo: "EXP/25-26/142",
    category: "Office Rent - Dec",
    mode: "Cash",
    amount: "₹80,000",
    status: "Unpaid",
  },
  {
    date: "08 Dec 2025",
    voucherNo: "EXP/25-26/141",
    category: "Fuel & Conveyance",
    mode: "Bank",
    amount: "₹9,800",
    status: "Paid",
  },
];

const ExpenseRegisterFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedExpenseRegisterTableRows,
    handleSort: handleExpenseRegisterTableSort,
  } = useTableSort(EXPENSES_TABLE_ROW);

  return (
    <>
      <Card>
        <CardBody>
          <div className="flex items-center gap-2 flex-wrap justify-between">
            <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[350px]">
              <span className="pl-3">
                <img src="/media/custom/search-sm.svg" />
              </span>
              <input
                id="header-search-input"
                name="header-search-input"
                type="text"
                placeholder="Search by category, ledger or voucher no"
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
                  label="Category"
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
                    Sheets
                  </Option>
                  <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                    Pipes
                  </Option>
                </Select>
              </div>
              <div className="w-[120px]">
                <Select
                  className="bg-white-600"
                  label="Mode"
                  containerProps={{
                    style: {
                      minWidth: "120px",
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
              <div className="w-[120px]">
                <Select
                  className="bg-white-600"
                  label="Status"
                  containerProps={{
                    style: {
                      minWidth: "120px",
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
              <div className="w-[120px]">
                <Input
                  label="Total"
                  readOnly
                  value="₹1,274,560"
                  containerProps={{
                    style: {
                      minWidth: "120px",
                    },
                  }}
                  className="pointer-events-none bg-[#f5f7f9]"
                />
              </div>
              <div className="w-[120px]">
                <Input
                  label="Tax"
                  readOnly
                  value="₹138,240"
                  containerProps={{
                    style: {
                      minWidth: "120px",
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
                {EXPENSES_TABLE_HEAD.map(
                  ({ head, customeStyle, value }, index) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                    >
                      <div className="flex">
                        <Typography
                          variant="small"
                          className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                          onClick={() => handleExpenseRegisterTableSort(value)}
                        >
                          {head}
                          {index < EXPENSES_TABLE_HEAD.length - 2 && (
                            <ChevronUpDownIcon
                              strokeWidth={2}
                              className="h-4 w-4"
                            />
                          )}
                        </Typography>
                      </div>
                    </th>
                  )
                )}
              </tr>
            </thead>
            {isLoading ? (
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className="animate-pulse">
                    {EXPENSES_TABLE_HEAD.map((_, idx) => (
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
                {sortedExpenseRegisterTableRows.length > 0 ? (
                  sortedExpenseRegisterTableRows.map((row, index) => {
                    const { date, voucherNo, category, mode, amount, status } =
                      row;
                    const classes = "p-4 px-0 border-b border-blue-gray-50";

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
                            {voucherNo}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {category}
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
                          <img
                            src="/media/common/docs.svg"
                            alt="docs"
                            className="w-5 h-5 ml-3"
                          />
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
                  <EmptyData colSpan={8} />
                )}
              </tbody>
            )}
          </table>
          <Pagination />
        </CardBody>
      </Card>
    </>
  );
};

export default ExpenseRegisterFilterTable;
