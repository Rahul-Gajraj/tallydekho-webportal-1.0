import React, { useState } from "react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  CardBody,
  CardHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import EmptyData from "../../common/EmptyData";

const KpiCard = ({ title, subtitle, price, img }) => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardBody className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {img}
            <Typography className="font-medium">{title}</Typography>
          </div>
          <Typography className="font-bold">{price || "₹0"}</Typography>
        </div>
        {/* <Typography className="mt-1 font-bold text-2xl">{price}</Typography> */}
      </CardBody>
    </Card>
  );
};

const ASSETS = [
  { title: "Fixed Assets", amount: "600,000" },
  { title: "Current Assets", amount: "250,000" },
  { title: "Investments", amount: "50,000" },
  { title: "Difference in Opening Balance", amount: "70,000" },
];

const LIABILITIES = [
  { title: "Capital Account", amount: "520000" },
  { title: "Current Liability", amount: "100000" },
  { title: "Loan Liabilities", amount: "280000" },
  { title: "Miscellaneous", amount: "30000" },
  { title: "Profit & Loss", amount: "40000" },
];

const TRIAL_BALANCE_DATA = [
  {
    title: "Current Assets",
    price: "₹250,000",
    img: <img className="h-5 w-5" src="/media/kpi-strip/sales.svg" />,
  },
  {
    title: "Misc. Expenses",
    price: "₹15,000",
    img: <img className="h-3 w-3" src="/media/kpi-strip/expense.svg" />,
  },
  {
    title: "Sales Account",
    price: "₹480,000",
    img: <img className="h-5 w-5" src="/media/kpi-strip/sales.svg" />,
  },
  {
    title: "Purchase Accounts",
    price: "₹320,000",
    img: <img className="h-5 w-5" src="/media/kpi-strip/sales.svg" />,
  },
];

const TRAIL_BALANCE_TABLE_HEAD = [
  "Ledger Group",
  "Dr (₹)",
  "Cr (₹)",
  "Net Balance",
];

