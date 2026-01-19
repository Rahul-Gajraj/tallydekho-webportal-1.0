import React, { createElement, useEffect, useState } from "react";

import {
  Button,
  Card,
  CardBody,
  Option,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import ItemsWarehouseAvailability from "./Drawers/ItemsWarehouseAvailability";
import useDebounce from "@/hooks/useDebouncy";

const KpiCard = ({ title, subtitle, price, icon }) => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardBody className="p-4">
        <div className="flex justify-between">
          <div>
            <Typography className="font-medium">{title}</Typography>
            <Typography className="mt-1 !text-xs">{subtitle}</Typography>
          </div>
          <div className="py-4 px-2 flex items-center rounded bg-[#eaf8f4] h-[20px]">
            {icon}
          </div>
        </div>
        <Typography className="mt-1 font-bold text-2xl">{price}</Typography>
      </CardBody>
    </Card>
  );
};

const ITEM_TABLE_HEAD = [
  "Item",
  "SKU",
  "On Hand",
  "Available",
  "Committed",
  "Valuation",
  "Warehouse Availability",
  "Actions",
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

const WAREHOUSE_TABLE_HEAD = [
  "Warehouse",
  "Code",
  "On Hand",
  "Available",
  "In Transit",
  "Low Stock Items",
  "Negative Stock",
  "Actions",
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
    onHand: "-10",
    available: "0 pcs",
    inTransit: "0 pcs",
    lowStockItems: "3",
    negativeStock: "Yes",
    actions: "View Transfer Adjust",
  },
];

