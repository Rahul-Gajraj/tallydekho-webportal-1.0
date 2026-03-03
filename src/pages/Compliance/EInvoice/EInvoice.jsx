import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import KPIStrip from "@/components/common/KPIStrip";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import RecentActivityFilterTable from "@/components/Compliance/E-Invoice/RecentActivityFilterTable";

const KPI_DATA = [
  {
    title: "Generated",
    price: "191",
  },
  {
    title: "Pending",
    price: "14",
  },
  {
    title: "Error",
    price: "9",
  },
  {
    title: "Cancelled",
    price: "0",
  },
  {
    title: "Avg Gen Time",
    price: "3.4 s",
  },
];

const days = [
  "Jan 1",
  "Jan 2",
  "Jan 3",
  "Jan 4",
  "Jan 5",
  "Jan 6",
  "Jan 7",
  "Jan 8",
  "Jan 9",
  "Jan 10",
  "Jan 11",
  "Jan 12",
  "Jan 13",
  "Jan 14",
  "Jan 15",
  "Jan 16",
  "Jan 17",
  "Jan 18",
  "Jan 19",
  "Jan 20",
  "Jan 21",
  "Jan 22",
  "Jan 23",
  "Jan 24",
  "Jan 25",
  "Jan 26",
  "Jan 27",
  "Jan 28",
  "Jan 29",
  "Jan 30",
  "Jan 31",
];

const ERRORS = [
  { title: "Amount Mismatch", amount: "9 Bills" },
  { title: "GST Mismatch", amount: "5 Bills" },
  { title: "Name Mismatch", amount: "3 Bills" },
];

const EInvoice = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="mx-5">
      <section className="mx-auto mt-8">
        <div className="grid grid-cols-12 xl:grid-cols-5 md:grid-cols-12 sm:grid-cols-6 items-center md:gap-2.5 gap-4">
          {isLoading
            ? [...Array(5)].map((_, idx) => (
                <div
                  key={idx}
                  className="xl:col-span-1 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12 h-full"
                >
                  <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[84px]">
                    <CardBody>
                      <div></div>
                    </CardBody>
                  </Card>
                </div>
              ))
            : KPI_DATA.map((data) => (
                <div
                  key={data.title}
                  className="xl:col-span-1 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12"
                >
                  <KPIStrip {...data} />
                </div>
              ))}
        </div>
      </section>
      <section className="my-5">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
              <CardHeader
                floated={false}
                shadow={false}
                className="p-2 flex gap-6 flex-wrap items-center justify-between"
              >
                <Typography variant="h6">Daily Trend Gars</Typography>
              </CardHeader>
              {isLoading ? (
                <CardBody className="h-[375px] bg-[#ECEEF1] rounded !mx-6 mb-4 mt-2">
                  <div></div>
                </CardBody>
              ) : (
                <CardBody className="!p-2">
                  <div className="overflow-x-auto overflow-y-hidden">
                    <Chart
                      type="bar"
                      height={350}
                      series={[
                        {
                          // name: "Cash In",
                          data: [
                            110419, 210419, 110519, 120419, 130419, 113419,
                            150419, 220419, 210519, 210219, 115419, 160819,
                            10419, 210419, 110519, 120419, 130419, 113419,
                            150419, 220419, 210519, 210219, 115419, 160819,
                            110419, 210419, 110519, 120419, 130419, 113419,
                            150419,
                          ],
                        },
                      ]}
                      options={{
                        // fill: {
                        //   type: "gradient",
                        // },
                        plotOptions: {
                          bar: {
                            borderRadius: 5,
                            borderRadiusApplication: "end",
                            borderRadiusWhenStacked: "all",
                            barHeight: "80%",
                          },
                          toolbar: {
                            show: false,
                          },
                        },
                        dataLabels: {
                          enabled: false,
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
                          categories: days,
                          tickPlacement: "on",
                        },
                        yaxis: {
                          show: true,
                          stepSize: 50000,
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
                        colors: ["#41cdff", "#7bffd9"],
                      }}
                    />
                  </div>
                </CardBody>
              )}
            </Card>
          </div>
          <div className="col-span-4">
            <Card className="shadow-sm border border-gray-200 !rounded-lg">
              <CardHeader
                floated={false}
                shadow={false}
                className="p-0 flex gap-6 flex-wrap items-center justify-between"
              >
                <Typography variant="h6">Recent Activity</Typography>
              </CardHeader>
              <CardBody className="!p-4 !pt-2">
                <RecentActivityFilterTable isLoading={isLoading} />
              </CardBody>
            </Card>
            <Card className="shadow-sm border border-gray-200 !rounded-lg mt-5">
              <CardHeader
                floated={false}
                shadow={false}
                className="p-0 flex gap-6 flex-wrap items-center justify-between"
              >
                <Typography variant="h6">Error Leaderboard</Typography>
              </CardHeader>
              <CardBody className="!px-4 !pb-5 !pt-2">
                <div className="grid grid-cols-4 gap-4">
                  {isLoading
                    ? [...Array(3)].map((_, idx) => (
                        <Card
                          key={idx}
                          className="col-span-4 shadow-none border transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[37px]"
                        >
                          <CardBody>
                            <div></div>
                          </CardBody>
                        </Card>
                      ))
                    : ERRORS.map(({ title, amount }) => (
                        <Card
                          key={title}
                          className="col-span-4 shadow-none border"
                        >
                          <CardBody className="flex justify-between py-2 px-3">
                            <Typography className="text-[14px]">
                              {title}
                            </Typography>
                            <Typography className="text-[14px]">
                              {amount}
                            </Typography>
                          </CardBody>
                        </Card>
                      ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EInvoice;
