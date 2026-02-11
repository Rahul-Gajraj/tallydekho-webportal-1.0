import React from "react";

import {
  Card,
  CardBody,
  Input,
  Option,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

const CASH_BOOK_HEAD = [
  {
    head: "Date",
    customeStyle: "text-center",
  },
  {
    head: "Voucher No.",
  },
  {
    head: "Particulars",
  },
  {
    head: "Type",
  },
  {
    head: "Receipts",
  },
  {
    head: "Payments",
  },
  {
    head: "Balance",
  },
  {
    head: "Docs",
  },
  {
    head: "Actions",
  },
];

const CASH_BOOK_TABLE_ROW = [
  {
    date: "10 Jul 2025",
    voucherNo: "CB-145",
    particulars: "Cash sales collection",
    type: "Receipt",
    receipts: "₹18,500",
    payments: "-",
    balance: "₹84,500",
  },
  {
    date: "09 Jul 2025",
    voucherNo: "CB-144",
    particulars: "Petty cash rembursement",
    type: "Payment",
    receipts: "-",
    payments: "₹7,900",
    balance: "₹66,000",
  },
  {
    date: "09 Jul 2025",
    voucherNo: "CB-143",
    particulars: "Cash deposit to ICICI",
    type: "Payment",
    receipts: "-",
    payments: "₹12,000",
    balance: "₹73,900",
  },
];

const BANK_REGISTER_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "text-center",
  },
  {
    head: "Bank Ref",
  },
  {
    head: "Party / Ledger",
  },
  {
    head: "Debit",
  },
  {
    head: "Credit",
  },
  {
    head: "Balance",
  },
  {
    head: "CLR Date",
  },
  {
    head: "Status",
  },
  {
    head: "Docs",
  },
  {
    head: "Actions",
  },
];

const BANK_REGISTER_TABLE_ROW = [
  {
    date: "10 Jul 2025",
    bankRef: "UTR-982776",
    party: "XYZ Exports",
    debit: "-",
    credit: "₹36,000",
    balance: "₹1,240,000",
    clrDate: "10 Jul 2025",
    status: "Cleared",
  },
  {
    date: "09 Jul 2025",
    bankRef: "UTR-671234",
    party: "PP Enterprises",
    debit: "-",
    credit: "₹28,500",
    balance: "₹1,204,000",
    clrDate: "09 Jul 2025",
    status: "Cleared",
  },
  {
    date: "08 Jul 2025",
    bankRef: "UTR-772198",
    party: "Global Traders",
    debit: "-",
    credit: "₹24,200",
    balance: "₹1,175,000",
    clrDate: "-",
    status: "Unreconciled",
  },
];

const BANK_RECONCILLATION_TABLE_HEAD = [
  {
    head: "Date",
    customeStyle: "text-center",
  },
  {
    head: "Bank ref",
  },
  {
    head: "Particulars",
  },
  {
    head: "Debit",
  },
  {
    head: "Credit",
  },
  {
    head: "CLR Date",
  },
  {
    head: "Status",
  },
  {
    head: "Docs",
  },
  {
    head: "Actions",
  },
];

const BANK_RECONCILLATION_TABLE_ROW = [
  {
    date: "09 Jul 2025",
    bankRef: "UTR-772198",
    particulars: "Global Traders",
    debit: "-",
    credit: "₹24,200",
    clrDate: "-",
    status: "Unreconciled",
  },
  {
    date: "08 Jul 2025",
    bankRef: "CHQ-118822",
    particulars: "Cheque deposit - XYZ Exports",
    debit: "-",
    credit: "₹42,000",
    clrDate: "-",
    status: "Unreconciled",
  },
  {
    date: "07 Jul 2025",
    bankRef: "CHQ-118801",
    particulars: "Cheque issued - Metro Logistics",
    debit: "₹28,400",
    credit: "-",
    clrDate: "-",
    status: "Unreconciled",
  },
];

