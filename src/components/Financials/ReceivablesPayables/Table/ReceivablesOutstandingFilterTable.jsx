import React from "react";

import { Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";

import useTableSort from "@/hooks/useTableSort";

const CUSTOMER_OUTSTANDING_TABLE_HEAD = [
  {
    head: "Customer",
    customeStyle: "text-center",
    value: "customer",
  },
  {
    head: "Outstanding",
    value: "outstanding",
  },
  {
    head: "Overdue",
    value: "overdue",
  },
  {
    head: "Aging",
    value: "aging",
  },
  {
    head: "Status",
    value: "status",
  },
];

const CUSTOMER_OUTSTANDING_TABLE_ROWS = [
  {
    customer: "XYZ Exports",
    outstanding: "₹920,000",
    overdue: "₹280,000",
    aging: "31-60 days",
    status: "High Risk",
  },
  {
    customer: "Global traders",
    outstanding: "₹640,000",
    overdue: "₹120,000",
    aging: "0-30 days",
    status: "On Track",
  },
  {
    customer: "PP Enterprises",
    outstanding: "₹410,000",
    overdue: "₹210,000",
    aging: "61-90 days",
    status: "Overdue",
  },
  {
    customer: "Om Industries",
    outstanding: "₹330,000",
    overdue: "₹0",
    aging: "0-30 days",
    status: "Healthy",
  },
];

const ReceivablesOutstandingFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedCustomerOutstandingTableRows,
    handleSort: handleCustomerOutstandingTableSort,
  } = useTableSort(CUSTOMER_OUTSTANDING_TABLE_ROWS);

  return (
    <div>
      <table className="w-full table-auto h-[400px] overflow-scroll">
        <thead>
          <tr>
            {CUSTOMER_OUTSTANDING_TABLE_HEAD.map(
              ({ head, customeStyle, value }) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                >
                  <div className="flex">
                    <Typography
                      variant="small"
                      className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                      onClick={() => handleCustomerOutstandingTableSort(value)}
                    >
                      {head}
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    </Typography>
                  </div>
                </th>
              )
            )}
          </tr>
        </thead>
        {isLoading ? (
          <tbody>
            {[...Array(4)].map((_, index) => (
              <tr key={index} className="animate-pulse">
                {CUSTOMER_OUTSTANDING_TABLE_HEAD.map((_, idx) => (
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
            {sortedCustomerOutstandingTableRows.length > 0 ? (
              sortedCustomerOutstandingTableRows.map(
                ({ customer, outstanding, overdue, aging, status }, index) => {
                  const classes = "!p-4 border-b border-gray-300";
                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {customer}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {outstanding}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {overdue}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {aging}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {status}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <EmptyData colSpan={5} />
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default ReceivablesOutstandingFilterTable;
