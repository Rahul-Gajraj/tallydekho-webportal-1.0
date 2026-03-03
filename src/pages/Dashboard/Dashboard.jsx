import React, { useEffect, useState } from "react";

import ComparisionGraph from "@/components/Dashboard/ComparisionGraph";
import GSTLiability from "@/components/Dashboard/GSTLiability";
import CashFlowTrend from "@/components/Dashboard/CashFlowTrend";
import PLTrends from "@/components/Dashboard/PLTrends";
import KPIStrip from "@/components/common/KPIStrip";
import { Card, CardBody } from "@material-tailwind/react";

const KPI_DATA = [
  {
    title: "Cash In Hand",
    // value: "+14%",
    price: "₹50,846.90",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: <img className="w-5" src="/media/icons/cash_in_hand.svg" />,
  },
  {
    title: "Bank Balance",
    // value: "+12%",
    price: "₹10,342",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: <img className="w-5" src="/media/icons/bank_balance.svg" />,
  },
  {
    title: "Receivables",
    // value: "-10%",
    price: "₹19,720",
    color: "#E53935",
    bg: "#F8DCDC",
    img: <img className="w-5" src="/media/icons/receivables.svg" />,
  },
  {
    title: "Payables",
    // value: "+1.4%",
    price: "₹20,000",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: <img className="w-5" src="/media/icons/payables.svg" />,
  },
  {
    title: "Loans & ODs",
    // value: "-10%",
    price: "₹19,720",
    color: "#E53935",
    bg: "#F8DCDC",
    img: <img className="w-5" src="/media/icons/loans_ods.svg" />,
  },
];

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [kpiData, setKpiData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setKpiData(KPI_DATA);
    }, 1500);
  }, []);

  return (
    <div className="mx-5">
      <section className="mx-auto mt-8">
        <div className="grid grid-cols-12 xl:grid-cols-5 md:grid-cols-12 sm:grid-cols-6 items-center md:gap-2.5 gap-4">
          {isLoading
            ? [...Array(5)].map((_, idx) => (
                <div
                  key={idx}
                  className="xl:col-span-1 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12"
                >
                  <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[84px]">
                    <CardBody>
                      <div></div>
                    </CardBody>
                  </Card>
                </div>
              ))
            : kpiData.map((data) => (
                <div
                  key={data.title}
                  className="xl:col-span-1 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12"
                >
                  <KPIStrip {...data} />
                </div>
              ))}
        </div>
      </section>
      <div className="grid grid-cols-12 gap-5 my-5">
        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
          <ComparisionGraph isLoading={isLoading} />
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-span-4">
          <GSTLiability isLoading={isLoading} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 my-5">
        <div className="col-span-12 lg:col-span-6">
          <CashFlowTrend isLoading={isLoading} />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <PLTrends isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
