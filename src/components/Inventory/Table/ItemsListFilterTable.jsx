import React, { useState } from "react";

import { Button, Option, Select, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";
import useDebounce from "@/hooks/useDebouncy";

const ITEM_TABLE_HEAD = [
  { head: "Item", value: "item" },
  { head: "SKU", value: "sku" },
  { head: "On Hand", value: "onHand" },
  { head: "Available", value: "available" },
  { head: "Committed", value: "committed" },
  { head: "Valuation", value: "valuation" },
  { head: "Warehouse Availability" },
  { head: "Actions" },
];

const ITEM_TABLE_BODY = [
  {
    item: "A101 - 2mm Sheet",
    sku: "A101",
    onHand: "150 pcs",
    available: "120 pcs",
    committed: "30 pcs",
    valuation: "1,05,000",
    availability: "View",
    actions: "View Transfer Adjust",
  },
  {
    item: "B203 - MS Pipe 1''",
    sku: "B203",
    onHand: "80 pcs",
    available: "45 pcs",
    committed: "35 pcs",
    valuation: "72,400",
    availability: "View",
    actions: "View Transfer Adjust",
  },
];

const ItemsListFilterTable = ({
  isLoading,
  setSelectedWarehouse,
  toggleWarehouseDrawer,
}) => {
  const { sortedData: sortedItemTableRows, handleSort: handleItemTableSort } =
    useTableSort(ITEM_TABLE_BODY);

  // const [itemsListSearchText, setItemsListSearchText] = useState("");
  // const [itemsList, setItemsList] = useState(ITEM_TABLE_BODY);

  // const debouncedItemsListSearchText = useDebounce(itemsListSearchText, 500);

  // useEffect(() => {
  //     handleFilterItemsList(debouncedItemsListSearchText);
  //   }, [debouncedItemsListSearchText]);

  // const handleFilterItemsList = (
  //   searchText = debouncedItemsListSearchText
  // ) => {
  //   const filteredList = ITEM_TABLE_BODY.filter((item) =>
  //     item.item.includes(searchText)
  //   );
  //   setItemsList(filteredList);
  // };

  return (
    <>
      <div className="flex items-center gap-2 flex-wrap justify-between">
        <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[400px]">
          <span className="pl-3">
            <img src="/media/custom/search-sm.svg" />
          </span>
          <input
            id="header-search-input"
            name="header-search-input"
            type="text"
            placeholder="Search for item-name / SKU"
            className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
            // value={itemsListSearchText}
            // onChange={(e) => setItemsListSearchText(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Warehouses"
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
                W01 - Sitapura
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                W02 - VKI
              </Option>
            </Select>
          </div>
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Category"
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
                Sheets
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                Pipes
              </Option>
            </Select>
          </div>
          <div className="w-[150px]">
            <Select
              className="bg-white-600"
              label="Group"
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
                Raw Material
              </Option>
              <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                Finished Goods
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
            Low Stock
          </Button>
          <Button
            variant="outlined"
            className="border-[#b0bec5] normal-case h-[2.5rem] focus:ring-0 text-[#455a64] text-[14px] font-normal hover:border-[#108f6f] hover:text-[#108f6f] flex items-center px-[12px] leading-[20px] !bg-transparent hover:!bg-[#eaf8f4] gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448ZM480-480Z" />
            </svg>
            Out of Stock
          </Button>
        </div>
      </div>
      <table className="mt-4 min-w-full table-auto text-left">
        <thead>
          <tr>
            {ITEM_TABLE_HEAD.map(({ head, value }, index) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
              >
                <div className="flex pl-3">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold cursor-pointer"
                    onClick={() => handleItemTableSort(value)}
                  >
                    {head}
                    {index !== ITEM_TABLE_HEAD.length - 1 && (
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
                {ITEM_TABLE_HEAD.map((_, idx) => (
                  <td key={idx} className="py-4 border-b border-gray-300 pl-4">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {sortedItemTableRows.length > 0 ? (
              sortedItemTableRows.map((row, index) => {
                const {
                  item,
                  sku,
                  onHand,
                  available,
                  committed,
                  valuation,
                  availability,
                  actions,
                } = row;
                const classes = "p-4 px-0 border-b border-blue-gray-50";

                return (
                  <tr key={item}>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {item}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {sku}
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
                        {committed}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {valuation}
                      </Typography>
                    </td>
                    <td
                      className={`${classes}`}
                      onClick={() => {
                        setSelectedWarehouse(row);
                        toggleWarehouseDrawer();
                      }}
                    >
                      <div className="flex pl-3 gap-2 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                          className="h-5 w-5"
                          fill="green"
                        >
                          <path d="M480-754 160-626v426h80v-240q0-33 23.5-56.5T320-520h320q33 0 56.5 23.5T720-440v240h80v-426L480-754ZM80-200v-426q0-25 13.5-45t36.5-29l320-128q14-6 30-6t30 6l320 128q23 9 36.5 29t13.5 45v426q0 33-23.5 56.5T800-120H640v-320H320v320H160q-33 0-56.5-23.5T80-200Zm280 80v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80ZM320-520h320-320Z" />
                        </svg>
                        <Typography
                          variant="small"
                          className="font-norma"
                          color="green"
                        >
                          {availability}
                        </Typography>
                      </div>
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
    </>
  );
};

export default ItemsListFilterTable;
