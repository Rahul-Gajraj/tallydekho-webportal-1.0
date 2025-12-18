import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  Switch,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import ReceivablesOverview from "@/components/Financials/ReceivablesPayables/Receivables/ReceivablesOverview";
import ReceivablesInvoiceTable from "@/components/Financials/ReceivablesPayables/Receivables/ReceivablesInvoiceTable";
import PayablesOverview from "@/components/Financials/ReceivablesPayables/Payables/PayablesOverview";
import PayablesInvoiceTable from "@/components/Financials/ReceivablesPayables/Payables/PayablesInvoiceTable";

const ReceivablesPayables = () => {
  const [selectedTab, setSelectedTab] = useState("receivables");

  return (
    <div className="mx-5 h-[100vh] overflow-y-scroll">
      <section className="mx-auto mt-[90px]">
        <Card className="shadow-sm border border-gray-200 !rounded-lg p-4 grid grid-cols-3">
          <Typography className="font-bold text-xl text-black col-span-2">
            Receivables & Payables
          </Typography>
          <div className="col-span-1 flex gap-3 justify-end">
            <Typography>Receivables</Typography>
            <Switch color="green" value={selectedTab} onChange={(e) => {
              const newValue = e.target.value
              if(newValue == "receivables") {
                setSelectedTab("payables")
              } else {
                setSelectedTab("receivables");
              }
            }} />
            <Typography>Payables</Typography>
          </div>
          {/* <Tabs value={selectedTab} className="col-span-1">
            <TabsHeader>
              <Tab
                className="!font-medium"
                value="receivables"
                onClick={() => setSelectedTab("receivables")}
              >
                Receivables
              </Tab>
              <Tab
                className="!font-medium"
                value="payables"
                onClick={() => setSelectedTab("payables")}
              >
                Payables
              </Tab>
            </TabsHeader>
          </Tabs> */}
        </Card>
        {selectedTab == "receivables" ? (
          <>
            <ReceivablesOverview />
            <ReceivablesInvoiceTable />
          </>
        ) : (
          <>
            <PayablesOverview />
            <PayablesInvoiceTable />
          </>
        )}
      </section>
    </div>
  );
};

export default ReceivablesPayables;
