import React, { useMemo } from "react";
import Chart from "react-apexcharts";

import merge from "deepmerge";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const KPI_DATA = [
  { title: "Opening Balance", price: "₹40,500 Dr" },
  { title: "Period Debit", price: "₹1,25,000" },
  { title: "Period Credit", price: "₹1,25,000" },
  { title: "Closing Balance", price: "₹83,000 Dr" },
];

const AreaChart = ({ height = 350, series, colors, options }) => {
  const chartOptions = useMemo(
    () => ({
      colors,
      ...merge(
        {
          chart: {
            height: height,
            type: "area",
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          title: {
            show: "",
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: true,
          },
          markers: {
            size: 0,
            strokeWidth: 0,
            strokeColors: "transparent",
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          grid: {
            show: true,
            borderColor: "##EEEEEE",
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            yaxis: {
              lines: {
                show: true,
              },
            },
            padding: {
              top: 5,
              right: 20,
            },
          },
          tooltip: {
            theme: "light",
          },
          yaxis: {
            labels: {
              style: {
                colors: "#757575",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 300,
              },
            },
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
            },
          },
          xaxis: {
            // axisTicks: {
            //   show: true,
            // },
            // axisBorder: {
            //   show: true,
            // },
            labels: {
              style: {
                colors: "#757575",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 300,
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0,
              stops: [0, 100],
            },
          },
        },
        options ? options : {}
      ),
    }),
    [height, colors, options]
  );

  return (
    <Chart type="area" height={height} series={series} options={chartOptions} />
  );
};

const Summary = ({ isLoading }) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        {isLoading
          ? [...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="xl:col-span-1 lg:col-span-1 col-span-2 h-full"
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
                className="xl:col-span-1 lg:col-span-1 col-span-2"
              >
                <Card className="shadow-sm border border-gray-200 !rounded-lg">
                  <CardBody className="p-4 h-full flex flex-col justify-center">
                    <div className="flex justify-between">
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
      <Card className="mt-3">
        <CardHeader shadow={false} floated={false}>
          <Typography>Period Movement Chart</Typography>
        </CardHeader>
        <CardBody className="p-2">
          <div className="w-full overflow-x-auto overflow-y-hidden">
            <AreaChart
              colors={["#4CAF50", "#2196F3"]}
              options={{
                xaxis: {
                  categories: [
                    "Day 1",
                    "Day 2",
                    "Day 3",
                    "Day 4",
                    "Day 5",
                    "Day 6",
                    "Day 7",
                    "Day 8",
                    "Day 9",
                    "Day 10",
                    "Day 11",
                    "Day 12",
                    "Day 13",
                    "Day 14",
                    "Day 15",
                    "Day 16",
                    "Day 17",
                    "Day 18",
                    "Day 19",
                    "Day 20",
                    "Day 21",
                    "Day 22",
                    "Day 23",
                    "Day 24",
                    "Day 25",
                    "Day 26",
                    "Day 27",
                    "Day 28",
                    "Day 29",
                    "Day 30",
                  ],
                },
              }}
              series={[
                {
                  name: "Debit",
                  data: [
                    0, 200, 180, 350, 500, 680, 800, 800, 880, 900, 680, 900, 0,
                    200, 180, 350, 500, 680, 800, 800, 880, 900, 680, 900, 0,
                    200, 180, 350, 500, 680,
                  ],
                },
                {
                  name: "Credit",
                  data: [
                    200, 160, 150, 260, 600, 790, 900, 660, 720, 800, 500, 800,
                    200, 160, 150, 260, 600, 790, 900, 660, 720, 800, 500, 800,
                    200, 160, 150, 260, 600, 790,
                  ],
                },
              ]}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Summary;
