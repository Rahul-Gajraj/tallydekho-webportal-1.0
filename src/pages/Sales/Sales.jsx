import React from "react";

import SalesReport from "@/components/Sales/SalesReport";
import SalesInfo from "@/components/Sales/SalesInfo";

const Sales = () => {
  return (
    <div className="mx-5 h-[100vh] overflow-y-scroll">
      <SalesReport />
      <SalesInfo />
    </div>
  );
};

export default Sales;
