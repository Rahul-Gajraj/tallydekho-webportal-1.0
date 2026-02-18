import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import Chart from "react-apexcharts";

const GSTLiability = () => {
  const [liabilityData, setLiabilityData] = useState([3000, 4000, 3000]);

  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <div>
          <Typography variant="h6">GST Liability</Typography>
        </div>
      </CardHeader>
      <CardBody className={liabilityData.length > 0 ? "!p-2" : "!pt-2"}>
        {liabilityData.length > 0 ? (
          <div className="flex justify-center">
            <Chart
              options={{
                dataLabels: {
                  enabled: false,
                },
                legend: {
                  // show: false,
                  position: "bottom",
                  itemMargin: {
                    vertical: 10,
                    horizontal: 10,
                  },
                },
                // fill: {
                //   type: "gradient",
                // },
                labels: ["CGST", "SGST", "IGST"],
                colors: ["#b5fdbc", "#67E8F9", "#C4B5FD"],
                // tooltip: {
                //   enabledOnSeries: [''],
                // },
              }}
              series={[3000, 4000, 3000]}
              type="donut"
              width="300"
              height={340}
            />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[350px] gap-2 bg-[#F6F7F9]">
            <img
              src="/media/icons/pie_graph.svg"
              alt="pie_graph"
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

export default GSTLiability;
