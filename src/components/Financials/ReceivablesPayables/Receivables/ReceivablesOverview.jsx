import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import KPIStrip from "@/components/common/KPIStrip";

import ReceivablesOutstandingFilterTable from "../Table/ReceivablesOutstandingFilterTable";

const RECEIVABLES_KPI = [
  {
    title: "Total Receivables",
    price: "₹4,850,000",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        className="h-5 w-5"
      >
        <path d="M8.4,17.4c-.84,0-1.55-.29-2.13-.87s-.87-1.29-.87-2.13.29-1.55.87-2.13,1.29-.87,2.13-.87,1.55.29,2.13.87.87,1.29.87,2.13-.29,1.55-.87,2.13-1.29.87-2.13.87ZM3.6,24c-.66,0-1.22-.24-1.69-.7-.47-.47-.7-1.03-.7-1.7V4.8c0-.66.24-1.22.7-1.69.47-.47,1.03-.7,1.69-.7h1.2V0h2.4v2.4h9.6V0h2.4v2.4h1.2c.66,0,1.22.23,1.69.7s.7,1.03.7,1.69v16.8c0,.66-.23,1.23-.7,1.7s-1.03.7-1.69.7H3.6ZM3.6,21.6h16.8v-12H3.6v12ZM3.6,7.2h16.8v-2.4H3.6v2.4ZM3.6,7.2v-2.4,2.4Z" />
      </svg>
    ),
  },
  {
    title: "Overdue Receivables",
    price: "₹1,320,000",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        className="h-5 w-5"
      >
        <path d="M3.6,24c-.66,0-1.22-.24-1.7-.7-.47-.47-.7-1.03-.7-1.69V4.8c0-.66.24-1.22.7-1.7.47-.47,1.04-.7,1.7-.7h1.2V0h2.4v2.4h9.6V0h2.4v2.4h1.2c.66,0,1.22.23,1.7.7s.7,1.04.7,1.7v16.8c0,.66-.23,1.23-.7,1.69s-1.03.7-1.7.7H3.6ZM3.6,21.6h16.8v-12H3.6v12ZM3.6,7.2h16.8v-2.4H3.6v2.4ZM3.6,7.2v-2.4,2.4ZM12,14.4c-.34,0-.63-.12-.85-.34s-.34-.51-.34-.85.12-.63.34-.85.51-.35.85-.35.63.12.85.35c.23.23.34.51.34.85s-.11.63-.34.85c-.23.23-.51.34-.85.34ZM7.2,14.4c-.34,0-.63-.12-.85-.34s-.34-.51-.34-.85.12-.63.34-.85.51-.35.85-.35.63.12.85.35.35.51.35.85-.12.63-.35.85-.51.34-.85.34ZM16.8,14.4c-.34,0-.62-.12-.85-.34s-.34-.51-.34-.85.11-.63.34-.85.52-.35.85-.35.62.12.85.35.34.51.34.85-.11.63-.34.85-.52.34-.85.34ZM12,19.2c-.34,0-.63-.11-.85-.34-.23-.23-.34-.51-.34-.85s.12-.63.34-.85.51-.34.85-.34.63.12.85.34c.23.23.34.51.34.85s-.11.63-.34.85c-.23.23-.51.34-.85.34ZM7.2,19.2c-.34,0-.63-.11-.85-.34-.23-.23-.34-.51-.34-.85s.12-.63.34-.85.51-.34.85-.34.63.12.85.34.35.51.35.85-.12.63-.35.85c-.23.23-.51.34-.85.34ZM16.8,19.2c-.34,0-.62-.11-.85-.34-.23-.23-.34-.51-.34-.85s.11-.63.34-.85.52-.34.85-.34.62.12.85.34.34.51.34.85-.11.63-.34.85c-.23.23-.52.34-.85.34Z" />
      </svg>
    ),
  },
  {
    title: "Due Next 7 Days",
    price: "₹640,000",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        className="h-5 w-5"
      >
        <path d="M3.6,24c-.66,0-1.22-.24-1.7-.7-.47-.47-.7-1.03-.7-1.69V4.8c0-.66.24-1.22.7-1.7.47-.47,1.04-.7,1.7-.7h1.2V0h2.4v2.4h9.6V0h2.4v2.4h1.2c.66,0,1.22.23,1.7.7s.7,1.04.7,1.7v16.8c0,.66-.23,1.23-.7,1.69s-1.03.7-1.7.7H3.6ZM3.6,21.6h16.8v-12H3.6v12ZM3.6,7.2h16.8v-2.4H3.6v2.4ZM3.6,7.2v-2.4,2.4ZM12,14.4c-.34,0-.63-.12-.85-.34s-.34-.51-.34-.85.12-.63.34-.85.51-.35.85-.35.63.12.85.35c.23.23.34.51.34.85s-.11.63-.34.85c-.23.23-.51.34-.85.34ZM7.2,14.4c-.34,0-.63-.12-.85-.34s-.34-.51-.34-.85.12-.63.34-.85.51-.35.85-.35.63.12.85.35.35.51.35.85-.12.63-.35.85-.51.34-.85.34ZM16.8,14.4c-.34,0-.62-.12-.85-.34s-.34-.51-.34-.85.11-.63.34-.85.52-.35.85-.35.62.12.85.35.34.51.34.85-.11.63-.34.85-.52.34-.85.34ZM12,19.2c-.34,0-.63-.11-.85-.34-.23-.23-.34-.51-.34-.85s.12-.63.34-.85.51-.34.85-.34.63.12.85.34c.23.23.34.51.34.85s-.11.63-.34.85c-.23.23-.51.34-.85.34ZM7.2,19.2c-.34,0-.63-.11-.85-.34-.23-.23-.34-.51-.34-.85s.12-.63.34-.85.51-.34.85-.34.63.12.85.34.35.51.35.85-.12.63-.35.85c-.23.23-.51.34-.85.34ZM16.8,19.2c-.34,0-.62-.11-.85-.34-.23-.23-.34-.51-.34-.85s.11-.63.34-.85.52-.34.85-.34.62.12.85.34.34.51.34.85-.11.63-.34.85c-.23.23-.52.34-.85.34Z" />
      </svg>
    ),
  },
  {
    title: "Avg Collection Days",
    price: "42",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="h-6 w-6"
      >
        <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm400 240H120q-33 0-56.5-23.5T40-240v-400q0-17 11.5-28.5T80-680q17 0 28.5 11.5T120-640v400h640q17 0 28.5 11.5T800-200q0 17-11.5 28.5T760-160ZM280-400v-320 320Z" />
      </svg>
    ),
  },
];

