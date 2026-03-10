import React from "react";

import { Option, Select, Switch, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const VOUCHER_TYPES = [
  "All",
  "Sales",
  "Purchase",
  "Payment",
  "Receipt",
  "Contra",
  "Journal",
  "Expense",
];

const TRANSACTIONS_HEAD = [
  { head: "Date", value: "date" },
  { head: "Voucher No", value: "voucherNo" },
  { head: "Type", value: "type" },
  { head: "Particulars", value: "particulars" },
  { head: "Dr", value: "dr" },
  { head: "Cr", value: "cr" },
  { head: "Balance", value: "balance" },
  { head: "Docs", value: "docs" },
];

const TRANSACTIONS_ROW = [
  {
    date: "10 Jul",
    voucherNo: "INV-30975",
    type: "Sales",
    particulars: "ABC Traders",
    dr: "₹42,500",
    cr: "-",
    balance: "₹82,000 Dr",
  },
  {
    date: "09 Jul",
    voucherNo: "REC-310",
    type: "Receipt",
    particulars: "UPI",
    dr: "-",
    cr: "₹36,000",
    balance: "₹39,500 Dr",
  },
];

const TransactionsFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedTransactionsTableRows,
    handleSort: handleTransactionsTableSort,
  } = useTableSort(TRANSACTIONS_ROW);

  return (
    <div>
      <div className="flex flex-wrap gap-5">
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
              This Month
            </Option>
            <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
              Last Month
            </Option>
            <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
              FY
            </Option>
            <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
              Custom
            </Option>
          </Select>
        </div>
        <div className="w-[150px]">
          <Select
            className="bg-white-600"
            label="Voucher Type"
            containerProps={{
              style: {
                minWidth: "150px",
              },
            }}
            // value={value}
            // onChange={(val) => setValue(val)}
            color="green"
          >
            {VOUCHER_TYPES.map((type) => (
              <Option
                key={type}
                className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
              >
                {type}
              </Option>
            ))}
          </Select>
        </div>
        <div className="flex justify-between items-center gap-2 mr-4">
          <Typography variant="small">Dr</Typography>
          <Switch
            color="green"
            // label="Optional/Regular"
            //   checked={isFlatTax}
            //   onChange={(e) => {
            //     const newValue = e.target.checked;
            //     setIsFlatTax(newValue);
            //   }}
            ripple={true}
          />
          <Typography variant="small">Cr</Typography>
        </div>
      </div>
      <div className="mt-4 h-[500px]">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr>
              {TRANSACTIONS_HEAD.map(({ head, value }, idx) => (
                <th
                  key={idx}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                >
                  <div className="flex">
                    <Typography
                      variant="small"
                      className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                      onClick={() => handleTransactionsTableSort(value)}
                    >
                      {head}
                      {idx < TRANSACTIONS_HEAD.length - 1 && (
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
                  {TRANSACTIONS_HEAD.map((data, idx) => (
                    <td
                      key={`${index}_${idx}`}
                      className={`py-4 ${
                        index === 2 ? "border-none" : "border-b border-gray-300"
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
              {sortedTransactionsTableRows.map(
                (
                  { date, voucherNo, type, particulars, dr, cr, balance },
                  idx
                ) => {
                  const classes = `p-4 px-0 ${
                    idx === sortedTransactionsTableRows.length - 1
                      ? "border-b-none pb-0"
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={idx} className="cursor-pointer">
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal pl-3"
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
                          {type || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal pl-3"
                        >
                          {particulars || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal pl-3"
                        >
                          {dr || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal pl-3"
                        >
                          {cr || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal pl-3"
                        >
                          {balance || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal pl-3"
                        >
                          <img
                            src="/media/common/docs.svg"
                            alt="docs"
                            className="w-5 h-5"
                          />
                        </Typography>
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
    </div>
  );
};

export default TransactionsFilterTable;
