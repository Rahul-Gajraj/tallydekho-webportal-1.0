import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const REGISTER_HEAD = [
  { head: "Date", value: "date" },
  { head: "Voucher No", value: "voucherNo" },
  { head: "Party Name", value: "partyName" },
  { head: "Tax Type", value: "taxType" },
  { head: "Section / Category", value: "section" },
  { head: "Taxable Amount", value: "taxableAmount" },
  { head: "Tax Rate", value: "taxRate" },
  { head: "Tax Amount", value: "taxAmount" },
  { head: "Status", value: "status" },
  { head: "Challan No", value: "challanNo" },
  { head: "Due Date", value: "dueDate" },
  { head: "Actions", value: "actions" },
];

const REGISTER_ROWS = [
  {
    date: "9 Jul",
    voucherNo: "VN-893",
    partyName: "Maaruji Technologies Pvt Ltd",
    taxType: "TDS",
    section: "194C",
    taxableAmount: "Base amount",
    taxRate: "5%",
    taxAmount: "Auto-calculated",
    status: "Paid",
    challanNo: "CH-145",
    dueDate: "12 Jul",
    actions: ["View"],
  },
];

const Register = ({ isLoading }) => {
  const {
    sortedData: sortedRegisterTableRows,
    handleSort: handleRegisterTableSort,
  } = useTableSort(REGISTER_ROWS);

  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-0 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6">Register</Typography>
      </CardHeader>
      <CardBody className="!p-4 !pt-2">
        <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[600px]">
          <span className="pl-3">
            <img src="/media/custom/search-sm.svg" />
          </span>
          <input
            id="header-search-input"
            name="header-search-input"
            type="text"
            placeholder="Search for Voucher No. / Party / Challan No. / Bill No. / Section Code"
            className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
            // value={itemsListSearchText}
            // onChange={(e) => setItemsListSearchText(e.target.value)}
          />
        </div>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-auto text-left mt-4">
            <thead>
              <tr>
                {REGISTER_HEAD.map(({ head, value }, index) => (
                  <th
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0 whitespace-nowrap"
                    key={head}
                  >
                    <div className="flex">
                      <Typography
                        variant="small"
                        className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer whitespace-nowrap mr-3"
                        onClick={() => handleRegisterTableSort(value)}
                      >
                        {head}

                        {index < REGISTER_HEAD.length - 1 && (
                          <ChevronUpDownIcon
                            strokeWidth={2}
                            className="h-4 w-4"
                          />
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
                    {REGISTER_HEAD.map(({ head, value }) => (
                      <td
                        key={head}
                        className={`py-4 ${
                          index == 4
                            ? "border-none"
                            : "border-b border-gray-300"
                        } pl-3`}
                      >
                        <div className="h-4 bg-gray-300 rounded w-24"></div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                {sortedRegisterTableRows.map(
                  (
                    {
                      date,
                      voucherNo,
                      partyName,
                      taxType,
                      section,
                      taxableAmount,
                      taxRate,
                      taxAmount,
                      status,
                      challanNo,
                      dueDate,
                      actions,
                    },
                    idx
                  ) => {
                    const classes = `p-4 px-0 ${
                      idx == sortedRegisterTableRows.length - 1
                        ? "border-b-none pb-0"
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={date}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3 w-24"
                          >
                            {date || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {voucherNo || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {partyName || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {taxType || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {section || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {taxableAmount || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {taxRate || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {taxAmount || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {status || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {challanNo || "-"}
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
                        <td className={classes}>
                          <div className="flex gap-3 pl-3">
                            {actions.map((action) => (
                              <Typography
                                variant="small"
                                className="font-normal cursor-pointer"
                                color="green"
                                key={action}
                              >
                                {action}
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
        </div>
        <Pagination />
      </CardBody>
    </Card>
  );
};

export default Register;
