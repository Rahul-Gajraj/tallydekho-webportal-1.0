import React from "react";

import { Typography } from "@material-tailwind/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import useTableSort from "@/hooks/useTableSort";

const LOGISTIC_TABLE_HEAD = [
  { head: "Logistics Type", value: "logisticsType" },
  { head: "Amount", value: "amount" },
  { head: "Tracking Number", value: "trackingNumber" },
  { head: "Remarks", value: "remark" },
  { head: "Tax On Logistics", value: "taxOnLogistics" },
  { head: "Actions", value: "actions" },
];

const LogisticsFilterTable = ({
  logistics,
  setSelectedLogistic,
  handleDialogsOpen,
  deleteLogisticHandler,
}) => {
  const {
    sortedData: sortedLogisticsTableRows,
    handleSort: handleLogisticsTableSort,
  } = useTableSort(logistics);

  return (
    <table className="w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {LOGISTIC_TABLE_HEAD.map(({ head, value }, idx) => (
            <th key={head} className="px-4 pt-4">
              <div className="flex">
                <Typography
                  variant="small"
                  className="flex items-center justify-between gap-2 font-normal leading-none !font-bold cursor-pointer"
                  onClick={() => handleLogisticsTableSort(value)}
                >
                  {head}
                  {idx < LOGISTIC_TABLE_HEAD.length - 1 && (
                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                  )}
                </Typography>
              </div>
              {/* <Typography variant="small" className="font-bold leading-none">
                {head}
              </Typography> */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedLogisticsTableRows.map((logistic) => {
          const {
            logisticsType,
            amount,
            trackingNumber,
            remark,
            taxOnLogistics,
            id,
          } = logistic;

          return (
            <tr key={id}>
              <td className="p-2 px-4">
                <Typography variant="small" className="font-normal">
                  {logisticsType || "-"}
                </Typography>
              </td>
              <td className="p-2 px-4">
                <Typography variant="small" className="font-normal">
                  ₹{amount || 0}
                </Typography>
              </td>
              <td className="p-2 px-4">
                <Typography variant="small" className="font-normal">
                  {trackingNumber || "-"}
                </Typography>
              </td>
              <td className="p-2 px-4">
                <Typography variant="small" className="font-normal">
                  {remark || "-"}
                </Typography>
              </td>
              <td className="p-2 px-4">
                <Typography variant="small" className="font-normal">
                  {taxOnLogistics || "-"}
                </Typography>
              </td>
              <td className="p-2 px-4">
                <div className="flex gap-3">
                  <img
                    src="/media/common/edit.svg"
                    alt="edit"
                    className="h-5 cursor-pointer"
                    onClick={() => {
                      setSelectedLogistic(logistic);
                      handleDialogsOpen("logistics");
                    }}
                  />
                  <img
                    src="/media/common/delete.svg"
                    alt="delete"
                    className="h-5 cursor-pointer"
                    onClick={() => deleteLogisticHandler(id)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LogisticsFilterTable;
