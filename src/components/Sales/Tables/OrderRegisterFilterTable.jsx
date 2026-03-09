import React, { useMemo } from "react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import { Typography, Chip } from "@material-tailwind/react";

import Pagination from "@/components/common/Pagination";
import EmptyData from "@/components/common/EmptyData";

import useTableSort from "@/hooks/useTableSort";
import useDebounce from "@/hooks/useDebouncy";

const ORDER_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "pl-4",
    value: "date",
  },
  {
    head: "Sales Order #",
    value: "sales",
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
    head: "Docs",
  },
];

const ORDER_TABLE_ROW = [
  {
    date: "2025-11-02",
    sales: "SO-2001",
    customer: "Acme Corp",
    amount: "₹ 24,500",
    status: "Pending",
    docs: "Quotation",
  },
  {
    date: "2025-11-04",
    sales: "SO-2002",
    customer: "Delta Inc",
    amount: "₹ 32,000",
    status: "Paid",
    docs: "Quotation",
  },
];

const OrderRegisterFilterTable = ({
  registerSearchText,
  isLoading,
  status,
}) => {
  const debouncedRegisterSearchText = useDebounce(registerSearchText, 500);

  const orderRegisterData = useMemo(() => {
    return ORDER_TABLE_ROW.filter((data) =>
      status == "All" ? data : data.status === status
    ).filter((data) => data.customer.includes(debouncedRegisterSearchText));
  }, [status, debouncedRegisterSearchText]);

  const {
    sortedData: sortedOrderRegisterRows,
    handleSort: handleOrderRegisterSort,
  } = useTableSort(orderRegisterData);

  return (
    <div>
      <table className="w-full min-w-max table-auto">
        <thead>
          <tr>
            {ORDER_TABLE_HEAD.map(({ head, customeStyle, value }, index) => (
              <th
                key={head}
                className={`cursor-pointer border-b border-gray-300 pb-4 ${customeStyle}`}
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold"
                    onClick={() => handleOrderRegisterSort(value)}
                  >
                    {head}
                    {index !== ORDER_TABLE_HEAD.length - 1 && (
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
                {ORDER_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="py-4 border-b border-gray-300">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedOrderRegisterRows.length > 0 ? (
              sortedOrderRegisterRows.map(
                (
                  { date, sales, customer, amount, status, irn, docs },
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
                          {sales || "-"}
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
                      <td className={`${classes}`}>
                        <div className="w-max">
                          {status ? (
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
                          ) : (
                            "-"
                          )}
                        </div>
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

export default OrderRegisterFilterTable;
