import React, { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";

import SalesReport from "@/components/Sales/SalesReport";
import SalesInfo from "@/components/Sales/SalesInfo";
import KPIStrip from "@/components/common/KPIStrip";

const KPI_DATA = [
  {
    title: "Today",
    price: "₹92,000",
    value: "+14%",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: <img src="/media/icons/today.svg" alt="toady" className="w-5 h-5" />,
  },
  {
    title: "MTD",
    price: "₹1.27M",
    value: "-10%",
    color: "#F23031",
    bg: "#FFEBEA",
    img: <img src="/media/icons/mtd.svg" alt="mtd" className="w-5 h-5" />,
  },
  {
    title: "YTD",
    price: "₹7.4M",
    value: "+12%",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: <img src="/media/icons/ytd.svg" alt="ytd" className="w-5 h-5" />,
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
      <img
        src="/media/icons/outstanding.svg"
        alt="outstanding"
        className="w-5 h-5"
      />
    ),
  },
  {
    title: "Credit Notes",
    price: "3",
    img: <img src="/media/icons/credit_notes.svg" className="w-5 h-5" />,
  },
];

const Sales = () => {
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
      <section className="mx-auto">
        <div className="mt-8 grid grid-cols-6 items-center gap-4">
          {isLoading
            ? [...Array(6)].map((_, idx) => (
                <div
                  key={idx}
                  className="2xl:col-span-1 xl:col-span-2 lg:col-span-2 sm:col-span-3 col-span-6 h-full"
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
                  className="2xl:col-span-1 xl:col-span-2 lg:col-span-2 sm:col-span-3 col-span-6 h-full"
                >
                  <KPIStrip {...data} />
                </div>
              ))}
        </div>
      </section>
      <SalesReport isLoading={isLoading} />
      <SalesInfo isLoading={isLoading} />
    </div>
  );
};

export default Sales;