const TRAIL_BALANCE_TABLE_BODY = [
  {
    ledgerGroup: "Current Assets",
    debit: "250,000",
    netBalance: "250,000",
    isDebit: true,
  },
  {
    ledgerGroup: "Misc Expenses",
    debit: "15,000",
    netBalance: "15,000",
    isDebit: true,
  },
  {
    ledgerGroup: "Sales Account",
    credit: "480,000",
    netBalance: "480,000",
    isDebit: false,
  },
  {
    ledgerGroup: "Purchase Account",
    debit: "320,000",
    netBalance: "320,000",
    isDebit: true,
  },
];

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const AccordionPLData = ({ isLoading }) => {
  const [isIncomeAccordionOpen, setIsIncomeAccordionOpen] = useState(false);
  const [isExpenseAccordionOpen, setIsExpenseAccordionOpen] = useState(false);
  const [isTotalAccordionOpen, setIsTotalAccordionOpen] = useState(false);

  const handleIncomeAccordionOpen = () => {
    setIsIncomeAccordionOpen((prev) => !prev);
  };

  const handleExpenseAccordionOpen = () =>
    setIsExpenseAccordionOpen((prev) => !prev);

  const handleTotalAccordionOpen = () => {
    if (isIncomeAccordionOpen && !isTotalAccordionOpen) {
      setIsIncomeAccordionOpen(false);
    }

    if (isExpenseAccordionOpen && !isTotalAccordionOpen) {
      setIsExpenseAccordionOpen(false);
    }

    setIsTotalAccordionOpen((prev) => !prev);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-2">
        <div className="col-span-6">
          {isLoading ? (
            <Card className="h-[58px] transition-all animate-pulse shadow-none bg-[#E1E6EA]">
              <div></div>
            </Card>
          ) : (
            <Accordion
              open={isIncomeAccordionOpen}
              className={`rounded-lg border border-blue-gray-100 ${
                isIncomeAccordionOpen && isExpenseAccordionOpen ? "h-full" : ""
              }`}
              icon={<Icon id={1} open={isIncomeAccordionOpen} />}
            >
              <AccordionHeader
                onClick={handleIncomeAccordionOpen}
                className="border-b-0 transition-colors font-medium text-md bg-[#f4f5f6] px-4 rounded-lg max-h-[250px] overflow-auto"
              >
                Income (₹6,390,000)
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal px-4">
                <table className="min-w-full table-auto text-left">
                  <tbody>
                    <tr>
                      <td className="p-4 px-0 border-b border-blue-gray-50">
                        <Typography variant="small" className="font-normal">
                          Direct Income
                        </Typography>
                      </td>
                      <td className="p-4 px-0 border-b border-blue-gray-50">
                        <Typography
                          variant="small"
                          className="font-normal pl-3 float-right"
                        >
                          ₹25,30,000
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 px-0 border-b border-blue-gray-50">
                        <Typography variant="small" className="font-normal">
                          Indirect Income
                        </Typography>
                      </td>
                      <td className="p-4 px-0 border-b border-blue-gray-50">
                        <Typography
                          variant="small"
                          className="font-normal pl-3 float-right"
                        >
                          ₹20,20,000
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-4">
                        <Typography variant="small" className="font-normal">
                          Other Income
                        </Typography>
                      </td>
                      <td className="pt-4">
                        <Typography
                          variant="small"
                          className="font-normal pl-3 float-right"
                        >
                          ₹18,40,000
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </AccordionBody>
            </Accordion>
          )}
        </div>
        <div className="col-span-6">
          {isLoading ? (
            <Card className="h-[58px] transition-all animate-pulse shadow-none bg-[#E1E6EA]">
              <div></div>
            </Card>
          ) : (
            <Accordion
              open={isExpenseAccordionOpen}
              className="rounded-lg border border-blue-gray-100"
              icon={<Icon id={2} open={isExpenseAccordionOpen} />}
            >
              <AccordionHeader
                onClick={handleExpenseAccordionOpen}
                className="border-b-0 transition-colors font-medium text-md bg-[#f4f5f6] px-4 rounded-lg max-h-[250px] overflow-auto"
              >
                Expenses (₹10,250,000)
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal px-4">
                <table className="min-w-full table-auto text-left">
                  <tbody>
                    <tr>
                      <td className="p-4 px-0 border-b border-blue-gray-50">
                        <Typography variant="small" className="font-normal">
                          Indirect Expense
                        </Typography>
                      </td>
                      <td className="p-4 px-0 border-b border-blue-gray-50">
                        <Typography
                          variant="small"
                          className="font-normal pl-3 float-right"
                        >
                          ₹20,20,000
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 px-0 border-b border-blue-gray-50">
                        <Typography variant="small" className="font-normal">
                          Administrative Expense
                        </Typography>
                      </td>
                      <td className="p-4 px-0 border-b border-blue-gray-50">
                        <Typography
                          variant="small"
                          className="font-normal pl-3 float-right"
                        >
                          ₹18,40,000
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 px-0 border-b border-blue-gray-50">
                        <Typography variant="small" className="font-normal">
                          Miscellaneous
                        </Typography>
                      </td>
                      <td className="p-4 px-0 border-b border-blue-gray-50">
                        <Typography
                          variant="small"
                          className="font-normal pl-3 float-right"
                        >
                          ₹20,20,000
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-4">
                        <Typography variant="small" className="font-normal">
                          Depreciation
                        </Typography>
                      </td>
                      <td className="pt-4">
                        <Typography
                          variant="small"
                          className="font-normal pl-3 float-right"
                        >
                          ₹18,40,000
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </AccordionBody>
            </Accordion>
          )}
        </div>
        <div className="col-span-12">
          {isLoading ? (
            <Card className="h-[58px] transition-all animate-pulse shadow-none bg-[#E1E6EA]">
              <div></div>
            </Card>
          ) : (
            <Accordion
              open={isTotalAccordionOpen}
              className="rounded-lg border border-blue-gray-100 max-h-[250px] overflow-auto"
              icon={<Icon id={3} open={isTotalAccordionOpen} />}
            >
              <AccordionHeader
                onClick={handleTotalAccordionOpen}
                className="border-b-0 transition-colors font-medium text-md bg-[#f4f5f6] px-4 rounded-lg"
              >
                Totals (₹4,550,000)
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal px-4">
                <table className="min-w-full table-auto text-left">
                  <tbody>
                    <tr>
                      <td className="p-4 px-0 border-b border-blue-gray-50">
                        <Typography variant="small" className="font-normal">
                          Gross Profit / Gross Loss
                        </Typography>
                      </td>
                      <td className="p-4 px-0 border-b border-blue-gray-50">
                        <Typography
                          variant="small"
                          className="font-normal pl-3 float-right"
                        >
                          ₹25,30,000
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-4">
                        <Typography variant="small" className="font-normal">
                          Net Profit / Net Loss
                        </Typography>
                      </td>
                      <td className="pt-4">
                        <Typography
                          variant="small"
                          className="font-normal pl-3 float-right"
                        >
                          ₹20,20,000
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </AccordionBody>
            </Accordion>
          )}
        </div>
      </div>
    </>
  );
};

