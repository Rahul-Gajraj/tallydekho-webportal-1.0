import React from "react";

import { Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const OUTWARD_SUPPLY_HEAD = [
  { head: "Invoice No", value: "invoiceNo" },
  { head: "Customer", value: "customer" },
  { head: "Taxable Value", value: "taxableValue" },
  { head: "CGST", value: "cgst" },
  { head: "SGST", value: "sgst" },
  { head: "IGST", value: "igst" },
  { head: "POS", value: "pos" },
  { head: "Status", value: "status" },
];

const OUTWARD_SUPPLY_ROWS = [
  {
    invoiceNo: "INV26-01",
    customer: "XYZ Exports",
    taxableValue: "10%",
    cgst: "10%",
    sgst: "10%",
    igst: "10%",
    pos: "8%",
    status: "active",
  },
];

const GSTR1FilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedOutwardSupplyTableRows,
    handleSort: handleOutwardSupplyTableSort,
  } = useTableSort(OUTWARD_SUPPLY_ROWS);

  return (
    <div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {OUTWARD_SUPPLY_HEAD.map(({ head, value }) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleOutwardSupplyTableSort(value)}
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
                {OUTWARD_SUPPLY_HEAD.map((_, idx) => (
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
            {sortedOutwardSupplyTableRows.map((row, idx) => {
              const {
                cgst,
                customer,
                igst,
                invoiceNo,
                pos,
                sgst,
                status,
                taxableValue,
              } = row;

              const classes = "p-4 px-0 border-b border-blue-gray-50";

              return (
                <tr key={invoiceNo}>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {invoiceNo || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {customer || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {taxableValue || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {cgst || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {sgst || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {igst || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {pos || "-"}
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

export default GSTR1FilterTable;
