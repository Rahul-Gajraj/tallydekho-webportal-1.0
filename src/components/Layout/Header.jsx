import React, { useState } from "react";
import {
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Select,
  Option,
} from "@material-tailwind/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

import SalesInvoice from "./Drawers/Sales/SalesInvoice";
import SalesQuotation from "./Drawers/Sales/SalesQuotation";
import SalesOrder from "./Drawers/Sales/SalesOrder";
import DeliveryNote from "./Drawers/Sales/DeliveryNote";
import CreditNote from "./Drawers/Sales/CreditNote";

import PurchaseInvoice from "./Drawers/Purchase/PurchaseInvoice";
import PurchaseOrder from "./Drawers/Purchase/PurchaseOrder";
import DebitNote from "./Drawers/Purchase/DebitNote";

import PaymentVoucher from "./Drawers/Voucher/PaymentVoucher";
import ReceiptVoucher from "./Drawers/Voucher/ReceiptVoucher";
import ContraVoucher from "./Drawers/Voucher/ContraVoucher";
import JournalVoucher from "./Drawers/Voucher/JournalVoucher";

import StockAdjustment from "./Drawers/Inventory/StockAdjustment";
import StockTransfer from "./Drawers/Inventory/StockTransfer";
import AddWarehouse from "./Drawers/Inventory/AddWarehouse";
import AddItem from "./Drawers/Inventory/AddItem";

import SundryCreditors from "./Drawers/Ledgers/SundryCreditors";
import SundryDebtors from "./Drawers/Ledgers/SundryDebtors";
import DuitiesTaxes from "./Drawers/Ledgers/DuitiesTaxes";
import CustomGroups from "./Drawers/Ledgers/CustomGroups";

