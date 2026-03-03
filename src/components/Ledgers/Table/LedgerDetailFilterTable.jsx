import React from "react";

import { Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const LEDGERS_HEAD = [
  { head: "Ledger Name", value: "leaderName" },
  { head: "Group", value: "group" },
  { head: "Ledger Type", value: "ledgerType" },
  { head: "Closing Balance", value: "closingBalance" },
  { head: "Opening Balance", value: "openingBalance" },
  { head: "Contact", value: "contact" },
  { head: "GSTIN", value: "gstin" },
  { head: "PAN", value: "pan" },
];

const LEDGERS_ROW = [
  {
    ledgerName: "ABC Traders",
    group: "Sundry Debtors",
    ledgerType: "Party Ledger",
    closingBalance: "₹82,000 Dr",
    openingBalance: "₹12,000 Dr",
    contact: "+91 9876543210",
    gstin: "08ABCDE123F1Z5",
    pan: "AAAAA1234A",
  },
];

const LedgerDetailFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedLedgerDetailTableRows,
    handleSort: handleLedgerDetailTableSort,
  } = useTableSort(LEDGERS_ROW);

  return (
    <div>
      <table className="min-w-full table-auto text-left">
        <thead>
          <tr>
            {LEDGERS_HEAD.map(({ head, value }) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleLedgerDetailTableSort(value)}
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
            {[...Array(3)].map((_, index) => (
              <tr key={index} className="animate-pulse">
                {LEDGERS_HEAD.map((data, idx) => (
                  <td
                    key={data}
                    className={`py-4 ${
                      index == 2 ? "border-none" : "border-b border-gray-300"
                    } pl-3`}
                  >
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedLedgerDetailTableRows.map(
              (
                {
                  ledgerName,
                  group,
                  ledgerType,
                  closingBalance,
                  openingBalance,
                  contact,
                  gstin,
                  pan,
                },
                idx
              ) => {
                const classes = `p-4 px-0 ${
                  idx == sortedLedgerDetailTableRows.length - 1
                    ? "border-b-none pb-0"
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={ledgerName} className="cursor-pointer">
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {ledgerName || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {group || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {ledgerType || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {closingBalance || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {openingBalance || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {contact || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {gstin || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {pan || "-"}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        )}
      </table>
      <Pagination />
    </div>
  );
};

export default LedgerDetailFilterTable;
