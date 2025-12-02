import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import Chart from "react-apexcharts";

const PLTrends = () => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6" color="blue-gray">
          P&L Trend (Totals)
        </Typography>
      </CardHeader>
      <CardBody className="!p-2">
        <Chart
          type="bar"
          height={350}
          series={[
            {
              name: "Cash Flow",
              data: [
                1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1,
                -6.09, 0.34, 3.88,
              ],
            },
          ]}
          options={{
            plotOptions: {
              bar: {
                borderRadius: 5,
                borderRadiusApplication: "end",
                colors: {
                  ranges: [
                    {
                      from: -100,
                      to: 0,
                      color: "#DDD6FE",
                    },
                    {
                      from: -100,
                      to: 0,
                      color: "#FDBA74",
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
            // colors: ["#DDD6FE", "#FDBA74"],
          }}
        />
      </CardBody>
    </Card>
  );
};

export default PLTrends;