const alerts = [
  {
    title: "12 invoices overdue beyond 60 days",
    subtitle: "High risk customers need follow-up",
    img: <img src="/media/alerts/error.svg" className="h-5 w-5 mt-[3px]" />,
  },
  {
    title: "5 customers crossing credit limit",
    subtitle: "Consider hold or collection call",
    img: <img src="/media/alerts/warning.svg" className="h-6 w-6 mt-[3px]" />,
  },
  {
    title: "Tally sync pending for receivables ageing",
    subtitle: "Last sync 2 days ago",
    img: <img src="/media/alerts/success.svg" className="h-6 w-6 mt-[3px]" />,
  },
];

const ReceivablesOverview = ({ isLoading }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {isLoading
          ? [...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="col-span-4 sm:col-span-2 lg:col-span-1 h-full"
              >
                <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[94px]">
                  <CardBody>
                    <div></div>
                  </CardBody>
                </Card>
              </div>
            ))
          : RECEIVABLES_KPI.map((kpiData, idx) => (
              <div key={idx} className="col-span-4 sm:col-span-2 lg:col-span-1">
                <KPIStrip {...kpiData} />
              </div>
            ))}
      </div>
      <div className="grid grid-cols-3 mt-5 gap-5">
        <Card className="col-span-3 xl:col-span-2 shadow-sm border border-gray-200 !rounded-lg">
          <CardHeader
            shadow={false}
            floated={false}
            className="pt-3 grid grid-cols-3"
          >
            <div className="col-span-2">
              <Typography className="font-bold text-lg">
                Outstanding Overview
              </Typography>
              <Typography className="font-normal text-sm">
                Top parties by outstanding
              </Typography>
            </div>
            <div className="col-span-1">
              <Tabs value="customers">
                <TabsHeader>
                  <Tab value="customers">Customers</Tab>
                  <Tab value="vendors">Vendors</Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </CardHeader>
          <CardBody className="p-4">
            <ReceivablesOutstandingFilterTable isLoading={isLoading} />
          </CardBody>
        </Card>
        <div className="col-span-3 xl:col-span-1 flex xl:flex-col gap-5">
          <Card className="shadow-sm border border-gray-200 !rounded-lg w-full">
            <CardHeader shadow={false} floated={false} className="p-2">
              <Typography className="font-bold text-lg">
                Receivables Aging Summary
              </Typography>
              <Typography className="font-normal text-sm">
                Bucket-wise custoner outstanding
              </Typography>
            </CardHeader>
            {isLoading ? (
              <Card className="transition-all animate-pulse shadow-none bg-[#E1E6EA] rounded mx-6 mb-6 h-[124px]">
                <div></div>
              </Card>
            ) : (
              <CardBody className="pt-3">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-[#93C5FD] rounded-full"></span>
                      <Typography variant="small" className="font-normal">
                        0-30 days
                      </Typography>
                    </div>
                    <Typography variant="small" className="font-normal">
                      ₹1,920,000
                    </Typography>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-[#67E8F9] rounded-full"></span>
                      <Typography variant="small" className="font-normal">
                        31-60 days
                      </Typography>
                    </div>
                    <Typography variant="small" className="font-normal">
                      ₹1,380,000
                    </Typography>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-[#C4B5FD] rounded-full"></span>
                      <Typography variant="small" className="font-normal">
                        61-90 days
                      </Typography>
                    </div>
                    <Typography variant="small" className="font-normal">
                      ₹910,000
                    </Typography>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-[#C4B5FD] rounded-full"></span>
                      <Typography variant="small" className="font-normal">
                        {">"}90 days
                      </Typography>
                    </div>
                    <Typography variant="small" className="font-normal">
                      ₹640,000
                    </Typography>
                  </div>
                </div>
              </CardBody>
            )}
          </Card>
          <Card className="shadow-sm border border-gray-200 !rounded-lg w-full">
            <CardHeader floated={false} shadow={false} className="p-2">
              <Typography className="font-bold text-lg">
                Receivables Alerts
              </Typography>
              <Typography className="font-normal text-sm">
                Collection risk signals
              </Typography>
            </CardHeader>
            <CardBody className="!p-2 mx-4 h-[270px] overflow-scroll">
              {isLoading ? (
                <List className="pt-0 gap-3">
                  {[...Array(3)].map((_, idx) => (
                    <Card
                      key={idx}
                      className="transition-all animate-pulse w-full h-[67px] shadow-none bg-[#E1E6EA]"
                    >
                      <div></div>
                    </Card>
                  ))}
                </List>
              ) : alerts.length > 0 ? (
                <List className="pt-0 gap-3">
                  {alerts.map(({ title, subtitle, img }) => (
                    <Card key={title} className="border shadow-none">
                      <ListItem className="items-start hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]">
                        <ListItemPrefix className="items-start mr-2">
                          {img}
                        </ListItemPrefix>
                        <div>
                          <Typography>{title}</Typography>
                          <Typography className="text-[14px]">
                            {subtitle}
                          </Typography>
                        </div>
                      </ListItem>
                    </Card>
                  ))}
                </List>
              ) : (
                <div className="flex flex-col justify-center items-center h-full gap-2 bg-[#F6F7F9]">
                  <img
                    src="/media/icons/line_graph.svg"
                    alt="line_graph"
                    className="h-5 w-5"
                  />
                  <Typography className="!text-[#6f7c97]">No Alerts</Typography>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ReceivablesOverview;
