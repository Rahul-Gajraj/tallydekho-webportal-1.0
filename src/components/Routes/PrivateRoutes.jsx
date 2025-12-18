import { Route, Routes, Navigate } from "react-router-dom";

import Dashboard from "@/pages/Dashboard/Dashboard";
import Sales from "@/pages/Sales/Sales";
import Purchase from "@/pages/Purchase/Purchase";
import Inventory from "@/pages/Inventory/Inventory";
import Expenses from "@/pages/Financials/Expenses/Expenses";
import PaymentsReceipts from "@/pages/Financials/PaymentsReceipts/PyamentsReceipts";
import CashBank from "@/pages/Financials/CashBank/CashBank";
import ReceivablesPayables from "@/pages/Financials/ReceivablesPayables/ReceivablesPayables";
import LoanODs from "../../pages/Financials/LoansODs/LoansODs";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/financials/expenses" element={<Expenses />} />
      <Route
        path="/financials/payments-receipts"
        element={<PaymentsReceipts />}
      />
      <Route path="/financials/cash-bank" element={<CashBank />} />
      <Route
        path="/financials/receivables-payables"
        element={<ReceivablesPayables />}
      />
      <Route
        path="/financials/loans-ods"
        element={<LoanODs />}
      />

      <Route path="*" element={<Navigate to="/" replace />} />
      {/* WIll be redirected to 404 page  */}
    </Routes>
  );
};

export default PrivateRoutes;
