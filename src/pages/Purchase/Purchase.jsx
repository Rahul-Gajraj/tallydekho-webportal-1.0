import React, { useState } from "react";

import { Card, Option, Select, Typography } from "@material-tailwind/react";

import PurchaseReport from "@/components/Purchase/PurchaseReport";
import PurchaseInfo from "@/components/Purchase/PurchaseInfo";
import KPIStrip from "@/components/common/KPIStrip";

const kpiData = [
  {
    title: "Today",
    price: "₹92,000",
    value: "+14%",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: <img src="/media/kpi-strip/today.svg" className="h-5 w-5" />,
  },
  {
    title: "MTD",
    price: "₹1.27M",
    value: "-10%",
    color: "#F23031",
    bg: "#FFEBEA",
    img: <img src="/media/kpi-strip/mtd.svg" className="h-5 w-5" />,
  },
  {
    title: "YTD",
    price: "₹7.4M",
    value: "+12%",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: <img src="/media/kpi-strip/mtd.svg" className="h-5 w-5" />,
  },
  {
    title: "Avg Ticket",
    price: "₹14,350",
    value: "+12%",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: <img src="/media/kpi-strip/avg_ticket.svg" className="h-5 w-5" />,
  },
  {
    title: "Outstanding",
    price: "₹812k",
    img: <img src="/media/kpi-strip/outstanding.svg" className="h-5 w-5" />,
  },
  {
    title: "Credit Notes",
    price: "3",
    img: <img src="/media/kpi-strip/credit_notes.svg" className="h-5 w-5" />,
  },
];

const Purchase = () => {
  const [value, setValue] = useState("0");

  return (
    <div className="mx-5 overflow-y-scroll">
      <section className="mx-auto mt-8">
        <div className="mt-5 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-4">
          {kpiData.map((data) => (
            <div
              key={data.title}
              className="xl:col-span-1 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12 h-full"
            >
              <KPIStrip {...data} />
            </div>
          ))}
        </div>
      </section>
      <PurchaseReport />
      <PurchaseInfo />
    </div>
  );
};

export default Purchase;
