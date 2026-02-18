import React, { useState } from "react";

import Chart from "react-apexcharts";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const CashFlowTrend = () => {
  const [cashFlowData, setCashFlowData] = useState([
    {
      name: "Cash In",
      data: [
        110419, 210419, 110519, 120419, 130419, 113419, 150419, 220419, 210519,
        310219, 115419, 160819,
      ],
    },
    {
      name: "Cash Out",
      data: [
        110319, 210319, 100519, 100419, 110419, 103419, 130419, 210419, 200519,
        300219, 105419, 130819,
      ],
    },
  ]);

  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <div>
          <Typography variant="h6">Cash Flow Trend</Typography>
        </div>
      </CardHeader>
      <CardBody className={cashFlowData.length > 0 ? "!p-2" : "!pt-2"}>
        {cashFlowData.length > 0 ? (
          <div className="overflow-x-auto overflow-y-hidden">
            <Chart
              type="bar"
              height={350}
              series={cashFlowData}
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
                  categories: [
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sept",
                    "Oct",
                    "Nov",
                    "Dec",
                    "Jan",
                    "Feb",
                    "Mar",
                  ],
                  tickPlacement: "on",
                },
                yaxis: {
                  show: true,
                  stepSize: 110419,
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
                colors: ["#2563EB", "#0EA5E9"],
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
    </Card>
  );
};

export default CashFlowTrend;
