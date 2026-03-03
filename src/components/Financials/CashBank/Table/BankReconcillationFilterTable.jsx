import React from "react";

import { Input, Option, Select, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const BANK_RECONCILLATION_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "text-center",
    value: "date",
  },
  {
    head: "Bank ref",
    value: "bankRef",
  },
  {
    head: "Particulars",
    value: "particulars",
  },
  {
    head: "Debit",
    value: "debit",
  },
  {
    head: "Credit",
    value: "credit",
  },
  {
    head: "CLR Date",
    value: "clrDate",
  },
  {
    head: "Status",
    value: "status",
  },
  {
    head: "Docs",
    value: "docs",
  },
  {
    head: "Actions",
    value: "actions",
  },
];

const BANK_RECONCILLATION_TABLE_ROW = [
  {
    date: "09 Jul 2025",
    bankRef: "UTR-772198",
    particulars: "Global Traders",
    debit: "-",
    credit: "₹24,200",
    clrDate: "-",
    status: "Unreconciled",
  },
  {
    date: "08 Jul 2025",
    bankRef: "CHQ-118822",
    particulars: "Cheque deposit - XYZ Exports",
    debit: "-",
    credit: "₹42,000",
    clrDate: "-",
    status: "Unreconciled",
  },
  {
    date: "07 Jul 2025",
    bankRef: "CHQ-118801",
    particulars: "Cheque issued - Metro Logistics",
    debit: "₹28,400",
    credit: "-",
    clrDate: "-",
    status: "Unreconciled",
  },
];

const BankReconcillationFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedBankOverviewTableRows,
    handleSort: handleBankOverviewTableSort,
  } = useTableSort(BANK_RECONCILLATION_TABLE_ROW);

  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap justify-between">
        <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[500px]">
          <span className="pl-3">
            <img src="/media/custom/search-sm.svg" />
          </span>
          <input
            id="header-search-input"
            name="header-search-input"
            type="text"
            placeholder="Search by amount / ref / narration"
            className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
            // value={itemsListSearchText}
            // onChange={(e) => setItemsListSearchText(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="w-[130px]">
            <Select
              className="bg-white-600"
              label="Period"
              containerProps={{
                style: {
                  minWidth: "130px",
                },
              }}
              // value={value}
              // onChange={(val) => setValue(val)}
              color="green"
            >
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                All
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                2024-2025
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                2025-2026
              </Option>
            </Select>
          </div>
          <div className="w-[130px]">
            <Select
              className="bg-white-600"
              label="Bank A/C"
              containerProps={{
                style: {
                  minWidth: "130px",
                },
              }}
              // value={value}
              // onChange={(val) => setValue(val)}
              color="green"
            >
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                All
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                ICICI Bank - 0012
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                SBI Bank
              </Option>
            </Select>
          </div>
          <div className="w-[130px]">
            <Select
              className="bg-white-600"
              label="Status"
              containerProps={{
                style: {
                  minWidth: "130px",
                },
              }}
              // value={value}
              // onChange={(val) => setValue(val)}
              color="green"
            >
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                All
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                Cleared
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                Unreconciled
              </Option>
            </Select>
          </div>
          <div className="w-[120px]">
            <Input
              label="Book Balance"
              readOnly
              value="₹1,240,000"
              containerProps={{
                style: {
                  minWidth: "120px",
                },
              }}
              className="pointer-events-none bg-[#f5f7f9]"
            />
          </div>
          <div className="w-[120px]">
            <Input
              label="STMT Balance"
              readOnly
              value="₹1,227,600"
              containerProps={{
                style: {
                  minWidth: "120px",
                },
              }}
              className="pointer-events-none bg-[#f5f7f9]"
            />
          </div>
          <div className="w-[120px]">
            <Input
              label="Difference"
              readOnly
              value="₹12,400"
              containerProps={{
                style: {
                  minWidth: "120px",
                },
              }}
              className="pointer-events-none bg-[#f5f7f9]"
            />
          </div>
        </div>
      </div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {BANK_RECONCILLATION_TABLE_HEAD.map(
              ({ head, customeStyle, value }, index) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                >
                  <div className="flex">
                    <Typography
                      variant="small"
                      className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                      onClick={() => handleBankOverviewTableSort(value)}
                    >
                      {head}
                      {index < BANK_RECONCILLATION_TABLE_HEAD.length - 2 && (
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
                {BANK_RECONCILLATION_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="py-4 border-b border-gray-300 pl-4">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedBankOverviewTableRows.length > 0 ? (
              sortedBankOverviewTableRows.map((row, index) => {
                const {
                  date,
                  bankRef,
                  particulars,
                  debit,
                  credit,
                  clrDate,
                  status,
                } = row;
                const classes = "p-4 px-0 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {bankRef}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {particulars}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {debit}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {credit}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {clrDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {status}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        className="w-5 h-5 ml-3"
                        fill="#108f6f"
                      >
                        <path d="M360-440h240q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440Zm0 120h240q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400H360q-17 0-28.5 11.5T320-360q0 17 11.5 28.5T360-320Zm0 120h120q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280H360q-17 0-28.5 11.5T320-240q0 17 11.5 28.5T360-200ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm480-520H580q-25 0-42.5-17.5T520-660v-140H240v640h480v-440ZM240-800v200-200 640-640Z" />
                      </svg>
                    </td>
                    <td className={classes}>
                      <div className="flex gap-3 pl-3">
                        <Typography
                          variant="small"
                          className="font-normal cursor-pointer"
                          color="green"
                        >
                          Share PDF
                        </Typography>
                        <Typography
                          variant="small"
                          className="font-normal cursor-pointer"
                          color="green"
                        >
                          Download
                        </Typography>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <EmptyData colSpan={9} />
            )}
          </tbody>
        )}
      </table>
      <Pagination />
    </div>
  );
};

export default BankReconcillationFilterTable;
