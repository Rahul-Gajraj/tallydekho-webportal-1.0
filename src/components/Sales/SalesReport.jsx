import React, { useMemo, useState } from "react";

import Chart from "react-apexcharts";

import {
  Card,
  CardBody,
  CardHeader,
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

const SalesReceiptsComparision = () => {
  return (
    <Card className="col-span-8 shadow-sm border border-gray-200 !rounded-lg">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6" color="blue-gray">
          Sales vs Receipts — Last 30 Days
        </Typography>
        <Typography variant="small" className="font-normal text-gray-600 mt-1">
          Updated: 24/11/2025, 17:58:16
        </Typography>
      </CardHeader>
      <CardBody className="!p-2">
        {/* <div className="flex gap-2 flex-wrap items-center justify-center px-4 !mt-4 gap-6">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            <Typography variant="small" className="font-normal text-gray-600">
              Sales
            </Typography>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
            <Typography variant="small" className="font-normal text-gray-600">
              Receipts
            </Typography>
          </div>
        </div> */}
        {/** chart */}
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
              name: "Sales",
              data: [
                0, 200, 180, 350, 500, 680, 800, 800, 880, 900, 680, 900, 0,
                200, 180, 350, 500, 680, 800, 800, 880, 900, 680, 900, 0, 200,
                180, 350, 500, 680,
              ],
            },
            {
              name: "Receipts",
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

const KpiCard = ({ title, price, action }) => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardBody className="p-4">
        <div className="flex justify-between items-center">
          <Typography className="font-medium !text-xs text-gray-600">
            {title}
          </Typography>
          <Typography className="font-medium !text-xs text-blue-600 cursor-pointer">
            View
          </Typography>
        </div>
        <Typography color="blue-gray" className="mt-1 font-bold text-2xl">
          {price}
        </Typography>
        <Typography className="font-medium !text-xs text-gray-600">
          {action}
        </Typography>
      </CardBody>
    </Card>
  );
};

const SalesReport = () => {
  const [value, setValue] = useState("0");

  const data = [
    {
      title: "Total Sales",
      price: "₹ 12,45,300",
      action: "(This Month)",
    },
    {
      title: "Total Receipts",
      price: "₹ 9,87,400",
      action: "(This Month)",
    },
    {
      title: "Pending Deliveries",
      price: "34",
      action: "Orders awaiting dispatch",
    },
    {
      title: "Average Invoice Value",
      price: "₹ 10,450",
      action: "(Last 30 days)",
    },
  ];

  return (
    <section className="mx-auto mt-[90px]">
      <Card className="shadow-sm border border-gray-200 !rounded-lg p-4">
        <div className="flex md:items-center gap-x-5 flex-col md:flex-row justify-between">
          <Typography className="font-bold text-xl text-black">
            Sales
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
              color="green"
            >
              <Option
                className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                value="0"
              >
                This Month
              </Option>
              <Option
                className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                value="1"
              >
                Last 30 Days
              </Option>
              <Option
                className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                value="2"
              >
                This Quarter
              </Option>
            </Select>
          </div>
        </div>
      </Card>
      <div className="mt-6 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-center gap-5">
        {data.map((props, key) => (
          <KpiCard key={key} {...props} />
        ))}
      </div>
      <div className="grid grid-cols-12 gap-5 my-5">
        <SalesReceiptsComparision />
        <Card className="col-span-4 shadow-sm border border-gray-200 !rounded-lg">
          <CardHeader
            floated={false}
            shadow={false}
            className="p-2 flex gap-6 flex-wrap items-center justify-between"
          >
            <Typography color="black" className="font-bold text-lg">
              Alerts
            </Typography>
            {/* <Typography
                variant="small"
                className="font-normal text-gray-600 mt-1"
              >
                Updated: 24/11/2025, 17:58:16
              </Typography> */}
          </CardHeader>
          <CardBody className="!p-2 mx-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <Typography className="font-semibold text-sm">
                  Overdue Invoices
                </Typography>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Typography className="text-sm font-medium">
                      INV-1002 — Beta Traders
                    </Typography>
                    <Typography className="text-sm">(₹18,000)</Typography>
                  </div>
                  <Typography className="text-sm font-medium" color="red">
                    12d
                  </Typography>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Typography className="text-sm font-medium">
                      INV-1010 — OldCo
                    </Typography>
                    <Typography className="text-sm">(₹5,600)</Typography>
                  </div>
                  <Typography className="text-sm font-medium" color="red">
                    5d
                  </Typography>
                </div>
                <Typography
                  className="text-sm font-semibold cursor-pointer underline"
                  color="blue"
                >
                  Open register
                </Typography>
              </div>
              <div className="flex flex-col gap-2">
                <Typography className="font-semibold text-sm">
                  High Credit Customers
                </Typography>
                <Typography className="text-sm font-medium">
                  Gamma LLC — ₹75,000
                </Typography>
                <Typography className="text-sm font-medium">
                  Acme Corp — ₹42,000
                </Typography>
                <Typography
                  className="text-sm font-semibold cursor-pointer underline"
                  color="blue"
                >
                  View customers
                </Typography>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default SalesReport;
