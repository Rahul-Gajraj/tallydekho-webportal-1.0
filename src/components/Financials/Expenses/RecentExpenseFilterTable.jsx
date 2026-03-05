import React, { useEffect, useState } from "react";

import {
  Button,
  Option,
  Select,
  Typography,
  Chip,
} from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";
import useDebounce from "@/hooks/useDebouncy";

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
    head: "Ledger / Category",
    value: "ledger",
  },
  {
    head: "Amount",
    value: "amount",
  },
  {
    head: "Status",
    value: "status",
  },
];

const EXPENSES_TABLE_ROW = [
  {
    date: "09 Dec 2025",
    voucherNo: "EXP/25-26/143",
    ledger: "Travel - Client Visit",
    amount: "₹12,500",
    status: "Paid",
  },
  {
    date: "09 Dec 2025",
    voucherNo: "EXP/25-26/142",
    ledger: "Office Rent - Dec",
    amount: "₹80,000",
    status: "Unpaid",
  },
  {
    date: "08 Dec 2025",
    voucherNo: "EXP/25-26/141",
    ledger: "Fuel & Conveyance",
    amount: "₹9,800",
    status: "Paid",
  },
  {
    date: "08 Dec 2025",
    voucherNo: "EXP/25-26/140",
    ledger: "Internet & Telephone",
    amount: "₹3,250",
    status: "Paid",
  },
  {
    date: "07 Dec 2025",
    voucherNo: "EXP/25-26/139",
    ledger: "Repairs & Maintenance",
    amount: "₹18,900",
    status: "Unpaid",
  },
];

const RecentExpenseFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedRecentExpenseTableRows,
    handleSort: handleRecentExpenseTableSort,
  } = useTableSort(EXPENSES_TABLE_ROW);

  return (
    <div>
      <table className="w-full table-auto h-[400px] overflow-scroll">
        <thead>
          <tr>
            {EXPENSES_TABLE_HEAD.map(({ head, customeStyle, value }, index) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleRecentExpenseTableSort(value)}
                  >
                    {head}
                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                  </Typography>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        {isLoading ? (
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="animate-pulse">
                {EXPENSES_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="p-4 border-b border-gray-300">
                    <div className="flex">
                      <span className="h-4 bg-gray-300 rounded w-24"></span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedRecentExpenseTableRows.length > 0 ? (
              sortedRecentExpenseTableRows.map(
                ({ date, voucherNo, ledger, amount, status }, index) => {
                  const classes = "!p-4 border-b border-gray-300";
                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {voucherNo}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {ledger}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-full flex">
                          <Chip
                            variant="ghost"
                            value={status}
                            className={`${
                              status === "Paid"
                                ? "bg-green-50/70 text-green-400"
                                : status === "Unpaid"
                                ? "bg-red-50/70 text-red-400"
                                : "bg-amber-50/70 text-amber-800"
                            } normal-case`}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <EmptyData colspan={5} />
            )}
          </tbody>
        )}
      </table>
      {/* <Pagination /> */}
    </div>
  );
};

export default RecentExpenseFilterTable;
