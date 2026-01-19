import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import PaymentReceiptRegister from "@/components/Financials/PaymentsReceipts/PaymentReceiptRegister";
import KPIStrip from "@/components/common/KPIStrip";

const PAYMENTS_RECEIPTS_KPI = [
  {
    title: "Payments Today",
    price: "₹22,500",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        className="h-5 w-5"
      >
        <path d="M8.4,17.4c-.84,0-1.55-.29-2.13-.87s-.87-1.29-.87-2.13.29-1.55.87-2.13,1.29-.87,2.13-.87,1.55.29,2.13.87.87,1.29.87,2.13-.29,1.55-.87,2.13-1.29.87-2.13.87ZM3.6,24c-.66,0-1.22-.24-1.69-.7-.47-.47-.7-1.03-.7-1.7V4.8c0-.66.24-1.22.7-1.69.47-.47,1.03-.7,1.69-.7h1.2V0h2.4v2.4h9.6V0h2.4v2.4h1.2c.66,0,1.22.23,1.69.7s.7,1.03.7,1.69v16.8c0,.66-.23,1.23-.7,1.7s-1.03.7-1.69.7H3.6ZM3.6,21.6h16.8v-12H3.6v12ZM3.6,7.2h16.8v-2.4H3.6v2.4ZM3.6,7.2v-2.4,2.4Z" />
      </svg>
    ),
  },
  {
    title: "Receipts Today",
    price: "₹36,000",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        className="h-5 w-5"
      >
        <path d="M3.6,24c-.66,0-1.22-.24-1.7-.7-.47-.47-.7-1.03-.7-1.69V4.8c0-.66.24-1.22.7-1.7.47-.47,1.04-.7,1.7-.7h1.2V0h2.4v2.4h9.6V0h2.4v2.4h1.2c.66,0,1.22.23,1.7.7s.7,1.04.7,1.7v16.8c0,.66-.23,1.23-.7,1.69s-1.03.7-1.7.7H3.6ZM3.6,21.6h16.8v-12H3.6v12ZM3.6,7.2h16.8v-2.4H3.6v2.4ZM3.6,7.2v-2.4,2.4ZM12,14.4c-.34,0-.63-.12-.85-.34s-.34-.51-.34-.85.12-.63.34-.85.51-.35.85-.35.63.12.85.35c.23.23.34.51.34.85s-.11.63-.34.85c-.23.23-.51.34-.85.34ZM7.2,14.4c-.34,0-.63-.12-.85-.34s-.34-.51-.34-.85.12-.63.34-.85.51-.35.85-.35.63.12.85.35.35.51.35.85-.12.63-.35.85-.51.34-.85.34ZM16.8,14.4c-.34,0-.62-.12-.85-.34s-.34-.51-.34-.85.11-.63.34-.85.52-.35.85-.35.62.12.85.35.34.51.34.85-.11.63-.34.85-.52.34-.85.34ZM12,19.2c-.34,0-.63-.11-.85-.34-.23-.23-.34-.51-.34-.85s.12-.63.34-.85.51-.34.85-.34.63.12.85.34c.23.23.34.51.34.85s-.11.63-.34.85c-.23.23-.51.34-.85.34ZM7.2,19.2c-.34,0-.63-.11-.85-.34-.23-.23-.34-.51-.34-.85s.12-.63.34-.85.51-.34.85-.34.63.12.85.34.35.51.35.85-.12.63-.35.85c-.23.23-.51.34-.85.34ZM16.8,19.2c-.34,0-.62-.11-.85-.34-.23-.23-.34-.51-.34-.85s.11-.63.34-.85.52-.34.85-.34.62.12.85.34.34.51.34.85-.11.63-.34.85c-.23.23-.52.34-.85.34Z" />
      </svg>
    ),
  },
  {
    title: "MTD Payments",
    price: "₹548,000",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        className="h-5 w-5"
      >
        <path d="M3.6,24c-.66,0-1.22-.24-1.7-.7-.47-.47-.7-1.03-.7-1.69V4.8c0-.66.24-1.22.7-1.7.47-.47,1.04-.7,1.7-.7h1.2V0h2.4v2.4h9.6V0h2.4v2.4h1.2c.66,0,1.22.23,1.7.7s.7,1.04.7,1.7v16.8c0,.66-.23,1.23-.7,1.69s-1.03.7-1.7.7H3.6ZM3.6,21.6h16.8v-12H3.6v12ZM3.6,7.2h16.8v-2.4H3.6v2.4ZM3.6,7.2v-2.4,2.4ZM12,14.4c-.34,0-.63-.12-.85-.34s-.34-.51-.34-.85.12-.63.34-.85.51-.35.85-.35.63.12.85.35c.23.23.34.51.34.85s-.11.63-.34.85c-.23.23-.51.34-.85.34ZM7.2,14.4c-.34,0-.63-.12-.85-.34s-.34-.51-.34-.85.12-.63.34-.85.51-.35.85-.35.63.12.85.35.35.51.35.85-.12.63-.35.85-.51.34-.85.34ZM16.8,14.4c-.34,0-.62-.12-.85-.34s-.34-.51-.34-.85.11-.63.34-.85.52-.35.85-.35.62.12.85.35.34.51.34.85-.11.63-.34.85-.52.34-.85.34ZM12,19.2c-.34,0-.63-.11-.85-.34-.23-.23-.34-.51-.34-.85s.12-.63.34-.85.51-.34.85-.34.63.12.85.34c.23.23.34.51.34.85s-.11.63-.34.85c-.23.23-.51.34-.85.34ZM7.2,19.2c-.34,0-.63-.11-.85-.34-.23-.23-.34-.51-.34-.85s.12-.63.34-.85.51-.34.85-.34.63.12.85.34.35.51.35.85-.12.63-.35.85c-.23.23-.51.34-.85.34ZM16.8,19.2c-.34,0-.62-.11-.85-.34-.23-.23-.34-.51-.34-.85s.11-.63.34-.85.52-.34.85-.34.62.12.85.34.34.51.34.85-.11.63-.34.85c-.23.23-.52.34-.85.34Z" />
      </svg>
    ),
  },
  {
    title: "MTD Receipts",
    price: "₹1,126,000",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="h-6 w-6"
      >
        <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm400 240H120q-33 0-56.5-23.5T40-240v-400q0-17 11.5-28.5T80-680q17 0 28.5 11.5T120-640v400h640q17 0 28.5 11.5T800-200q0 17-11.5 28.5T760-160ZM280-400v-320 320Z" />
      </svg>
    ),
  },
  {
    title: "Total Payments",
    price: "₹1,732,500",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="h-6 w-6"
      >
        <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm400 240H120q-33 0-56.5-23.5T40-240v-400q0-17 11.5-28.5T80-680q17 0 28.5 11.5T120-640v400h640q17 0 28.5 11.5T800-200q0 17-11.5 28.5T760-160ZM280-400v-320 320Z" />
      </svg>
    ),
  },
  {
    title: "Cash Payments",
    price: "₹120,500",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="h-6 w-6"
      >
        <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm400 240H120q-33 0-56.5-23.5T40-240v-400q0-17 11.5-28.5T80-680q17 0 28.5 11.5T120-640v400h640q17 0 28.5 11.5T800-200q0 17-11.5 28.5T760-160ZM280-400v-320 320Z" />
      </svg>
    ),
  },
  {
    title: "Bank Payments",
    price: "₹428,500",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="h-6 w-6"
      >
        <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm400 240H120q-33 0-56.5-23.5T40-240v-400q0-17 11.5-28.5T80-680q17 0 28.5 11.5T120-640v400h640q17 0 28.5 11.5T800-200q0 17-11.5 28.5T760-160ZM280-400v-320 320Z" />
      </svg>
    ),
  },
  {
    title: "Pending Collection",
    price: "₹812,000",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="h-6 w-6"
      >
        <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm400 240H120q-33 0-56.5-23.5T40-240v-400q0-17 11.5-28.5T80-680q17 0 28.5 11.5T120-640v400h640q17 0 28.5 11.5T800-200q0 17-11.5 28.5T760-160ZM280-400v-320 320Z" />
      </svg>
    ),
  },
];

