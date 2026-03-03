import React, { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";

import InventoryReport from "@/components/Inventory/InventoryReport";
import InventoryInfo from "@/components/Inventory/InventoryInfo";
import KPIStrip from "@/components/common/KPIStrip";

const KPI_DATA = [
  {
    title: "Total Stock Value",
    price: "₹ 18,40,000",
    img: (
      <img
        className="h-5"
        src="/media/kpi-strip/total_stock_value.svg"
        alt="total_stock_value"
      />
    ),
  },
  {
    title: "No. of Stock Items",
    price: "327",
    img: (
      <img
        className="h-5"
        src="/media/kpi-strip/no_of_stock_items.svg"
        alt="no_of_stock_items"
      />
    ),
  },
  {
    title: "Low Stock Items",
    price: "14",
    img: (
      <img
        className="h-5"
        src="/media/kpi-strip/low_stock_items.svg"
        alt="low_stock_items"
      />
    ),
  },
  {
    title: "Out of Stock",
    price: "7",
    img: (
      <img
        className="h-5"
        src="/media/icons/out_of_stock.svg"
        alt="out_of_stock"
      />
    ),
  },
  {
    title: "Total Warehouses",
    price: "3",
    img: (
      <img
        className="h-5"
        src="/media/icons/warehouse.svg"
        alt="total_warehouses"
      />
    ),
  },
];

const PERIODS = ["This Month", "Last 30 Days", "This Quarter"];
const WAREHOUSES = ["All", "W01", "W02"];

const Inventory = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(PERIODS[0]);
  const [selectedWarehouse, setSelectedWarehouse] = useState(WAREHOUSES[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [kpiData, setKpiData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setKpiData(KPI_DATA);
    }, 1500);
  }, []);

  return (
    <div className="mx-5 overflow-y-scroll">
      <Card className="shadow-sm border border-gray-200 !rounded-lg p-4 mt-8">
        <div className="flex md:items-center gap-x-5 flex-col md:flex-row justify-between">
          <Typography className="font-bold text-xl">Inventory</Typography>
          <div className="flex gap-3">
            <Select
              className="bg-white-600"
              label="Period"
              value={selectedPeriod}
              onChange={(val) => setSelectedPeriod(val)}
              containerProps={{
                style: {
                  minWidth: "200px",
                },
              }}
              color="green"
            >
              {PERIODS.map((period) => (
                <Option
                  className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  key={period}
                  value={period}
                >
                  {period}
                </Option>
              ))}
            </Select>
            <Select
              className="bg-white-600"
              label="Warehouse"
              value={selectedWarehouse}
              onChange={(val) => setSelectedWarehouse(val)}
              containerProps={{
                style: {
                  minWidth: "200px",
                },
              }}
              color="green"
            >
              {WAREHOUSES.map((warehouse) => (
                <Option
                  className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  key={warehouse}
                  value={warehouse}
                >
                  {warehouse}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </Card>
      <section className="mx-auto">
        <div className="mt-5 grid xl:col-span-5 lg:grid-cols-5 md:grid-cols-6 sm:grid-cols-6 grid-cols-1 items-center gap-4">
          {isLoading
            ? [...Array(5)].map((_, idx) => (
                <div
                  key={idx}
                  className="xl:col-span-1 lg:col-span-4 md:col-span-2 sm:col-span-3 col-span-12"
                >
                  <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[94px]">
                    <CardBody>
                      <div></div>
                    </CardBody>
                  </Card>
                </div>
              ))
            : kpiData.map((data) => (
                <div
                  key={data.title}
                  className="xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-3 col-span-12"
                >
                  <KPIStrip {...data} />
                </div>
              ))}
        </div>
      </section>
      <InventoryReport isLoading={isLoading} />
      <InventoryInfo isLoading={isLoading} />
    </div>
  );
};

export default Inventory;
