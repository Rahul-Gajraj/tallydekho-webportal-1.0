import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const TABLE_ROW = [
  {
    number: "#MS-415646",
    customer: "Viking Burrito",
    amount: "₹14,000",
  },
  {
    number: "#RV-126749",
    customer: "Stone Tech Zone",
    amount: "₹3,000",
  },
  {
    number: "#QW-103578",
    customer: "Fiber Notion",
    amount: "₹20,000",
  },
  {
    number: "#MS-415688",
    customer: "Blue Bird",
    amount: "₹5,000",
  },
  {
    number: "#RV-126300",
    customer: "Code Space",
    amount: "₹2,000",
  },
  {
    number: "#MS-415646",
    customer: "Viking Burrito",
    amount: "₹14,000",
  },
  {
    number: "#RV-126749",
    customer: "Stone Tech Zone",
    amount: "₹3,000",
  },
  {
    number: "#QW-103578",
    customer: "Fiber Notion",
    amount: "₹20,000",
  },
  {
    number: "#MS-415688",
    customer: "Blue Bird",
    amount: "₹5,000",
  },
  {
    number: "#RV-126300",
    customer: "Code Space",
    amount: "₹2,000",
  },
];

const TABLE_HEAD = [
  {
    head: "Number",
  },
  {
    head: "Customer",
  },
  {
    head: "Amount",
  },
];

const InvoiceTable = () => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg flex">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6" color="black">
          Top 10 Invoices
        </Typography>
      </CardHeader>
      <CardBody className="!p-2 mx-4 max-h-[400px] overflow-y-scroll">
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr>
              {TABLE_HEAD.map(({ head }) => (
                <th key={head} className="border-b border-gray-300 !p-4">
                  <div className="flex items-center">
                    <Typography
                      color="blue-gray"
                      variant="small"
                      className="!font-bold"
                    >
                      {head}
                    </Typography>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROW.map(({ number, customer, amount }, index) => {
              const classes = "!p-4 border-b border-gray-300";
              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {number}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="!font-normal text-gray-600"
                    >
                      {customer}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="!font-normal text-gray-600"
                    >
                      {amount}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default InvoiceTable;
