import React from "react";

import { Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const TRAIL_BALANCE_TABLE_HEAD = [
  { head: "Ledger Group", value: "ledgerGroup" },
  { head: "Dr (₹)", value: "debit" },
  { head: "Cr (₹)", value: "credit" },
  { head: "Net Balance", value: "netBalance" },
];

const TRAIL_BALANCE_TABLE_BODY = [
  {
    ledgerGroup: "Current Assets",
    debit: "250,000",
    netBalance: "250,000",
    isDebit: true,
  },
  {
    ledgerGroup: "Misc Expenses",
    debit: "15,000",
    netBalance: "15,000",
    isDebit: true,
  },
  {
    ledgerGroup: "Sales Account",
    credit: "480,000",
    netBalance: "480,000",
    isDebit: false,
  },
  {
    ledgerGroup: "Purchase Account",
    debit: "320,000",
    netBalance: "320,000",
    isDebit: true,
  },
];

const TrailBalanceFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedTrailBalanceTableRows,
    handleSort: handleTrailBalanceTableSort,
  } = useTableSort(TRAIL_BALANCE_TABLE_BODY);

  return (
    <div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {TRAIL_BALANCE_TABLE_HEAD.map(({ head, value }, index) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleTrailBalanceTableSort(value)}
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
                {TRAIL_BALANCE_TABLE_HEAD.map((_, idx) => (
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
            {sortedTrailBalanceTableRows.length > 0 ? (
              sortedTrailBalanceTableRows.map((row, idx) => {
                const { ledgerGroup, debit, credit, netBalance, isDebit } = row;
                const classes = "p-4 px-0 border-b border-blue-gray-50";

                return (
                  <tr key={ledgerGroup}>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {ledgerGroup || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {debit || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {credit || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {isDebit ? "Dr " : "Cr "}
                        {netBalance || "-"}
                      </Typography>
                    </td>
                  </tr>
                );
              })
            ) : (
              <EmptyData colSpan={4} />
            )}
          </tbody>
        )}
      </table>
      <Pagination />
    </div>
  );
};

export default TrailBalanceFilterTable;
