import React, { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";

import LoanODFilterTable from "@/components/Financials/LoansODs/LoanODFilterTable";
import KPIStrip from "@/components/common/KPIStrip";

import LoanSummaryFilterTable from "@/components/Financials/LoansODs/Table/LoanSummaryFilterTable";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="mx-5 overflow-y-scroll">
      <div className="grid grid-cols-6 gap-3 mt-8">
        {isLoading
          ? [...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="2xl:col-span-1 xl:col-span-2 lg:col-span-2 sm:col-span-3 col-span-6 h-full"
              >
                <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[94px]">
                  <CardBody>
                    <div></div>
                  </CardBody>
                </Card>
              </div>
            ))
          : LOANS_ODS_KPI.map((kpiData, idx) => (
              <div
                key={idx}
                className="2xl:col-span-1 xl:col-span-2 lg:col-span-2 sm:col-span-3 col-span-6"
              >
                <KPIStrip {...kpiData} />
              </div>
            ))}
      </div>
      <div className="grid grid-cols-3 mt-5 gap-5">
        <Card className="col-span-3 xl:col-span-2 shadow-sm border border-gray-200 !rounded-lg">
          <CardHeader floated={false} shadow={false} className="p-2">
            <Typography className="font-bold text-lg">Loan Summary</Typography>
          </CardHeader>
          <CardBody className="pt-3">
            <LoanSummaryFilterTable isLoading={isLoading} />
          </CardBody>
        </Card>
        <div className="col-span-3 xl:col-span-1 flex xl:flex-col gap-5">
          <Card className="shadow-sm border border-gray-200 !rounded-lg w-full">
            <CardHeader
              floated={false}
              shadow={false}
              className="p-2 flex gap-6 flex-wrap items-center justify-between"
            >
              <Typography className="font-bold text-lg">OD Accounts</Typography>
            </CardHeader>
            <CardBody className="!p-2 !pt-0 mx-4 max-h-[270px] overflow-scroll">
              {isLoading ? (
                <List className="pt-0 gap-3">
                  {[...Array(2)].map((_, idx) => (
                    <Card
                      key={idx}
                      className="transition-all animate-pulse w-full h-[60px] shadow-none bg-[#E1E6EA]"
                    >
                      <div></div>
                    </Card>
                  ))}
                </List>
              ) : ODsAccount.length > 0 ? (
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
              ) : (
                <div className="flex flex-col justify-center items-center h-[230px] gap-2 bg-[#F6F7F9]">
                  <img
                    src="/media/icons/line_graph.svg"
                    alt="line_graph"
                    className="h-5 w-5"
                  />
                  <Typography className="!text-[#6f7c97]">
                    No Accounts
                  </Typography>
                </div>
              )}
            </CardBody>
          </Card>
          <Card className="shadow-sm border border-gray-200 !rounded-lg w-full">
            <CardHeader
              floated={false}
              shadow={false}
              className="p-2 flex gap-6 flex-wrap items-center justify-between"
            >
              <Typography className="font-bold text-lg">Alerts</Typography>
            </CardHeader>
            <CardBody className="!p-2 !pt-0 mx-4 max-h-[270px] overflow-scroll">
              {isLoading ? (
                <List className="pt-0 gap-3">
                  {[...Array(3)].map((_, idx) => (
                    <Card
                      key={idx}
                      className="transition-all animate-pulse w-full h-[44px] shadow-none bg-[#E1E6EA]"
                    >
                      <div></div>
                    </Card>
                  ))}
                </List>
              ) : alerts.length > 0 ? (
                <List className="pt-0 gap-3">
                  {alerts.map(({ title, subtitle, img }) => (
                    <Card key={title} className="border shadow-none">
                      <ListItem className="items-start hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]">
                        <Typography className="text-sm">{title}</Typography>
                      </ListItem>
                    </Card>
                  ))}
                </List>
              ) : (
                <div className="flex flex-col justify-center items-center h-[230px] gap-2 bg-[#F6F7F9]">
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
      <LoanODFilterTable isLoading={isLoading} />
    </div>
  );
};

export default LoanODs;
