import React from "react";

import { Card, CardBody, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const KPI_DATA = [
  { title: "GSTIN", value: "27ABCDE1234F1Z5" },
  { title: "Registration Type", value: "Regular" },
  { title: "Place of Supply", value: "Rajasthan" },
  { title: "Ledger Type", value: "B2B" },
];

const GST_LEDGER_HEAD = [
  { head: "Invoice", value: "invoice" },
  { head: "Date", value: "date" },
  { head: "Taxable Value", value: "taxableValue" },
  { head: "CGST", value: "cgst" },
  { head: "SGST", value: "sgst" },
  { head: "IGST", value: "igst" },
];

const GST_LEDGER_ROW = [
  {
    invoice: "INV-30975",
    date: "10 Jul",
    taxableValue: "₹38,000",
    cgst: "₹3,800",
    sgst: "₹3,800",
    igst: "-",
  },
];

const GSTLedger = ({ isLoading }) => {
  const {
    sortedData: sortedGSTLedgerTableRows,
    handleSort: handleGSTLedgerTableSort,
  } = useTableSort(GST_LEDGER_ROW);

  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        {isLoading
          ? [...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="xl:col-span-1 lg:col-span-1 col-span-2 h-full"
              >
                <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[52px]">
                  <CardBody>
                    <div></div>
                  </CardBody>
                </Card>
              </div>
            ))
          : KPI_DATA.map(({ title, value }) => (
              <div
                key={title}
                className="xl:col-span-1 lg:col-span-1 col-span-2"
              >
                <Card className="shadow-sm border border-gray-200 !rounded-lg">
                  <CardBody className="p-4 h-full flex flex-col justify-center">
                    <div className="flex justify-between">
                      <Typography className="font-medium !text-sm">
                        {title}
                      </Typography>
                      <Typography className="font-medium !text-sm">
                        {value}
                      </Typography>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
      </div>
      <table className="min-w-full table-auto text-left mt-5">
        <thead>
          <tr>
            {GST_LEDGER_HEAD.map(({ head, value }) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleGSTLedgerTableSort(value)}
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
                {GST_LEDGER_HEAD.map((data, idx) => (
                  <td
                    key={`${index}_${idx}`}
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
            {sortedGSTLedgerTableRows.map(
              ({ invoice, date, taxableValue, cgst, sgst, igst }, idx) => {
                const classes = `p-4 px-0 ${
                  idx == sortedGSTLedgerTableRows.length - 1
                    ? "border-b-none pb-0"
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={invoice}>
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

export default GSTLedger;
