import React from "react";

import { Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";

import useTableSort from "@/hooks/useTableSort";

const LOAN_SUMMARY_TABLE_HEAD = [
  {
    head: "Loan",
    customeStyle: "text-center",
    value: "loan",
  },
  {
    head: "Lender",
    value: "lender",
  },
  {
    head: "Type",
    value: "type",
  },
  {
    head: "Outstanding",
    value: "outstanding",
  },
  {
    head: "Next EMI",
    value: "nextEmi",
  },
];

const LOAN_SUMMARY_TABLE_ROWS = [
  {
    loan: "Home Loan - Office",
    lender: "HDFC Bank",
    type: "Team",
    outstanding: "₹1.45 Cr",
    nextEMI: "10 Jul - ₹2,10,000",
  },
  {
    loan: "Machinery Loan",
    lender: "SBI",
    type: "Team",
    outstanding: "₹82 L",
    nextEMI: "15 Jul - ₹1,40,000",
  },
];

const LoanSummaryFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedLoanSummaryTableRows,
    handleSort: handleLoanSummaryTableSort,
  } = useTableSort(LOAN_SUMMARY_TABLE_ROWS);

  return (
    <div>
      <table className="w-full table-auto max-h-[400px] overflow-scroll">
        <thead>
          <tr>
            {LOAN_SUMMARY_TABLE_HEAD.map(({ head, customeStyle, value }) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleLoanSummaryTableSort(value)}
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
            {[...Array(4)].map((_, index) => (
              <tr key={index} className="animate-pulse">
                {LOAN_SUMMARY_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="p-4 border-b border-gray-300">
                    <div className="flex justify-center">
                      <span className="h-4 bg-gray-300 rounded w-24"></span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedLoanSummaryTableRows.length > 0 ? (
              sortedLoanSummaryTableRows.map(
                ({ loan, lender, type, outstanding, nextEMI }, index) => {
                  const classes = "!p-4 border-b border-gray-300";
                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {loan}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {lender}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {type}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {outstanding}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {nextEMI}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <EmptyData colSpan={5} />
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default LoanSummaryFilterTable;