const Notification = () => {
  const [openNotificationMenu, setOpenNotificationMenu] = useState(false);

  return (
    <Menu open={openNotificationMenu} handler={setOpenNotificationMenu}>
      <MenuHandler>
        <IconButton
          variant="text"
          className={`cursor-pointer p-3 rounded-full ${
            openNotificationMenu ? "fill-[#108f6f]" : "fill-[#868a8c]"
          } hover:fill-[#108f6f] hover:bg-transparent focus:fill-[#108f6f]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <path d="M11.53,23.98c-.16-.02-.51-.13-.68-.19-1.25-.42-2.16-1.6-2.32-2.9H3.63c-3.12-.36-3.36-4.74-.22-5.38.44-.09.81.09.86-.46.18-2.14-.31-4.54.25-6.64.63-2.39,2.52-4.45,4.86-5.24-.04-.71,0-1.32.38-1.94.9-1.48,3.07-1.67,4.22-.37.59.66.74,1.45.66,2.31,2.31.88,4.15,2.89,4.82,5.28.59,2.13.1,4.44.28,6.6.05.54.41.37.86.46,3.14.64,2.9,5.01-.22,5.37h-4.89c-.17,1.37-1.17,2.58-2.5,2.96-.11.03-.41.12-.51.13-.22.02-.72.02-.94,0ZM13.08,2.76c.08-1.61-2.24-1.61-2.16,0h2.16ZM11.47,4.28c-2.74.22-5.08,2.34-5.55,5.04-.33,1.89.04,4.07-.11,5.98-.05.61-.4,1.2-.94,1.49-.63.35-1.42.08-1.9.68-.62.78-.07,1.83.89,1.88h16.27c1.09-.03,1.59-1.44.67-2.08-.41-.29-.84-.19-1.28-.31-.73-.2-1.28-.91-1.34-1.66-.19-2.23.38-4.73-.39-6.87-.94-2.62-3.52-4.36-6.33-4.14ZM13.87,20.89h-3.75c.42,2.04,3.33,2.04,3.75,0Z" />
            <path d="M4.58,2.87c.25-.02.57.13.71.35.44.71-.31,1.15-.69,1.63-.58.72-1.11,1.59-1.44,2.45-.16.41-.38,1.5-.6,1.74-.46.52-1.39.17-1.37-.53,0-.32.28-1.14.4-1.47.4-1.13,1.07-2.3,1.84-3.22.26-.31.74-.92,1.16-.95Z" />
            <path d="M22.58,9.07c-.27.26-.77.29-1.06.04s-.47-1.26-.62-1.67c-.35-.95-.88-1.82-1.51-2.61-.38-.48-1.13-.91-.67-1.61.13-.2.43-.37.67-.36.43.01.89.61,1.15.92.84.99,1.59,2.31,1.98,3.55.15.48.48,1.36.06,1.75Z" />
          </svg>
        </IconButton>
      </MenuHandler>
      <MenuList className="flex flex-col gap-2 border-[#D5DAE1] z-30">
        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8 hover:!bg-[#eaf8f4] ">
          <Typography variant="small">All</Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8 hover:!bg-[#eaf8f4] ">
          <Typography variant="small">Transaction</Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8 hover:!bg-[#eaf8f4] ">
          <Typography variant="small">Analytics</Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const Company = () => {
  const [value, setValue] = useState("ABC Traders");

  const companies = ["ABC Traders", "Yash Ki Company"];

  return (
    <Select
      label="Select Company"
      value={value}
      onChange={(val) => setValue(val)}
      containerProps={{
        style: {
          minWidth: "200px",
        },
      }}
      color="green"
    >
      {companies.map((company) => (
        <Option
          key={company}
          value={company}
          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
        >
          {company}
        </Option>
      ))}
    </Select>
  );
};

const FYear = () => {
  const [value, setValue] = useState("2024-2025");

  const fYears = ["2024-2025", "2025-2026"];

  return (
    <Select
      label="FY"
      value={value}
      onChange={(val) => setValue(val)}
      // className="w-[150px]"
      containerProps={{
        style: {
          minWidth: "130px",
          // borderWidth: '1px'
        },
      }}
      color="green"
    >
      {fYears.map((fYear) => (
        <Option
          key={fYear}
          value={fYear}
          className="hover:!bg-[#eaf8f4] focus:!bg-[#eaf8f4] data-[selected=true]:bg-[#eaf8f4] data-[selected=true]:!text-[#108F6F]"
        >
          {fYear}
        </Option>
      ))}
    </Select>
  );
};

const Profile = ({ toggleDrawer }) => {
  return (
    <>
      <Menu>
        <MenuHandler>
          <p className="relative shrink-0 rounded-full ring-light-light size-[35px] bg-[#E1E6EA] text-xs flex items-center justify-center border-none cursor-pointer h-[35px] !w-[35px] font-bold">
            {/* <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              className="h-[35px] !w-[35px] rounded-full shrink-0"
            /> */}
            JD
          </p>
        </MenuHandler>
        <MenuList className="flex flex-col gap-2 border-[#D5DAE1] z-30">
          <MenuItem disabled className="flex items-center gap-4 py-2 pl-2 pr-8">
            <Typography variant="small" className="font-black">
              John Doe
            </Typography>
          </MenuItem>
          <MenuItem disabled className="flex items-center gap-4 py-2 pl-2 pr-8">
            <Typography variant="small" className="font-black">
              9876543210
            </Typography>
          </MenuItem>
          <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8 hover:bg-[#f8dcdc]">
            <Typography
              variant="small"
              className="font-semibold !text-[#e53935]"
            >
              Log Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

const CreateFilter = ({ toggleDrawerHandler }) => {
  const [openSalesMenu, setOpenSalesMenu] = useState(false);
  const [openPurchaseMenu, setOpenPurchaseMenu] = useState(false);
  const [openFinancialsMenu, setOpenFinancialsMenu] = useState(false);
  const [openInventoryMenu, setOpenInventoryMenu] = useState(false);
  const [openLedgerMenu, setOpenLedgerMenu] = useState(false);

  const [openCreateMenu, setOpenCreateMenu] = useState(false);

  return (
    <>
      <Menu open={openCreateMenu} handler={setOpenCreateMenu}>
        <MenuHandler>
          <Button
            variant="outlined"
            className={`${
              openCreateMenu ? "border-[#108f6f]" : "border-[#b0bec5]"
            } normal-case h-[2.5rem] focus:ring-0 ${
              openCreateMenu ? "!text-[#108f6f]" : ""
            } text-[14px] font-normal hover:border-[#108f6f] hover:!text-[#108f6f] flex items-center px-[12px] leading-[20px] hover:border-[2px] ${
              openCreateMenu ? "!border-[2px]" : "broder-px"
            }`}
            ripple={false}
          >
            {" "}
            Create{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 ml-1"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"></path>
            </svg>
          </Button>
        </MenuHandler>
        <MenuList>
          <Menu
            placement="right-start"
            open={openSalesMenu}
            handler={setOpenSalesMenu}
            allowHover
            offset={15}
          >
            <MenuHandler
              className={`flex items-center justify-between hover:!bg-[#eaf8f4] active:!bg-[#eaf8f4] hover:text-[#108f6f] active:text-[#108f6f] focus:bg-[#eaf8f4] focus:text-[#108f6f] ${
                openSalesMenu ? "bg-[#eaf8f4] text-[#108f6f]" : ""
              }`}
            >
              <MenuItem>
                Sales
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openSalesMenu ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("salesInvoice")}
              >
                Create Invoice
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("salesQuotation")}
              >
                Create Quotation
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("salesOrder")}
              >
                Create Sales Order
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("salesDeliveryNote")}
              >
                Create Delivery Note
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("salesNote")}
              >
                Credit Note
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu
            placement="right-start"
            open={openPurchaseMenu}
            handler={setOpenPurchaseMenu}
            allowHover
            offset={15}
          >
            <MenuHandler
              className={`flex items-center justify-between hover:!bg-[#eaf8f4] active:!bg-[#eaf8f4] hover:text-[#108f6f] active:text-[#108f6f] focus:bg-[#eaf8f4] focus:text-[#108f6f] ${
                openPurchaseMenu ? "bg-[#eaf8f4] text-[#108f6f]" : ""
              }`}
            >
              <MenuItem>
                Purchase
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openPurchaseMenu ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("purchaseInvoice")}
              >
                Create Purchase Invoice
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("purchaseOrder")}
              >
                Create Purchase Order
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("purchaseDebitNote")}
              >
                Debit Note
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu
            placement="right-start"
            open={openFinancialsMenu}
            handler={setOpenFinancialsMenu}
            allowHover
            offset={15}
          >
            <MenuHandler
              className={`flex items-center justify-between hover:!bg-[#eaf8f4] active:!bg-[#eaf8f4] hover:text-[#108f6f] active:text-[#108f6f] focus:bg-[#eaf8f4] focus:text-[#108f6f] ${
                openFinancialsMenu ? "bg-[#eaf8f4] text-[#108f6f]" : ""
              }`}
            >
              <MenuItem>
                Voucher
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openFinancialsMenu ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("paymentVoucher")}
              >
                Payment Voucher
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("receiptVoucher")}
              >
                Receipt Voucher
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("contraVoucher")}
              >
                Contra Voucher
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("journalVoucher")}
              >
                Journal Voucher
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu
            placement="right-start"
            open={openInventoryMenu}
            handler={setOpenInventoryMenu}
            allowHover
            offset={15}
          >
            <MenuHandler
              className={`flex items-center justify-between hover:!bg-[#eaf8f4] active:!bg-[#eaf8f4] hover:text-[#108f6f] active:text-[#108f6f] focus:bg-[#eaf8f4] focus:text-[#108f6f] ${
                openInventoryMenu ? "bg-[#eaf8f4] text-[#108f6f]" : ""
              }`}
            >
              <MenuItem>
                Inventory
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openInventoryMenu ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("stockAdjustment")}
              >
                Stock Adjustment
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("stockTransfer")}
              >
                Stock Transfer
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("addItem")}
              >
                Add Item
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("addWarehouse")}
              >
                Add Warehouse
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu
            placement="right-start"
            open={openLedgerMenu}
            handler={setOpenLedgerMenu}
            allowHover
            offset={15}
          >
            <MenuHandler
              className={`flex items-center justify-between hover:!bg-[#eaf8f4] active:!bg-[#eaf8f4] hover:text-[#108f6f] active:text-[#108f6f] focus:bg-[#eaf8f4] focus:text-[#108f6f] ${
                openLedgerMenu ? "bg-[#eaf8f4] text-[#108f6f]" : ""
              }`}
            >
              <MenuItem>
                Ledgers
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openLedgerMenu ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("sundryCreditors")}
              >
                Sundry Creditors
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("sundryDebtors")}
              >
                Sundry Debitors
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("duitiesTaxes")}
              >
                Duties & Taxes
              </MenuItem>
              <MenuItem
                className="hover:!bg-[#EAF8F4] active:!bg-[#EAF8F4] hover:!text-[#108F6F] active:!text-[#108F6F]"
                onClick={() => toggleDrawerHandler("customGroups")}
              >
                Custom Groups
              </MenuItem>
            </MenuList>
          </Menu>
        </MenuList>
      </Menu>
    </>
  );
};

const Header = ({ toggleDrawer, isPinned }) => {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = (key) => {
    if (!key) {
      console.error("openDrawer called with invalid key");
      return;
    }
    try {
      setActiveDrawer(key);
      requestAnimationFrame(() => {
        setDrawerOpen(true);
      });
    } catch (error) {
      console.error("Error opening drawer:", error);
    }
  };

  const closeDrawer = () => {
    try {
      setDrawerOpen(false);

      setTimeout(() => {
        setActiveDrawer(null);
      }, 300);
    } catch (error) {
      console.error("Error closing drawer:", error);
      setActiveDrawer(null);
      setDrawerOpen(false);
    }
  };

  const navList = (
    <>
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
        <li>
          <CreateFilter toggleDrawerHandler={openDrawer} />
        </li>
        <li>
          <FYear />
        </li>
        <li>
          <Company />
          {/* <span className="text-[10px]">Last sync 30 min</span> */}
        </li>
        <li>
          <Notification />
        </li>
        <li>
          <IconButton
            variant="text"
            className={
              "cursor-pointer p-3 rounded-full fill-[#868a8c] hover:fill-[#108F6F] hover:bg-transparent focus:fill-[#108F6F]"
            }
            onClick={() => {
              toggleDrawer();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path d="M10.36.06c.85-.09,3.09-.11,3.86.12.95.28,1.79,1.13,2.02,2.1.1.43.02,1.04.33,1.35.55.55,1.15-.02,1.72-.17,1.05-.27,2.21.03,2.96.82.4.42,1.85,2.92,2.02,3.48.36,1.2,0,2.41-.93,3.22-.32.27-.78.41-.84.89-.08.68.43.79.84,1.14,2.14,1.85.54,4.22-.65,6.07-.79,1.24-2.06,1.85-3.53,1.41-.51-.16-.87-.55-1.42-.26-.5.26-.36.7-.44,1.14-.24,1.41-1.34,2.45-2.77,2.57-.86.07-2.95.1-3.73-.12-.96-.27-1.82-1.14-2.06-2.11-.1-.43-.02-1.04-.33-1.35-.55-.55-1.15.02-1.72.17-1.05.27-2.21-.03-2.96-.82-.42-.45-1.91-3.02-2.05-3.6-.29-1.18.04-2.3.95-3.09.32-.27.78-.41.84-.89.08-.68-.43-.79-.84-1.14-2.14-1.85-.54-4.22.65-6.07.79-1.24,2.06-1.85,3.53-1.41.51.16.87.55,1.42.26s.39-1.02.53-1.55c.31-1.15,1.4-2.02,2.59-2.15ZM13.91,2.45c-.14-.13-.37-.21-.57-.22-.68-.06-2.02-.06-2.7,0-.57.05-.75.37-.83.9-.02.14,0,.29-.02.44-.29,1.69-1.98,2.8-3.66,2.41-.68-.16-1.31-.87-1.91-.05-.33.45-1.14,1.85-1.36,2.35-.39.9.34,1.05.84,1.5,1.27,1.13,1.29,3.25.03,4.4-.48.44-1.25.62-.89,1.49.2.48,1.06,1.96,1.38,2.39.58.79,1.18.14,1.83-.03,1.74-.45,3.44.69,3.75,2.44.05.26-.01.58.12.85.1.2.4.41.63.44.6.08,2.17.06,2.8,0,1.02-.09.74-1.09.96-1.78.5-1.57,2.26-2.4,3.82-1.88.6.2,1.11.7,1.64-.03.33-.46,1.14-1.84,1.36-2.35.39-.9-.34-1.05-.84-1.5-1.19-1.06-1.29-3.01-.23-4.2.51-.57,1.5-.75,1.07-1.73-.22-.51-1.03-1.91-1.36-2.35-.6-.81-1.23-.1-1.91.05-1.67.38-3.38-.72-3.66-2.41-.06-.37.04-.81-.29-1.11Z" />
              <path d="M11.63,6.57c3.43-.24,6.24,2.81,5.75,6.21-.6,4.17-5.67,6.14-8.9,3.36-3.71-3.19-1.7-9.23,3.14-9.57ZM11.68,8.76c-4.53.45-3.41,7.47,1.1,6.39,3.86-.93,2.87-6.79-1.1-6.39Z" />
            </svg>
          </IconButton>
        </li>
        <li>
          <Profile toggleDrawer={toggleDrawer} />
        </li>
      </ul>
    </>
  );

  return (
    <>
      <header
        className="header flex fixed top-0 z-30 left-0 right-0 border-0 bg-white shadow rounded-none px-5 transition-[padding-left] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          paddingLeft: isPinned ? 251 : 60,
        }}
      >
        <div className="container-fixed flex justify-between lg:gap-4 items-center pl-5">
          <div className="flex rounded-md ring-1 focus-within:ring-2 ring-inset ring-gray-300 w-full max-w-[500px] h-[40px] bg-[#F5F7F9] items-center focus-within:ring-[#108F6F]">
            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
              <img className="" src="/media/icons/search.svg" alt="search" />
            </span>
            <input
              id="header-search-input"
              name="header-search-input"
              type="text"
              placeholder="Search for customers, items, invoices, ledgers or vouchers"
              className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-600 sm:text-sm/6 focus:border-0"
            />
          </div>
          <div className="hidden lg:block">{navList}</div>
        </div>
      </header>

      {activeDrawer === "salesInvoice" && (
        <SalesInvoice open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "salesQuotation" && (
        <SalesQuotation open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "salesOrder" && (
        <SalesOrder open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "salesDeliveryNote" && (
        <DeliveryNote open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "salesNote" && (
        <CreditNote open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "purchaseInvoice" && (
        <PurchaseInvoice open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "purchaseOrder" && (
        <PurchaseOrder open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "purchaseDebitNote" && (
        <DebitNote open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "paymentVoucher" && (
        <PaymentVoucher open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "receiptVoucher" && (
        <ReceiptVoucher open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "contraVoucher" && (
        <ContraVoucher open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "journalVoucher" && (
        <JournalVoucher open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "stockAdjustment" && (
        <StockAdjustment open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "stockTransfer" && (
        <StockTransfer open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "addItem" && (
        <AddItem open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "addWarehouse" && (
        <AddWarehouse open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "sundryCreditors" && (
        <SundryCreditors open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "sundryDebtors" && (
        <SundryDebtors open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "duitiesTaxes" && (
        <DuitiesTaxes open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
      {activeDrawer === "customGroups" && (
        <CustomGroups open={drawerOpen} toggleDrawer={closeDrawer} />
      )}
    </>
  );
};

export default Header;
