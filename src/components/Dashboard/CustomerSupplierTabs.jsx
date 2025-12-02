import { useState } from "react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

const CustomerSupplierTabs = () => {
  const CUSTOMERS_TABLE_HEAD = [
    {
      head: "Name",
      customeStyle: "text-center",
    },
    {
      head: "Amount",
      customeStyle: "text-center",
    },
  ];

  const CUSTOMERS_TABLE_ROW = [
    {
      name: "Rahul",
      amount: "₹915.61B",
    },
    {
      name: "Manish",
      amount: "₹313.58B",
    },
    {
      name: "Yash",
      amount: "₹40,600",
    },
    {
      name: "Deepak",
      amount: "₹43.26B",
    },
    {
      name: "Shirish",
      amount: "₹32.45B",
    },
  ];

  const SUPPLIERS_TABLE_HEAD = [
    {
      head: "Invoice",
      customeStyle: "text-center",
    },
    {
      head: "Amount",
      customeStyle: "text-center",
    },
  ];

  const SUPPLIERS_TABLE_ROW = [
    {
      name: "Invoice1",
      amount: "₹915.61B",
    },
    {
      name: "Invoice2",
      amount: "₹313.58B",
    },
    {
      name: "Invoice3",
      amount: "₹40,600",
    },
    {
      name: "Invoice4",
      amount: "₹43.26B",
    },
    {
      name: "Invoice5",
      amount: "₹32.45B",
    },
  ];

  const data = [
    {
      label: "Customers",
      value: "customers",
      desc: (
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr>
              {CUSTOMERS_TABLE_HEAD.map(({ head, customeStyle }) => (
                <th
                  key={head}
                  className={`border-b border-gray-300 pb-4 ${customeStyle}`}
                >
                  <Typography
                    color="blue-gray"
                    variant="small"
                    className="!font-bold"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CUSTOMERS_TABLE_ROW.map(({ name, amount }, index) => {
              const isLast = index === CUSTOMERS_TABLE_ROW.length - 1;
              const classes = isLast ? "!p-4" : "!p-4 border-b border-gray-300";
              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="!font-normal text-gray-600 text-center"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="!font-normal text-gray-600 text-center"
                    >
                      {amount}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ),
    },
    {
      label: "Suppliers",
      value: "suppliers",
      desc: (
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr>
              {CUSTOMERS_TABLE_HEAD.map(({ head, customeStyle }) => (
                <th
                  key={head}
                  className={`border-b border-gray-300 pb-4 ${customeStyle}`}
                >
                  <Typography
                    color="blue-gray"
                    variant="small"
                    className="!font-bold"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CUSTOMERS_TABLE_ROW.map(({ name, amount }, index) => {
              const isLast = index === SUPPLIERS_TABLE_ROW.length - 1;
              const classes = isLast ? "!p-4" : "!p-4 border-b border-gray-300";
              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="!font-normal text-gray-600 text-center"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="!font-normal text-gray-600 text-center"
                    >
                      {amount}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ),
    },
  ];

  const [selectedTab, setSelectedTab] = useState(data[0].label);

  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg flex">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-2 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6" color="black">
          Top 5
        </Typography>
      </CardHeader>
      <CardBody className="!p-2 mx-4">
        <Tabs value="customers">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default CustomerSupplierTabs;
