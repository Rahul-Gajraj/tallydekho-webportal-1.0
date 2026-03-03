import React, { useEffect, useState } from "react";

import { Button, Option, Select, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";
import useDebounce from "@/hooks/useDebouncy";

const STOCK_ADJUSTMENT_TABLE_HEAD = [
  { head: "Date", value: "date" },
  { head: "Adjustment No.", value: "adjustmentNo" },
  { head: "Warehouse", value: "warehouse" },
  { head: "Item", value: "item" },
  { head: "Type", value: "type" },
  { head: "QTY", value: "qty" },
  { head: "Reason", value: "reason" },
  { head: "Entered By", value: "enteredBy" },
  { head: "Status", value: "status" },
  { head: "Actions", value: "actions" },
];

const STOCK_ADJUSTMENT_TABLE_BODY = [
  {
    date: "03 Dec 2025",
    adjustmentNo: "ADJ/2025/078",
    warehouse: "W01 - Sitapura",
    item: "A101 - 2mmm Sheet",
    type: "Increase",
    qty: "+5",
    reason: "Physical count difference",
    enteredBy: "Rahul Sharma",
    status: "Approved",
    actions: ["View"],
  },
  {
    date: "02 Dec 2025",
    adjustmentNo: "ADJ/2025/075",
    warehouse: "W03 - Bhiwandi",
    item: "Z901 - 5mm Plate",
    type: "Decrease",
    qty: "-10",
    reason: "Damage in transit",
    enteredBy: "Anita Vera",
    status: "Pending",
    actions: ["Approve", "Reject"],
  },
];

const StockAdjustmentsFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedStockAdjustmentsTableRows,
    handleSort: handleStockAdjustmentsTableSort,
  } = useTableSort(STOCK_ADJUSTMENT_TABLE_BODY);

//   const [adjustmentsSearchText, setAdjustmentsSearchText] = useState("");
//   const [stockAdjustments, setStockAdjustments] = useState(
//     STOCK_ADJUSTMENT_TABLE_BODY
//   );

//   const [stockAdjustmentStatus, setStockAdjustmentStatus] = useState("");

  //   const debouncedAdjustmentSearchText = useDebounce(adjustmentsSearchText, 500);

  //   useEffect(() => {
  //     handleFilterStockAdjustment(
  //       debouncedAdjustmentSearchText,
  //       stockAdjustmentStatus
  //     );
  //   }, [debouncedAdjustmentSearchText, stockAdjustmentStatus]);

  //   const handleFilterStockAdjustment = (
  //     searchText = debouncedAdjustmentSearchText,
  //     selectedStatus = stockAdjustmentStatus
  //   ) => {
  //     const filteredStockAdjustments = STOCK_ADJUSTMENT_TABLE_BODY.filter(
  //       (item) =>
  //         item.adjustmentNo.includes(searchText) &&
  //         item.status.includes(selectedStatus)
  //     );
  //     setStockAdjustments(filteredStockAdjustments);
  //   };

  const allStockAdjustmentsStatus = [
    { status: "", item: "All" },
    ...STOCK_ADJUSTMENT_TABLE_BODY,
  ];

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
            placeholder="Search by item / adjustment no / created by"
            className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
            // value={adjustmentsSearchText}
            // onChange={(e) => setAdjustmentsSearchText(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Status"
              containerProps={{
                style: {
                  minWidth: "150px",
                },
              }}
              //   value={
              //     stockAdjustmentStatus == "All" ? "" : stockAdjustmentStatus
              //   }
              //   onChange={(val) => {
              //     setStockAdjustmentStatus(val);
              //   }}
              color="green"
            >
              {/* <Option
                          value="okay"
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          All
                        </Option> */}
              {allStockAdjustmentsStatus.map(({ status, item }) => (
                <Option
                  key={status}
                  // value={status == "All" ? "" : status}
                  value={status}
                  className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                >
                  {status.length == 0 ? "All" : status}
                </Option>
              ))}
              {/* <Option
                          value={"Approved"}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          Approved
                        </Option>
                        <Option
                          value={"Pending"}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          Pending
                        </Option> */}
            </Select>
          </div>
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Reason"
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
                Physical Count Difference
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                Damage In Transit
              </Option>
            </Select>
          </div>
          <Button
            variant="outlined"
            className="border-[#b0bec5] normal-case h-[2.5rem] focus:ring-0 text-[#455a64] text-[14px] font-normal hover:border-[#108f6f] hover:text-[#108f6f] flex items-center px-[12px] leading-[20px] !bg-transparent hover:!bg-[#eaf8f4] gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
            </svg>
            New Adjustment
          </Button>
        </div>
      </div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {STOCK_ADJUSTMENT_TABLE_HEAD.map(({ head, value }, index) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold pl-3 cursor-pointer"
                    onClick={() => handleStockAdjustmentsTableSort(value)}
                  >
                    {head}
                    {index !== STOCK_ADJUSTMENT_TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
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
                {STOCK_ADJUSTMENT_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="py-4 border-b border-gray-300 pl-4">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedStockAdjustmentsTableRows.length > 0 ? (
              sortedStockAdjustmentsTableRows.map((row, index) => {
                const {
                  date,
                  adjustmentNo,
                  warehouse,
                  item,
                  type,
                  qty,
                  reason,
                  enteredBy,
                  status,
                  actions,
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
                        {adjustmentNo}
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
                        {type}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {qty}
                      </Typography>
                    </td>
                    <td className={`${classes}`} onClick={() => {}}>
                      <Typography variant="small" className="font-normal pl-3">
                        {reason}
                      </Typography>
                    </td>
                    <td className={`${classes}`} onClick={() => {}}>
                      <Typography variant="small" className="font-normal pl-3">
                        {enteredBy}
                      </Typography>
                    </td>
                    <td className={`${classes}`} onClick={() => {}}>
                      <Typography variant="small" className="font-normal pl-3">
                        {status}
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

export default StockAdjustmentsFilterTable;
