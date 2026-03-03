import React from "react";

import { Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const PERFORMA_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "pl-4",
    value: "date",
  },
  {
    head: "PI #",
    value: "piNumber",
  },
  {
    head: "Customer",
    value: "customer",
  },
  {
    head: "Amount",
    value: "amount",
  },
  {
    head: "Valid up to",
    value: "validUpTo",
  },
  {
    head: "Docs",
  },
];

const PERFORMA_TABLE_ROW = [
  {
    date: "2025-11-07",
    piNumber: "DN-3001",
    customer: "Gamma LLC",
    amount: "₹ 24,500",
    validUpTo: "2025-12-07",
    docs: "Invoice",
  },
];

const PerformanceInvoiceFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedPerformanceInvoiceRegisterRows,
    handleSort: handlePerformanceInvoiceRegisterSort,
  } = useTableSort(PERFORMA_TABLE_ROW);

  return (
    <div>
      <table className="w-full min-w-max table-auto">
        <thead>
          <tr>
            {PERFORMA_TABLE_HEAD.map(({ head, customeStyle, value }, index) => (
              <th
                key={head}
                className={`border-b border-gray-300 pb-4 ${customeStyle}`}
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold cursor-pointer"
                    onClick={() => handlePerformanceInvoiceRegisterSort(value)}
                  >
                    {head}
                    {index !== PERFORMA_TABLE_HEAD.length - 1 && (
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
            {[...Array(1)].map((_, index) => (
              <tr key={index} className="animate-pulse">
                {PERFORMA_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="py-4 border-b border-gray-300">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedPerformanceInvoiceRegisterRows.length > 0 ? (
              sortedPerformanceInvoiceRegisterRows.map(
                (
                  { date, piNumber, customer, amount, validUpTo, docs },
                  index
                ) => {
                  const classes = "!py-4 border-b border-gray-300";
                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="!font-normal ml-4"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {piNumber}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {customer}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {validUpTo}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <img
                          src="/media/common/docs.svg"
                          alt="docs"
                          className="w-5 h-5 ml-2"
                        />
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <EmptyData />
            )}
          </tbody>
        )}
      </table>
      <Pagination />
    </div>
  );
};

export default PerformanceInvoiceFilterTable;
