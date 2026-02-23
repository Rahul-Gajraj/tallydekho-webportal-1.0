import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import Chart from "react-apexcharts";

const PLTrends = ({ isLoading }) => {
  const [plData, setPLData] = useState([3000, 4000, 3000]);

  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6">P&L Trend (Totals)</Typography>
      </CardHeader>
      {isLoading ? (
        <CardBody className="h-[350px] bg-[#ECEEF1] rounded !mx-6 mb-6 mt-2">
          <div></div>
        </CardBody>
      ) : (
        <CardBody className={plData.length > 0 ? "!p-2" : "!pt-2"}>
          {plData.length > 0 ? (
            <div className="overflow-x-auto overflow-y-hidden">
              <Chart
                type="bar"
                height={350}
                series={[
                  {
                    name: "Cash Flow",
                    data: [
                      1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16,
                      -11.1, -6.09, 0.34, 3.88,
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
                      colors: {
                        ranges: [
                          {
                            from: 0,
                            to: 100,
                            color: "#16A34A",
                          },
                          {
                            from: -100,
                            to: 0,
                            color: "#F59E0B",
                          },
                        ],
                      },
                      columnWidth: "30%",
                    },
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  yaxis: {
                    title: {
                      text: "Growth",
                    },
                    labels: {
                      formatter: function (y) {
                        return y.toFixed(0) + "%";
                      },
                    },
                  },
                  xaxis: {
                    categories: [
                      "Apr",
                      "May",
                      "June",
                      "July",
                      "Aug",
                      "Sept",
                      "Oct",
                      "Nov",
                      "Dec",
                      "Jan",
                      "Feb",
                      "March",
                    ],
                    labels: {
                      rotate: -90,
                    },
                    tickPlacement: "on",
                  },
                  chart: {
                    toolbar: {
                      show: false,
                    },
                    zoom: {
                      enabled: false,
                    },
                  },
                  // colors: ["#16A34A", "#DC2626"],
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

export default PLTrends;
