import React from "react";

import { Option, Select, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const INPUT_SERVICE_DISTRIBUTOR_HEAD = [
  { head: "Supplier GSTIN", value: "supplier_gstin" },
  { head: "Invoice No", value: "invoice_no" },
  { head: "Taxable Value", value: "taxable_value" },
  { head: "IGST Distributed", value: "igst_distributes" },
  { head: "CGST Distributed", value: "distributed" },
  { head: "SGST Distributed", value: "sgst_distributed" },
];

const INPUT_SERVICE_DISTRIBUTOR_ROWS = [
  {
    supplier_gstin: "",
    invoice_no: "",
    taxable_value: "",
    igst_distributed: "",
    distributed: "",
    sgst_distributed: "",
  },
];

const GSTR6FilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedDistributorTableRows,
    handleSort: handleDistributorTableSort,
  } = useTableSort(INPUT_SERVICE_DISTRIBUTOR_ROWS);

  return (
    <div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {INPUT_SERVICE_DISTRIBUTOR_HEAD.map(({ head, value }) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleDistributorTableSort(value)}
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
                {INPUT_SERVICE_DISTRIBUTOR_HEAD.map((_, idx) => (
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
            {sortedDistributorTableRows.map((row, idx) => {
              const {
                supplier_gstin,
                invoice_no,
                taxable_value,
                igst_distributed,
                distributed,
                sgst_distributed,
              } = row;

              const classes = "p-4 px-0 border-b border-blue-gray-50";

              return (
                <tr key={supplier_gstin}>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {supplier_gstin || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {invoice_no || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {taxable_value || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {igst_distributed || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {distributed || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {sgst_distributed || "-"}
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

export default GSTR6FilterTable;
