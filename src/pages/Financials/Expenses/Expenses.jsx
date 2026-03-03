import React, { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

import KPIStrip from "@/components/common/KPIStrip";

import RecentExpenseFilterTable from "@/components/Financials/Expenses/RecentExpensefilterTable";
import ExpenseRegisterFilterTable from "@/components/Financials/Expenses/ExpenseRegisterFilterTable";

const EXPENSES_KPI = [
  {
    title: "Today",
    price: "₹92,000",
    img: <img src="/media/icons/today.svg" alt="toady" className="w-5 h-5" />,
  },
  {
    title: "MTD",
    price: "₹1.27M",
    img: <img src="/media/icons/mtd.svg" alt="mtd" className="w-5 h-5" />,
  },
  {
    title: "YTD",
    price: "₹7.4M",
    img: <img src="/media/icons/ytd.svg" alt="ytd" className="w-5 h-5" />,
  },
  {
    title: "Cash Expenses (%)",
    price: "37%",
    img: (
      <img
        src="/media/icons/cash_expenses.svg"
        alt="Cash Expenses"
        className="w-5 h-5"
      />
    ),
  },
];

const alerts = [
  {
    title: "7 expenses without supporting documents",
    subtitle: "Attach bills to claimm GST input",
    img: <img src="/media/alerts/error.svg" className="h-5 w-5 mt-[3px]" />,
  },
  {
    title: "5 GST mismatch issues in expenses",
    subtitle: "Mismatch with purchase register",
    img: <img src="/media/alerts/warning.svg" className="h-6 w-6 mt-[3px]" />,
  },
  {
    title: "Pending to sync with Tally",
    subtitle: "Last sync 2 days ago",
    img: <img src="/media/alerts/success.svg" className="h-6 w-6 mt-[3px]" />,
  },
];

const Expenses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [kpiData, setKpiData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setKpiData(EXPENSES_KPI);
    }, 1500);
  }, []);

  return (
    <div className="mx-5 overflow-y-scroll">
      <div className="grid grid-cols-4 gap-3 mt-8">
        {isLoading
          ? [...Array(4)].map((_, idx) => (
              <div key={idx} className="col-span-4 sm:col-span-2 lg:col-span-1">
                <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[94px]">
                  <CardBody>
                    <div></div>
                  </CardBody>
                </Card>
              </div>
            ))
          : kpiData.map((data, idx) => (
              <div key={idx} className="col-span-4 sm:col-span-2 lg:col-span-1">
                <KPIStrip {...data} />
              </div>
            ))}
      </div>
      <div className="grid grid-cols-3 mt-5 gap-5">
        <Card className="col-span-3 xl:col-span-2 shadow-sm border border-gray-200 !rounded-lg">
          <CardHeader floated={false} shadow={false} className="p-2">
            <Typography className="font-bold text-lg">
              Recent Expenses
            </Typography>
            <Typography className="font-normal text-sm">
              Last 5 vouchers booked
            </Typography>
          </CardHeader>
          <CardBody className="pt-3">
            <RecentExpenseFilterTable isLoading={isLoading} />
          </CardBody>
        </Card>
        <div className="col-span-3 xl:col-span-1 flex xl:flex-col gap-5">
          <Card className="shadow-sm border border-gray-200 !rounded-lg w-full">
            <CardHeader
              floated={false}
              shadow={false}
              className="p-2 flex gap-6 flex-wrap items-center justify-between"
            >
              <Typography className="font-bold text-lg">Alerts</Typography>
            </CardHeader>
            <CardBody className="!p-2 !pt-0 mx-4 h-[270px] overflow-scroll">
              {isLoading ? (
                <List className="pt-0 gap-3">
                  {[...Array(3)].map((_, idx) => (
                    <Card
                      key={idx}
                      className="transition-all animate-pulse w-full h-[50px] shadow-none bg-[#E1E6EA]"
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
          <Card className="shadow-sm border border-gray-200 !rounded-lg w-full">
            <CardHeader floated={false} shadow={false} className="p-2">
              <Typography className="font-bold text-lg">
                Top Categories (MTD)
              </Typography>
              <Typography className="font-normal text-sm">
                Highest expense heads this month
              </Typography>
            </CardHeader>
            {isLoading ? (
              <Card>
                <CardBody className="transition-all animate-pulse shadow-none bg-[#E1E6EA] mx-6 rounded mb-6 h-[168px]">
                  <div></div>
                </CardBody>
              </Card>
            ) : (
              <CardBody>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-10 justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-[#93C5FD] rounded-full"></span>
                      <Typography variant="small" className="font-normal">
                        Office Rent
                      </Typography>
                    </div>
                    <Typography variant="small" className="font-normal">
                      ₹320,000
                    </Typography>
                  </div>
                  <div className="flex items-center gap-10 justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-[#67E8F9] rounded-full"></span>
                      <Typography variant="small" className="font-normal">
                        Salaries & Wages
                      </Typography>
                    </div>
                    <Typography variant="small" className="font-normal">
                      ₹280,000
                    </Typography>
                  </div>
                  <div className="flex items-center gap-10 justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-[#C4B5FD] rounded-full"></span>
                      <Typography variant="small" className="font-normal">
                        Travel & Conveyance
                      </Typography>
                    </div>
                    <Typography variant="small" className="font-normal">
                      ₹115,000
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
              </CardBody>
            )}
          </Card>
        </div>
      </div>
      <div className="mt-5">
        <ExpenseRegisterFilterTable isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Expenses;
