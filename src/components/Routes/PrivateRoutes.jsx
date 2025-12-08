import { Route, Routes, Navigate } from "react-router-dom";

import Dashboard from "@/pages/Dashboard/Dashboard";
import Sales from "@/pages/Sales/Sales";
import Purchase from "@/pages/Purchase/Purchase";
import Inventory from "@/pages/Inventory/Inventory";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/inventory" element={<Inventory />} />

      <Route path="*" element={<Navigate to="/" replace />} />
      {/* WIll be redirected to 404 page  */}
    </Routes>
  );
};

export default PrivateRoutes;