const PAYMENTS_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "text-center",
  },
  {
    head: "Payment No.",
  },
  {
    head: "Party",
  },
  {
    head: "Amount",
  },
  {
    head: "Mode",
  },
];

const PAYMENTS_TABLE_ROW = [
  {
    date: "10 Jul 2025",
    paymentNo: "PAY-201",
    party: "ABC Traders",
    amount: "₹42,000",
    mode: "Bank",
  },
  {
    date: "09 Jul 2025",
    paymentNo: "PAY-200",
    party: "Raj Agencies",
    amount: "₹12,500",
    mode: "Cash",
  },
  {
    date: "08 Jul 2025",
    paymentNo: "PAY-199",
    party: "Metro Logistics",
    amount: "₹28,400",
    mode: "UPI",
  },
  {
    date: "08 Jul 2025",
    paymentNo: "PAY-198",
    party: "Office Mart",
    amount: "₹7,250",
    mode: "Bank",
  },
  {
    date: "07 Jul 2025",
    paymentNo: "PAY-197",
    party: "Fuel Station",
    amount: "₹4,800",
    mode: "Cash",
  },
];

const RECEIPTS_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "text-center",
  },
  {
    head: "Receipt No.",
  },
  {
    head: "Party",
  },
  {
    head: "Amount",
  },
  {
    head: "Mode",
  },
];

