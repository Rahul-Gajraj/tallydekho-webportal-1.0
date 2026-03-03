import React from "react";

import { Typography, Chip } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const PURCHASE_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "pl-4",
    value: "date",
  },
  {
    head: "Purchase #",
    value: "purchaseNumber",
  },
  {
    head: "Supplier",
    value: "supplier",
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
    head: "Valid up to",
    value: "validUpTo",
  },
  {
    head: "Docs",
  },
];

const PURCHASE_TABLE_ROW = [
  {
    date: "2025-11-02",
    purchaseNumber: "PUR-5001",
    supplier: "Sigma Suppliers",
    amount: "₹ 32,000",
    status: "Unpaid",
    docs: "Receipt",
  },
  {
    date: "2025-11-08",
    purchaseNumber: "PUR-5002",
    supplier: "Omega Traders",
    amount: "₹ 15,000",
    status: "Paid",
    docs: "Note",
  },
];

const PurchaseRegisterFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedPurchaseRegisterRows,
    handleSort: handlePurchaseRegisterSort,
  } = useTableSort(PURCHASE_TABLE_ROW);

  return (
    <div>
      <table className="w-full min-w-max table-auto">
        <thead>
          <tr>
            {PURCHASE_TABLE_HEAD.map(({ head, customeStyle, value }, index) => (
              <th
                key={head}
                className={`border-b border-gray-300 pb-4 ${customeStyle}`}
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold cursor-pointer"
                    onClick={() => handlePurchaseRegisterSort(value)}
                  >
                    {head}
                    {index !== PURCHASE_TABLE_HEAD.length - 1 && (
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
            {[...Array(2)].map((_, index) => (
              <tr key={index} className="animate-pulse">
                {PURCHASE_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="py-4 border-b border-gray-300">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedPurchaseRegisterRows.length > 0 ? (
              sortedPurchaseRegisterRows.map(
                (
                  {
                    date,
                    purchaseNumber,
                    supplier,
                    amount,
                    status,
                    validUpTo,
                    docs,
                  },
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
                          {date || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {purchaseNumber || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {supplier || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {amount || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            value={status}
                            className={`${
                              status === "Paid"
                                ? "bg-[#ECFDF5] text-[#4F8A75]"
                                : status === "Unpaid"
                                ? "bg-red-50 text-red-400"
                                : "bg-amber-50 text-amber-800"
                            } normal-case`}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {validUpTo ?? "-"}
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

export default PurchaseRegisterFilterTable;
