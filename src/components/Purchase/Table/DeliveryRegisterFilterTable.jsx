import React, { useMemo } from "react";

import { Typography, Chip } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";
import useDebounce from "@/hooks/useDebouncy";

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
    dnNumber: "DN-7001",
    supplier: "Omega Traders",
    amount: "₹ 24,500",
    status: "Delivered",
    vehicleNumber: "MH12-AB-1234",
    docs: "Invoice",
  },
];

const DeliveryRegisterFilterTable = ({
  registerSearchText,
  isLoading,
  status,
}) => {
  const debouncedRegisterSearchText = useDebounce(registerSearchText, 500);

  const deliveryRegisterData = useMemo(() => {
    return DELIVERY_TABLE_ROW.filter((data) =>
      status == "All" ? data : data.status === status
    ).filter((data) => data.supplier.includes(debouncedRegisterSearchText));
  }, [status, debouncedRegisterSearchText]);

  const {
    sortedData: sortedDeliveryRegisterRows,
    handleSort: handleDeliveryRegisterSort,
  } = useTableSort(deliveryRegisterData);

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
                    supplier,
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
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {dnNumber}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {supplier}
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
                            className={`${
                              status === "Delivered"
                                ? "bg-[#ECFDF5] text-[#4F8A75]"
                                : status === "Not Delivered"
                                ? "bg-red-50 text-red-400"
                                : "bg-amber-50 text-amber-800"
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
