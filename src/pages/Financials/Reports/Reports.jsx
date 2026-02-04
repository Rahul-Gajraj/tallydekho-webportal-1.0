import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import KPIStrip from "@/components/common/KPIStrip";
import ProfitTrendGraph from "../../../components/Financials/Reports/ProfitTrendGraph";
import ExpenseBreakdownGraph from "../../../components/Financials/Reports/ExpenseBreakdownGraph";
import IncomeBreakdownGraph from "../../../components/Financials/Reports/IncomeBreakdownGraph";
import AssetsLiabilitiesGraph from "../../../components/Financials/Reports/AssetsLiabilitiesGraph";
import SalesPurchaseTrendGraph from "../../../components/Financials/Reports/SalesPurchaseTrendGraph";
import ReportsInfo from "../../../components/Financials/Reports/ReportsInfo";

const KPI_DATA = [
  {
    title: "Revenue",
    children: [
      {
        title: "Total Sales",
        price: "₹92,000",
        value: "+12%",
        class: "bg-[#eaf8f4] text-[#108f6f]",
      },
      {
        title: "Total Purchase",
        price: "₹85,000",
        value: "-3%",
        class: "bg-[#fdebea] text-[#f46a6c]",
      },
    ],
  },
  {
    title: "Expense",
    icon: "expense.svg",
    children: [
      {
        title: "Direct Expense",
        price: "₹30,000",
        value: "+4%",
        class: "bg-[#eaf8f4] text-[#108f6f]",
      },
      {
        title: "Indirect Expense",
        price: "₹30,000",
        value: "-2%",
        class: "bg-[#fdebea] text-[#f46a6c]",
      },
    ],
  },
  {
    title: "Profit",
    children: [
      // {
      //   title: "Net Profit / Net Loss",
      //   price: "₹40,000",
      //   value: "+1%",
      //   class: "bg-[#eaf8f4] text-[#108f6f]",
      // },
      {
        title: "Net Profit",
        price: "₹40,000",
        value: "+1%",
        class: "bg-[#eaf8f4] text-[#108f6f]",
      },
      {
        title: "Net Loss",
        price: "0",
        value: "0",
        class: "bg-[#fdebea] text-[#f46a6c]",
      },
    ],
  },
  {
    title: "Balance Sheet",
    icon: "balance_sheet.svg",
    children: [
      { title: "Total Assets", price: "₹177,000" },
      { title: "Total Liabilities", price: "₹157,000" },
    ],
  },
  {
    title: "Inventory",
    icon: "inventory.svg",
    children: [
      {
        title: "Opening Stock",
        price: "₹17,70,000",
        value: "-2%",
        class: "bg-[#fdebea] text-[#f46a6c]",
      },
      {
        title: "Closing Stock",
        price: "₹18,40,000",
        value: "+6%",
        class: "bg-[#eaf8f4] text-[#108f6f]",
      },
    ],
  },
  {
    title: "Gross Performance",
    children: [
      {
        title: "Gross Profit / Gross Loss",
        price: "₹1,38,000",
        value: "+2%",
        class: "bg-[#eaf8f4] text-[#108f6f]",
      },
    ],
  },
];

const REPORTS_KPI = [
  {
    title: "Total Sales",
    // subtitle: "Total sales till date",
    price: "₹92,000",
  },
  {
    title: "Total Purchase",
    // subtitle: "Total purchase till date",
    price: "₹85,000",
  },
  {
    title: "Net Profit / Net Loss",
    // subtitle: "Total sales till date",
    value: "13%",
    price: "₹7,000",
    color: "#108f6f",
    bg: "#eaf8f4",
  },
  {
    title: "Total Assets",
    // subtitle: "Total purchase till date",
    price: "₹177,000",
  },
  {
    title: "Total Liabilities",
    // subtitle: "Total purchase till date",
    price: "₹157,000",
  },
  {
    title: "Closing Stock",
    // subtitle: "Total purchase till date",
    price: "₹177,000",
  },
  {
    title: "Gross Profit / Gross Loss",
    // subtitle: "Total sales till date",
    value: "13%",
    price: "₹7,000",
    color: "#108f6f",
    bg: "#eaf8f4",
  },
];

const Reports = () => {
  return (
    <div className="mx-5 overflow-y-scroll">
      <section className="mx-auto mt-8">
        <div className="grid grid-cols-12 items-center gap-5">
          {KPI_DATA.map(({ title, children, icon }) => (
            <Card
              key={title}
              className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12"
            >
              <CardHeader shadow={false} floated={false}>
                <div className="flex gap-2 items-center">
                  <img
                    className="h-4 w-4"
                    src={`/media/kpi-strip/${icon}`}
                    alt="expense"
                  />
                  {title}
                </div>
              </CardHeader>
              <CardBody className="flex justify-between gap-3 p-4 !pt-2">
                {children.map((data) => (
                  <div
                    key={data.title}
                    className="w-full shadow-sm border border-gray-200 !rounded-lg p-3 py-2"
                  >
                    <div className="flex justify-between">
                      <Typography className="text-[14px]">
                        {data.title}
                      </Typography>
                      {data.value && (
                        <span
                          className={`!rounded-md text-[10px] p-2 py-0 flex justify-center items-center ${data.class}`}
                        >
                          {data.value}
                        </span>
                      )}
                    </div>
                    <Typography className="font-bold">{data.price}</Typography>
                    {/* <KPIStrip {...data} /> */}
                  </div>
                ))}
              </CardBody>
            </Card>
          ))}
          {/* {REPORTS_KPI.map((data) => (
            <div
              key={data.title}
              className="xl:col-span-1 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12"
            >
              <KPIStrip {...data} />
            </div>
          ))} */}
        </div>
      </section>
      <div className="grid grid-cols-12 gap-5 my-5">
        <div className="col-span-12 lg:col-span-7 xl:col-span-4">
          <ProfitTrendGraph />
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-span-4">
          <ExpenseBreakdownGraph />
        </div>
        {/* <div className="col-span-12 lg:col-span-5 xl:col-span-4">
          <IncomeBreakdownGraph />
        </div> */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4">
          <AssetsLiabilitiesGraph />
        </div>
        {/* <div className="col-span-12 lg:col-span-5 xl:col-span-6">
          <SalesPurchaseTrendGraph />
        </div> */}
      </div>
      <section>
        <ReportsInfo />
      </section>
    </div>
  );
};

export default Reports;
