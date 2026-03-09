import React from "react";

import { Card, CardBody, Typography } from "@material-tailwind/react";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import EmptyData from "@/components/common/EmptyData";
import Pagination from "@/components/common/Pagination";

import useTableSort from "@/hooks/useTableSort";

const LEDGERS_HEAD = [
  { head: "Ledger Name", value: "leaderName" },
  { head: "Group", value: "group" },
  { head: "Ledger Type", value: "ledgerType" },
  { head: "Closing Balance", value: "closingBalance" },
  { head: "Opening Balance", value: "openingBalance" },
  { head: "Contact", value: "contact" },
  { head: "GSTIN", value: "gstin" },
  { head: "PAN", value: "pan" },
];

const LEDGERS_ROW = [
  {
    ledgerName: "ABC Traders",
    group: "Sundry Debtors",
    ledgerType: "Party Ledger",
    closingBalance: "₹82,000 Dr",
    openingBalance: "₹12,000 Dr",
    contact: "+91 9876543210",
    gstin: "08ABCDE123F1Z5",
    pan: "AAAAA1234A",
  },
];

const LEDGER_DETAILS_KPI = [
  { key: "Ledger Name", value: "ABC Traders" },
  { key: "Group", value: "Sundry Debtors" },
  { key: "Ledger Type", value: "Party Ledger" },
  { key: "Closing Balance", value: "₹82,000 Dr" },
  { key: "Opening Balance", value: "₹12,000 Dr" },
  { key: "Contact", value: "+91 9876543210" },
  { key: "GSTIN", value: "08ABCDE123F1Z5" },
  { key: "PAN", value: "AAAAA1234A" },
];

const LedgerDetailFilterTable = ({ isLoading }) => {
  const {
    sortedData: sortedLedgerDetailTableRows,
    handleSort: handleLedgerDetailTableSort,
  } = useTableSort(LEDGERS_ROW);

  return (
    <div>
      <div className="grid grid-cols-8 gap-3">
        {isLoading
          ? [...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="xl:col-span-2 lg:col-span-2 col-span-6 h-full"
              >
                <Card className="w-full transition-all animate-pulse shadow-none bg-[#E1E6EA] h-[52px]">
                  <CardBody>
                    <div></div>
                  </CardBody>
                </Card>
              </div>
            ))
          : LEDGER_DETAILS_KPI.map(({ key, value }) => (
              <div key={key} className="xl:col-span-2 lg:col-span-2 col-span-6">
                <Card className="shadow-sm border border-gray-200 !rounded-lg">
                  <CardBody className="p-4 h-full flex flex-col justify-center">
                    <div className="flex justify-between">
                      <Typography className="font-medium !text-sm">
                        {key}
                      </Typography>
                      <Typography className="font-medium !text-sm">
                        {value}
                      </Typography>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
      </div>
    </div>
  );
};

export default LedgerDetailFilterTable;
