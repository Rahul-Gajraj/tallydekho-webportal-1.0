import React from "react";

import { Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const E_WAY_BILL_HEAD = [
  { head: "Date", value: "date" },
  { head: "Invoice", value: "invoice" },
  { head: "Party", value: "party" },
  { head: "EWB-No", value: "ewbNo" },
  { head: "Vehicle", value: "vehcile" },
  { head: "Status", value: "status" },
  { head: "Actions", value: "actions" },
];

const E_WAY_BILL_ROW = [
  {
    column: "12 Jul 23:59",
    invoice: "INV-3086",
    party: "Maaruji Technologies Pvt Lt",
    ewbNo: "EWB-10045678",
    vehicle: "RJ14 XX 5555",
    status: "Generated",
    actions: [
      "Extend Validity",
      "Cancel E-Way Bill",
      "View E-Way Bill",
      "Share PDF",
    ],
  },
];

const EWayBillFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedEWayBillTableRows,
    handleSort: handleEWayBillTableSort,
  } = useTableSort(E_WAY_BILL_ROW);

  return (
    <div>
      <table className="min-w-full table-auto text-left">
        <thead>
          <tr>
            {E_WAY_BILL_HEAD.map(({ head, value }, index) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 curosr-pointer"
                    onClick={() => handleEWayBillTableSort(value)}
                  >
                    {head}
                    {index < E_WAY_BILL_HEAD.length - 1 && (
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
                {E_WAY_BILL_HEAD.map(({head, value}) => (
                  <td key={head} className="py-4 border-b border-gray-300 pl-4">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedEWayBillTableRows.map(
              (
                { date, invoice, party, ewbNo, vehicle, status, actions },
                idx
              ) => {
                const classes = "p-4 px-0 border-b border-blue-gray-50";

                return (
                  <tr key={idx}>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-4">
                        {date || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-4">
                        {invoice || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-4">
                        {party || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-4">
                        {ewbNo || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-4">
                        {vehicle || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-4">
                        {status || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex gap-3 pl-3">
                        {actions.map((action) => (
                          <Typography
                            variant="small"
                            className="font-normal cursor-pointer"
                            key={action}
                          >
                            {action || "-"}
                          </Typography>
                        ))}
                      </div>
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

export default EWayBillFilterTable;
