import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  Switch,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import LoanODFilterTable from "@/components/Financials/LoansODs/LoanODFilterTable";
import KPIStrip from "@/components/common/KPIStrip";

const LOAN_SUMMARY_TABLE_HEAD = [
  {
    head: "Loan",
    customeStyle: "text-center",
  },
  {
    head: "Lender",
  },
  {
    head: "Type",
  },
  {
    head: "Outstanding",
  },
  {
    head: "Next EMI",
  },
];

const LOAN_SUMMARY_TABLE_ROWS = [
  {
    loan: "Home Loan - Office",
    lender: "HDFC Bank",
    type: "Team",
    outstanding: "₹1.45 Cr",
    nextEMI: "10 Jul - ₹2,10,000",
  },
  {
    loan: "Machinery Lone",
    lender: "SBI",
    type: "Team",
    outstanding: "₹82 L",
    nextEMI: "15 Jul - ₹1,40,000",
  },
];

const alerts = [
  {
    title: "EMI due tomorrow: ₹1,10,000 (2 loans)",
  },
  {
    title: "OD utilization > 80% in ICICI CC-002",
  },
  {
    title: "1 loan overdue / missed EMI",
  },
];

const ODsAccount = [
  {
    title: "HDFC CC-001",
    subtitle: "Limit ₹50,00,000 - Utilized",
    value: "65.6%",
  },
  {
    title: "ICICI CC-002",
    subtitle: "Limit ₹30,00,000 - Utilized ₹26,50,000",
    value: "88.3%",
  },
];

const LOANS_ODS_KPI = [
  {
    title: "Today Loan Liability",
    // subtitle: "Principle + Outstanding Interest",
    price: "₹4,20,00,000",
    value: "Live",
    color: "#108f6f",
    bg: "#EAF8F4",
  },
  {
    title: "Active Loans",
    // subtitle: "Active accounts",
    value: "Count",
    price: "5",
    color: "#108f6f",
    bg: "#EAF8F4",
  },
  {
    title: "Total OD Limit",
    price: "₹1,00,00,000",
    // subtitle: "Sanctioned limits",
    value: "Banks",
    color: "#108f6f",
    bg: "#EAF8F4",
  },
  {
    title: "OD Utilized",
    price: "₹42,50,000",
    // subtitle: "Current usage",
    value: "Util.",
    color: "#108f6f",
    bg: "#EAF8F4",
  },
  {
    title: "EMI This Month",
    price: "₹6,80,000",
    // subtitle: "Sum of EMIs",
    value: "Due",
    color: "#108f6f",
    bg: "#EAF8F4",
  },
  {
    title: "Next 7 Days EMI",
    price: "₹1,10,000",
    // subtitle: "Upcoming window",
    value: "Soon",
    color: "#108f6f",
    bg: "#EAF8F4",
  },
];

const LoanODs = () => {
  return (
    <div className="mx-5 overflow-y-scroll">
      <div className="grid grid-cols-6 gap-3 mt-8">
        {LOANS_ODS_KPI.map((kpiData, idx) => (
          <div key={idx} className="col-span-1">
            <KPIStrip {...kpiData} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 mt-5 gap-5">
        <Card className="col-span-2 shadow-sm border border-gray-200 !rounded-lg">
          <CardHeader floated={false} shadow={false} className="p-2">
            <Typography className="font-bold text-lg">Loan Summary</Typography>
          </CardHeader>
          <CardBody className="pt-3">
            <table className="w-full table-auto max-h-[400px] overflow-scroll">
              <thead>
                <tr>
                  {LOAN_SUMMARY_TABLE_HEAD.map(({ head, customeStyle }) => (
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
                {LOAN_SUMMARY_TABLE_ROWS.map(
                  ({ loan, lender, type, outstanding, nextEMI }, index) => {
                    const classes = "!p-4 border-b border-gray-300";
                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="!font-normal text-center"
                          >
                            {loan}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="!font-normal text-center"
                          >
                            {lender}
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
                            {outstanding}
                          </Typography>
                        </td>
                        <td className="border-b border-gray-300">
                          <Typography
                            variant="small"
                            className="!font-normal text-center"
                          >
                            {nextEMI}
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <div className="col-span-1">
          <Card className="shadow-sm border border-gray-200 !rounded-lg">
            <CardHeader
              floated={false}
              shadow={false}
              className="p-2 flex gap-6 flex-wrap items-center justify-between"
            >
              <Typography className="font-bold text-lg">OD Accounts</Typography>
            </CardHeader>
            <CardBody className="!p-2 !pt-0 mx-4 max-h-[270px] overflow-scroll">
              <List className="pt-0 gap-3">
                {ODsAccount.map(({ title, subtitle, value }) => (
                  <Card key={title} className="border shadow-none">
                    <ListItem className="items-start hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]">
                      <div className="flex justify-between w-full">
                        <div>
                          <Typography className="text-sm font-bold">
                            {title}
                          </Typography>
                          <Typography className="text-xs">
                            {subtitle}
                          </Typography>
                        </div>
                        <Chip
                          value={value}
                          size="sm"
                          color="green"
                          className="h-[30px]"
                          style={{
                            color: "#108f6f",
                            backgroundColor: "#eaf8f4",
                          }}
                        />
                      </div>
                    </ListItem>
                  </Card>
                ))}
              </List>
            </CardBody>
          </Card>
          <Card className="shadow-sm border border-gray-200 !rounded-lg mt-5">
            <CardHeader
              floated={false}
              shadow={false}
              className="p-2 flex gap-6 flex-wrap items-center justify-between"
            >
              <Typography className="font-bold text-lg">Alerts</Typography>
            </CardHeader>
            <CardBody className="!p-2 !pt-0 mx-4 max-h-[270px] overflow-scroll">
              <List className="pt-0 gap-3">
                {alerts.map(({ title, subtitle, img }) => (
                  <Card key={title} className="border shadow-none">
                    <ListItem className="items-start hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]">
                      <Typography className="text-sm">{title}</Typography>
                    </ListItem>
                  </Card>
                ))}
              </List>
            </CardBody>
          </Card>
        </div>
      </div>
      <LoanODFilterTable />
    </div>
  );
};

export default LoanODs;
