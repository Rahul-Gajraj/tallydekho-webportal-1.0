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

import PaymentRegisterFilterTable from "./Table/PaymentRegisterFilterTable";
import ReceiptRegisterFilterTable from "./Table/ReceiptRegisterFilterTable";

const PaymentReceiptRegister = ({ isLoading }) => {
  return (
    <>
      <Card>
        <CardBody>
          <Tabs value="payments_register">
            <TabsHeader>
              <Tab className="!font-medium" value="payments_register">
                Payments Register
              </Tab>
              <Tab className="!font-medium" value="receipt_register">
                Receipts Register
              </Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="payments_register">
                <PaymentRegisterFilterTable isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="receipt_register">
                <ReceiptRegisterFilterTable isLoading={isLoading} />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default PaymentReceiptRegister;
