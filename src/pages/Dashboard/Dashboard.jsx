import React from "react";

import KPIStrip from "@/components/Dashboard/KPIStrip";
import ComparisionGraph from "@/components/Dashboard/ComparisionGraph";
import GSTLiability from "@/components/Dashboard/GSTLiability";
import CashFlowTrend from "@/components/Dashboard/CashFlowTrend";
import CustomerSupplierTabs from "@/components/Dashboard/CustomerSupplierTabs";
import PLTrends from "@/components/Dashboard/PLTrends";
import InvoiceTable from "@/components/Dashboard/InvoiceTable";

const Dashboard = () => {
  return (
    <div className="mx-5 h-[100vh] overflow-y-scroll">
      <KPIStrip />
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
      <div className="grid grid-cols-12 gap-5 my-5">
        <div className="col-span-12 lg:col-span-6">
          <CustomerSupplierTabs />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <InvoiceTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
