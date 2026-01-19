import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import Chart from "react-apexcharts";

const ExpenseBreakdownGraph = () => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6">Expense Breakdown</Typography>
      </CardHeader>
      <CardBody className="!p-2">
        <div className="flex justify-center">
          <Chart
            options={{
              chart: {
                height: 340,
              },
              dataLabels: {
                enabled: false,
              },
              fill: {
                type: "gradient",
              },
              legend: {
                // show: false,
                position: "bottom",
                itemMargin: {
                  vertical: 10,
                  horizontal: 10,
                },
              },
              labels: [
                "Direct Expense %",
                "Indirect Expense %",
                "Direct Income %",
                "Indirect Income %",
              ],
              plotOptions: {
                pie: {
                  donut: {
                    size: "72%", // keeps donut big
                  },
                },
              },
              colors: ["#93c5fd", "#67e8f9", "#108f6f", "#f46a6c"],
            }}
            series={[3000, 4000, 3000, 4000]}
            type="donut"
            width="300"
            height={340}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default ExpenseBreakdownGraph;
