import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import Chart from "react-apexcharts";

const ExpenseBreakdownGraph = ({ isLoading }) => {
  const [expenseData, setExpenseData] = useState([3000, 4000, 3000, 4000]);

  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6">Expense Breakdown</Typography>
      </CardHeader>
      {isLoading ? (
        <Card className="transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[360px] mx-6 mb-6">
          <CardBody>
            <div></div>
          </CardBody>
        </Card>
      ) : (
        <CardBody className={expenseData.length > 0 ? "!p-2" : "!pt-2"}>
          {expenseData.length > 0 ? (
            <div className="flex justify-center">
              <Chart
                options={{
                  chart: {
                    height: 340,
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  // fill: {
                  //   type: "gradient",
                  // },
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
                series={expenseData}
                type="donut"
                width="300"
                height={340}
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
      )}
    </Card>
  );
};

export default ExpenseBreakdownGraph;
