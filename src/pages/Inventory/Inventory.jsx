import React from "react";

import InventoryReport from "@/components/Inventory/InventoryReport";
import InventoryInfo from "@/components/Inventory/InventoryInfo";

const Inventory = () => {
  return (
    <div className="mx-5 h-[100vh] overflow-y-scroll">
      <InventoryReport />
      <InventoryInfo />
    </div>
  );
};

export default Inventory;
