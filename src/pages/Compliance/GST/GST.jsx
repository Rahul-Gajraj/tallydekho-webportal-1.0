import React, { useEffect, useState } from "react";

import { Card, CardBody, Typography } from "@material-tailwind/react";

import KPIStrip from "@/components/common/KPIStrip";
import GSTInfo from "@/components/Compliance/GST/GSTInfo";
import UnmatchedGSTDrawer from "@/components/Compliance/GST/UnmatchedGSTDrawer";

const KPI_DATA = [
  { title: "GST Collected", price: "₹475K"  },
  { title: "ITC Balance", price: "₹392K" },
  { title: "Net Payable", price: "₹83K" },
  // { title: "Unwatched Invoices", price: "₹83K" },
];

const GST = () => {
  const [isGSTDrawerOpen, setIsGSTDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleGSTDrawerOpen = () => {
    setIsGSTDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <div className="mx-5 overflow-y-scroll">
        <div className="grid grid-cols-12 items-center md:gap-2.5 gap-4 mt-8">
          {isLoading
            ? [...Array(3)].map((_, idx) => (
                <div
                  key={idx}
                  className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12 h-full"
                >
                  <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[104px]">
                    <CardBody>
                      <div></div>
                    </CardBody>
                  </Card>
                </div>
              ))
            : KPI_DATA.map((data) => (
                <div
                  key={data.title}
                  className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12 h-full"
                >
                  <KPIStrip {...data} />
                </div>
              ))}
          {isLoading ? (
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12 h-full">
              <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[104px]">
                <CardBody>
                  <div></div>
                </CardBody>
              </Card>
            </div>
          ) : (
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
          )}
        </div>
        <section className="mt-5">
          <GSTInfo isLoading={isLoading} />
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