const RECEIPTS_TABLE_ROW = [
  {
    date: "10 Jul 2025",
    receiptNo: "REC-201",
    party: "XYZ Exports",
    amount: "₹42,000",
    mode: "Bank",
  },
  {
    date: "09 Jul 2025",
    receiptNo: "REC-200",
    party: "PP Enterprises",
    amount: "₹12,500",
    mode: "Cash",
  },
  {
    date: "08 Jul 2025",
    receiptNo: "REC-199",
    party: "Global Traders",
    amount: "₹28,400",
    mode: "UPI",
  },
  {
    date: "08 Jul 2025",
    receiptNo: "REC-198",
    party: "Office Mart",
    amount: "₹7,250",
    mode: "Bank",
  },
  {
    date: "07 Jul 2025",
    receiptNo: "REC-197",
    party: "Fuel Station",
    amount: "₹4,800",
    mode: "Cash",
  },
];

const alerts = [
  {
    title: "7 unlinked payments detected",
    subtitle: "Match them with purchase or expense vouchers",
    img: <img src="/media/alerts/error.svg" className="h-5 w-5 mt-[3px]" />,
  },
  {
    title: "5 receipts posted without customer mapping",
    subtitle: "Map them to parties to update receivables",
    img: <img src="/media/alerts/warning.svg" className="h-6 w-6 mt-[3px]" />,
  },
  {
    title: "2 payments have GST mismatch",
    subtitle: "Mismatch with purchase register",
    img: <img src="/media/alerts/success.svg" className="h-6 w-6 mt-[3px]" />,
  },
];

