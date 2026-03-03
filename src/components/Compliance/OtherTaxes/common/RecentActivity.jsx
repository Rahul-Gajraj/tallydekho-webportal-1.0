import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import useTableSort from "@/hooks/useTableSort";

const RECENT_ACTIVITIES = [
  { activity: "14 INRs Generated", date: "10 Jul 14:42" },
  { activity: "9 INRs Retry (Success 8)", date: "10 Jul 14:42" },
  { activity: "9 INRs Modified (Success 3, Failed 6)", date: "10 Jul 14:42" },
];

const RecentActivity = ({ isLoading }) => {
  const {
    sortedData: sortedRecentActivityTableRows,
    handleSort: handleRecentActivityTableSort,
  } = useTableSort(RECENT_ACTIVITIES);

  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-0 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6">Recent Activity</Typography>
      </CardHeader>
      <CardBody className="!p-4 !pt-2">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0">
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleRecentActivityTableSort("date")}
                  >
                    Date
                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                  </Typography>
                </div>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0">
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleRecentActivityTableSort("activity")}
                  >
                    Activity
                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                  </Typography>
                </div>
              </th>
            </tr>
          </thead>
          {isLoading ? (
            <tbody>
              {[...Array(3)].map((_, index) => (
                <tr key={index} className="animate-pulse">
                  <td
                    className={`py-4 ${
                      index == 2 ? "border-none" : "border-b border-gray-300"
                    } pl-3`}
                  >
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                  <td
                    className={`py-4 ${
                      index == 2 ? "border-none" : "border-b border-gray-300"
                    } pl-3`}
                  >
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {sortedRecentActivityTableRows.map(({ date, activity }, idx) => {
                const classes = `p-4 px-0 ${
                  idx == sortedRecentActivityTableRows.length - 1
                    ? "border-b-none pb-0"
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={activity}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="font-normal pl-3 w-24"
                      >
                        {date || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {activity || "-"}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </CardBody>
    </Card>
  );
};

export default RecentActivity;
