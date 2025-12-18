import React, { useMemo, useState } from "react";

import Chart from "react-apexcharts";

import {
  Alert,
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Tooltip,
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

const KpiCard = ({ title, price, value, color, bg, img }) => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardBody className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {img}
            <Typography className="font-medium !text-sm text-black">
              {title}
            </Typography>
          </div>
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
        <Typography color="black" className="mt-1 font-bold text-2xl">
          {price}
        </Typography>
      </CardBody>
    </Card>
  );
};

const SalesReport = () => {
  const [value, setValue] = useState("0");

  const data = [
    {
      title: "Today",
      price: "₹92,000",
      value: "+14%",
      color: "#108F6F",
      bg: "#EAF8F4",
      img: <img src="/media/kpi-strip/today.svg" className="h-5 w-5" />,
    },
    {
      title: "MTD",
      price: "₹1.27M",
      value: "-10%",
      color: "#F23031",
      bg: "#FFEBEA",
      img: <img src="/media/kpi-strip/mtd.svg" className="h-5 w-5" />,
    },
    {
      title: "YTD",
      price: "₹7.4M",
      value: "+12%",
      color: "#108F6F",
      bg: "#EAF8F4",
      img: <img src="/media/kpi-strip/mtd.svg" className="h-5 w-5" />,
    },
    {
      title: "Avg Ticket",
      price: "₹14,350",
      value: "+12%",
      color: "#108F6F",
      bg: "#EAF8F4",
      img: <img src="/media/kpi-strip/avg_ticket.svg" className="h-5 w-5" />,
    },
    {
      title: "Outstanding",
      price: "₹812k",
      value: "+10%",
      color: "#108F6F",
      bg: "#EAF8F4",
      img: <img src="/media/kpi-strip/outstanding.svg" className="h-5 w-5" />,
    },
    {
      title: "Credit Notes",
      price: "3",
      img: <img src="/media/kpi-strip/credit_notes.svg" className="h-5 w-5" />,
    },
  ];

  const alerts = [
    {
      title: "14 invoices due for IRN generation",
      img: <img src="/media/alerts/warning.svg" className="h-5 w-5 mt-[3px]" />,
    },
    {
      title: "9 E-Way Bills expiring in <24 hrs",
      img: <img src="/media/alerts/warning.svg" className="h-6 w-6 mt-[3px]" />,
    },
    {
      title: "Credits left: 28",
      img: <img src="/media/alerts/warning.svg" className="h-6 w-6 mt-[3px]" />,
    },
    {
      title: "14 invoices pending IRN",
      img: <img src="/media/alerts/warning.svg" className="h-5 w-5 mt-[3px]" />,
    },
  ];

  return (
    <section className="mx-auto mt-[90px]">
      <Card className="shadow-sm border border-gray-200 !rounded-lg p-4">
        <div className="flex md:items-center gap-3 flex-col md:flex-row justify-between">
          <Typography className="font-bold text-xl text-black">
            Sales
          </Typography>
          <Tooltip
            placement="bottom"
            className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10 text-black"
            content="E-Way Bill"
          >
            <IconButton
              variant="text"
              className={
                "cursor-pointer p-3 rounded-full fill-black hover:fill-[#108F6F] hover:bg-transparent focus:fill-[#108F6F] mr-10"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M3.6.01h16.71c1.42.19,2.54,1.37,2.67,2.81v17.61c-.19,1.81-1.7,3-3.51,2.83-.76-.07-1.66-.61-2.41-.81-.54-.14-.76-.04-1.25.15-1.62.62-3.04,1.85-4.87,1.23-.95-.33-1.9-.94-2.84-1.28-.44-.16-.69-.22-1.15-.1-.72.19-1.58.7-2.32.8-1.84.23-3.4-.96-3.6-2.81V2.78C1.17,1.38,2.24.27,3.6.01ZM3.86,1.7c-.65.12-1.11.67-1.15,1.33v17.18c.53,2.62,2.95.58,4.47.45,1.27-.1,2.89.98,4.08,1.44.65.25.82.24,1.47,0,1.21-.45,2.78-1.55,4.08-1.44,1.09.09,2.57,1.13,3.53.82.54-.17.91-.72.94-1.28V3.04c-.05-.72-.56-1.29-1.29-1.35l-16.13.02Z" />
                <path d="M6.24,5.62h11.44c1.01.1,1.11,1.47.11,1.68H6.22c-.96-.21-.92-1.46.01-1.68Z" />
                <path d="M5.74,11.56c-.46-.5-.17-1.3.48-1.41h11.56c1,.24.9,1.56-.11,1.69H6.38c-.21,0-.5-.13-.64-.28Z" />
                <path d="M6.18,14.65h5.94c.96.18.96,1.49,0,1.67h-5.9c-.92-.2-.95-1.42-.05-1.67Z" />
              </svg>
            </IconButton>
          </Tooltip>
        </div>
      </Card>
      <div className="mt-6 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-5">
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
          </CardHeader>
          <CardBody className="!p-2 !pt-0 mx-4">
            <List className="pt-0 gap-4">
              {alerts.map(({ title, img }) => (
                <Card key={title} className="border shadow-none">
                  <ListItem className="items-start hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]">
                    <ListItemPrefix className="items-start mr-2">
                      {img}
                    </ListItemPrefix>
                    <Typography color="black">{title}</Typography>
                  </ListItem>
                </Card>
              ))}
            </List>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default SalesReport;
