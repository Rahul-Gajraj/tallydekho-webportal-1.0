import React from "react";

import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

import Chart from "react-apexcharts";

const IncomeBreakdownGraph = () => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6">Income Breakdown</Typography>
      </CardHeader>
      <CardBody className="!p-2">
        <div className="flex justify-center">
          <Chart
            options={{
              dataLabels: {
                enabled: false,
              },
              legend: {
                show: false,
                // position: 'bottom'
              },
              labels: ["Direct Income", "Indirect Income"],
              colors: ["#93c5fd", "#67e8f9"],
              // tooltip: {
              //   enabledOnSeries: [''],
              // },
            }}
            series={[3000, 4000]}
            type="donut"
            width="300"
          />
        </div>
        <div className="flex gap-2 flex-wrap justify-between px-4 !mt-4 ">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-[#93C5FD] rounded-full"></span>
                <Typography variant="small" className="font-normal">
                  Direct Income
                </Typography>
              </div>
              <Typography variant="small" className="font-normal">
                ₹ 3000
              </Typography>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-[#67E8F9] rounded-full"></span>
                <Typography variant="small" className="font-normal">
                  Indirect Income
                </Typography>
              </div>
              <Typography variant="small" className="font-normal">
                ₹ 3000
              </Typography>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default IncomeBreakdownGraph;
