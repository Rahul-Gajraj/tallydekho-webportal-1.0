import {
  Card,
  CardBody,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

import TDS from "@/components/Compliance/OtherTaxes/TDS";
import TCS from "@/components/Compliance/OtherTaxes/TCS";
import ImportDuty from "@/components/Compliance/OtherTaxes/ImportDuty";
import RecentActivity from "@/components/Compliance/OtherTaxes/common/RecentActivity";
import Challans from "@/components/Compliance/OtherTaxes/common/Challans";
import Register from "@/components/Compliance/OtherTaxes/common/Register";
import ExportDuty from "@/components/Compliance/OtherTaxes/ExportDuty";
import Excise from "@/components/Compliance/OtherTaxes/Excise";
import VAT from "@/components/Compliance/OtherTaxes/VAT";
import CESS from "@/components/Compliance/OtherTaxes/Cess";

const OtherTaxes = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="mx-5 mb-5 overflow-y-scroll">
      <Card className="shadow-sm border border-gray-200 !rounded-lg mt-8">
        <CardBody>
          <Tabs value="tds">
            <TabsHeader>
              <Tab value="tds">TDS</Tab>
              <Tab value="tcs">TCS</Tab>
              <Tab value="import_duty">Import Duty</Tab>
              <Tab value="export_duty">Export Duty</Tab>
              <Tab value="excise">Excise</Tab>
              <Tab value="vat">VAT</Tab>
              <Tab value="cess">CESS</Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="tds" className="pb-0">
                <TDS isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="tcs" className="pb-0">
                <TCS isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="import_duty" className="pb-0">
                <ImportDuty isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="export_duty" className="pb-0">
                <ExportDuty isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="excise" className="pb-0">
                <Excise isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="vat" className="pb-0">
                <VAT isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="cess" className="pb-0">
                <CESS isLoading={isLoading} />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-8">
          <Challans isLoading={isLoading} />
        </div>
        <div className="col-span-4">
          <RecentActivity isLoading={isLoading} />
        </div>
        <div className="col-span-12">
          <Register isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default OtherTaxes;
