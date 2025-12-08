import React, { useMemo, useState } from "react";

import Chart from "react-apexcharts";

import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Option,
  Select,
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
              opacityFrom: 0,
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
  return (
    <Card className="col-span-8 shadow-sm border border-gray-200 !rounded-lg">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6" color="blue-gray">
          Purchases vs Payments — Last 30 Days
        </Typography>
        <Typography variant="small" className="font-normal text-gray-600 mt-1">
          Updated: 24/11/2025, 17:58:16
        </Typography>
      </CardHeader>
      <CardBody className="!p-2">
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
                200, 180, 350, 500, 680, 800, 800, 880, 900, 680, 900, 0, 200,
                180, 350, 500, 680,
              ],
            },
            {
              name: "Payments",
              data: [
                200, 160, 150, 260, 600, 790, 900, 660, 720, 800, 500, 800, 200,
                160, 150, 260, 600, 790, 900, 660, 720, 800, 500, 800, 200, 160,
                150, 260, 600, 790,
              ],
            },
          ]}
        />
      </CardBody>
    </Card>
  );
};

const KpiCard = ({ title, price, value, color, bg }) => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardBody className="p-4">
        <div className="flex justify-between items-center">
          <Typography className="font-medium !text-xs text-gray-600">
            {title}
          </Typography>
          {value ? (
            <Chip
              className={"px-2 py-1"}
              value={value}
              style={{ color, backgroundColor: bg }}
            />
          ) : (
            <span className="h-[24px]"></span>
          )}
        </div>
        <Typography color="blue-gray" className="mt-1 font-bold text-2xl">
          {price}
        </Typography>
      </CardBody>
    </Card>
  );
};

const PurchaseReport = () => {
  const [value, setValue] = useState("0");

  const data = [
    {
      title: "Today",
      price: "₹92,000",
      value: "+14%",
      color: "#108F6F",
      bg: "#EAF8F4",
      // action: "(This Month)",
    },
    {
      title: "MTD",
      price: "₹1.27M",
      value: "-10%",
      color: "#F23031",
      bg: "#FFEBEA",
      // action: "(This Month)",
    },
    {
      title: "YTD",
      price: "₹7.4M",
      value: "+12%",
      color: "#108F6F",
      bg: "#EAF8F4",
      // action: "Orders awaiting dispatch",
    },
    {
      title: "Avg Ticket",
      price: "₹14,350",
      value: "+12%",
      color: "#108F6F",
      bg: "#EAF8F4",
      // action: "(Last 30 days)",
    },
    {
      title: "Credit Notes",
      price: "3",
      // action: "(Last 30 days)",
    },
    {
      title: "Outstanding",
      price: "₹812k",
      // action: "(Last 30 days)",
    },
  ];

  return (
    <section className="mx-auto mt-[90px]">
      <Card className="shadow-sm border border-gray-200 !rounded-lg p-4">
        <div className="flex md:items-center gap-x-5 flex-col md:flex-row justify-between">
          <Typography className="font-bold text-xl text-black">
            Purchase
          </Typography>
          <div>
            <Select
              className="bg-white-600"
              label="Period"
              value={value}
              onChange={(val) => setValue(val)}
              containerProps={{
                style: {
                  minWidth: "200px",
                },
              }}
            >
              <Option value="0">This Month</Option>
              <Option value="1">Last 30 Days</Option>
              <Option value="2">This Quarter</Option>
            </Select>
          </div>
        </div>
      </Card>
      <div className="mt-6 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-5">
        {data.map((props, key) => (
          <KpiCard key={key} {...props} />
        ))}
      </div>
      <div className="grid grid-cols-12 gap-5 my-5">
        <PurchaseReceiptsComparision />
        <Card className="col-span-4 shadow-sm border border-gray-200 !rounded-lg">
          <CardHeader
            floated={false}
            shadow={false}
            className="p-2 flex gap-6 flex-wrap items-center justify-between"
          >
            <Typography color="black" className="font-bold text-lg">
              Alerts
            </Typography>
          </CardHeader>
          <CardBody className="!p-2 mx-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <Typography className="font-semibold text-sm">
                  Pending Amounts
                </Typography>
                <Typography className="text-sm font-medium">
                  Sigma Suppliers — ₹ 32,000
                </Typography>
                <Typography className="text-sm font-medium">
                  Alpha Wholesale — ₹ 45,000
                </Typography>
              </div>
              <div className="flex flex-col gap-2">
                <Typography className="font-semibold text-sm">
                  High Credit Customers
                </Typography>
                <Typography className="text-sm font-medium">
                  Alpha Wholesale — ₹ 45,000
                </Typography>
                <Typography className="text-sm font-medium">
                  Omega Traders — ₹ 21,000
                </Typography>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default PurchaseReport;
