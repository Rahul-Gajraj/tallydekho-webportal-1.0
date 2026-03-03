import React from "react";

import { Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const DOCUMENT_HEAD = [
  { head: "Doc Type", value: "docType" },
  { head: "Number", value: "number" },
  { head: "Date", value: "date" },
  { head: "Amount", value: "amount" },
  { head: "Status", value: "status" },
];

const DOCUMENT_ROWS = [
  {
    docType: "Sales Invoice",
    no: "INV-30975",
    date: "10 Jul",
    amount: "₹42,500",
    status: "-",
  },
  {
    docType: "Receipt",
    no: "REC-310",
    date: "09 Jul",
    amount: "₹36,000",
    status: "-",
  },
  {
    docType: "Credit Note",
    no: "CN-22",
    date: "08 Jul",
    amount: "₹5,000",
    status: "-",
  },
];

const DocumentsFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedDocumentTableRows,
    handleSort: handleDocumentTableSort,
  } = useTableSort(DOCUMENT_ROWS);

  return (
    <div>
      <table className="min-w-full table-auto text-left">
        <thead>
          <tr>
            {DOCUMENT_HEAD.map(({ head, value }) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleDocumentTableSort(value)}
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
                {DOCUMENT_HEAD.map((data, idx) => (
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
            {sortedDocumentTableRows.map(
              ({ docType, no, date, amount, status }, idx) => {
                const classes = `p-4 px-0 ${
                  idx == sortedDocumentTableRows.length - 1
                    ? "border-b-none pb-0"
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={docType}>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {docType || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {no || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {date || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {amount || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {status || "-"}
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

export default DocumentsFilterTable;
