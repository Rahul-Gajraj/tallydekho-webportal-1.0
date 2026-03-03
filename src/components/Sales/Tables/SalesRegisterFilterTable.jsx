import React from "react";

import { Typography, Chip } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const SALES_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "pl-4",
    value: "date",
  },
  {
    head: "Invoice #",
    value: "invoice",
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
    head: "Status",
    value: "status",
  },
  {
    head: "IRN",
    value: "irn",
  },
  {
    head: "Docs",
  },
];

const SALES_TABLE_ROW = [
  {
    date: "2025-11-01",
    invoice: "INV-1001",
    customer: "Acme Corp",
    amount: "₹ 24,500",
    status: "Paid",
    irn: "IRN-001",
    docs: "Receipt",
  },
  {
    date: "2025-11-03",
    invoice: "INV-1002",
    customer: "Beta Traders",
    amount: "₹ 18,000",
    status: "Unpaid",
    //   irn: "IRN-001",
    docs: "Note",
  },
  {
    date: "2025-11-05",
    invoice: "INV-1003",
    customer: "Gamma LLC",
    amount: "₹ 98,500",
    status: "Paid",
    irn: "IRN-003",
    docs: "Receipt, E-Way",
  },
];

const SalesRegisterFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedSalesRegisterRows,
    handleSort: handleSalesRegisterSort,
  } = useTableSort(SALES_TABLE_ROW);

  return (
    <div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            {SALES_TABLE_HEAD.map(({ head, customeStyle, value }, index) => (
              <th
                key={head}
                className={`cursor-pointer border-b border-gray-300 pb-4 ${customeStyle}`}
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold"
                    onClick={() => handleSalesRegisterSort(value)}
                  >
                    {head}
                    {index !== SALES_TABLE_HEAD.length - 1 && (
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
            {[...Array(3)].map((_, index) => (
              <tr key={index} className="animate-pulse">
                {SALES_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="py-4 border-b border-gray-300">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedSalesRegisterRows.length > 0 ? (
              sortedSalesRegisterRows.map(
                (
                  { date, invoice, customer, amount, status, irn, docs },
                  index
                ) => {
                  const classes = "!py-4 border-b border-gray-300";
                  return (
                    <tr key={index}>
                      <td className={`${classes} pl-4`}>
                        <Typography variant="small" className="!font-normal">
                          {date || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {invoice || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {customer || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {amount || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          {status ? (
                            <Chip
                              variant="ghost"
                              value={status}
                              className={`${
                                status === "Paid"
                                  ? "bg-green-50/70 text-green-400"
                                  : status === "Unpaid"
                                  ? "bg-red-50/70 text-red-400"
                                  : "bg-amber-50/70 text-amber-800"
                              } normal-case`}
                            />
                          ) : (
                            "-"
                          )}
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {irn || "-"}
                        </Typography>
                      </td>
                      <td className="border-b border-gray-300">
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

export default SalesRegisterFilterTable;
