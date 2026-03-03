import React from "react";

import { Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";

import useTableSort from "@/hooks/useTableSort";

const RECEIPTS_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "text-center",
    vaue: "date",
  },
  {
    head: "Receipt No.",
    value: "receiptNo",
  },
  {
    head: "Party",
    value: "party",
  },
  {
    head: "Amount",
    value: "amount",
  },
  {
    head: "Mode",
    value: "mode",
  },
];

const RECEIPTS_TABLE_ROW = [
  {
    date: "10 Jul 2025",
    receiptNo: "REC-201",
    party: "XYZ Exports",
    amount: "₹42,000",
    mode: "Bank",
  },
  {
    date: "09 Jul 2025",
    receiptNo: "REC-200",
    party: "PP Enterprises",
    amount: "₹12,500",
    mode: "Cash",
  },
  {
    date: "08 Jul 2025",
    receiptNo: "REC-199",
    party: "Global Traders",
    amount: "₹28,400",
    mode: "UPI",
  },
  {
    date: "08 Jul 2025",
    receiptNo: "REC-198",
    party: "Office Mart",
    amount: "₹7,250",
    mode: "Bank",
  },
  {
    date: "07 Jul 2025",
    receiptNo: "REC-197",
    party: "Fuel Station",
    amount: "₹4,800",
    mode: "Cash",
  },
];

const RecentReceiptFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedReceiptTableRows,
    handleSort: handleReceiptTableSort,
  } = useTableSort(RECEIPTS_TABLE_ROW);

  return (
    <div>
      <table className="w-full table-auto h-[400px] overflow-scroll">
        <thead>
          <tr>
            {RECEIPTS_TABLE_HEAD.map(({ head, customeStyle, value }) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleReceiptTableSort(value)}
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
                {RECEIPTS_TABLE_HEAD.map((_, idx) => (
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
            {sortedReceiptTableRows.length > 0 ? (
              sortedReceiptTableRows.map(
                ({ date, receiptNo, party, amount, mode }, index) => {
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
                          {receiptNo}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {party}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {mode}
                        </Typography>
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
    </div>
  );
};

export default RecentReceiptFilterTable;
