import React from "react";

import {
  Card,
  CardBody,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

import GSTR1FilterTable from "./Table/GSTR1FilterTable";
import GSTR2AFilterTable from "./Table/GSTR2AFilterTable";
import GSTR3BFilterTable from "./Table/GSTR3BFilterTable";
import GSTR4FilterTable from "./Table/GSTR4FilterTable";
import GSTR6FilterTable from "./Table/GSTR6FilterTable";
import GSTR9FilterTable from "./Table/GSTR9FilterTable";

const GSTInfo = ({ isLoading }) => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardBody className="pt-4">
        <Tabs value="outward_supply">
          <TabsHeader>
            <Tab value="outward_supply">GSTR-1</Tab>
            <Tab value="reconciliation">GSTR-2A</Tab>
            <Tab value="summary">GSTR-3B</Tab>
            <Tab value="composition_dealers">GSTR-4</Tab>
            <Tab value="input_service_distributor">GSTR-6</Tab>
            <Tab value="annual_return">GSTR-9</Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel value="outward_supply">
              <GSTR1FilterTable isLoading={isLoading} />
            </TabPanel>
            <TabPanel value="reconciliation">
              <GSTR2AFilterTable isLoading={isLoading} />
            </TabPanel>
            <TabPanel value="summary">
              <GSTR3BFilterTable isLoading={isLoading} />
            </TabPanel>
            <TabPanel value="composition_dealers">
              <GSTR4FilterTable isLoading={isLoading} />
            </TabPanel>
            <TabPanel value="input_service_distributor">
              <GSTR6FilterTable isLoading={isLoading} />
            </TabPanel>
            <TabPanel value="annual_return">
              <GSTR9FilterTable isLoading={isLoading} />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default GSTInfo;
