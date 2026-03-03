import React, { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import Chart from "react-apexcharts";

import MyEntriesTable from "@/components/Compliance/AuditTrial/MyEntriesTable";
import DayBookTable from "@/components/Compliance/AuditTrial/DayBookTable";

const KPI_DATA = [
  { title: "Voucher Created", price: "4392" },
  { title: "Edited", price: "117" },
  { title: "Deleted", price: "8" },
  { title: "Net Dr", price: "₹72.4M" },
  { title: "Net Cr", price: "₹72.4M" },
];

const ENTRIES = [
  {
    title: "Payment - HDFC -> Rent",
    amount: "Cr ₹75,000",
    entryDate: "07 May",
    entryNo: "PV-2098",
  },
  {
    title: "Receipt - ICICI -> Sales",
    amount: "Dr ₹45,000",
    entryDate: "07 May",
    entryNo: "RV-2099",
  },
  {
    title: "Journal - Office Expenses",
    amount: "Dr ₹12,500",
    entryDate: "07 May",
    entryNo: "JV-2100",
  },
  {
    title: "Payment - HDFC -> Rent",
    amount: "Cr ₹75,000",
    entryDate: "07 May",
    entryNo: "PV-2098",
  },
  {
    title: "Receipt - ICICI -> Sales",
    amount: "Dr ₹45,000",
    entryDate: "07 May",
    entryNo: "RV-2099",
  },
];

const EntryChart = ({ isLoading }) => {
  const [entryChartData, setEntryChartData] = useState([
    {
      name: "Cash In",
      data: [
        100, 150, 130, 120, 110, 170, 100, 150, 130, 120, 110, 170, 100, 150,
        130, 120, 110, 170, 100, 150, 130, 120, 110, 170, 100, 150, 130, 120,
        110, 170,
      ],
    },
  ]);

  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6">Entry Charts</Typography>
      </CardHeader>
      {isLoading ? (
        <Card className="transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[360px] mx-6 mb-6">
          <CardBody>
            <div></div>
          </CardBody>
        </Card>
      ) : (
        <CardBody className={entryChartData.length > 0 ? "!p-2" : "!pt-2"}>
          {entryChartData.length > 0 ? (
            <div className="overflow-x-auto overflow-y-hidden">
              <Chart
                type="bar"
                height={350}
                series={entryChartData}
                options={{
                  // fill: {
                  //   type: "gradient",
                  // },
                  plotOptions: {
                    bar: {
                      borderRadius: 5,
                      borderRadiusApplication: "end", // 'around', 'end'
                      borderRadiusWhenStacked: "all", // 'all', 'last'
                      // horizontal: true,
                      barHeight: "80%",
                    },
                    toolbar: {
                      show: false,
                    },
                  },
                  dataLabels: {
                    enabled: false,
                    //   offsetX: -6,
                    //   style: {
                    //     fontSize: "12px",
                    //     colors: ["#fff"],
                    //   },
                  },
                  stroke: {
                    show: true,
                    width: 1,
                    colors: ["#fff"],
                  },
                  tooltip: {
                    shared: true,
                    intersect: false,
                  },
                  xaxis: {
                    categories: Array(31)
                      .fill(0, 0, 31)
                      .map((_, idx) => `${idx + 1} Apr`),
                    tickPlacement: "on",
                  },
                  yaxis: {
                    show: true,
                    stepSize: 50,
                    axisTicks: {
                      show: true,
                    },
                    axisBorder: {
                      show: true,
                    },
                  },
                  chart: {
                    toolbar: {
                      show: false,
                    },
                    zoom: {
                      enabled: false,
                    },
                  },
                  colors: ["#4BB167"],
                }}
              />
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-[350px] gap-2 bg-[#F6F7F9]">
              <img
                src="/media/icons/bar_graph.svg"
                alt="bar_graph"
                className="h-5 w-5"
              />
              <Typography className="!text-[#6f7c97]">
                Report Visualization
              </Typography>
            </div>
          )}
        </CardBody>
      )}
    </Card>
  );
};

const AuditTrial = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="mx-5 overflow-y-scroll mt-8">
      <div className="grid xl:col-span-5 lg:grid-cols-5 md:grid-cols-6 sm:grid-cols-6 grid-cols-1 gap-4">
        {isLoading
          ? [...Array(5)].map((_, idx) => (
              <div
                key={idx}
                className="xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-3 col-span-12 h-full"
              >
                <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[52px]">
                  <CardBody>
                    <div></div>
                  </CardBody>
                </Card>
              </div>
            ))
          : KPI_DATA.map(({ title, price }) => (
              <div
                key={title}
                className="xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-3 col-span-12"
              >
                <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
                  <CardBody className="p-4">
                    <div className="flex items-center justify-between">
                      <Typography className="font-medium !text-sm">
                        {title}
                      </Typography>
                      <Typography className="font-medium !text-sm">
                        {price}
                      </Typography>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
      </div>
      <div className="grid grid-cols-12 gap-5 my-5">
        <div className="col-span-8">
          <EntryChart isLoading={isLoading} />
        </div>
        <div className="col-span-4">
          <Card className="shadow-sm border border-gray-200 !rounded-lg">
            <CardHeader
              floated={false}
              shadow={false}
              className="p-0 flex gap-6 flex-wrap items-center justify-between"
            >
              <Typography variant="h6">Latest Entries</Typography>
            </CardHeader>
            <CardBody className="!px-4 !pb-5 !pt-2">
              <div className="grid grid-cols-4 gap-4">
                {isLoading
                  ? [...Array(5)].map((_, idx) => (
                      <Card
                        key={idx}
                        className="col-span-4 shadow-none border transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[61px]"
                      >
                        <CardBody>
                          <div></div>
                        </CardBody>
                      </Card>
                    ))
                  : ENTRIES.map(
                      ({ title, amount, entryDate, entryNo }, idx) => (
                        <Card
                          key={idx}
                          className="col-span-4 shadow-none border"
                        >
                          <CardBody className="flex justify-between py-2 px-3 items-center">
                            <div className="flex gap-3 items-center">
                              <div>
                                <Typography className="text-[14px]">
                                  {entryNo}
                                </Typography>
                                <img src="" alt="coin" />
                              </div>
                              <div>
                                <Typography className="text-[14px]">
                                  {title}
                                </Typography>
                                <Typography className="text-[14px]">
                                  {entryDate}
                                </Typography>
                              </div>
                            </div>
                            <Typography className="text-[14px]">
                              {amount}
                            </Typography>
                          </CardBody>
                        </Card>
                      )
                    )}
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-12">
          <Card className="shadow-sm border border-gray-200 !rounded-lg">
            <CardBody>
              <Tabs value="day_book">
                <TabsHeader>
                  <Tab value="day_book">Day Book</Tab>
                  <Tab value="my_entries">My Entries</Tab>
                </TabsHeader>
                <TabsBody>
                  <TabPanel value="day_book">
                    <DayBookTable isLoading={isLoading} />
                  </TabPanel>
                  <TabPanel value="my_entries">
                    <MyEntriesTable isLoading={isLoading} />
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuditTrial;
