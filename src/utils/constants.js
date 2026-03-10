export const NAVIGATION = [
  {
    title: "Dashboard",
    path: "/",
  },
  {
    title: "Sales",
    path: "/sales",
  },
  {
    title: "Purchase",
    path: "/purchase",
  },
  {
    title: "Inventory",
    path: "/inventory",
  },
  {
    title: "Financials",
    children: [
      {
        title: "Expenses",
        path: "/financials/expenses",
      },
      {
        title: "Payments & Receipts",
        path: "/financials/payments-receipts",
      },
      {
        title: "Cash & Bank",
        path: "/financials/cash-bank",
      },
      {
        title: "Receivables & Payables",
        path: "/financials/receivables-payables",
      },
      {
        title: "Loans & ODs",
        path: "/financials/loans-ods",
      },
      {
        title: "Reports",
        path: "/financials/reports",
      },
    ],
  },
  {
    title: "Compliance",
    children: [
      {
        title: "GST",
        path: "/compliance/gst",
      },
      {
        title: "E-Way Bill",
        path: "/compliance/e-way-bill",
      },
      {
        title: "E-Invoice",
        path: "/compliance/e-invoice",
      },
      {
        title: "Other Taxes",
        path: "/compliance/other-taxes",
      },
      {
        title: "Audit Trail",
        path: "/compliance/audit-trail",
      },
    ],
  },
  {
    title: "Ledgers",
    path: "/ledgers",
  },
];
