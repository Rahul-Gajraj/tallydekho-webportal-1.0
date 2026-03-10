import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";

import React from "react";

const EMIS_TABLE_HEAD = [
  {
    head: "Inst.",
    customeStyle: "text-center",
  },
  {
    head: "Due Date",
  },
  {
    head: "EMI",
  },
  {
    head: "Principal",
  },
  {
    head: "Interest",
  },
  {
    head: "Status",
  },
];

const LoadDetailDrawer = ({ open, toggleDrawer, data }) => {
  const amounts = [
    { title: "Sanctioned", subtitle: "₹1,10,00,000" },
    { title: "Dsibuesed", subtitle: "₹1,10,00,000" },
    { title: "Interest Rate", subtitle: "10.20% (Fixed)" },
    { title: "Tenure", subtitle: "84 months" },
    { title: "EMI Amount", subtitle: "₹1,40,000" },
    { title: "EMI Frequency", subtitle: "Monthly" },
  ];

  const outstanding = [
    { title: "Principal", subtitle: "₹82,00,000" },
    { title: "Interest", subtitle: "₹28,500" },
    { title: "Next EMI", subtitle: "15 Dec 2025" },
    { title: "Obverdue EMI's", subtitle: "0" },
  ];

  return (
    <Drawer
      placement="right"
      className="p-4 overflow-scroll z-[10px]"
      open={open}
      onClose={() => toggleDrawer()}
      size={700}
    >
      <div className="relative mt-0 flex justify-between">
        <Typography variant="h4">
          {data ? data.title : "Machinery Loan"}
        </Typography>
        <img
          src="/media/custom/close.svg"
          className="h-7 w-7 cursor-pointer"
          alt="close_svg"
          onClick={() => toggleDrawer()}
        />
      </div>
      <Typography>{data ? data.subtitle : "ICICI: 2233-4455-6677"}</Typography>
      <Card className="mt-5 border shadow-transparent">
        <CardHeader shadow={false} floated={false}>
          <Typography>Header</Typography>
        </CardHeader>
        <CardBody className="pt-2">
          <div className="flex gap-5">
            <Chip value="Active" color="green" className="normal-case" />
            <Chip value="Team Loan" color="green" className="normal-case" />
            <Chip value="No overdue" color="green" className="normal-case" />
          </div>
          <div className="flex gap-5 mt-3">
            <Typography>Account: 2233-4455-6677</Typography>
            <Typography>Lender: SBI</Typography>
          </div>
        </CardBody>
      </Card>
      <Card className="mt-5 border shadow-transparent">
        <CardHeader shadow={false} floated={false}>
          <Typography>Amounts</Typography>
        </CardHeader>
        <CardBody className="pt-2">
          <List className="pt-0 grid grid-cols-2 gap-3">
            {amounts.map(({ title, subtitle, icon }) => (
              <Card key={title} className="border shadow-none col-span-1">
                <ListItem className="block hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]">
                  <Typography variant="h6">
                    {title}
                  </Typography>
                  <Typography variant="small" className="font-normal">
                    {subtitle}{" "}
                  </Typography>
                </ListItem>
              </Card>
            ))}
          </List>
        </CardBody>
      </Card>
      <Card className="mt-5 border shadow-transparent">
        <CardHeader shadow={false} floated={false}>
          <Typography>Outstanding & Schedule</Typography>
        </CardHeader>
        <CardBody className="pt-2">
          <List className="pt-0 grid grid-cols-2 gap-3">
            {outstanding.map(({ title, subtitle, icon }) => (
              <Card key={title} className="border shadow-none col-span-1">
                <ListItem className="block hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]">
                  <Typography variant="h6">
                    {title}
                  </Typography>
                  <Typography variant="small" className="font-normal">
                    {subtitle}{" "}
                  </Typography>
                </ListItem>
              </Card>
            ))}
          </List>
        </CardBody>
      </Card>
      {data && data.emis && (
        <div>
          <Typography className="font-semibold">
            EMI Schedule Preview
          </Typography>
          <table className="mt-10 min-w-full table-auto text-left">
            <thead>
              <tr>
                {EMIS_TABLE_HEAD.map(({ head, customeStyle }) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                  >
                    <Typography
                      variant="small"
                      className="font-normal leading-none pl-3"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.emis.map((row, index) => {
                const {
                  inst,
                  dueDate,
                  emi,
                  principal,
                  interest,
                  status,
                  textColor,
                  bgColor,
                } = row;
                const classes = "p-4 px-0 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {inst || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {dueDate || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {emi || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex pl-3">
                        <Chip
                          value={status || "-"}
                          size="sm"
                          className="h-[30px] normal-case"
                          style={{
                            color: textColor,
                            backgroundColor: bgColor,
                          }}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {principal || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {interest || "-"}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </Drawer>
  );
};

export default LoadDetailDrawer;
