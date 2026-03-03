import React from "react";

import { Option, Select, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const ANNUAL_RETURN_HEAD = [
  { head: "Outward Supplies", value: "outward_supplies" },
  { head: "Input Supplies", value: "input_supplies" },
  { head: "ITC", value: "itc" },
  { head: "Summary Table 6A / 6B / 6C", value: "summary_table" },
  { head: "Tax Paid", value: "tax_paid" },
  { head: "Differences (auto/calculated)", value: "differences" },
];

const ANNUAL_RETURN_ROWS = [
  {
    outward_supplies: "",
    input_supplies: "",
    itc: "",
    summary_table: "",
    tax_paid: "",
    differences: "",
  },
];

const GSTR9FilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedAnnualReturnTableRows,
    handleSort: handleAnnualReturnTableSort,
  } = useTableSort(ANNUAL_RETURN_ROWS);

  return (
    <div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {ANNUAL_RETURN_HEAD.map(({ head, value }) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleAnnualReturnTableSort(value)}
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
                {ANNUAL_RETURN_HEAD.map((_, idx) => (
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
            {sortedAnnualReturnTableRows.map((row, idx) => {
              const {
                outward_supplies,
                input_supplies,
                itc,
                summary_table,
                tax_paid,
                differences,
              } = row;

              const classes = "p-4 px-0 border-b border-blue-gray-50";

              return (
                <tr key={outward_supplies}>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {outward_supplies || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {input_supplies || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {itc || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {summary_table || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {tax_paid || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {differences || "-"}
                    </Typography>
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

export default GSTR9FilterTable;
