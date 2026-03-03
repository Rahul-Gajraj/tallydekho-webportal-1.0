import React from "react";

import { Option, Select, Typography, Chip } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const LOANS_REGISTER_TABLE_HEAD = [
  {
    head: "Loan Name",
    customeStyle: "text-center",
    value: "loanName",
  },
  {
    head: "Lender",
    value: "lender",
  },
  {
    head: "Account No",
    value: "accountNo",
  },
  {
    head: "Type",
    value: "type",
  },
  {
    head: "Sanctioned Amt",
    value: "sanctionedAmt",
  },
  {
    head: "Outstanding",
    value: "outstanding",
  },
  {
    head: "EMI Amount",
    value: "emiAmount",
  },
  {
    head: "Next EMI Date",
    value: "nextEmiDate",
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

const LOANS_REGISTER_TABLE_ROWS = [
  {
    loanName: "Machinery Loan",
    lender: "SBI",
    accountNo: "2233-4455-6677",
    type: "Term",
    sanctionedAmt: "₹1,10,00,000",
    outstanding: "₹82,00,000",
    emiAmount: "₹1,40,000",
    nextEmiDate: "15 Jul 2025",
    status: "Active",
  },
  {
    loanName: "Vehicle Loan - Truck",
    lender: "ICICI",
    accountNo: "9988-7766-5544",
    type: "Vehicle",
    sanctionedAmt: "₹28,00,000",
    outstanding: "₹6,40,000",
    emiAmount: "₹48,500",
    nextEmiDate: "05 Jul 2025",
    status: "NPA",
  },
];

const LoanRegisterFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedLoanRegisterTableRows,
    handleSort: handleLoanRegisterTableSort,
  } = useTableSort(LOANS_REGISTER_TABLE_ROWS);

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
            placeholder="Search by loan name / account no / lender"
            className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Lender"
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
                SBI
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                ICICI
              </Option>
            </Select>
          </div>
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Loan Type"
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
                Team
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                Vehicle
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
                NPA
              </Option>
            </Select>
          </div>
        </div>
      </div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {LOANS_REGISTER_TABLE_HEAD.map(
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
                      {index < LOANS_REGISTER_TABLE_HEAD.length - 1 && (
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
            {[...Array(3)].map((_, index) => (
              <tr key={index} className="animate-pulse">
                {LOANS_REGISTER_TABLE_HEAD.map((_, idx) => (
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
                  loanName,
                  lender,
                  accountNo,
                  type,
                  sanctionedAmt,
                  outstanding,
                  emiAmount,
                  nextEmiDate,
                  status,
                } = row;
                const classes = "p-4 px-0 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {loanName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {lender}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {accountNo}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {type}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {sanctionedAmt}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {outstanding}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {emiAmount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {nextEmiDate}
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
                          onClick={() => handleOpenLoadDrawer()}
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
                        <Typography
                          variant="small"
                          className="font-normal cursor-pointer"
                          color="green"
                        >
                          Close
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

export default LoanRegisterFilterTable;
