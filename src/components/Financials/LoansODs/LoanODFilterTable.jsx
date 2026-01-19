import React, { useState } from "react";

import {
  Card,
  CardBody,
  Chip,
  Option,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import EMICalendar from "./EMICalendar";
import EMIDetailDrawer from "./Drawer/EMIDetailDrawer";
import LoadDetailDrawer from "./Drawer/LoadDetailDrawer";
import ODDetailDrawer from "./Drawer/ODDetailDrawer";

const LOANS_REGISTER_TABLE_HEAD = [
  {
    head: "Loan Name",
    customeStyle: "text-center",
  },
  {
    head: "Lender",
  },
  {
    head: "Account No",
  },
  {
    head: "Type",
  },
  {
    head: "Sanctioned Amt",
  },
  {
    head: "Outstanding",
  },
  {
    head: "EMI Amount",
  },
  {
    head: "Next EMI Date",
  },
  {
    head: "Status",
  },
  {
    head: "Actions",
  },
];

const LOANS_REGISTER_TABLE_ROWS = [
  {
    loanName: "Machinery Loan",
    lender: "SBI",
    accountNo: "2233-4455-6677",
    type: "Term",
    sanctionedAmt: "₹1,10,00,000",
    outstanding: "₹82,00,000",
    emiAmount: "₹1,40,000",
    nextEmiDate: "15 Jul 2025",
    status: "Active",
  },
  {
    loanName: "Vehicle Loan - Truck",
    lender: "ICICI",
    accountNo: "9988-7766-5544",
    type: "Vehicle",
    sanctionedAmt: "₹28,00,000",
    outstanding: "₹6,40,000",
    emiAmount: "₹48,500",
    nextEmiDate: "05 Jul 2025",
    status: "NPA",
  },
];

const OD_ACCOUNTS_TABLE_HEAD = [
  {
    head: "OD Name",
    customeStyle: "text-center",
  },
  {
    head: "Bank",
  },
  {
    head: "Account No",
  },
  {
    head: "OD Limit",
  },
  {
    head: "Utilized",
  },
  {
    head: "Available",
  },
  {
    head: "ROI",
  },
  {
    head: "Status",
  },
  {
    head: "Actions",
  },
];

const OD_ACCOUNTS_TABLE_ROWS = [
  {
    odName: "ICICI CC-002",
    bank: "ICICI",
    accountNo: "1122-3344-5566",
    odLimit: "₹30,00,000",
    utilized: "₹26,50,000",
    available: "₹3,50,000",
    roi: "13.1% p.a.",
    status: "Active",
  },
];

const LoanODFilterTable = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openLoanDetail, setOpenLoanDetail] = useState(false);
  const [openODDetail, setOpenODDetail] = useState(false);

  const handleOpenLoadDrawer = () => {
    setOpenLoanDetail((prev) => !prev);
  };

  const handleOpenODDrawer = () => {
    setOpenODDetail((prev) => !prev);
  };

  return (
    <>
      <Card className="mt-5">
        <CardBody>
          <Tabs value="loans_register">
            <TabsHeader>
              <Tab value="loans_register">Loan Registers</Tab>
              <Tab value="od_accounts">OD Accounts</Tab>
              <Tab value="emi_calendar">EMI Calendar</Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="loans_register">
                <div className="flex items-center gap-2 flex-wrap justify-between">
                  <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[400px]">
                    <span className="pl-3">
                      <img src="/media/custom/search-sm.svg" />
                    </span>
                    <input
                      id="header-search-input"
                      name="header-search-input"
                      type="text"
                      placeholder="Search by loan name / account no / lender"
                      className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="w-[150px]">
                      <Select
                        className="bg-white-600"
                        label="Lender"
                        containerProps={{
                          style: {
                            minWidth: "150px",
                          },
                        }}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          SBI
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          ICICI
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[150px]">
                      <Select
                        className="bg-white-600"
                        label="Loan Type"
                        containerProps={{
                          style: {
                            minWidth: "150px",
                          },
                        }}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Team
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Vehicle
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[150px]">
                      <Select
                        className="bg-white-600"
                        label="Status"
                        containerProps={{
                          style: {
                            minWidth: "150px",
                          },
                        }}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Active
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          NPA
                        </Option>
                      </Select>
                    </div>
                  </div>
                </div>
                <table className="mt-4 min-w-full table-auto text-left">
                  <thead>
                    <tr>
                      {LOANS_REGISTER_TABLE_HEAD.map(
                        ({ head, customeStyle }) => (
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
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {LOANS_REGISTER_TABLE_ROWS.map((row, index) => {
                      const {
                        loanName,
                        lender,
                        accountNo,
                        type,
                        sanctionedAmt,
                        outstanding,
                        emiAmount,
                        nextEmiDate,
                        status,
                      } = row;
                      const isLast =
                        index === LOANS_REGISTER_TABLE_ROWS.length - 1;
                      const classes = "p-4 px-0 border-b border-blue-gray-50";

                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {loanName}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {lender}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {accountNo}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {type}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {sanctionedAmt}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {outstanding}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {emiAmount}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {nextEmiDate}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <div className="flex pl-3">
                              <Chip
                                value={status}
                                size="sm"
                                color="green"
                                className="h-[30px] normal-case"
                                style={{
                                  color: "#108f6f",
                                  backgroundColor: "#eaf8f4",
                                }}
                              />
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="flex gap-3 pl-3">
                              <Typography
                                variant="small"
                                className="font-normal cursor-pointer"
                                color="green"
                                onClick={() => handleOpenLoadDrawer()}
                              >
                                View
                              </Typography>
                              <Typography
                                variant="small"
                                className="font-normal cursor-pointer"
                                color="green"
                              >
                                Edit
                              </Typography>
                              <Typography
                                variant="small"
                                className="font-normal cursor-pointer"
                                color="green"
                              >
                                Close
                              </Typography>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel value="od_accounts">
                <div className="flex items-center gap-2 flex-wrap justify-between">
                  <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[400px]">
                    <span className="pl-3">
                      <img src="/media/custom/search-sm.svg" />
                    </span>
                    <input
                      id="header-search-input"
                      name="header-search-input"
                      type="text"
                      placeholder="Search by OD name / account no / bank"
                      className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="w-[150px]">
                      <Select
                        className="bg-white-600"
                        label="Bank"
                        containerProps={{
                          style: {
                            minWidth: "150px",
                          },
                        }}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          ICICI
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          SBI
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[150px]">
                      <Select
                        className="bg-white-600"
                        label="Status"
                        containerProps={{
                          style: {
                            minWidth: "150px",
                          },
                        }}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Active
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Inactive
                        </Option>
                      </Select>
                    </div>
                  </div>
                </div>
                <table className="mt-4 min-w-full table-auto text-left">
                  <thead>
                    <tr>
                      {OD_ACCOUNTS_TABLE_HEAD.map(({ head, customeStyle }) => (
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
                    {OD_ACCOUNTS_TABLE_ROWS.map((row, index) => {
                      const {
                        odName,
                        bank,
                        accountNo,
                        odLimit,
                        utilized,
                        available,
                        roi,
                        status,
                      } = row;
                      const isLast =
                        index === OD_ACCOUNTS_TABLE_ROWS.length - 1;
                      const classes = "p-4 px-0 border-b border-blue-gray-50";

                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {odName}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {bank}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {accountNo}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {odLimit}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {utilized}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {available}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {roi}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <div className="flex pl-3">
                              <Chip
                                value={status}
                                size="sm"
                                color="green"
                                className="h-[30px] normal-case"
                                style={{
                                  color: "#108f6f",
                                  backgroundColor: "#eaf8f4",
                                }}
                              />
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="flex gap-3 pl-3">
                              <Typography
                                variant="small"
                                className="font-normal cursor-pointer"
                                color="green"
                                onClick={() => handleOpenODDrawer()}
                              >
                                View
                              </Typography>
                              <Typography
                                variant="small"
                                className="font-normal cursor-pointer"
                                color="green"
                              >
                                Edit
                              </Typography>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel value="emi_calendar">
                <div className="flex items-center gap-2 flex-wrap justify-between">
                  {/* <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[400px]">
                    <span className="pl-3">
                      <img src="/media/custom/search-sm.svg" />
                    </span>
                    <input
                      id="header-search-input"
                      name="header-search-input"
                      type="text"
                      placeholder="Search by loan name / lender"
                      className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
                    />
                  </div> */}
                  <div className="flex flex-wrap gap-2">
                    <div className="w-[150px]">
                      <Select
                        className="bg-white-600"
                        label="Lender / Loan"
                        containerProps={{
                          style: {
                            minWidth: "150px",
                          },
                        }}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Home Loan
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Vehicle Loan
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[150px]">
                      <Select
                        className="bg-white-600"
                        label="Status"
                        containerProps={{
                          style: {
                            minWidth: "150px",
                          },
                        }}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Paid
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Overdue
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Upcoming
                        </Option>
                      </Select>
                    </div>
                    {/* <div className="w-[150px]">
                      <Select
                        className="bg-white-600"
                        label="Ammount Range"
                        containerProps={{
                          style: {
                            minWidth: "150px",
                          },
                        }}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Any
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          ₹40,000 - ₹1,00,000
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          ₹1,00,000 - ₹1,60,000
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          ₹1,60,000 - ₹2,20,000
                        </Option>
                      </Select>
                    </div> */}
                  </div>
                </div>
                <EMICalendar
                  //   selectedEvent={selectedEvent}
                  setSelectedEvent={setSelectedEvent}
                />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
      <EMIDetailDrawer
        open={Boolean(selectedEvent)}
        toggleDrawer={() => setSelectedEvent(null)}
        data={selectedEvent}
      />
      <LoadDetailDrawer
        open={openLoanDetail}
        toggleDrawer={handleOpenLoadDrawer}
      />
      <ODDetailDrawer open={openODDetail} toggleDrawer={handleOpenODDrawer} />
    </>
  );
};

export default LoanODFilterTable;
