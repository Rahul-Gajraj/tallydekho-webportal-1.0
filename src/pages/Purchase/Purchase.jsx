import React from "react";

import PurchaseReport from "@/components/Purchase/PurchaseReport";
import PurchaseInfo from "@/components/Purchase/PurchaseInfo";

const Purchase = () => {
  return (
    <div className="mx-5 h-[100vh] overflow-y-scroll">
      <PurchaseReport />
      <PurchaseInfo />
    </div>
  );
};

export default Purchase;
