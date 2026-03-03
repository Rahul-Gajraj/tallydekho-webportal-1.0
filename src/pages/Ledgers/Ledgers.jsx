import React, { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import LedgersList from "@/components/Ledgers/LedgersList";
import RecentActivity from "../../components/Ledgers/Table/RecentActivity";

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
  },
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="mx-5 overflow-y-scroll mt-8">
      <div className="grid grid-cols-10 gap-5">
        <div className="col-span-6">
          <div className="grid grid-cols-6 gap-3">
            {isLoading
              ? [...Array(6)].map((_, idx) => (
                  <div
                    key={idx}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 h-full"
                  >
                    <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[85px]">
                      <CardBody>
                        <div></div>
                      </CardBody>
                    </Card>
                  </div>
                ))
              : KPI_DATA.map(({ title, price, subtitle }) => (
                  <div
                    key={title}
                    className="xl:col-span-3 lg:col-span-3 col-span-6"
                  >
                    <Card className="shadow-sm border border-gray-200 !rounded-lg h-[85px]">
                      <CardBody className="p-4 h-full flex flex-col justify-center">
                        <div className="flex justify-between">
                          <Typography className="font-medium !text-sm">
                            {title}
                          </Typography>
                          <Typography className="font-medium !text-sm">
                            {price}
                          </Typography>
                        </div>
                        <Typography className="font-small text-[12px]">
                          {subtitle}
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                ))}
          </div>
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
            <CardBody className="!p-4 !pt-2">
              <RecentActivity isLoading={isLoading} />
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
