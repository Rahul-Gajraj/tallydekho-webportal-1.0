import React, { useState } from "react";

import { Card, CardBody, Typography } from "@material-tailwind/react";

import KPIStrip from "@/components/common/KPIStrip";
import GSTInfo from "@/components/Compliance/GST/GSTInfo";
import UnmatchedGSTDrawer from "@/components/Compliance/GST/UnmatchedGSTDrawer";

const KPI_DATA = [
  { title: "GST Collected", price: "₹475K", subtitle: "Sum of outward tax" },
  { title: "ITC Balance", price: "₹392K", subtitle: "Input tax" },
  { title: "Net Payable", price: "₹83K", subtitle: "Outward - Input" },
  // { title: "Unwatched Invoices", price: "₹83K" },
];

const GST = () => {
  const [isGSTDrawerOpen, setIsGSTDrawerOpen] = useState(false);

  const handleGSTDrawerOpen = () => {
    setIsGSTDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <div className="mx-5 overflow-y-scroll">
        <section className="mx-auto">
          <Card className="shadow-sm border border-gray-200 !rounded-lg p-4 mt-8">
            <Typography className="font-bold text-xl">GST</Typography>
          </Card>
        </section>
        <section className="mt-5">
          <div className="grid grid-cols-12 items-center md:gap-2.5 gap-4">
            {KPI_DATA.map((data) => (
              <div
                key={data.title}
                className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12 h-full"
              >
                <KPIStrip {...data} />
              </div>
            ))}
            <div
              className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12 h-full cursor-pointer"
              onClick={() => handleGSTDrawerOpen()}
            >
              <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
                <CardBody className="p-4">
                  <Typography className="font-medium !text-sm">
                    Unwatched Invoices
                  </Typography>
                  <Typography className="mt-1 font-bold text-2xl">
                    ₹83K
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <GSTInfo />
        </section>
      </div>
      <UnmatchedGSTDrawer
        open={isGSTDrawerOpen}
        toggleDrawer={handleGSTDrawerOpen}
      />
    </>
  );
};

export default GST;
