import React, { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  List,
  ListItem,
  ListItemPrefix,
  Progress,
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import LedgersList from "@/components/Ledgers/LedgersList";
import RecentActivity from "@/components/Ledgers/Table/RecentActivity";

const KPI_DATA = [
  {
    title: "Total Ledgers",
    subtitle: "Number of active ledger masters",
    price: "327",
  },
  {
    title: "Debtor Count",
    subtitle: "Sundry Debtors Count",
    price: "146",
  },
  {
    title: "Creditor Count",
    subtitle: "Sundry Creditor Count",
    price: "108",
  },
  {
    title: "Bank Ledgers",
    subtitle: "Bank accounts (warm link to Cash & Bank)",
    price: "8",
  },
  {
    title: "Duty & Taxes Ledgers",
    subtitle: "GST/TDS Ledgers",
    price: "12",
  },
  {
    title: "Negative Balances",
    subtitle: "Ledger errors / mismatches",
    price: "7",
    bg: "#fdebea",
    color: "#f46a6c",
  },
];

const LEDGER_COUNT_DISTRIBUTED = [
  { label: "Sundry Debtors", value: "146" },
  { label: "Sundry Creditors", value: "108" },
  { label: "Expenses", value: "32" },
  { label: "Incomes", value: "14" },
  { label: "Duties & Taxes", value: "12" },
  { label: "Bank", value: "8" },
  { label: "Cash", value: "2" },
];

const LEDGER_BALANCE_DISTRIBUTES = [
  { label: "Sundry Debtors", value: "1240000", isDr: true },
  { label: "Sundry Creditors", value: "890000", isDr: false },
  { label: "Expenses", value: "230000", isDr: true },
  { label: "Incomes", value: "310000", isDr: false },
  { label: "Duties & Taxes", value: "185000", isDr: false },
  { label: "Bank", value: "96000", isDr: true },
  { label: "Cash", value: "18000", isDr: true },
];

const RECENT_ACTIVITIES = [
  {
    ledger: "ABC Traders",
    activity: "Edited - Opening balance changed",
    date: "10 Jul",
  },
  { ledger: "Office Rent", activity: "Posted Expense Voucher", date: "10 Jul" },
  {
    ledger: "GST Payable",
    activity: "Updated via Purchase Invoice",
    date: "10 Jul",
  },
];

const Ledgers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tabValue, setTabValue] = useState("ledger_count");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="mx-5 overflow-y-scroll mt-8">
      <div className="grid grid-cols-6 gap-3">
        {isLoading
          ? [...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="xl:col-span-1 lg:col-span-2 col-span-6 h-full"
              >
                <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[52px]">
                  <CardBody>
                    <div></div>
                  </CardBody>
                </Card>
              </div>
            ))
          : KPI_DATA.map(({ title, price, subtitle, bg, color }) => (
              <div
                key={title}
                className="xl:col-span-1 lg:col-span-2 col-span-6"
              >
                <Card
                  className={`shadow-sm border border-gray-200 !rounded-lg ${
                    bg ? `bg-[${bg}]` : ""
                  }`}
                >
                  <CardBody className="p-4 h-full flex flex-col justify-center">
                    <div className="flex justify-between">
                      <Typography
                        className={`font-medium !text-sm ${
                          color ? `!text-red-600` : ""
                        }`}
                      >
                        {title}
                      </Typography>
                      <Typography
                        className={`font-medium !text-sm ${
                          color ? `!text-red-600` : ""
                        }`}
                      >
                        {price}
                      </Typography>
                    </div>
                    {/* <Typography className="font-small text-[12px]">
                      {subtitle}
                    </Typography> */}
                  </CardBody>
                </Card>
              </div>
            ))}
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-8">
          <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
            <CardHeader
              floated={false}
              shadow={false}
              className="p-0 grid lg:grid-cols-2 grid-cols-1 items-center"
            >
              <div className="pl-2">
                <Typography variant="h6">
                  Ledger Distributed by Groups
                </Typography>
              </div>
              <div className="w-full">
                <Tabs value={tabValue}>
                  <TabsHeader>
                    <Tab
                      value="ledger_count"
                      onClick={() => setTabValue("ledger_count")}
                    >
                      Ledger Count
                    </Tab>
                    <Tab
                      value="ledger_balance"
                      onClick={() => setTabValue("ledger_balance")}
                    >
                      Ledger Balance
                    </Tab>
                  </TabsHeader>
                </Tabs>
              </div>
            </CardHeader>
            <CardBody className="!p-4 !pt-2 flex flex-col gap-3">
              {tabValue === "ledger_count"
                ? LEDGER_COUNT_DISTRIBUTED.map(({ label, value }, idx) => (
                    <div
                      key={label}
                      className={`w-full px-2 ${
                        idx === LEDGER_COUNT_DISTRIBUTED.length - 1
                          ? "mb-3"
                          : ""
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <Typography color="blue-gray" variant="h6">
                          {label}
                        </Typography>
                        <Typography color="blue-gray" variant="h6">
                          {value}
                        </Typography>
                      </div>
                      <Progress
                        value={Math.floor((Number(value) / 146) * 100)}
                        size="lg"
                      />
                    </div>
                  ))
                : LEDGER_BALANCE_DISTRIBUTES.map(
                    ({ label, value, isDr }, idx) => (
                      <div
                        key={label}
                        className={`w-full px-2 ${
                          idx === LEDGER_BALANCE_DISTRIBUTES.length - 1
                            ? "mb-3"
                            : ""
                        }`}
                      >
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <Typography color="blue-gray" variant="h6">
                            {label}
                          </Typography>
                          <Typography color="blue-gray" variant="h6">
                            {value}
                            {isDr ? "Dr" : "Cr"}
                          </Typography>
                        </div>
                        <Progress
                          value={Math.floor((Number(value) / 1240000) * 100)}
                          size="lg"
                        />
                      </div>
                    )
                  )}
            </CardBody>
          </Card>
        </div>
        <div className="col-span-4">
          <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
            <CardHeader
              floated={false}
              shadow={false}
              className="p-0 flex gap-6 flex-wrap items-center justify-between"
            >
              <Typography variant="h6">Recent Activity</Typography>
            </CardHeader>
            <CardBody className="px-0 py-1 m-2">
              {isLoading ? (
                <List className="pt-0 gap-4">
                  {[...Array(5)].map((_, idx) => (
                    <Card
                      key={idx}
                      className="transition-all animate-pulse w-full h-[50px] shadow-none bg-[#E1E6EA]"
                    >
                      <div></div>
                    </Card>
                  ))}
                </List>
              ) : RECENT_ACTIVITIES.length > 0 ? (
                <List className="pt-0 gap-4">
                  {RECENT_ACTIVITIES.map(({ ledger, activity, date }) => (
                    <Card key={ledger} className="border shadow-none">
                      <ListItem className="hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f] block">
                        <div className="flex justify-between">
                          <Typography className="text-[14px]">
                            {ledger}
                          </Typography>
                          <Typography className="text-[14px]">
                            {date}
                          </Typography>
                        </div>
                        <Typography className="text-[12px]">
                          {activity}
                        </Typography>
                      </ListItem>
                    </Card>
                  ))}
                </List>
              ) : (
                <div className="flex flex-col justify-center items-center h-[350px] gap-2 bg-[#F6F7F9]">
                  <img
                    src="/media/icons/line_graph.svg"
                    alt="line_graph"
                    className="h-5 w-5"
                  />
                  <Typography className="!text-[#6f7c97]">
                    No Recent Activity
                  </Typography>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-5">
        <div className="col-span-12">
          <LedgersList isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Ledgers;
