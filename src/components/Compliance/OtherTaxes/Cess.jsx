import React from "react";

import { Card, CardBody, Typography } from "@material-tailwind/react";

const KPI_DATA = [
  { title: "Cess Accrued", price: "₹67K" },
  { title: "Cess Paid", price: "₹58K" },
  { title: "Pending Cess", price: "₹9K" },
  { title: "Interest", price: "₹0.6K" },
];

const CESS = ({ isLoading }) => {
  return (
    <>
      <div className="grid grid-cols-12 md:gap-2.5 gap-4">
        {isLoading
          ? [...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12 h-full"
              >
                <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[52px]">
                  <CardBody>
                    <div></div>
                  </CardBody>
                </Card>
              </div>
            ))
          : KPI_DATA.map(({ title, price }) => (
              <div
                key={title}
                className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-full"
              >
                <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
                  <CardBody className="p-4">
                    <div className="flex items-center justify-between">
                      <Typography className="font-medium !text-sm">
                        {title}
                      </Typography>
                      <Typography className="font-medium !text-sm">
                        {price}
                      </Typography>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
      </div>
    </>
  );
};

export default CESS;
