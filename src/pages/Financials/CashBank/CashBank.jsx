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

import CashTransactionsDetail from "@/components/Financials/CashBank/CashTransactionsDetail";
import KPIStrip from "@/components/common/KPIStrip";
import EmptyData from "@/components/common/EmptyData";

const CASH_BANK_KPI = [
  {
    title: "Cash In Hand",
    price: "₹84,500",
    img: (
      <img
        className="w-5"
        src="/media/icons/cash_in_hand.svg"
        alt="cash_in_hand"
      />
    ),
  },
  {
    title: "Bank Balance",
    price: "₹2,745,000",
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
    title: "Unreconclied Entries",
    price: "36",
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
    title: "Cheques In Hand",
    price: "₹196,000",
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
    title: "Total Amount",
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
  {
    title: "Today Inflows",
    price: "₹148,500",
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
    title: "Total Outflows",
    price: "₹92,500",
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
    title: "Bank OD Utilised",
    price: "₹420,000",
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

const CASH_BANK_TABLE_HEAD = [
  {
    head: "Account",
    customeStyle: "text-center",
  },
  {
    head: "Type",
  },
  {
    head: "Balance",
  },
  {
    head: "Unreconciled",
  },
  {
    head: "Today In",
  },
  {
    head: "Today Out",
  },
  {
    head: "Status",
  },
];

const CASH_BANK_TABLE_ROW = [
  {
    account: "Main cash",
    type: "Cash",
    balance: "₹54,000",
    unreconciled: "-",
    todayIn: "₹18,500",
    todayOut: "12,200",
    status: "Healthy",
  },
  {
    account: "HDFC CC A/C",
    type: "Bank OD",
    balance: "₹180,000",
    unreconciled: "8",
    todayIn: "₹32,000",
    todayOut: "₹44,500",
    status: "OD Utilised",
  },
  {
    account: "ICICI Bank - 0012",
    type: "Bank",
    balance: "₹1,240,000",
    unreconciled: "12",
    todayIn: "₹56,500",
    todayOut: "₹38,400",
    status: "OK",
  },
  {
    account: "Axis Bank - 3344",
    type: "Bank",
    balance: "₹1,45,000",
    unreconciled: "16",
    todayIn: "₹41,000",
    todayOut: "₹28,900",
    status: "OK",
  },
  {
    account: "Petty Cash - HO",
    type: "Cash",
    balance: "₹30,500",
    unreconciled: "-",
    todayIn: "₹0",
    todayOut: "₹7,900",
    status: "OK",
  },
];

const alerts = [
  {
    title: "24 bank entries not reconciled",
    subtitle: "Across ICICI, Axis and HDFC CC acounts",
    img: <img src="/media/alerts/error.svg" className="h-5 w-5 mt-[3px]" />,
  },
  {
    title: "6 checques pending for more than 30 days",
    subtitle: "Follow up with customers / bank",
    img: <img src="/media/alerts/warning.svg" className="h-6 w-6 mt-[3px]" />,
  },
  {
    title: "Bank feeds not updated for 2 accounts",
    subtitle: "Last sync 3 days ago",
    img: <img src="/media/alerts/success.svg" className="h-6 w-6 mt-[3px]" />,
  },
];

const CashBank = () => {
  return (
    <div className="mx-5 overflow-y-scroll">
      <div className="grid grid-cols-8 xl:grid-cols-8 lg:grid-cols-6 sm:grid-cols-6 gap-3 mt-8">
        {CASH_BANK_KPI.map((kpiData, idx) => (
          <div
            key={idx}
            className="xl:col-span-2 lg:col-span-2 sm:col-span-3 col-span-8"
          >
            <KPIStrip {...kpiData} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 mt-5 gap-5">
        <Card className="col-span-3 xl:col-span-2 shadow-sm border border-gray-200 !rounded-lg">
          <CardHeader floated={false} shadow={false} className="p-2">
            <Typography className="font-bold text-lg">
              Cash & Bank Overview
            </Typography>
            <Typography className="font-normal text-sm">
              Account-wise balances with unreconlied entries
            </Typography>
          </CardHeader>
          <CardBody className="pt-3">
            <table className="w-full table-auto h-[400px] overflow-scroll">
              <thead>
                <tr>
                  {CASH_BANK_TABLE_HEAD.map(({ head, customeStyle }) => (
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
                {CASH_BANK_TABLE_ROW.length > 0 ? (
                  CASH_BANK_TABLE_ROW.map(
                    (
                      {
                        account,
                        type,
                        balance,
                        unreconciled,
                        todayIn,
                        todayOut,
                        status,
                      },
                      index
                    ) => {
                      const classes = "!p-4 border-b border-gray-300";
                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {account}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {type}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {balance}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {unreconciled}
                            </Typography>
                          </td>
                          <td className="border-b border-gray-300">
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {todayIn}
                            </Typography>
                          </td>
                          <td className="border-b border-gray-300">
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {todayOut}
                            </Typography>
                          </td>
                          <td className="border-b border-gray-300">
                            <Typography
                              variant="small"
                              className="!font-normal text-center"
                            >
                              {status}
                            </Typography>
                          </td>
                        </tr>
                      );
                    }
                  )
                ) : (
                  <EmptyData colSpan={7} />
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <div className="col-span-3 xl:col-span-1 flex xl:flex-col gap-5">
          <Card className="shadow-sm border border-gray-200 !rounded-lg w-full">
            <CardHeader shadow={false} floated={false} className="p-2">
              <Typography className="font-bold text-lg">
                Bank Reconcilation Summary
              </Typography>
              <Typography className="font-normal text-sm">
                Statement vs book difference
              </Typography>
            </CardHeader>
            <CardBody className="pt-3">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#93C5FD] rounded-full"></span>
                    <Typography variant="small" className="font-normal">
                      ICICI Bank - 0012
                    </Typography>
                  </div>
                  <Typography variant="small" className="font-normal">
                    Diff: ₹12,400
                  </Typography>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#67E8F9] rounded-full"></span>
                    <Typography variant="small" className="font-normal">
                      Axis Bank
                    </Typography>
                  </div>
                  <Typography variant="small" className="font-normal">
                    Diff: ₹8,900
                  </Typography>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#C4B5FD] rounded-full"></span>
                    <Typography variant="small" className="font-normal">
                      HDFC CC A/C
                    </Typography>
                  </div>
                  <Typography variant="small" className="font-normal">
                    Diff: ₹0 (Reconcilled)
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="shadow-sm border border-gray-200 !rounded-lg w-full">
            <CardHeader floated={false} shadow={false} className="p-2">
              <Typography className="font-bold text-lg">
                Cash & Bank Alerts
              </Typography>
              <Typography className="font-normal text-sm">
                Actionable issues from bank & cash ledgers
              </Typography>
            </CardHeader>
            <CardBody className="!p-2 mx-4 h-[270px] overflow-scroll">
              {alerts.length > 0 ? (
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
              ) : (
                <div className="flex flex-col justify-center items-center h-full gap-2 bg-[#F6F7F9]">
                  <img
                    src="/media/icons/line_graph.svg"
                    alt="line_graph"
                    className="h-5 w-5"
                  />
                  <Typography className="!text-[#6f7c97]">No Alerts</Typography>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="mt-5">
        <CashTransactionsDetail />
      </div>
    </div>
  );
};

export default CashBank;
