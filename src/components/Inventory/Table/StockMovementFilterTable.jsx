import React, { useEffect, useMemo, useState } from "react";

import { Button, Option, Select, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";
import useDebounce from "@/hooks/useDebouncy";

const STOCK_MOVEMENT_TABLE_HEAD = [
  { head: "Date", value: "date" },
  { head: "Voucher No.", value: "voucherNo" },
  { head: "Type", value: "type" },
  { head: "Warehouse", value: "warehouse" },
  { head: "Item", value: "item" },
  { head: "QTY In", value: "qtyIn" },
  { head: "QTY Out", value: "qtyOut" },
  { head: "Balance", value: "balance" },
  { head: "Reference", value: "reference" },
];

const STOCK_MOVEMENT_TABLE_BODY = [
  {
    date: "03 Dec 2025",
    voucherNo: "SKT/IN/2451",
    type: "Purchase Inward",
    warehouse: "W01 - Sitapura",
    item: "A101 - 2mmm Sheet",
    qtyIn: "+50",
    qtyOut: "-",
    balance: "150",
    reference: "GRN #4512",
  },
  {
    date: "02 Dec 2025",
    voucherNo: "SKT/OUT/1430",
    type: "Sales Outword",
    warehouse: "W02 - VKI",
    item: 'B203 - MS Pipe 1"',
    qtyIn: "-",
    qtyOut: "-20",
    balance: "80",
    reference: "Invoice #INV-889",
  },
  {
    date: "01 Dec 2025",
    voucherNo: "TRF/2025/003",
    type: "Transfer",
    warehouse: "W01 - W03",
    item: "Z901 - 5mm Plate",
    qtyIn: "-",
    qtyOut: "-10",
    balance: "-10",
    reference: "Inter-branch transfer",
  },
];

const StockMovementFilterTable = ({ isLoading }) => {
  const [movementSearchText, setMovementSearchText] = useState("");

  const debouncedMovementSearchText = useDebounce(movementSearchText, 500);

  const stockMovementListData = useMemo(() => {
    return STOCK_MOVEMENT_TABLE_BODY.filter(
      (data) =>
        data.item.includes(debouncedMovementSearchText) ||
        data.voucherNo.includes(debouncedMovementSearchText)
    );
  }, [debouncedMovementSearchText]);

  const {
    sortedData: sortedStockMovementTableRows,
    handleSort: handleStockMovementTableSort,
  } = useTableSort(stockMovementListData);

  //   const [stockMovements, setStockMovements] = useState(
  //     STOCK_MOVEMENT_TABLE_BODY
  //   );

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
            placeholder="Search by item / voucher number"
            className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
            value={movementSearchText}
            onChange={(e) => setMovementSearchText(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Warehouse"
              containerProps={{
                style: {
                  minWidth: "150px",
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
                Sitapura
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                Jhotwara
              </Option>
            </Select>
          </div>
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Movement Type"
              containerProps={{
                style: {
                  minWidth: "150px",
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
                W01
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                W02
              </Option>
            </Select>
          </div>
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Date Range"
              containerProps={{
                style: {
                  minWidth: "150px",
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
                Last 30 Days
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                Last Month
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                Last Year
              </Option>
            </Select>
          </div>
        </div>
      </div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {STOCK_MOVEMENT_TABLE_HEAD.map(({ head, value }, index) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex pl-3">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold cursor-pointer"
                    onClick={() => handleStockMovementTableSort(value)}
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
                {STOCK_MOVEMENT_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="py-4 border-b border-gray-300 pl-4">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedStockMovementTableRows.length > 0 ? (
              sortedStockMovementTableRows.map((row, index) => {
                const {
                  date,
                  voucherNo,
                  type,
                  warehouse,
                  item,
                  qtyIn,
                  qtyOut,
                  balance,
                  reference,
                } = row;
                const classes = "p-4 px-0 border-b border-blue-gray-50";

                return (
                  <tr key={date}>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {voucherNo}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {type}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {warehouse}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {item}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {qtyIn}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {qtyOut}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {balance}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {reference}
                      </Typography>
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

export default StockMovementFilterTable;
