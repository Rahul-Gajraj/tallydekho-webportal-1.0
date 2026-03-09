import React from "react";

import {
  Button,
  Drawer,
  IconButton,
  Option,
  Select,
  Switch,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import LedgerDetailFilterTable from "./Table/LedgerDetailFilterTable";
import TransactionsFilterTable from "./Table/TransactionsFilterTable";
import GSTLedger from "./GSTLedger";
import Summary from "./Summary";
import DocumentsFilterTable from "./Table/DocumentsFilterTable";

const LedgerDetail = ({ open, isLoading, closeDrawer }) => {
  return (
    <Drawer
      placement="right"
      className="p-4"
      open={open}
      onClose={closeDrawer}
      size={1200}
    >
      <div className="relative mt-0 block">
        <Typography variant="h4">Ledger Detail</Typography>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-0 top-0"
          onClick={closeDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <div className="space-y-4 pb-6 pt-5">
        <div className="flex gap-3">
          <Button variant="outlined">Share PDF</Button>
          <Button variant="outlined">Export (.CSV / .XLSX)</Button>
          <Button variant="outlined">Party Dashboard</Button>
          <Button variant="outlined">Payables Dashboard</Button>
        </div>
        <LedgerDetailFilterTable isLoading={isLoading} />
        <div className="!mt-7">
          <Tabs value="transactions">
            <TabsHeader>
              <Tab value="transactions">Transactions</Tab>
              <Tab value="summary">Summary</Tab>
              <Tab value="gst_ledger">GST Ledger</Tab>
              <Tab value="documents">Documents</Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="transactions">
                <TransactionsFilterTable isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="summary">
                <Summary isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="gst_ledger">
                <GSTLedger isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="documents">
                <DocumentsFilterTable isLoading={isLoading} />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </Drawer>
  );
};

export default LedgerDetail;
