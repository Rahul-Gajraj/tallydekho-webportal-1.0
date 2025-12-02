import React from "react";

import {
  Button,
  Typography,
  Card,
  CardBody,
  Chip,
} from "@material-tailwind/react";

const KpiCard = ({ title, value, price, color, bg }) => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardBody className="p-4">
        <div className="flex justify-between items-center">
          <Typography className="font-medium !text-xs text-gray-600">
            {title}
          </Typography>
          <Chip
            className={"px-2 py-1"}
            value={value}
            style={{ color, backgroundColor: bg }}
          />
        </div>
        <Typography color="blue-gray" className="mt-1 font-bold text-2xl">
          {price}
        </Typography>
      </CardBody>
    </Card>
  );
};

const data = [
  {
    title: "Cash In Hand",
    value: "+14%",
    price: "₹50,846.90",
    color: "#108F6F",
    bg: "#EAF8F4",
  },
  {
    title: "Bank Balance",
    value: "+12%",
    price: "₹10,342",
    color: "#108F6F",
    bg: "#EAF8F4",
  },
  {
    title: "Receivables",
    value: "-10%",
    price: "₹19,720",
    color: "#E53935",
    bg: "#F8DCDC",
  },
  {
    title: "Payables",
    value: "+1.4%",
    price: "₹20,000",
    color: "#108F6F",
    bg: "#EAF8F4",
  },
  {
    title: "Loans & ODs",
    value: "-10%",
    price: "₹19,720",
    color: "#E53935",
    bg: "#F8DCDC",
  },
];

const KPIStrip = () => {
  return (
    <section className="mx-auto mt-[90px]">
      {/* <div className="flex justify-between md:items-center gap-y-3 flex-col md:flex-row">
        <div>
          <Typography className="font-bold">Overall Performance</Typography>
          <Typography variant="small" className="font-normal text-gray-600">
            Upward arrow indicating an increase in revenue compared to the
            previous period.
          </Typography>
        </div>
      </div> */}
      <div className="mt-8 grid grid-cols-12 xl:grid-cols-5 md:grid-cols-12 sm:grid-cols-6 items-center md:gap-2.5 gap-4">
        {data.map((props, key) => (
          <div
            key={key}
            // className="w-auto"
            className="xl:col-span-1 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12"
          >
            <KpiCard key={key} {...props} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default KPIStrip;
