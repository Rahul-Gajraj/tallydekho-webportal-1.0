import React, { useState } from "react";

import {
  Card,
  CardBody,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import ItemsWarehouseAvailability from "./Drawers/ItemsWarehouseAvailability";

import ItemsListFilterTable from "./Table/ItemsListFilterTable";
import WarehouseFilterTable from "./Table/WarehouseFilterTable";
import StockMovementFilterTable from "./Table/StockMovementFilterTable";
import StockAdjustmentsFilterTable from "./Table/StockAdjustmentsFilterTable";

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
        <Typography className="mt-1 font-bold text-2xl">
          {price || "₹0"}
        </Typography>
      </CardBody>
    </Card>
  );
};

const InventoryInfo = ({ isLoading }) => {
  const [isWarehouseDrawerOpen, setIsWarehouseDrawerOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState({});

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

  const toggleWarehouseDrawer = () => {
    setIsWarehouseDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <Card className="shadow-sm border border-gray-200 !rounded-lg flex my-5">
        <CardBody>
          <Tabs value="items_list">
            <TabsHeader>
              <Tab value="items_list">
                <div className="flex items-center gap-2">
                  <img
                    src="/media/icons/items_list.svg"
                    alt="item_list"
                    className="w-5 h-5"
                  />
                  Items List
                </div>
              </Tab>
              <Tab value="warehouses">
                <div className="flex items-center gap-2">
                  <img
                    src="/media/icons/warehouse.svg"
                    alt="warehouse"
                    className="w-5 h-5"
                  />
                  Warehouses
                </div>
              </Tab>
              <Tab value="stock_movement">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#6f7c97"
                    className="w-5"
                  >
                    <path d="M367-320H120q-17 0-28.5-11.5T80-360q0-17 11.5-28.5T120-400h247l-75-75q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l143 143q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L348-188q-12 12-28 11.5T292-189q-11-12-11.5-28t11.5-28l75-75Zm226-240 75 75q11 11 11 27.5T668-429q-12 12-28.5 12T611-429L468-572q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l144-144q12-12 28-11.5t28 12.5q11 12 11.5 28T668-715l-75 75h247q17 0 28.5 11.5T880-600q0 17-11.5 28.5T840-560H593Z" />
                  </svg>
                  Stock Movement
                </div>
              </Tab>
              <Tab value="stock_adjustments">
                <div className="flex items-center gap-2">
                  <img
                    src="/media/icons/stock_adjustments.svg"
                    alt="stock_adjustments"
                    className="w-5 h-5"
                  />
                  Stock Adjustments
                </div>
              </Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="items_list">
                <ItemsListFilterTable
                  isLoading={isLoading}
                  setSelectedWarehouse={setSelectedWarehouse}
                  toggleWarehouseDrawer={toggleWarehouseDrawer}
                />
              </TabPanel>
              <TabPanel value="warehouses">
                <div className="grid grid-cols-3 gap-3">
                  {isLoading
                    ? [...Array(3)].map((_, idx) => (
                        <div key={idx} className="col-span-1">
                          <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[94px]">
                            <CardBody>
                              <div></div>
                            </CardBody>
                          </Card>
                        </div>
                      ))
                    : warehouseKpiData.map((kpiData, idx) => (
                        <div key={idx} className="col-span-1">
                          <KpiCard {...kpiData} />
                        </div>
                      ))}
                </div>
                <WarehouseFilterTable isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="stock_movement">
                <StockMovementFilterTable isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="stock_adjustments">
                <StockAdjustmentsFilterTable isLoading={isLoading} />
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