const ReportsInfo = ({ isLoading }) => {
  const [plSummaryData, setPLSummaryData] = useState([
    {
      title: "Opening Stock",
      price: "50",
      img: <img className="w-5" src="/nav-icons/cash.svg" />,
    },
    {
      title: "Closing Stock",
      price: "30",
      img: <img className="w-5" src="/nav-icons/cash.svg" />,
    },
    {
      title: "Purchase",
      price: "20",
      img: <img className="w-5" src="/media/icons/purchase.svg" />,
    },
    {
      title: "Sales",
      price: "30",
      img: <img className="w-5" src="/media/icons/sales.svg" />,
    },
  ]);

  return (
    <>
      <Card className="col-span-6 shadow-sm border border-gray-200 !rounded-lg flex my-5">
        <CardBody className="pt-4">
          <Tabs value="profit_loss">
            <TabsHeader>
              <Tab value="profit_loss">
                <div className="flex items-center gap-2">
                  {/* <img
                    src="/media/icons/profit_loss.svg"
                    className="h-5 w-5"
                  /> */}
                  Profit & Loss
                </div>
              </Tab>
              <Tab value="balance_sheet">
                <div className="flex items-center gap-2">
                  {/* <img
                    src="/media/icons/balance_sheet.svg"
                    className="h-5 w-5"
                  /> */}
                  Balance Sheet
                </div>
              </Tab>
              <Tab value="trial_balance">
                <div className="flex items-center gap-2">
                  {/* <img
                    src="/media/icons/trial_balance.svg"
                    className="h-5 w-5"
                  /> */}
                  Trial Balance
                </div>
              </Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="profit_loss">
                <div className="grid grid-cols-12 gap-3">
                  {isLoading
                    ? [...Array(4)].map((_, idx) => (
                        <div
                          key={idx}
                          className="col-span-12 md:col-span-6 xl:col-span-3"
                        >
                          <Card className="w-full  transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[84px]">
                            <CardBody>
                              <div></div>
                            </CardBody>
                          </Card>
                        </div>
                      ))
                    : plSummaryData.map((kpiData, idx) => (
                        <div
                          key={idx}
                          className="col-span-12 md:col-span-6 xl:col-span-3"
                        >
                          <KpiCard {...kpiData} />
                        </div>
                      ))}
                  <div className="col-span-12">
                    <AccordionPLData isLoading={isLoading} />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="balance_sheet">
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                  {isLoading ? (
                    <Card className="h-[324px] transition-all animate-pulse shadow-none bg-[#E1E6EA]">
                      <div></div>
                    </Card>
                  ) : (
                    <Card
                      className="border !border-blue-gray-100 p-2"
                      shadow={false}
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        className="flex !justify-between !items-center rounded-none"
                      >
                        <Typography variant="h6" className="!font-medium">
                          ASSETS
                        </Typography>
                        <Typography variant="h6" className="!font-medium">
                          AMOUNT (₹)
                        </Typography>
                      </CardHeader>
                      <CardBody className="pl-4 space-y-3">
                        {ASSETS.map(({ title, amount }) => (
                          <div
                            key={title}
                            className="flex items-center justify-between"
                          >
                            <Typography className="font-medium">
                              {title}
                            </Typography>
                            <Typography className="font-normal">
                              {amount}
                            </Typography>
                          </div>
                        ))}
                        <div className="flex items-center justify-between">
                          <Typography className="font-medium">
                            TOTAL ASSETS
                          </Typography>
                          <Typography className="font-normal">
                            {ASSETS.reduce((prev, curr) => {
                              return (
                                prev + Number(curr.amount.split(",").join(""))
                              );
                            }, 0)}
                          </Typography>
                        </div>
                      </CardBody>
                    </Card>
                  )}
                  {isLoading ? (
                    <Card className="h-[324px] transition-all animate-pulse shadow-none bg-[#E1E6EA]">
                      <div></div>
                    </Card>
                  ) : (
                    <Card
                      className="border !border-blue-gray-100 p-2"
                      shadow={false}
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        className="flex !justify-between !items-center rounded-none"
                      >
                        <Typography variant="h6" className="!font-medium">
                          LIABILITIES
                        </Typography>
                        <Typography variant="h6" className="!font-medium">
                          AMOUNT (₹)
                        </Typography>
                      </CardHeader>
                      <CardBody className="pl-4 space-y-3">
                        {LIABILITIES.map(({ title, amount }) => (
                          <div
                            key={title}
                            className="flex items-center justify-between"
                          >
                            <Typography className="font-medium">
                              {title}
                            </Typography>
                            <Typography className="font-normal">
                              {amount}
                            </Typography>
                          </div>
                        ))}
                        <div className="flex items-center justify-between">
                          <Typography className="font-medium">
                            TOTAL LIABILITIES
                          </Typography>
                          <Typography className="font-normal">
                            {LIABILITIES.reduce((prev, curr) => {
                              return (
                                prev + Number(curr.amount.split(",").join(""))
                              );
                            }, 0)}
                          </Typography>
                        </div>
                      </CardBody>
                    </Card>
                  )}
                </div>
              </TabPanel>
              <TabPanel value="trial_balance">
                <div className="grid grid-cols-12 gap-3">
                  {isLoading
                    ? [...Array(4)].map((_, idx) => (
                        <div
                          key={idx}
                          className="col-span-12 md:col-span-6 xl:col-span-3"
                        >
                          <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[58px]">
                            <CardBody>
                              <div></div>
                            </CardBody>
                          </Card>
                        </div>
                      ))
                    : TRIAL_BALANCE_DATA.map((kpiData, idx) => (
                        <div
                          key={idx}
                          className="col-span-12 md:col-span-6 xl:col-span-3"
                        >
                          <KpiCard {...kpiData} />
                        </div>
                      ))}
                </div>
                <table className="mt-4 min-w-full table-auto text-left">
                  <thead>
                    <tr>
                      {TRAIL_BALANCE_TABLE_HEAD.map((head) => (
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
                  {isLoading ? (
                    <tbody>
                      {[...Array(4)].map((_, index) => (
                        <tr key={index} className="animate-pulse">
                          {TRAIL_BALANCE_TABLE_HEAD.map((_, idx) => (
                            <td
                              key={idx}
                              className="p-4 border-b border-gray-300"
                            >
                              <div className="flex justify-center">
                                <span className="h-4 bg-gray-300 rounded w-24"></span>
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tbody>
                      {TRAIL_BALANCE_TABLE_BODY.length > 0 ? (
                        TRAIL_BALANCE_TABLE_BODY.map((row, idx) => {
                          const {
                            ledgerGroup,
                            debit,
                            credit,
                            netBalance,
                            isDebit,
                          } = row;
                          const classes =
                            "p-4 px-0 border-b border-blue-gray-50";

                          return (
                            <tr key={ledgerGroup}>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {ledgerGroup || "-"}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {debit || "-"}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {credit || "-"}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  className="font-normal pl-3"
                                >
                                  {isDebit ? "Dr " : "Cr "}
                                  {netBalance || "-"}
                                </Typography>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <EmptyData colSpan={4} />
                      )}
                    </tbody>
                  )}
                </table>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default ReportsInfo;
