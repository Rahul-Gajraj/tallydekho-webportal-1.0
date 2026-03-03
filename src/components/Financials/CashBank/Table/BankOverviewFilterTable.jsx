import React from "react";

import { Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";

import useTableSort from "@/hooks/useTableSort";

const CASH_BANK_TABLE_HEAD = [
  {
    head: "Account",
    customeStyle: "text-center",
    value: "account",
  },
  {
    head: "Type",
    value: "type",
  },
  {
    head: "Balance",
    value: "balance",
  },
  {
    head: "Unreconciled",
    value: "unreconciled",
  },
  {
    head: "Today In",
    value: "todayIn",
  },
  {
    head: "Today Out",
    value: "todayOut",
  },
  {
    head: "Status",
    value: "status",
  },
];

const CASH_BANK_TABLE_ROW = [
  {
    account: "Main cash",
    type: "Cash",
    balance: "₹54,000",
    unreconciled: "-",
    todayIn: "₹18,500",
    todayOut: "₹12,200",
    status: "Healthy",
  },
  {
    account: "HDFC CC A/C",
    type: "Bank OD",
    balance: "₹180,000",
    unreconciled: "8",
    todayIn: "₹32,000",
    todayOut: "₹44,500",
    status: "OD Utilised",
  },
  {
    account: "ICICI Bank - 0012",
    type: "Bank",
    balance: "₹1,240,000",
    unreconciled: "12",
    todayIn: "₹56,500",
    todayOut: "₹38,400",
    status: "OK",
  },
  {
    account: "Axis Bank - 3344",
    type: "Bank",
    balance: "₹1,45,000",
    unreconciled: "16",
    todayIn: "₹41,000",
    todayOut: "₹28,900",
    status: "OK",
  },
  {
    account: "Petty Cash - HO",
    type: "Cash",
    balance: "₹30,500",
    unreconciled: "-",
    todayIn: "₹0",
    todayOut: "₹7,900",
    status: "OK",
  },
];

const BankOverviewFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedBankOverviewTableRows,
    handleSort: handleBankOverviewTableSort,
  } = useTableSort(CASH_BANK_TABLE_ROW);

  return (
    <div>
      <table className="w-full table-auto h-[400px] overflow-scroll">
        <thead>
          <tr>
            {CASH_BANK_TABLE_HEAD.map(({ head, customeStyle, value }) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleBankOverviewTableSort(value)}
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
                {CASH_BANK_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="border-b border-gray-300">
                    <div className="flex pl-3">
                      <span className="h-4 bg-gray-300 rounded w-24"></span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedBankOverviewTableRows.length > 0 ? (
              sortedBankOverviewTableRows.map(
                (
                  {
                    account,
                    type,
                    balance,
                    unreconciled,
                    todayIn,
                    todayOut,
                    status,
                  },
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
                          {account}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="!font-normal"
                        >
                          {type}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="!font-normal"
                        >
                          {balance}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="!font-normal"
                        >
                          {unreconciled}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="!font-normal"
                        >
                          {todayIn}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="!font-normal"
                        >
                          {todayOut}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="!font-normal"
                        >
                          {status}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <EmptyData colSpan={7} />
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default BankOverviewFilterTable;
