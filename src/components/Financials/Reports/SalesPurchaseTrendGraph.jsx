import React, { useMemo } from "react";

import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";
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
            position: "top",
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
          // grid: {
          //   show: true,
          //   borderColor: "##EEEEEE",
          //   strokeDashArray: 5,
          //   xaxis: {
          //     lines: {
          //       show: true,
          //     },
          //   },
          //   padding: {
          //     top: 5,
          //     right: 20,
          //   },
          // },
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
            //   show: false,
            // },
            // axisBorder: {
            //   show: false,
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

const SalesPurchaseTrendGraph = () => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6">Sales vs Purchases Trend</Typography>
      </CardHeader>
      <CardBody className="!p-2">
        {/** chart */}
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <AreaChart
            colors={["#4CAF50", "#2196F3", "#673AB7"]}
            options={{
              xaxis: {
                categories: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
              },
            }}
            series={[
              {
                name: "Sales",
                data: [
                  0, 200, 180, 350, 500, 680, 800, 800, 880, 900, 680, 900,
                ],
              },
              {
                name: "Purchase",
                data: [
                  200, 160, 150, 260, 600, 790, 900, 660, 720, 800, 500, 800,
                ],
              },
            ]}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default SalesPurchaseTrendGraph;
