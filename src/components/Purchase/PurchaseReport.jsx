import React, { useMemo, useState } from "react";

import Chart from "react-apexcharts";

import {
  Card,
  CardBody,
  CardHeader,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

import merge from "deepmerge";

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

const PurchaseReceiptsComparision = () => {
  const [purchaseData, setPurchaseData] = useState([
    {
      name: "Purchases",
      data: [
        0, 200, 180, 350, 500, 680, 800, 800, 880, 900, 680, 900, 0, 200, 180,
        350, 500, 680, 800, 800, 880, 900, 680, 900, 0, 200, 180, 350, 500, 680,
      ],
    },
    {
      name: "Payments",
      data: [
        200, 160, 150, 260, 600, 790, 900, 660, 720, 800, 500, 800, 200, 160,
        150, 260, 600, 790, 900, 660, 720, 800, 500, 800, 200, 160, 150, 260,
        600, 790,
      ],
    },
  ]);

  return (
    <Card className="xl:col-span-8 col-span-12 shadow-sm border border-gray-200 !rounded-lg">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6">
          Purchases vs Payments — Last 30 Days
        </Typography>
        <Typography variant="small" className="font-normal mt-1">
          Updated: 24/11/2025, 17:58:16
        </Typography>
      </CardHeader>
      <CardBody className={purchaseData.length > 0 ? "!p-2" : "!pt-2"}>
        {purchaseData.length > 0 ? (
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
                  name: "Purchases",
                  data: [
                    0, 200, 180, 350, 500, 680, 800, 800, 880, 900, 680, 900, 0,
                    200, 180, 350, 500, 680, 800, 800, 880, 900, 680, 900, 0,
                    200, 180, 350, 500, 680,
                  ],
                },
                {
                  name: "Payments",
                  data: [
                    200, 160, 150, 260, 600, 790, 900, 660, 720, 800, 500, 800,
                    200, 160, 150, 260, 600, 790, 900, 660, 720, 800, 500, 800,
                    200, 160, 150, 260, 600, 790,
                  ],
                },
              ]}
            />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[350px] gap-2 bg-[#F6F7F9]">
            <img
              src="/media/icons/line_graph.svg"
              alt="line_graph"
              className="h-5 w-5"
            />
            <Typography className="!text-[#6f7c97]">
              Report Visualization
            </Typography>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

const ALERTS = [
  {
    title: "Sigma Suppliers — ₹ 32,000",
    img: <img src="/media/alerts/warning.svg" className="h-5 w-5 mt-[3px]" />,
  },
  {
    title: "Alpha Wholesale — ₹ 45,000",
    img: <img src="/media/alerts/warning.svg" className="h-6 w-6 mt-[3px]" />,
  },
  {
    title: "Omega Traders — ₹ 21,000",
    img: <img src="/media/alerts/error.svg" className="h-6 w-6 mt-[3px]" />,
  },
];

const PurchaseReport = () => {
  return (
    <section className="mx-auto">
      <div className="grid grid-cols-12 gap-5 my-5">
        <PurchaseReceiptsComparision />
        <Card className="xl:col-span-4 col-span-12 shadow-sm border border-gray-200 !rounded-lg">
          <CardHeader
            floated={false}
            shadow={false}
            className="p-2 flex gap-6 flex-wrap items-center justify-between"
          >
            <Typography className="font-bold text-lg">Alerts</Typography>
          </CardHeader>
          <CardBody className="!p-2 !pt-0 mx-4">
            {ALERTS.length > 0 ? (
              <List className="pt-0 gap-4">
                {ALERTS.map(({ title, img }) => (
                  <Card key={title} className="border shadow-none">
                    <ListItem className="items-start hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]">
                      <ListItemPrefix className="items-start mr-2">
                        {img}
                      </ListItemPrefix>
                      <Typography>{title}</Typography>
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
                <Typography className="!text-[#6f7c97]">No Alerts</Typography>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default PurchaseReport;
