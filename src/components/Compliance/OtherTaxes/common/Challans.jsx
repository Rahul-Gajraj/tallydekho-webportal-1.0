import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import useTableSort from "@/hooks/useTableSort";

const LATE_CHALLANS = [
  { challanNo: "INV-893", amount: "₹18K", dueDate: "05 Jul" },
  { challanNo: "INV-918", amount: "₹12K", dueDate: "09 Jul" },
  { challanNo: "INV-321", amount: "₹11.2K", dueDate: "09 Jul" },
  { challanNo: "INV-245", amount: "₹15.5K", dueDate: "09 Jul" },
  { challanNo: "INV-789", amount: "₹9.8K", dueDate: "09 Jul" },
];

const LATE_CHALLANS_HEAD = [
  { head: "Challan No.", value: "challanNo" },
  { head: "Amount", value: "amount" },
  { head: "Due Date", value: "dueDate" },
];

const Challans = ({ isLoading }) => {
  const {
    sortedData: sortedLateChallansTableRows,
    handleSort: handleLateChallansTableSort,
  } = useTableSort(LATE_CHALLANS);

  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-0 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6">Top 5 Late Challans</Typography>
      </CardHeader>
      <CardBody className="!p-4 !pt-2">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr>
              {LATE_CHALLANS_HEAD.map(({ head, value }, idx) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0">
                  <div className="flex">
                    <Typography
                      variant="small"
                      className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                      onClick={() => handleLateChallansTableSort(value)}
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
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="animate-pulse">
                  <td
                    className={`py-4 ${
                      index === 4 ? "border-none" : "border-b border-gray-300"
                    } pl-3`}
                  >
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                  <td
                    className={`py-4 ${
                      index === 4 ? "border-none" : "border-b border-gray-300"
                    } pl-3`}
                  >
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                  <td
                    className={`py-4 ${
                      index === 4 ? "border-none" : "border-b border-gray-300"
                    } pl-3`}
                  >
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {sortedLateChallansTableRows.map(
                ({ challanNo, amount, dueDate }, idx) => {
                  const classes = `p-4 px-0 ${
                    idx === sortedLateChallansTableRows.length - 1
                      ? "border-b-none pb-0"
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={challanNo}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal pl-3 w-24"
                        >
                          {challanNo || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal pl-3"
                        >
                          {amount || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal pl-3"
                        >
                          {dueDate || "-"}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          )}
        </table>
      </CardBody>
    </Card>
  );
};

export default Challans;
