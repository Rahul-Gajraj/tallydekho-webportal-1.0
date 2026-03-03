import React, { useEffect, useState } from "react";

import { Button, Option, Select, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const SlowMovingFilterTable = ({
  isLoading,
  SALES_TABLE_HEAD,
  SALES_TABLE_ROW,
}) => {
  const { sortedData: sortedSalesTableRows, handleSort: handleSalesTableSort } =
    useTableSort(SALES_TABLE_ROW);

  return (
    <div>
      <table className="w-full min-w-max table-auto">
        <thead>
          <tr>
            {SALES_TABLE_HEAD.map(({ head, value }, index) => (
              <th key={head} className={"border-b border-gray-300 pb-4"}>
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleSalesTableSort(value)}
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
                {SALES_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="py-4 border-b border-gray-300 pl-4">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedSalesTableRows.length > 0 ? (
              sortedSalesTableRows.map(
                ({ item, roLevel, currentStock, required }, index) => {
                  const classes = "!p-4 border-b border-gray-300";
                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {item}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {roLevel}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {currentStock}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="!font-normal">
                          {required}
                        </Typography>
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
    </div>
  );
};

export default SlowMovingFilterTable;
