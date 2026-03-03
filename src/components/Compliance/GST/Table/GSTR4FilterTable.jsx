import React from "react";

import { Option, Select, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const COMPOSITION_DEALERS_HEAD = [
  { head: "Quarter", value: "quarter" },
  { head: "Outward Supply Value", value: "outwardSupplyValue" },
  { head: "Tax Liability", value: "taxLability" },
  { head: "Late Fee", value: "lateFee" },
  { head: "Composition Tax Rate", value: "compositionTaxRate" },
  { head: "Status", value: "status" },
];

const COMPOSITION_DEALERS_ROWS = [
  {
    quarter: "",
    outwardSupplyValue: "INV26-01",
    taxLability: "02/Jan/2026",
    lateFee: "₹5,000",
    compositionTaxRate: "10%",
    status: "Active",
  },
];

const GSTR4FilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedCompositionDealersTableRows,
    handleSort: handleCompositionDealersTableSort,
  } = useTableSort(COMPOSITION_DEALERS_ROWS);

  return (
    <div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {COMPOSITION_DEALERS_HEAD.map(({ head, value }) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleCompositionDealersTableSort(value)}
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
                {COMPOSITION_DEALERS_HEAD.map((_, idx) => (
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
            {sortedCompositionDealersTableRows.map((row, idx) => {
              const {
                quarter,
                outwardSupplyValue,
                taxLability,
                lateFee,
                compositionTaxRate,
                status,
              } = row;

              const classes = "p-4 px-0 border-b border-blue-gray-50";

              return (
                <tr key={quarter}>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {quarter || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {outwardSupplyValue || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {taxLability || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {lateFee || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {compositionTaxRate || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {status || "-"}
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

export default GSTR4FilterTable;
