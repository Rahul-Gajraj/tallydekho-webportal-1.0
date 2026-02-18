import React from "react";

import { Card, IconButton, Tooltip, Typography } from "@material-tailwind/react";

import SalesReport from "@/components/Sales/SalesReport";
import SalesInfo from "@/components/Sales/SalesInfo";
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
    value: "+10%",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: (
      <img src="/media/icons/outstanding.svg" alt="outstanding" className="w-5 h-5" />
    ),
  },
  {
    title: "Credit Notes",
    price: "3",
    img: <img src="/media/icons/credit_notes.svg" className="w-5 h-5" />,
  },
];

const Sales = () => {
  return (
    <div className="mx-5 overflow-y-scroll">
      {/* <Card className="shadow-sm border border-gray-200 !rounded-lg mt-8 px-4 py-2">
        <div className="flex md:items-center gap-3 flex-col md:flex-row justify-between">
          <Typography className="font-bold text-xl">
            Sales
          </Typography>
          <Tooltip
            placement="bottom"
            className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
            content="E-Way Bill"
          >
            <IconButton
              variant="text"
              className={
                "cursor-pointer p-3 rounded-full fill-black hover:fill-[#108F6F] hover:bg-transparent focus:fill-[#108F6F] mr-10"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M3.6.01h16.71c1.42.19,2.54,1.37,2.67,2.81v17.61c-.19,1.81-1.7,3-3.51,2.83-.76-.07-1.66-.61-2.41-.81-.54-.14-.76-.04-1.25.15-1.62.62-3.04,1.85-4.87,1.23-.95-.33-1.9-.94-2.84-1.28-.44-.16-.69-.22-1.15-.1-.72.19-1.58.7-2.32.8-1.84.23-3.4-.96-3.6-2.81V2.78C1.17,1.38,2.24.27,3.6.01ZM3.86,1.7c-.65.12-1.11.67-1.15,1.33v17.18c.53,2.62,2.95.58,4.47.45,1.27-.1,2.89.98,4.08,1.44.65.25.82.24,1.47,0,1.21-.45,2.78-1.55,4.08-1.44,1.09.09,2.57,1.13,3.53.82.54-.17.91-.72.94-1.28V3.04c-.05-.72-.56-1.29-1.29-1.35l-16.13.02Z" />
                <path d="M6.24,5.62h11.44c1.01.1,1.11,1.47.11,1.68H6.22c-.96-.21-.92-1.46.01-1.68Z" />
                <path d="M5.74,11.56c-.46-.5-.17-1.3.48-1.41h11.56c1,.24.9,1.56-.11,1.69H6.38c-.21,0-.5-.13-.64-.28Z" />
                <path d="M6.18,14.65h5.94c.96.18.96,1.49,0,1.67h-5.9c-.92-.2-.95-1.42-.05-1.67Z" />
              </svg>
            </IconButton>
          </Tooltip>
        </div>
      </Card> */}
      <section className="mx-auto">
        <div className="mt-8 grid grid-cols-6 items-center gap-4">
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
      <SalesReport />
      <SalesInfo />
    </div>
  );
};

export default Sales;
