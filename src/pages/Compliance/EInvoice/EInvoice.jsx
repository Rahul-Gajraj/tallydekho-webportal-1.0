import React from "react";

import KPIStrip from "@/components/common/KPIStrip";

const KPI_DATA = [
  {
    title: "Generated",
    price: "191",
  },
  {
    title: "Pending",
    price: "14",
  },
  {
    title: "Error",
    price: "9",
  },
  {
    title: "Cancelled",
    price: "0",
  },
  {
    title: "Avg Gen Time",
    price: "3.4 s",
  },
];

const EInvoice = () => {
  return (
    <div className="mx-5">
      <section className="mx-auto mt-8">
        <div className="grid grid-cols-12 xl:grid-cols-5 md:grid-cols-12 sm:grid-cols-6 items-center md:gap-2.5 gap-4">
          {KPI_DATA.map((data) => (
            <div
              key={data.title}
              className="xl:col-span-1 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12"
            >
              <KPIStrip {...data} />
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default EInvoice;
