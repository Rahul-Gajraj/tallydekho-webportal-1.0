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

import CashBookFilterTable from "./Table/CashBookFilterTable";
import BankRegisterFilterTable from "./Table/BankRegisterFilterTable";
import BankReconcillationFilterTable from "./Table/BankReconcillationFilterTable";

const CashTransactionsDetail = ({ isLoading }) => {
  return (
    <>
      <Card>
        <CardBody>
          <Tabs value="cash_book">
            <TabsHeader>
              <Tab className="!font-medium" value="cash_book">
                Cash Book
              </Tab>
              <Tab className="!font-medium" value="bank_register">
                Bank Register
              </Tab>
              <Tab className="!font-medium" value="bank_reoncillation">
                Bank Reconcillation
              </Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="cash_book">
                <CashBookFilterTable isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="bank_register">
                <BankRegisterFilterTable isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="bank_reoncillation">
                <BankReconcillationFilterTable isLoading={isLoading} />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default CashTransactionsDetail;
