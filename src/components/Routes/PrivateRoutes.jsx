import { Route, Routes, Navigate } from "react-router-dom";

import Dashboard from "@/pages/Dashboard/Dashboard";
import Sales from "@/pages/Sales/Sales";
import Purchase from "@/pages/Purchase/Purchase";
import Inventory from "@/pages/Inventory/Inventory";
import Expenses from "@/pages/Financials/Expenses/Expenses";
import PaymentsReceipts from "@/pages/Financials/PaymentsReceipts/PaymentsReceipts";
import CashBank from "@/pages/Financials/CashBank/CashBank";
import ReceivablesPayables from "@/pages/Financials/ReceivablesPayables/ReceivablesPayables";
import LoanODs from "@/pages/Financials/LoansODs/LoansODs";
import Reports from "@/pages/Financials/Reports/Reports";
import GST from "@/pages/Compliance/GST/GST";
import EWayBill from "@/pages/Compliance/EWayBill/EWayBill";
import OtherTaxes from "@/pages/Compliance/OtherTaxes/OtherTaxes";
import AuditTrail from "@/pages/Compliance/AuditTrail/AuditTrail";
import Ledgers from "@/pages/Ledgers/Ledgers";
import EInvoice from "@/pages/Compliance/EInvoice/EInvoice";

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
      <Route path="/financials/loans-ods" element={<LoanODs />} />
      <Route path="/financials/reports" element={<Reports />} />
      <Route path="/compliance/gst" element={<GST />} />
      <Route path="/compliance/e-way-bill" element={<EWayBill />} />
      <Route path="/compliance/e-invoice" element={<EInvoice />} />
      <Route path="/compliance/other-taxes" element={<OtherTaxes />} />
      <Route path="/compliance/audit-trail" element={<AuditTrail />} />
      <Route path="/ledgers" element={<Ledgers />} />

      <Route path="*" element={<Navigate to="/" replace />} />
      {/* Will be redirected to home  */}
    </Routes>
  );
};

export default PrivateRoutes;
