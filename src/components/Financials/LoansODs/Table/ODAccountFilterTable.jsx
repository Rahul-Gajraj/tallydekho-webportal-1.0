import React from "react";

import { Option, Select, Typography, Chip } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const OD_ACCOUNTS_TABLE_HEAD = [
  {
    head: "OD Name",
    customeStyle: "text-center",
    value: "odName",
  },
  {
    head: "Bank",
    value: "bank",
  },
  {
    head: "Account No",
    value: "accountNo",
  },
  {
    head: "OD Limit",
    value: "odLimit",
  },
  {
    head: "Utilized",
    value: "utilized",
  },
  {
    head: "Available",
    value: "available",
  },
  {
    head: "ROI",
    value: "roi",
  },
  {
    head: "Status",
    value: "status",
  },
  {
    head: "Actions",
    value: "actions",
  },
];

const OD_ACCOUNTS_TABLE_ROWS = [
  {
    odName: "ICICI CC-002",
    bank: "ICICI",
    accountNo: "1122-3344-5566",
    odLimit: "₹30,00,000",
    utilized: "₹26,50,000",
    available: "₹3,50,000",
    roi: "13.1% p.a.",
    status: "Active",
  },
];

const ODAccountFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedLoanRegisterTableRows,
    handleSort: handleLoanRegisterTableSort,
  } = useTableSort(OD_ACCOUNTS_TABLE_ROWS);

  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap justify-between">
        <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[400px]">
          <span className="pl-3">
            <img src="/media/custom/search-sm.svg" />
          </span>
          <input
            id="header-search-input"
            name="header-search-input"
            type="text"
            placeholder="Search by OD name / account no / bank"
            className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Bank"
              containerProps={{
                style: {
                  minWidth: "150px",
                },
              }}
              color="green"
            >
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                All
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                ICICI
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                SBI
              </Option>
            </Select>
          </div>
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Status"
              containerProps={{
                style: {
                  minWidth: "150px",
                },
              }}
              color="green"
            >
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                All
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                Active
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                Inactive
              </Option>
            </Select>
          </div>
        </div>
      </div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {OD_ACCOUNTS_TABLE_HEAD.map(
              ({ head, customeStyle, value }, index) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                >
                  <div className="flex">
                    <Typography
                      variant="small"
                      className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                      onClick={() => handleLoanRegisterTableSort(value)}
                    >
                      {head}
                      {index < OD_ACCOUNTS_TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className="h-4 w-4"
                        />
                      )}
                    </Typography>
                  </div>
                </th>
              )
            )}
          </tr>
        </thead>
        {isLoading ? (
          <tbody>
            {[...Array(1)].map((_, index) => (
              <tr key={index} className="animate-pulse">
                {OD_ACCOUNTS_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="py-4 border-b border-gray-300 pl-4">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedLoanRegisterTableRows.length > 0 ? (
              sortedLoanRegisterTableRows.map((row, index) => {
                const {
                  odName,
                  bank,
                  accountNo,
                  odLimit,
                  utilized,
                  available,
                  roi,
                  status,
                } = row;
                const classes = "p-4 px-0 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {odName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {bank}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {accountNo}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {odLimit}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {utilized}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {available}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {roi}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex pl-3">
                        <Chip
                          value={status}
                          size="sm"
                          color="green"
                          className="h-[30px] normal-case"
                          style={{
                            color: "#108f6f",
                            backgroundColor: "#eaf8f4",
                          }}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex gap-3 pl-3">
                        <Typography
                          variant="small"
                          className="font-normal cursor-pointer"
                          color="green"
                          onClick={() => handleOpenODDrawer()}
                        >
                          View
                        </Typography>
                        <Typography
                          variant="small"
                          className="font-normal cursor-pointer"
                          color="green"
                        >
                          Edit
                        </Typography>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <EmptyData colSpan={10} />
            )}
          </tbody>
        )}
      </table>
      <Pagination />
    </div>
  );
};

export default ODAccountFilterTable;