const PaymentsReceipts = () => {
  const [tabValue, setTabValue] = useState("payments");

  return (
    <div className="mx-5">
      <div className="grid grid-cols-4 gap-3 mt-8">
        {PAYMENTS_RECEIPTS_KPI.map((kpiData, idx) => (
          <div key={idx} className="col-span-1">
            <KPIStrip {...kpiData} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 mt-5 gap-5">
        <Card className="col-span-2 shadow-sm border border-gray-200 !rounded-lg">
          <CardHeader
            floated={false}
            shadow={false}
            className="p-2 grid lg:grid-cols-2 grid-cols-1 items-center"
          >
            <div>
              <Typography className="font-bold text-lg">
                Recent Payments & Receipts
              </Typography>
              <Typography className="font-normal text-sm">
                Last 5 vouchers by type
              </Typography>
            </div>
            <div className="w-full">
              <Tabs value={tabValue}>
                <TabsHeader>
                  <Tab
                    className="!font-medium"
                    value="payments"
                    onClick={() => setTabValue("payments")}
                  >
                    Payments
                  </Tab>
                  <Tab
                    className="!font-medium"
                    value="receipts"
                    onClick={() => setTabValue("receipts")}
                  >
                    Receipts
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </CardHeader>
          <CardBody className="pt-3">
            {tabValue == "payments" ? (
              <table className="w-full table-auto h-[400px] overflow-scroll">
                <thead>
                  <tr>
                    {PAYMENTS_TABLE_HEAD.map(({ head, customeStyle }) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                      >
                        <div className="flex gap-2 justify-center">
                          <Typography variant="small" className="!font-bold">
                            {head}
                          </Typography>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PAYMENTS_TABLE_ROW.map(
                    ({ date, paymentNo, party, amount, mode }, index) => {
                      const classes = "!p-4 border-b border-gray-300";
                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {date}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {paymentNo}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {party}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {amount}
                            </Typography>
                          </td>
                          <td className="border-b border-gray-300">
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {mode}
                            </Typography>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            ) : (
              <table className="w-full table-auto h-[400px] overflow-scroll">
                <thead>
                  <tr>
                    {RECEIPTS_TABLE_HEAD.map(({ head, customeStyle }) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                      >
                        <div className="flex gap-2 justify-center">
                          <Typography variant="small" className="!font-bold">
                            {head}
                          </Typography>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RECEIPTS_TABLE_ROW.map(
                    ({ date, receiptNo, party, amount, mode }, index) => {
                      const classes = "!p-4 border-b border-gray-300";
                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {date}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {receiptNo}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {party}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {amount}
                            </Typography>
                          </td>
                          <td className="border-b border-gray-300">
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {mode}
                            </Typography>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            )}
          </CardBody>
        </Card>
        <div className="col-span-1">
          <Card className="shadow-sm border border-gray-200 !rounded-lg">
            <CardBody>
              <Tabs value="payment">
                <TabsHeader>
                  <Tab className="!font-medium" value="payment">
                    Payment Parties
                  </Tab>
                  <Tab className="!font-medium" value="receipt">
                    Receipt Parties
                  </Tab>
                </TabsHeader>
                <TabsBody>
                  <TabPanel value="payment">
                    <Typography className="font-bold text-lg">
                      Top Payment Parties
                    </Typography>
                    <Typography className="font-normal text-sm">
                      Vendors receiving high payments this period
                    </Typography>
                    <div className="flex flex-col gap-3 mt-5">
                      <div className="flex items-center gap-10 justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-[#93C5FD] rounded-full"></span>
                          <Typography variant="small" className="font-normal">
                            ABC Traders
                          </Typography>
                        </div>
                        <Typography variant="small" className="font-normal">
                          ₹180,000
                        </Typography>
                      </div>
                      <div className="flex items-center gap-10 justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-[#67E8F9] rounded-full"></span>
                          <Typography variant="small" className="font-normal">
                            Raj Agencies
                          </Typography>
                        </div>
                        <Typography variant="small" className="font-normal">
                          ₹126,000
                        </Typography>
                      </div>
                      <div className="flex items-center gap-10 justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-[#C4B5FD] rounded-full"></span>
                          <Typography variant="small" className="font-normal">
                            Metro Logistics
                          </Typography>
                        </div>
                        <Typography variant="small" className="font-normal">
                          ₹92,500
                        </Typography>
                      </div>
                      <div className="flex items-center gap-10 justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-[#C4B5FD] rounded-full"></span>
                          <Typography variant="small" className="font-normal">
                            Repairs & Maintenance
                          </Typography>
                        </div>
                        <Typography variant="small" className="font-normal">
                          ₹84,000
                        </Typography>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="receipt">
                    <Typography className="font-bold text-lg">
                      Top Receipt Parties
                    </Typography>
                    <Typography className="font-normal text-sm">
                      Customers paying biggest recievables
                    </Typography>
                    <div className="flex flex-col gap-3 mt-5">
                      <div className="flex items-center gap-10 justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-[#93C5FD] rounded-full"></span>
                          <Typography variant="small" className="font-normal">
                            XYZ Exports
                          </Typography>
                        </div>
                        <Typography variant="small" className="font-normal">
                          ₹210,000
                        </Typography>
                      </div>
                      <div className="flex items-center gap-10 justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-[#67E8F9] rounded-full"></span>
                          <Typography variant="small" className="font-normal">
                            PP Enterprises
                          </Typography>
                        </div>
                        <Typography variant="small" className="font-normal">
                          ₹164,000
                        </Typography>
                      </div>
                      <div className="flex items-center gap-10 justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-[#C4B5FD] rounded-full"></span>
                          <Typography variant="small" className="font-normal">
                            Global Traders
                          </Typography>
                        </div>
                        <Typography variant="small" className="font-normal">
                          ₹132,500
                        </Typography>
                      </div>
                      <div className="flex items-center gap-10 justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-[#C4B5FD] rounded-full"></span>
                          <Typography variant="small" className="font-normal">
                            Repairs & Maintenance
                          </Typography>
                        </div>
                        <Typography variant="small" className="font-normal">
                          ₹84,000
                        </Typography>
                      </div>
                    </div>
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </CardBody>
          </Card>
          <Card className="shadow-sm border border-gray-200 !rounded-lg mt-5">
            <CardHeader floated={false} shadow={false} className="p-2">
              <Typography className="font-bold text-lg">
                Payments & Receipts Alerts
              </Typography>
              <Typography className="font-normal text-sm">
                Compilance & mapping receivables
              </Typography>
            </CardHeader>
            <CardBody className="!p-2 mx-4 h-[270px] overflow-scroll">
              <List className="pt-0 gap-3">
                {alerts.map(({ title, subtitle, img }) => (
                  <Card key={title} className="border shadow-none">
                    <ListItem className="items-start hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]">
                      <ListItemPrefix className="items-start mr-2">
                        {img}
                      </ListItemPrefix>
                      <div>
                        <Typography>{title}</Typography>
                        <Typography className="text-[14px]">
                          {subtitle}
                        </Typography>
                      </div>
                    </ListItem>
                  </Card>
                ))}
              </List>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="mt-5">
        <PaymentReceiptRegister />
      </div>
    </div>
  );
};

export default PaymentsReceipts;
