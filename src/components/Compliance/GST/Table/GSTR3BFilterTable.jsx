import React from "react";

import { Option, Select, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const SUMMARY_HEAD = [
  { head: "Taxable Value", value: "taxableValue" },
  { head: "ITC", value: "itc" },
  { head: "Output Tax", value: "outputTax" },
  { head: "Net GST", value: "netGST" },
];

const SUMMARY_ROWS = [
  {
    taxableValue: "",
    itc: "INV26-01",
    outputTax: "02/Jan/2026",
    netGST: "10%",
  },
];

const GSTR3BFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedSummaryTableRows,
    handleSort: handleSummaryTableSort,
  } = useTableSort(SUMMARY_ROWS);

  return (
    <div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {SUMMARY_HEAD.map(({ head, value }) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3"
                    onClick={() => handleSummaryTableSort(value)}
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
                {SUMMARY_HEAD.map((_, idx) => (
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
            {sortedSummaryTableRows.map((row, idx) => {
              const { taxableValue, itc, outputTax, netGST } = row;

              const classes = "p-4 px-0 border-b border-blue-gray-50";

              return (
                <tr key={taxableValue}>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {taxableValue || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {itc || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {outputTax || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {netGST || "-"}
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

export default GSTR3BFilterTable;
