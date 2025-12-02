import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import Chart from "react-apexcharts";

const GSTLiability = () => {
  const [] = useState();

  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <div>
          <Typography variant="h6" color="blue-gray">
            GST Liability
          </Typography>
        </div>
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
              labels: ["CGST", "SGST", "IGST"],
              colors: ["#93C5FD", "#67E8F9", "#C4B5FD"],
              // tooltip: {
              //   enabledOnSeries: [''],
              // },
            }}
            series={[3000, 4000, 3000]}
            type="donut"
            width="300"
          />
        </div>
        <div className="flex gap-2 flex-wrap justify-between px-4 !mt-4 ">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-10 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-[#93C5FD] rounded-full"></span>
                <Typography variant="small" className="font-normal">
                  CGST
                </Typography>
              </div>
              <Typography variant="small" className="font-normal">
                ₹ 3000
              </Typography>
            </div>
            <div className="flex items-center gap-10 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-[#67E8F9] rounded-full"></span>
                <Typography variant="small" className="font-normal">
                  SGST
                </Typography>
              </div>
              <Typography variant="small" className="font-normal">
                ₹ 3000
              </Typography>
            </div>
            <div className="flex items-center gap-10 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-[#C4B5FD] rounded-full"></span>
                <Typography variant="small" className="font-normal">
                  IGST
                </Typography>
              </div>
              <Typography variant="small" className="font-normal">
                ₹ 4000
              </Typography>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default GSTLiability;
