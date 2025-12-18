import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

import ExpenseRegister from "@/components/Financials/Expenses/ExpenseRegister";

const EXPENSES_KPI = [
  {
    title: "Today",
    subtitle: "Total expenses booked today",
    price: "₹92,000",
    value: "+12%",
    color: "#108f6f",
    bg: "#EAF8F4",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="#108f6f"
      >
        <path d="M8.4,17.4c-.84,0-1.55-.29-2.13-.87s-.87-1.29-.87-2.13.29-1.55.87-2.13,1.29-.87,2.13-.87,1.55.29,2.13.87.87,1.29.87,2.13-.29,1.55-.87,2.13-1.29.87-2.13.87ZM3.6,24c-.66,0-1.22-.24-1.69-.7-.47-.47-.7-1.03-.7-1.7V4.8c0-.66.24-1.22.7-1.69.47-.47,1.03-.7,1.69-.7h1.2V0h2.4v2.4h9.6V0h2.4v2.4h1.2c.66,0,1.22.23,1.69.7s.7,1.03.7,1.69v16.8c0,.66-.23,1.23-.7,1.7s-1.03.7-1.69.7H3.6ZM3.6,21.6h16.8v-12H3.6v12ZM3.6,7.2h16.8v-2.4H3.6v2.4ZM3.6,7.2v-2.4,2.4Z" />
      </svg>
    ),
  },
  {
    title: "MTD",
    subtitle: "Month-to-date expenses",
    price: "₹1.27M",
    // value: "-10%",
    // color: "#F23031",
    // bg: "#FFEBEA",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="#108f6f"
      >
        <path d="M3.6,24c-.66,0-1.22-.24-1.7-.7-.47-.47-.7-1.03-.7-1.69V4.8c0-.66.24-1.22.7-1.7.47-.47,1.04-.7,1.7-.7h1.2V0h2.4v2.4h9.6V0h2.4v2.4h1.2c.66,0,1.22.23,1.7.7s.7,1.04.7,1.7v16.8c0,.66-.23,1.23-.7,1.69s-1.03.7-1.7.7H3.6ZM3.6,21.6h16.8v-12H3.6v12ZM3.6,7.2h16.8v-2.4H3.6v2.4ZM3.6,7.2v-2.4,2.4ZM12,14.4c-.34,0-.63-.12-.85-.34s-.34-.51-.34-.85.12-.63.34-.85.51-.35.85-.35.63.12.85.35c.23.23.34.51.34.85s-.11.63-.34.85c-.23.23-.51.34-.85.34ZM7.2,14.4c-.34,0-.63-.12-.85-.34s-.34-.51-.34-.85.12-.63.34-.85.51-.35.85-.35.63.12.85.35.35.51.35.85-.12.63-.35.85-.51.34-.85.34ZM16.8,14.4c-.34,0-.62-.12-.85-.34s-.34-.51-.34-.85.11-.63.34-.85.52-.35.85-.35.62.12.85.35.34.51.34.85-.11.63-.34.85-.52.34-.85.34ZM12,19.2c-.34,0-.63-.11-.85-.34-.23-.23-.34-.51-.34-.85s.12-.63.34-.85.51-.34.85-.34.63.12.85.34c.23.23.34.51.34.85s-.11.63-.34.85c-.23.23-.51.34-.85.34ZM7.2,19.2c-.34,0-.63-.11-.85-.34-.23-.23-.34-.51-.34-.85s.12-.63.34-.85.51-.34.85-.34.63.12.85.34.35.51.35.85-.12.63-.35.85c-.23.23-.51.34-.85.34ZM16.8,19.2c-.34,0-.62-.11-.85-.34-.23-.23-.34-.51-.34-.85s.11-.63.34-.85.52-.34.85-.34.62.12.85.34.34.51.34.85-.11.63-.34.85c-.23.23-.52.34-.85.34Z" />
      </svg>
    ),
  },
  {
    title: "YTD",
    price: "₹7.4M",
    subtitle: "Year-to-date expenses",
    // value: "+12%",
    // color: "#108F6F",
    // bg: "#EAF8F4",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="#108f6f"
      >
        <path d="M3.6,24c-.66,0-1.22-.24-1.7-.7-.47-.47-.7-1.03-.7-1.69V4.8c0-.66.24-1.22.7-1.7.47-.47,1.04-.7,1.7-.7h1.2V0h2.4v2.4h9.6V0h2.4v2.4h1.2c.66,0,1.22.23,1.7.7s.7,1.04.7,1.7v16.8c0,.66-.23,1.23-.7,1.69s-1.03.7-1.7.7H3.6ZM3.6,21.6h16.8v-12H3.6v12ZM3.6,7.2h16.8v-2.4H3.6v2.4ZM3.6,7.2v-2.4,2.4ZM12,14.4c-.34,0-.63-.12-.85-.34s-.34-.51-.34-.85.12-.63.34-.85.51-.35.85-.35.63.12.85.35c.23.23.34.51.34.85s-.11.63-.34.85c-.23.23-.51.34-.85.34ZM7.2,14.4c-.34,0-.63-.12-.85-.34s-.34-.51-.34-.85.12-.63.34-.85.51-.35.85-.35.63.12.85.35.35.51.35.85-.12.63-.35.85-.51.34-.85.34ZM16.8,14.4c-.34,0-.62-.12-.85-.34s-.34-.51-.34-.85.11-.63.34-.85.52-.35.85-.35.62.12.85.35.34.51.34.85-.11.63-.34.85-.52.34-.85.34ZM12,19.2c-.34,0-.63-.11-.85-.34-.23-.23-.34-.51-.34-.85s.12-.63.34-.85.51-.34.85-.34.63.12.85.34c.23.23.34.51.34.85s-.11.63-.34.85c-.23.23-.51.34-.85.34ZM7.2,19.2c-.34,0-.63-.11-.85-.34-.23-.23-.34-.51-.34-.85s.12-.63.34-.85.51-.34.85-.34.63.12.85.34.35.51.35.85-.12.63-.35.85c-.23.23-.51.34-.85.34ZM16.8,19.2c-.34,0-.62-.11-.85-.34-.23-.23-.34-.51-.34-.85s.11-.63.34-.85.52-.34.85-.34.62.12.85.34.34.51.34.85-.11.63-.34.85c-.23.23-.52.34-.85.34Z" />
      </svg>
    ),
  },
  {
    title: "Cash Expenses (%)",
    price: "37%",
    subtitle: "Share of cash vs total",

    // value: "+10%",
    // color: "#108F6F",
    // bg: "#EAF8F4",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="#108f6f"
        className="h-6 w-6"
      >
        <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm400 240H120q-33 0-56.5-23.5T40-240v-400q0-17 11.5-28.5T80-680q17 0 28.5 11.5T120-640v400h640q17 0 28.5 11.5T800-200q0 17-11.5 28.5T760-160ZM280-400v-320 320Z" />
      </svg>
    ),
  },
];