const CashTransactionsDetail = () => {
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
                <div className="flex items-center gap-2 flex-wrap justify-between">
                  <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[430px]">
                    <span className="pl-3">
                      <img src="/media/custom/search-sm.svg" />
                    </span>
                    <input
                      id="header-search-input"
                      name="header-search-input"
                      type="text"
                      placeholder="Search by narration / voucher no / ledger"
                      className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
                      // value={itemsListSearchText}
                      // onChange={(e) => setItemsListSearchText(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Period"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          2024-2025
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          2025-2026
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Cash Ledger"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Bank
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Cash
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          UPI
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Voucher Type"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Receipt
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Payment
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[100px]">
                      <Input
                        label="Opening"
                        readOnly
                        value="₹72,200"
                        containerProps={{
                          style: {
                            minWidth: "100px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                    <div className="w-[100px]">
                      <Input
                        label="Receipts"
                        readOnly
                        value="₹48,300"
                        containerProps={{
                          style: {
                            minWidth: "100px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                    <div className="w-[100px]">
                      <Input
                        label="Payments"
                        readOnly
                        value="₹36,000"
                        containerProps={{
                          style: {
                            minWidth: "100px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                    <div className="w-[100px]">
                      <Input
                        label="Closing"
                        readOnly
                        value="₹84,500"
                        containerProps={{
                          style: {
                            minWidth: "100px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                  </div>
                </div>
                <table className="mt-4 min-w-full table-auto text-left">
                  <thead>
                    <tr>
                      {CASH_BOOK_HEAD.map(({ head, customeStyle }) => (
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
                    {CASH_BOOK_TABLE_ROW.map((row, index) => {
                      const {
                        date,
                        voucherNo,
                        particulars,
                        type,
                        receipts,
                        payments,
                        balance,
                      } = row;
                      const isLast = index === CASH_BOOK_TABLE_ROW.length - 1;
                      const classes = "p-4 px-0 border-b border-blue-gray-50";

                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {date}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {voucherNo}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {particulars}
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
                              {receipts}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {payments}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {balance}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                              className="w-5 h-5 ml-3"
                              fill="#108f6f"
                            >
                              <path d="M360-440h240q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440Zm0 120h240q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400H360q-17 0-28.5 11.5T320-360q0 17 11.5 28.5T360-320Zm0 120h120q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280H360q-17 0-28.5 11.5T320-240q0 17 11.5 28.5T360-200ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm480-520H580q-25 0-42.5-17.5T520-660v-140H240v640h480v-440ZM240-800v200-200 640-640Z" />
                            </svg>
                          </td>
                          <td className={classes}>
                            <div className="flex gap-3 pl-3">
                              <Typography
                                variant="small"
                                className="font-normal cursor-pointer"
                                color="green"
                              >
                                Share PDF
                              </Typography>
                              <Typography
                                variant="small"
                                className="font-normal cursor-pointer"
                                color="green"
                              >
                                Download
                              </Typography>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel value="bank_register">
                <div className="flex items-center gap-2 flex-wrap justify-between">
                  <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[500px]">
                    <span className="pl-3">
                      <img src="/media/custom/search-sm.svg" />
                    </span>
                    <input
                      id="header-search-input"
                      name="header-search-input"
                      type="text"
                      placeholder="Search by party / narration / bank ref no"
                      className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
                      // value={itemsListSearchText}
                      // onChange={(e) => setItemsListSearchText(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Period"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          2024-2025
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          2025-2026
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Bank A/C"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
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
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Status"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Cleared
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Unreconciled
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[100px]">
                      <Input
                        label="Total Debits"
                        readOnly
                        value="₹612,000"
                        containerProps={{
                          style: {
                            minWidth: "100px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                    <div className="w-[100px]">
                      <Input
                        label="Total Credits"
                        readOnly
                        value="₹688,000"
                        containerProps={{
                          style: {
                            minWidth: "100px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                    <div className="w-[100px]">
                      <Input
                        label="Unreconciled"
                        readOnly
                        value="36"
                        containerProps={{
                          style: {
                            minWidth: "100px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                  </div>
                </div>
                <table className="mt-4 min-w-full table-auto text-left">
                  <thead>
                    <tr>
                      {BANK_REGISTER_TABLE_HEAD.map(
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
                    {BANK_REGISTER_TABLE_ROW.map((row, index) => {
                      const {
                        date,
                        bankRef,
                        party,
                        debit,
                        credit,
                        balance,
                        clrDate,
                        status,
                      } = row;
                      const isLast =
                        index === BANK_REGISTER_TABLE_ROW.length - 1;
                      const classes = "p-4 px-0 border-b border-blue-gray-50";

                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {date}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {bankRef}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {party}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {debit}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {credit}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {balance}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {clrDate}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {status}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                              className="w-5 h-5 ml-3"
                              fill="#108f6f"
                            >
                              <path d="M360-440h240q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440Zm0 120h240q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400H360q-17 0-28.5 11.5T320-360q0 17 11.5 28.5T360-320Zm0 120h120q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280H360q-17 0-28.5 11.5T320-240q0 17 11.5 28.5T360-200ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm480-520H580q-25 0-42.5-17.5T520-660v-140H240v640h480v-440ZM240-800v200-200 640-640Z" />
                            </svg>
                          </td>
                          <td className={classes}>
                            <div className="flex gap-3 pl-3">
                              <Typography
                                variant="small"
                                className="font-normal cursor-pointer"
                                color="green"
                              >
                                Share PDF
                              </Typography>
                              <Typography
                                variant="small"
                                className="font-normal cursor-pointer"
                                color="green"
                              >
                                Download
                              </Typography>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel value="bank_reoncillation">
                <div className="flex items-center gap-2 flex-wrap justify-between">
                  <div className="flex rounded-md ring-1 ring-inset ring-gray-300 h-[40px]  items-center focus-within:ring-[#108F6F] w-[500px]">
                    <span className="pl-3">
                      <img src="/media/custom/search-sm.svg" />
                    </span>
                    <input
                      id="header-search-input"
                      name="header-search-input"
                      type="text"
                      placeholder="Search by amount / ref / narration"
                      className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
                      // value={itemsListSearchText}
                      // onChange={(e) => setItemsListSearchText(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Period"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          2024-2025
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          2025-2026
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Bank A/C"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          ICICI Bank - 0012
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          SBI Bank
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[130px]">
                      <Select
                        className="bg-white-600"
                        label="Status"
                        containerProps={{
                          style: {
                            minWidth: "130px",
                          },
                        }}
                        // value={value}
                        // onChange={(val) => setValue(val)}
                        color="green"
                      >
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          All
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Cleared
                        </Option>
                        <Option className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]">
                          Unreconciled
                        </Option>
                      </Select>
                    </div>
                    <div className="w-[120px]">
                      <Input
                        label="Book Balance"
                        readOnly
                        value="₹1,240,000"
                        containerProps={{
                          style: {
                            minWidth: "120px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                    <div className="w-[120px]">
                      <Input
                        label="STMT Balance"
                        readOnly
                        value="₹1,227,600"
                        containerProps={{
                          style: {
                            minWidth: "120px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                    <div className="w-[120px]">
                      <Input
                        label="Difference"
                        readOnly
                        value="₹12,400"
                        containerProps={{
                          style: {
                            minWidth: "120px",
                          },
                        }}
                        className="pointer-events-none bg-[#f5f7f9]"
                      />
                    </div>
                  </div>
                </div>
                <table className="mt-4 min-w-full table-auto text-left">
                  <thead>
                    <tr>
                      {BANK_RECONCILLATION_TABLE_HEAD.map(
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
                    {BANK_RECONCILLATION_TABLE_ROW.map((row, index) => {
                      const {
                        date,
                        bankRef,
                        particulars,
                        debit,
                        credit,
                        clrDate,
                        status,
                      } = row;
                      const isLast =
                        index === BANK_RECONCILLATION_TABLE_ROW.length - 1;
                      const classes = "p-4 px-0 border-b border-blue-gray-50";

                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {date}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {bankRef}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {particulars}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {debit}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {credit}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {clrDate}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {status}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                              className="w-5 h-5 ml-3"
                              fill="#108f6f"
                            >
                              <path d="M360-440h240q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440Zm0 120h240q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400H360q-17 0-28.5 11.5T320-360q0 17 11.5 28.5T360-320Zm0 120h120q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280H360q-17 0-28.5 11.5T320-240q0 17 11.5 28.5T360-200ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm480-520H580q-25 0-42.5-17.5T520-660v-140H240v640h480v-440ZM240-800v200-200 640-640Z" />
                            </svg>
                          </td>
                          <td className={classes}>
                            <div className="flex gap-3 pl-3">
                              <Typography
                                variant="small"
                                className="font-normal cursor-pointer"
                                color="green"
                              >
                                Share PDF
                              </Typography>
                              <Typography
                                variant="small"
                                className="font-normal cursor-pointer"
                                color="green"
                              >
                                Download
                              </Typography>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default CashTransactionsDetail;
