import React from "react";

import ComparisionGraph from "@/components/Dashboard/ComparisionGraph";
import GSTLiability from "@/components/Dashboard/GSTLiability";
import CashFlowTrend from "@/components/Dashboard/CashFlowTrend";
import PLTrends from "@/components/Dashboard/PLTrends";
import KPIStrip from "@/components/common/KPIStrip";

const kpiData = [
  {
    title: "Cash In Hand",
    // value: "+14%",
    price: "₹50,846.90",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: <img className="h-5 w-5" src="/media/kpi-strip/cash_in_hand.svg" />,
  },
  {
    title: "Bank Balance",
    // value: "+12%",
    price: "₹10,342",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: <img className="h-5 w-5" src="/nav-icons/bank_balance.svg" />,
  },
  {
    title: "Receivables",
    // value: "-10%",
    price: "₹19,720",
    color: "#E53935",
    bg: "#F8DCDC",
    img: <img className="h-5 w-5" src="/nav-icons/receipt.svg" />,
  },
  {
    title: "Payables",
    // value: "+1.4%",
    price: "₹20,000",
    color: "#108F6F",
    bg: "#EAF8F4",
    img: <img className="h-5 w-5" src="/nav-icons/payment.svg" />,
  },
  {
    title: "Loans & ODs",
    // value: "-10%",
    price: "₹19,720",
    color: "#E53935",
    bg: "#F8DCDC",
    img: <img className="h-5 w-5" src="/nav-icons/loans.svg" />,
  },
];

const Dashboard = () => {
  return (
    <div className="mx-5">
      <section className="mx-auto mt-8">
        <div className="grid grid-cols-12 xl:grid-cols-5 md:grid-cols-12 sm:grid-cols-6 items-center md:gap-2.5 gap-4">
          {kpiData.map((data) => (
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
          <ComparisionGraph />
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-span-4">
          <GSTLiability />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 my-5">
        <div className="col-span-12 lg:col-span-6">
          <CashFlowTrend />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <PLTrends />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