const KpiCard = ({ title, subtitle, price, img }) => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardBody className="p-4">
        <div className="flex justify-between">
          <div>
            <Typography className="font-medium">{title}</Typography>
            <Typography className="mt-1 !text-xs">{subtitle}</Typography>
          </div>
          <div className="py-4 px-2 flex items-center rounded bg-[#eaf8f4] h-[20px]">
            {img}
          </div>
        </div>
        <Typography color="blue-gray" className="mt-1 font-bold text-2xl">
          {price}
        </Typography>
      </CardBody>
    </Card>
  );
};

const EXPENSES_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "text-center",
  },
  {
    head: "Voucher No.",
  },
  {
    head: "Ledger / Category",
  },
  {
    head: "Amount",
  },
  {
    head: "Status",
  },
];

const EXPENSES_TABLE_ROW = [
  {
    date: "09 Dec 2025",
    voucherNo: "EXP/25-26/143",
    ledger: "Travel - Client Visit",
    amount: "₹12,500",
    status: "Paid",
  },
  {
    date: "09 Dec 2025",
    voucherNo: "EXP/25-26/142",
    ledger: "Office Rent - Dec",
    amount: "₹80,000",
    status: "Unpaid",
  },
  {
    date: "08 Dec 2025",
    voucherNo: "EXP/25-26/141",
    ledger: "Fuel & Conveyance",
    amount: "₹9,800",
    status: "Paid",
  },
  {
    date: "08 Dec 2025",
    voucherNo: "EXP/25-26/140",
    ledger: "Internet & Telephone",
    amount: "₹3,250",
    status: "Paid",
  },
  {
    date: "07 Dec 2025",
    voucherNo: "EXP/25-26/139",
    ledger: "Repairs & Maintenance",
    amount: "₹18,900",
    status: "Unpaid",
  },
];

const alerts = [
  {
    title: "7 expenses without supporting documents",
    subtitle: "Attach bills to claimm GST input",
    img: <img src="/media/alerts/error.svg" className="h-5 w-5 mt-[3px]" />,
  },
  {
    title: "5 GST mismatch issues in expenses",
    subtitle: "Mismatch with purchase register",
    img: <img src="/media/alerts/warning.svg" className="h-6 w-6 mt-[3px]" />,
  },
  {
    title: "Pending to sync with Tally",
    subtitle: "Last sync 2 days ago",
    img: <img src="/media/alerts/success.svg" className="h-6 w-6 mt-[3px]" />,
  },
];

