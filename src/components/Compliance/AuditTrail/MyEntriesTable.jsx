import React, { useState } from "react";

import { Option, Select, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import Pagination from "@/components/common/Pagination";
import useTableSort from "@/hooks/useTableSort";

const COLUMNS = [
  { head: "Date", value: "date" },
  { head: "Voucher No", value: "voucherNo" },
  { head: "Voucher Type", value: "voucherType" },
  { head: "Ledger Direction", value: "ledgerDirection" },
  { head: "Amount", value: "amount" },
];

const VOUCHER_TYPE = ["All", "Sales", "Purchase", "Expense"];

const MyEntriesTable = ({ isLoading }) => {
  const [entryData, setEntryData] = useState([
    {
      date: "07 May",
      voucherNo: "PV-2098",
      voucherType: "Payment",
      ledgerDirection: "HDFC -> Rent",
      amount: "Cr ₹75,000",
    },
  ]);

  const {
    sortedData: sortedEntryDataTableRows,
    handleSort: handleEntryDataTableSort,
  } = useTableSort(entryData);

  return (
    <>
      <div className="flex flex-wrap gap-3">
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
            {VOUCHER_TYPE.map((type) => (
              <Option
                key={type}
                className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
              >
                {type}
              </Option>
            ))}
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
              Pending
            </Option>
          </Select>
        </div>
      </div>
      <div className="mt-4">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr>
              {COLUMNS.map(({ head, value }) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                >
                  <div className="flex">
                    <Typography
                      variant="small"
                      className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                      onClick={() => handleEntryDataTableSort(value)}
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
                  {COLUMNS.map((data, idx) => (
                    <td
                      key={`${index}_${idx}`}
                      className={`py-4 ${
                        index === 4 ? "border-none" : "border-b border-gray-300"
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
              {sortedEntryDataTableRows.map(
                (
                  { date, voucherNo, voucherType, ledgerDirection, amount },
                  idx
                ) => {
                  const classes = `p-4 px-0 ${
                    idx === sortedEntryDataTableRows.length - 1
                      ? "border-b-none pb-0"
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={voucherNo}>
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
                          {voucherType || "-"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal pl-3"
                        >
                          {ledgerDirection || "-"}
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
                    </tr>
                  );
                }
              )}
            </tbody>
          )}
        </table>
        <Pagination />
      </div>
    </>
  );
};

export default MyEntriesTable;
