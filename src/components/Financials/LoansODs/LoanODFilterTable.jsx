import React, { useState } from "react";

import {
  Card,
  CardBody,
  Option,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

import EMICalendar from "./EMICalendar";
import EMIDetailDrawer from "./Drawer/EMIDetailDrawer";
import LoadDetailDrawer from "./Drawer/LoadDetailDrawer";
import ODDetailDrawer from "./Drawer/ODDetailDrawer";

import LoanRegisterFilterTable from "./Table/LoanRegisterFilterTable";
import ODAccountFilterTable from "./Table/ODAccountFilterTable";

const LoanODFilterTable = ({ isLoading }) => {
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
                <LoanRegisterFilterTable isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="od_accounts">
                <ODAccountFilterTable isLoading={isLoading} />
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
