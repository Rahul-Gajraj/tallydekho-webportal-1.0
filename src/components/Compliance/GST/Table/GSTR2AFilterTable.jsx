import React from "react";

import { Option, Select, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const RECONCILIATION_HEAD = [
  { head: "Supplier", value: "supplier" },
  { head: "Invoice", value: "invoice" },
  { head: "Date", value: "date" },
  { head: "Value", value: "value" },
  { head: "Match/Unmatch", value: "isMatched" },
  { head: "Reason", value: "reason" },
  { head: "Action", value: "action" },
];

const RECONCILIATION_ROWS = [
  {
    suppliers: "XYZ Exports",
    invoice: "INV26-01",
    date: "02/Jan/2026",
    value: "10%",
    isMatched: "match",
    actions: ["View"],
  },
];

const GSTR2AFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedReconciliationTableRows,
    handleSort: handleReconciliationTableSort,
  } = useTableSort(RECONCILIATION_ROWS);

  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap justify-between">
        {/* <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[400px]">
                  <span className="pl-3">
                    <img src="/media/custom/search-sm.svg" />
                  </span>
                  <input
                    id="header-search-input"
                    name="header-search-input"
                    type="text"
                    placeholder="Search by loan name / account no / lender"
                    className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
                  />
                </div> */}
        <div className="flex flex-wrap gap-2">
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Filter"
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
                Match
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                Unmatch
              </Option>
            </Select>
          </div>
        </div>
      </div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {RECONCILIATION_HEAD.map(({ head, value }, index) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleReconciliationTableSort(value)}
                  >
                    {head}
                    {index < RECONCILIATION_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
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
                {RECONCILIATION_HEAD.map((_, idx) => (
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
            {sortedReconciliationTableRows.map((row, idx) => {
              const {
                suppliers,
                invoice,
                date,
                value,
                isMatched,
                reason,
                actions,
              } = row;

              const classes = "p-4 px-0 border-b border-blue-gray-50";

              return (
                <tr key={suppliers}>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {suppliers || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {invoice || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {date || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {value || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {isMatched || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {reason || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex gap-3 pl-3">
                      {actions.map((action) => (
                        <Typography
                          variant="small"
                          className="font-normal cursor-pointer"
                          color="green"
                          key={action}
                        >
                          {action}
                        </Typography>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      <Pagination />
    </div>
  );
};

export default GSTR2AFilterTable;
