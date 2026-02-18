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
    img: (
      <img src="/media/icons/today.svg" alt="toady" className="w-5 h-5" />
    ),
  },
  {
    title: "MTD",
    price: "₹1.27M",
    value: "-10%",
    color: "#F23031",
    bg: "#FFEBEA",
    img: (
      <img src="/media/icons/mtd.svg" alt="mtd" className="w-5 h-5" />
    ),
  },
  {
    title: "YTD",
    price: "₹7.4M",
    value: "+12%",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: (
      <img src="/media/icons/ytd.svg" alt="ytd" className="w-5 h-5" />
    ),
  },
  {
    title: "Avg Ticket",
    price: "₹14,350",
    value: "+12%",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: (
      <img src="/media/icons/avg_ticket.svg" alt="ticket" className="w-5 h-5" />
    ),
  },
  {
    title: "Outstanding",
    price: "₹812k",
    img: (
      <img src="/media/icons/outstanding.svg" alt="outstanding" className="w-5 h-5" />
    ),
  },
  {
    title: "Debit Notes",
    price: "3",
    img: <img src="/media/icons/debit_notes.svg" className="w-5 h-5" />,
  },
];

const Purchase = () => {
  const [value, setValue] = useState("0");

  return (
    <div className="mx-5 overflow-y-scroll">
      <section className="mx-auto mt-8">
        <div className="mt-5 grid grid-cols-6 items-center gap-4">
          {kpiData.map((data) => (
            <div
              key={data.title}
              className="2xl:col-span-1 xl:col-span-2 lg:col-span-2 sm:col-span-3 col-span-6 h-full"
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
