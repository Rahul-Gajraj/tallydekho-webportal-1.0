import React, { useEffect, useState } from "react";

import { Button, Option, Select, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";
import useDebounce from "@/hooks/useDebouncy";

const WAREHOUSE_TABLE_HEAD = [
  { head: "Warehouse", value: "warehouse" },
  { head: "Code", value: "code" },
  { head: "On Hand", value: "onHand" },
  { head: "Available", value: "available" },
  { head: "In Transit", value: "inTransit" },
  { head: "Low Stock Items", value: "lowStockItems" },
  { head: "Negative Stock", value: "negativeStock" },
  { head: "Actions", value: "actions" },
];

const WAREHOUSE_TABLE_BODY = [
  {
    warehouse: "W01 - Sitapura, Jaipur",
    code: "W01",
    onHand: "4,250 pcs",
    available: "3,980 pcs",
    inTransit: "120 pcs",
    lowStockItems: "5",
    negativeStock: "No",
    actions: "View Transfer Adjust",
  },
  {
    warehouse: "W02 - VKI, Jaipur",
    code: "W02",
    onHand: "3,120 pcs",
    available: "2,940 pcs",
    inTransit: "80 pcs",
    lowStockItems: "6",
    negativeStock: "No",
    actions: "View Transfer Adjust",
  },
  {
    warehouse: "W03 - Bhiwandi",
    code: "W03",
    onHand: "10 pcs",
    available: "0 pcs",
    inTransit: "0 pcs",
    lowStockItems: "3",
    negativeStock: "Yes",
    actions: "View Transfer Adjust",
  },
];

const WarehouseFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedWarehouseTableRows,
    handleSort: handleWarehouseTableSort,
  } = useTableSort(WAREHOUSE_TABLE_BODY);

  //   const debouncedWarehousesSearchText = useDebounce(warehouseSearchText, 500);

  //   const [warehouseSearchText, setWarehouseSearchText] = useState("");
  //   const [warehouses, setWarehouses] = useState(WAREHOUSE_TABLE_BODY);

  //   useEffect(() => {
  //     handleFilterWarehouses(debouncedWarehousesSearchText);
  //   }, [debouncedWarehousesSearchText]);

  //   const handleFilterWarehouses = (
  //     searchText = debouncedWarehousesSearchText
  //   ) => {
  //     const filteredWarehouses = WAREHOUSE_TABLE_BODY.filter(
  //       (item) =>
  //         item.warehouse.includes(searchText) || item.code.includes(searchText)
  //     );
  //     setWarehouses(filteredWarehouses);
  //   };

  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap justify-between mt-5">
        <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[400px]">
          <span className="pl-3">
            <img src="/media/custom/search-sm.svg" />
          </span>
          <input
            id="header-search-input"
            name="header-search-input"
            type="text"
            placeholder="Search by warehouse name / code"
            className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
            // value={warehouseSearchText}
            // onChange={(e) => setWarehouseSearchText(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Region"
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
                W01
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                W02
              </Option>
            </Select>
          </div>
          <Button
            variant="outlined"
            className="border-[#b0bec5] normal-case h-[2.5rem] focus:ring-0 text-[#455a64] text-[14px] font-normal hover:border-[#108f6f] hover:text-[#108f6f] flex items-center px-[12px] leading-[20px] !bg-transparent hover:!bg-[#eaf8f4]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M440-392v-328q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v328l116-116q11-11 28-11t28 11q11 11 11 28t-11 28L508-268q-12 12-28 12t-28-12L268-452q-11-11-11-28t11-28q11-11 28-11t28 11l116 116Z" />
            </svg>
            Low Stock Items
          </Button>
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
              <path d="M108-255q-12-12-11.5-28.5T108-311l211-214q23-23 57-23t57 23l103 104 208-206h-64q-17 0-28.5-11.5T640-667q0-17 11.5-28.5T680-707h160q17 0 28.5 11.5T880-667v160q0 17-11.5 28.5T840-467q-17 0-28.5-11.5T800-507v-64L593-364q-23 23-57 23t-57-23L376-467 164-255q-11 11-28 11t-28-11Z" />
            </svg>
            High Utilisation
          </Button>
        </div>
      </div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {WAREHOUSE_TABLE_HEAD.map(({ head, value }, index) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex pl-3">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold cursor-pointer"
                    onClick={() => handleWarehouseTableSort(value)}
                  >
                    {head}
                    {index !== WAREHOUSE_TABLE_HEAD.length - 1 && (
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
            {[...Array(2)].map((_, index) => (
              <tr key={index} className="animate-pulse">
                {WAREHOUSE_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="py-4 border-b border-gray-300 pl-4">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedWarehouseTableRows.length > 0 ? (
              sortedWarehouseTableRows.map((row, index) => {
                const {
                  warehouse,
                  code,
                  onHand,
                  available,
                  inTransit,
                  lowStockItems,
                  negativeStock,
                  actions,
                } = row;
                const classes = "p-4 px-0 border-b border-blue-gray-50";

                return (
                  <tr key={warehouse}>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {warehouse}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {code}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {onHand}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {available}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {inTransit}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {lowStockItems}
                      </Typography>
                    </td>
                    <td className={`${classes}`} onClick={() => {}}>
                      <Typography variant="small" className="font-normal pl-3">
                        {negativeStock}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex gap-3 pl-3">
                        <Typography
                          variant="small"
                          className="font-normal cursor-pointer"
                          color="green"
                        >
                          View
                        </Typography>
                        <Typography
                          variant="small"
                          className="font-normal cursor-pointer"
                          color="green"
                        >
                          Transfer
                        </Typography>
                        <Typography
                          variant="small"
                          className="font-normal cursor-pointer"
                          color="green"
                        >
                          Adjust
                        </Typography>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <EmptyData colSpan={8} />
            )}
          </tbody>
        )}
      </table>
      <Pagination />
    </div>
  );
};

export default WarehouseFilterTable;