const Expenses = () => {
  return (
    <div className="mx-5 h-[100vh] overflow-y-scroll">
      <section className="mx-auto mt-[90px]">
        <Card className="shadow-sm border border-gray-200 !rounded-lg p-4">
          <Typography className="font-bold text-xl text-black">
            Expenses
          </Typography>
        </Card>
      </section>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {EXPENSES_KPI.map((kpiData, idx) => (
          <div key={idx} className="col-span-1">
            <KpiCard {...kpiData} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 mt-5 gap-5">
        <Card className="col-span-2 shadow-sm border border-gray-200 !rounded-lg">
          <CardHeader floated={false} shadow={false} className="p-2">
            <Typography color="black" className="font-bold text-lg">
              Recent Expenses
            </Typography>
            <Typography color="black" className="font-normal text-sm">
              Last 5 vouchers booked
            </Typography>
          </CardHeader>
          <CardBody className="pt-3">
            <table className="w-full table-auto h-[400px] overflow-scroll">
              <thead>
                <tr>
                  {EXPENSES_TABLE_HEAD.map(({ head, customeStyle }) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                    >
                      <div className="flex gap-2 justify-center">
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
                {EXPENSES_TABLE_ROW.map(
                  ({ date, voucherNo, ledger, amount, status }, index) => {
                    const classes = "!p-4 border-b border-gray-300";
                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="!font-normal text-gray-600 text-center"
                          >
                            {date}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="!font-normal text-gray-600 text-center"
                          >
                            {voucherNo}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="!font-normal text-gray-600 text-center"
                          >
                            {ledger}
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
                        <td className="border-b border-gray-300">
                          <div className="w-full flex justify-center">
                            <Chip
                              variant="ghost"
                              value={status}
                              className={`${
                                status === "Paid"
                                  ? "bg-green-50/70 text-green-400"
                                  : status === "Unpaid"
                                  ? "bg-red-50/70 text-red-400"
                                  : "bg-amber-50/70 text-amber-800"
                              } normal-case`}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <div className="col-span-1">
          <Card className="shadow-sm border border-gray-200 !rounded-lg">
            <CardHeader
              floated={false}
              shadow={false}
              className="p-2 flex gap-6 flex-wrap items-center justify-between"
            >
              <Typography color="black" className="font-bold text-lg">
                Alerts
              </Typography>
            </CardHeader>
            <CardBody className="!p-2 !pt-0 mx-4 h-[270px] overflow-scroll">
              <List className="pt-0 gap-3">
                {alerts.map(({ title, subtitle, img }) => (
                  <Card key={title} className="border shadow-none">
                    <ListItem className="items-start hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]">
                      <ListItemPrefix className="items-start mr-2">
                        {img}
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          {title}
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          {subtitle}
                        </Typography>
                      </div>
                    </ListItem>
                  </Card>
                ))}
              </List>
            </CardBody>
          </Card>
          <Card className="shadow-sm border border-gray-200 !rounded-lg mt-5">
            <CardHeader floated={false} shadow={false} className="p-2">
              <Typography color="black" className="font-bold text-lg">
                Top Categories (MTD)
              </Typography>
              <Typography color="black" className="font-normal text-sm">
                Highest expense heads this month
              </Typography>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-3 text-black">
                <div className="flex items-center gap-10 justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#93C5FD] rounded-full"></span>
                    <Typography variant="small" className="font-normal">
                      Office Rent
                    </Typography>
                  </div>
                  <Typography variant="small" className="font-normal">
                    ₹320,000
                  </Typography>
                </div>
                <div className="flex items-center gap-10 justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#67E8F9] rounded-full"></span>
                    <Typography variant="small" className="font-normal">
                      Salaries & Wages
                    </Typography>
                  </div>
                  <Typography variant="small" className="font-normal">
                    ₹280,000
                  </Typography>
                </div>
                <div className="flex items-center gap-10 justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#C4B5FD] rounded-full"></span>
                    <Typography variant="small" className="font-normal">
                      Travel & Conveyance
                    </Typography>
                  </div>
                  <Typography variant="small" className="font-normal">
                    ₹115,000
                  </Typography>
                </div>
                <div className="flex items-center gap-10 justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#C4B5FD] rounded-full"></span>
                    <Typography variant="small" className="font-normal">
                      Repairs & Maintenance
                    </Typography>
                  </div>
                  <Typography variant="small" className="font-normal">
                    ₹84,000
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="mt-5">
        <ExpenseRegister />
      </div>
    </div>
  );
};

export default Expenses;