const STOCK_MOVEMENT_TABLE_HEAD = [
  "Date",
  "Voucher No.",
  "Type",
  "Warehouse",
  "Item",
  "QTY In",
  "QTY Out",
  "Balance",
  "Reference",
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

const STOCK_ADJUSTMENT_TABLE_HEAD = [
  "Date",
  "Adjustment No.",
  "Warehouse",
  "Item",
  "Type",
  "QTY",
  "Reason",
  "Entered By",
  "Status",
  "Actions",
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

const InventoryInfo = () => {
  const [isWarehouseDrawerOpen, setIsWarehouseDrawerOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState({});

  const [itemsListSearchText, setItemsListSearchText] = useState("");
  const [itemsList, setItemsList] = useState(ITEM_TABLE_BODY);
  const [warehouseSearchText, setWarehouseSearchText] = useState("");
  const [warehouses, setWarehouses] = useState(WAREHOUSE_TABLE_BODY);
  const [movementSearchText, setMovementSearchText] = useState("");
  const [stockMovements, setStockMovements] = useState(
    STOCK_MOVEMENT_TABLE_BODY
  );
  const [adjustmentsSearchText, setAdjustmentsSearchText] = useState("");
  const [stockAdjustments, setStockAdjustments] = useState(
    STOCK_ADJUSTMENT_TABLE_BODY
  );

  const [stockAdjustmentStatus, setStockAdjustmentStatus] = useState("");

  const [warehouseKpiData, setWarehouseKpiData] = useState([
    {
      title: "Total Stock Value",
      subtitle: "Across 3 warehouses",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 -960 960 960"
          fill="#108f6f"
        >
          <path d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm240 280h160q17 0 28.5-11.5T600-440q0-17-11.5-28.5T560-480H400q-17 0-28.5 11.5T360-440q0 17 11.5 28.5T400-400Zm80 20Z" />
        </svg>
      ),
      price: "₹18,40,000",
    },
    {
      title: "Warehouses With Low Stock",
      subtitle: "Have items below RO level",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="w-5 h-5"
          fill="#108f6f"
        >
          <path d="M280-400v240q0 17-11.5 28.5T240-120q-17 0-28.5-11.5T200-160v-600q0-17 11.5-28.5T240-800h287q14 0 25 9t14 23l10 48h184q17 0 28.5 11.5T800-680v320q0 17-11.5 28.5T760-320H553q-14 0-25-9t-14-23l-10-48H280Zm306 0h134v-240H543q-14 0-25-9t-14-23l-10-48H280v240h257q14 0 25 9t14 23l10 48Zm-86-160Z" />
        </svg>
      ),
      price: "2",
    },
    {
      title: "Negative Stock",
      subtitle: "Warehouse with negative balance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#108f6f"
          className="h-5 w-5"
          viewBox="0 -960 960 960"
        >
          <path d="M109-120q-11 0-20-5.5T75-140q-5-9-5.5-19.5T75-180l370-640q6-10 15.5-15t19.5-5q10 0 19.5 5t15.5 15l370 640q6 10 5.5 20.5T885-140q-5 9-14 14.5t-20 5.5H109Zm69-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm0-120q17 0 28.5-11.5T520-400v-120q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520v120q0 17 11.5 28.5T480-360Zm0-100Z" />
        </svg>
      ),
      price: "1",
    },
  ]);

  const debouncedItemsListSearchText = useDebounce(itemsListSearchText, 500);
  const debouncedWarehousesSearchText = useDebounce(warehouseSearchText, 500);
  const debouncedMovementSearchText = useDebounce(movementSearchText, 500);
  const debouncedAdjustmentSearchText = useDebounce(adjustmentsSearchText, 500);

  useEffect(() => {
    handleFilterItemsList(debouncedItemsListSearchText);
  }, [debouncedItemsListSearchText]);

  useEffect(() => {
    handleFilterWarehouses(debouncedWarehousesSearchText);
  }, [debouncedWarehousesSearchText]);

  useEffect(() => {
    handleFilterStockMovement(debouncedMovementSearchText);
  }, [debouncedMovementSearchText]);

  useEffect(() => {
    handleFilterStockAdjustment(
      debouncedAdjustmentSearchText,
      stockAdjustmentStatus
    );
  }, [debouncedAdjustmentSearchText, stockAdjustmentStatus]);

  const handleFilterItemsList = (searchText = debouncedItemsListSearchText) => {
    const filteredList = ITEM_TABLE_BODY.filter((item) =>
      item.item.includes(searchText)
    );
    setItemsList(filteredList);
  };

  const handleFilterWarehouses = (
    searchText = debouncedWarehousesSearchText
  ) => {
    const filteredWarehouses = WAREHOUSE_TABLE_BODY.filter(
      (item) =>
        item.warehouse.includes(searchText) || item.code.includes(searchText)
    );
    setWarehouses(filteredWarehouses);
  };

  const handleFilterStockMovement = (
    searchText = debouncedMovementSearchText
  ) => {
    const filteredStockMovement = STOCK_MOVEMENT_TABLE_BODY.filter((item) =>
      item.voucherNo.includes(searchText)
    );
    setStockMovements(filteredStockMovement);
  };

  const handleFilterStockAdjustment = (
    searchText = debouncedAdjustmentSearchText,
    selectedStatus = stockAdjustmentStatus
  ) => {
    const filteredStockAdjustments = STOCK_ADJUSTMENT_TABLE_BODY.filter(
      (item) =>
        item.adjustmentNo.includes(searchText) &&
        item.status.includes(selectedStatus)
    );
    setStockAdjustments(filteredStockAdjustments);
  };

  const toggleWarehouseDrawer = () => {
    setIsWarehouseDrawerOpen((prev) => !prev);
  };

  const allStockAdjustmentsStatus = [
    { status: "", item: "All" },
    ...STOCK_ADJUSTMENT_TABLE_BODY,
  ];

  return (
    <>
      <Card className="shadow-sm border border-gray-200 !rounded-lg flex my-5">
        <CardBody>
          <Tabs value="items_list">
            <TabsHeader>
              <Tab value="items_list">
                <div className="flex items-center gap-2">
                  <img src="/media/custom/items_list.svg" className="h-5 w-5" />
                  Items List
                </div>
              </Tab>
              <Tab value="warehouses">
                <div className="flex items-center gap-2">
                  <img src="/media/custom/warehouses.svg" className="h-5 w-5" />
                  Warehouses
                </div>
              </Tab>
              <Tab value="stock_movement">
                <div className="flex items-center gap-2">
                  <img
                    src="/media/custom/stock_movement.svg"
                    className="h-5 w-5"
                  />
                  Stock Movement
                </div>
              </Tab>
              <Tab value="stock_adjustments">
                <div className="flex items-center gap-2">
                  <img
                    src="/media/custom/stock_adjustments.svg"
                    className="h-5 w-5"
                  />
                  Stock Adjustments
                </div>
              </Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="items_list">
                <div className="flex items-center gap-2 flex-wrap justify-between">
                  <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[400px]">
                    <span className="pl-3">
                      <img src="/media/custom/search-sm.svg" />
                    </span>
                    <input
                      id="header-search-input"
                      name="header-search-input"
                      type="text"
                      placeholder="Search for item-name / SKU / barcode"
                      className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
                      value={itemsListSearchText}
                      onChange={(e) => setItemsListSearchText(e.target.value)}
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
                      {ITEM_TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                        >
                          <Typography
                            variant="small"
                            className="font-normal leading-none pl-3"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {itemsList.map((row, index) => {
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
                      const isLast = index === itemsList.length - 1;
                      const classes = "p-4 px-0 border-b border-blue-gray-50";

                      return (
                        <tr key={item}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {item}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {sku}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {onHand}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {available}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {committed}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
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
                    })}
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel value="warehouses">
                <div className="grid grid-cols-3 gap-3">
                  {warehouseKpiData.map((kpiData, idx) => (
                    <div key={idx} className="col-span-1">
                      <KpiCard {...kpiData} />
                    </div>
                  ))}
                </div>
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
                      value={warehouseSearchText}
                      onChange={(e) => setWarehouseSearchText(e.target.value)}
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
                      {WAREHOUSE_TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                        >
                          <Typography
                            variant="small"
                            className="font-normal leading-none pl-3"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {warehouses.map((row, index) => {
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
                      const isLast = index === warehouses.length - 1;
                      const classes = "p-4 px-0 border-b border-blue-gray-50";

                      return (
                        <tr key={warehouse}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {warehouse}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {code}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {onHand}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {available}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {inTransit}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {lowStockItems}
                            </Typography>
                          </td>
                          <td className={`${classes}`} onClick={() => {}}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
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
                    })}
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel value="stock_movement">
                <div className="flex items-center gap-2 flex-wrap justify-between">
                  <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[400px]">
                    <span className="pl-3">
                      <img src="/media/custom/search-sm.svg" />
                    </span>
                    <input
                      id="header-search-input"
                      name="header-search-input"
                      type="text"
                      placeholder="Search by item / voucher number / narration"
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
                      {STOCK_MOVEMENT_TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                        >
                          <Typography
                            variant="small"
                            className="font-normal leading-none pl-3"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {stockMovements.map((row, index) => {
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
                      const isLast = index === stockMovements.length - 1;
                      const classes = "p-4 px-0 border-b border-blue-gray-50";

                      return (
                        <tr key={date}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {date}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {voucherNo}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {type}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {warehouse}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {item}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {qtyIn}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {qtyOut}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {balance}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {reference}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel value="stock_adjustments">
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
                      value={adjustmentsSearchText}
                      onChange={(e) => setAdjustmentsSearchText(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {/* {console.log({
                      stockAdjustmentStatus,
                      "typeof:": typeof stockAdjustmentStatus,
                    })} */}
                    <div className="w-[150px]">
                      <Select
                        className="bg-white-600"
                        label="Status"
                        containerProps={{
                          style: {
                            minWidth: "150px",
                          },
                        }}
                        value={
                          stockAdjustmentStatus == "All"
                            ? ""
                            : stockAdjustmentStatus
                        }
                        onChange={(val) => {
                          // console.log({ val, "typeof val": typeof val });
                          setStockAdjustmentStatus(val);
                        }}
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
                      {STOCK_ADJUSTMENT_TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                        >
                          <Typography
                            variant="small"
                            className="font-normal leading-none pl-3"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {stockAdjustments.map((row, index) => {
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
                      const isLast = index === stockAdjustments.length - 1;
                      const classes = "p-4 px-0 border-b border-blue-gray-50";

                      return (
                        <tr key={date}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {date}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {adjustmentNo}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {warehouse}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {item}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {type}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {qty}
                            </Typography>
                          </td>
                          <td className={`${classes}`} onClick={() => {}}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {reason}
                            </Typography>
                          </td>
                          <td className={`${classes}`} onClick={() => {}}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {enteredBy}
                            </Typography>
                          </td>
                          <td className={`${classes}`} onClick={() => {}}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
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
                    })}
                  </tbody>
                </table>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
      <ItemsWarehouseAvailability
        open={isWarehouseDrawerOpen}
        toggleDrawer={toggleWarehouseDrawer}
        data={selectedWarehouse}
      />
    </>
  );
};

export default InventoryInfo;
