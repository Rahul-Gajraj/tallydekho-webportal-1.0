import React from "react";

import { Typography, Chip } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const DELIVERY_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "pl-4",
    value: "date",
  },
  {
    head: "DN #",
    value: "dnNumber",
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
    head: "Vehicle No.",
    value: "vehicleNumber",
  },
  {
    head: "Docs",
  },
];

const DELIVERY_TABLE_ROW = [
  {
    date: "2025-11-06",
    dnNumber: "DN-3001",
    customer: "Acme Corp",
    amount: "₹ 24,500",
    status: "Paid",
    vehicleNumber: "MH12-AB-1234",
    docs: "Invoice",
  },
];

const DeliveryRegisterFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedDeliveryRegisterRows,
    handleSort: handleDeliveryRegisterSort,
  } = useTableSort(DELIVERY_TABLE_ROW);

  return (
    <div>
      <table className="w-full min-w-max table-auto">
        <thead>
          <tr>
            {DELIVERY_TABLE_HEAD.map(({ head, customeStyle, value }, index) => (
              <th
                key={head}
                className={`border-b border-gray-300 pb-4 ${customeStyle}`}
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold cursor-pointer"
                    onClick={() => handleDeliveryRegisterSort(value)}
                  >
                    {head}
                    {index !== DELIVERY_TABLE_HEAD.length - 1 && (
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
                {DELIVERY_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="py-4 border-b border-gray-300">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedDeliveryRegisterRows.length > 0 ? (
              sortedDeliveryRegisterRows.map(
                (
                  {
                    date,
                    dnNumber,
                    customer,
                    amount,
                    status,
                    vehicleNumber,
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
                          {dnNumber || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {customer || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            value={status}
                            // color={
                            //   status === "Paid"
                            //     ? "green"
                            //     : status === "Unpaid"
                            //     ? "red"
                            //     : "amber"
                            // }
                            className={`${
                              status === "Paid"
                                ? "bg-green-50/70 text-green-400"
                                : status === "Unpaid"
                                ? "bg-red-50/70 text-red-400"
                                : "bg-amber-50/70 text-amber-600"
                            } normal-case`}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {vehicleNumber}
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

export default DeliveryRegisterFilterTable;
