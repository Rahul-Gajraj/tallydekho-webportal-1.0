import React, { useMemo, useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import LedgerDetail from "./LedgerDetail";
import Pagination from "../common/Pagination";

import useTableSort from "@/hooks/useTableSort";
import useDebounce from "@/hooks/useDebouncy";

const LEDGERS_HEAD = [
  {
    head: "Ledger Name",
    value: "ledgerName",
    icon: <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />,
  },
  {
    head: "Group",
    value: "group",
    icon: <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />,
  },
  { head: "Ledger Type", value: "ledgerType" },
  {
    head: "Closing Balance",
    value: "closingBalance",
    icon: <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />,
  },
  {
    head: "Opening Balance",
    value: "openingBalance",
    icon: <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />,
  },
  { head: "Contact", value: "contact" },
  { head: "GSTIN", value: "gstin" },
  { head: "CITY", value: "city" },
];

const LEDGERS_ROW = [
  {
    ledgerName: "ABC Traders",
    group: "Sundry Debtors",
    ledgerType: "Party Ledger",
    closingBalance: "₹82,000 Dr",
    openingBalance: "₹12,000 Dr",
    contact: "+91 9876543210",
    gstin: "08ABCDE123F1Z5",
    city: "Jaipur",
  },
];

const LedgersList = ({ isLoading }) => {
  const [isDetailDrawerOpen, setIsDetailDrawerOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [group, setGroup] = useState("All");

  const debouncedSearchText = useDebounce(searchText, 500);

  const ledgersData = useMemo(() => {
    return LEDGERS_ROW.filter((data) =>
      group == "All" ? data : data.group === group
    ).filter(
      (data) =>
        data.ledgerName.includes(debouncedSearchText) ||
        data.gstin.includes(debouncedSearchText)
    );
  }, [group, debouncedSearchText]);

  const {
    sortedData: sortedLedgerTableRows,
    handleSort: handleLedgerTableSort,
  } = useTableSort(ledgersData);

  return (
    <>
      <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
        <CardHeader
          floated={false}
          shadow={false}
          className="p-0 flex gap-6 flex-wrap items-center justify-between"
        >
          <Typography variant="h6">Ledgers List</Typography>
        </CardHeader>
        <CardBody className="!p-4 !pt-2">
          <div className="flex items-center gap-2 flex-wrap gap-3">
            <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[400px]">
              <span className="pl-3">
                <img src="/media/custom/search-sm.svg" />
              </span>
              <input
                id="header-search-input"
                name="header-search-input"
                type="text"
                placeholder="Search for Name / GSTIN"
                className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
              <div className="w-[200px]">
                <Select
                  // className="bg-white-600"
                  label="Group"
                  containerProps={{
                    style: {
                      minWidth: "200px",
                    },
                  }}
                  menuProps={{
                    className: "h-[200px]",
                  }}
                  value={group}
                  onChange={(val) => setGroup(val)}
                  selected={(element) => element?.props?.children}
                  color="green"
                >
                  <Option
                    value="All"
                    className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  >
                    All
                  </Option>
                  <Option
                    value="Sundry Debtors"
                    className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  >
                    Sundry Debtors
                  </Option>
                  <Option
                    value="Sunndry Creditors"
                    className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  >
                    Sunndry Creditors
                  </Option>
                  <Option
                    value="Banks"
                    className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  >
                    Banks
                  </Option>
                  <Option
                    value="Dutoes & Taxes"
                    className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  >
                    Dutoes & Taxes
                  </Option>
                  <Option
                    value="Current Assets"
                    className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  >
                    Current Assets
                  </Option>
                  <Option
                    value="Current Liabilities"
                    className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  >
                    Current Liabilities
                  </Option>
                  <Option
                    value="Direct Expense"
                    className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  >
                    Direct Expense
                  </Option>
                  <Option
                    value="Indirect Expense"
                    className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  >
                    Indirect Expense
                  </Option>
                  <Option
                    value="Direct Income"
                    className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  >
                    Direct Income
                  </Option>
                  <Option
                    value="Indirect Income"
                    className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  >
                    Indirect Income
                  </Option>
                </Select>
              </div>
            {/* <div className="flex flex-wrap gap-3">
            </div> */}
          </div>
          <div className="h-[280px]">
            <table className="min-w-full table-auto text-left mt-5">
              <thead>
                <tr>
                  {LEDGERS_HEAD.map(({ head, value, icon }, idx) => (
                    <th
                      key={idx}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                    >
                      <div className="flex">
                        <Typography
                          variant="small"
                          className={`flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 ${
                            icon ? "cursor-pointer" : ""
                          }`}
                          onClick={() => {
                            if (icon) {
                              handleLedgerTableSort(value);
                            }
                          }}
                        >
                          {head}
                          {icon ?? <></>}
                          {/* <ChevronUpDownIcon
                          strokeWidth={2}
                          className="h-4 w-4"
                        /> */}
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
                      {LEDGERS_HEAD.map((data, idx) => (
                        <td
                          key={`${index}_${idx}`}
                          className={`py-4 $border-b border-gray-300 pl-3`}
                        >
                          <div className="h-4 bg-gray-300 rounded w-24"></div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  {sortedLedgerTableRows.map(
                    (
                      {
                        ledgerName,
                        group,
                        ledgerType,
                        closingBalance,
                        openingBalance,
                        contact,
                        gstin,
                        city,
                      },
                      idx
                    ) => {
                      const classes = `p-4 px-0 border-b border-blue-gray-50`;

                      return (
                        <tr
                          key={idx}
                          className="cursor-pointer"
                          onClick={() => setIsDetailDrawerOpen(true)}
                        >
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {ledgerName || "-"}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {group || "-"}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {ledgerType || "-"}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {closingBalance || "-"}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {openingBalance || "-"}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {contact || "-"}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {gstin || "-"}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {city || "-"}
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
        </CardBody>
      </Card>
      <LedgerDetail
        open={isDetailDrawerOpen}
        isLoading={isLoading}
        closeDrawer={() => setIsDetailDrawerOpen(false)}
      />
    </>
  );
};

export default LedgersList;
