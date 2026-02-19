import React, { useState } from "react";

import {
  Accordion,
  AccordionBody,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

import Profile from "../Dialogs/Settings/Account/Profile";
import CompanyInformation from "../Dialogs/Settings/Account/CompanyInformation";
import Language from "../Dialogs/Settings/Preferences/Language";
import CurrencyFormat from "../Dialogs/Settings/Preferences/CurrencyFormat";
import EWayBill from "../Dialogs/Settings/Integrations/EWayBill";
import EInvoicing from "../Dialogs/Settings/Integrations/EInvoicing";
import Channels from "../Dialogs/Settings/Notifications/Channels";
import LowStock from "../Dialogs/Settings/Notifications/LowStock";
import ComplianceRemainders from "../Dialogs/Settings/Notifications/ComplianceRemainders";
import PaymentRemainders from "../Dialogs/Settings/Notifications/PaymentRemainders";
import BankFeeds from "../Dialogs/Settings/Integrations/BankFeeds";
import License from "../Dialogs/Settings/Account/License";
import TallyPrimeSync from "../Dialogs/Settings/Integrations/TallyPrimeSync";
import VoucherConfiguration from "../Dialogs/Settings/Preferences/VoucherConfiguration";

const LIST_ITEM_STYLES =
  "select-none hover:bg-[#EAF8F4] hover:!text-[#108F6F] menu-link data-[selected=true]:text-[#108F6F] data-[selected=true]:bg-[#EAF8F4] active:bg-[#EAF8F4] focus:bg-[#EAF8F4] focus:text-[#108F6F]";

const SettingDrawer = ({ open, toggleDrawer }) => {
  const [openItem, setOpenItem] = useState(0);

  const handleOpenItem = (value) => {
    setOpenItem(openItem === value ? 0 : value);
  };

  const [areDialogsOpen, setAreDialogesOpen] = useState({
    profile: false,
    companyInformation: false,
    license: false,
    language: false,
    currency: false,
    voucher: false,
    channels: false,
    lowStock: false,
    compliance: false,
    payment: false,
    tallyPrimeSync: false,
    bankFeeds: false,
    eWayBill: false,
    eInvoicing: false,
    about: false,
    dataSecurity: false,
    support: false,
  });

  const handleDialogsOpen = (key) => {
    setAreDialogesOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Drawer
        open={open}
        // onClose={() => {
        //   setOpenItem(0);
        //   toggleDrawer();
        // }}
        size={400}
        className="p-4"
        placement="right"
        // overlayProps={{
        //   className: "fixed inset-0",
        // }}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5">Settings</Typography>
          <IconButton
            variant="text"
            onClick={() => {
              toggleDrawer();
            }}
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
        <List className="gap-3">
          <Accordion open={openItem === 1}>
            <ListItem
              selected={openItem === 1}
              data-selected={openItem === 1}
              onClick={() => handleOpenItem(1)}
              className="p-3 select-none hover:bg-[#EAF8F4] focus:bg-[#EAF8F4] active:bg-[#EAF8F4] focus:text-[#108F6F] active:text-[#108F6F] data-[selected=true]:text-[#108F6F] data-[selected=true]:bg-[#EAF8F4]"
            >
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 18 18"
                  fill={openItem === 1 ? "currentColor" : "#6f7c97"}
                  className="w-5"
                >
                  <path d="M9.97,8.51c-2.9,2.84-1.02,7.86,3.01,8.1h.61l.48-.07c1.95-.31,3.55-1.92,3.86-3.86l.07-.48v-.62c-.24-3.99-5.16-5.87-8.03-3.07ZM11.99,9.77c.45,0,.82.37.82.82s-.37.83-.82.83-.83-.37-.83-.83.37-.82.83-.82ZM14.67,14.13c-.47,0-.85-.38-.85-.85s.38-.85.85-.85.86.38.86.85-.39.85-.86.85ZM15.45,10.23l-3.83,3.83c-.07.07-.16.1-.25.1s-.18-.03-.25-.1c-.14-.14-.14-.37,0-.51l3.82-3.83c.14-.14.37-.14.51,0s.14.37,0,.51Z" />
                  <path d="M8.4,16.37V2.43c0-.61-.68-1.16-1.3-1.16-.1,0-.23,0-.34.07L.61,3.83c-.27.17-.61.62-.61.96v11.88h.03v1.33h9.2v-1.63h-.83ZM2.42,6.19l3.56-.07c.37,0,.65.27.65.65.03.34-.28.65-.62.65l-3.55.07h-.04c-.34,0-.64-.28-.64-.62,0-.37.27-.65.64-.68ZM2.42,8.37l3.56-.06c.37,0,.65.27.65.64.03.35-.28.65-.62.65l-3.55.07h-.04c-.34,0-.64-.27-.64-.61,0-.38.27-.69.64-.69ZM2.42,10.56l3.56-.07c.37,0,.65.27.65.65.03.34-.28.65-.62.65l-3.55.07h-.04c-.34,0-.64-.28-.64-.65,0-.34.27-.65.64-.65Z" />
                </svg>
              </ListItemPrefix>
              Account & Organisation
              <ChevronDownIcon
                strokeWidth={3}
                fill="currentColor"
                className={`ml-auto h-4 w-4 transition-transform ${
                  openItem === 1 ? "rotate-180" : ""
                }`}
              />
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("profile")}
                >
                  Profile
                </ListItem>
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("companyInformation")}
                >
                  Company Information
                </ListItem>
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("license")}
                >
                  License
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <Accordion open={openItem === 2}>
            <ListItem
              selected={openItem === 2}
              data-selected={openItem === 2}
              onClick={() => handleOpenItem(2)}
              className="p-3 select-none hover:bg-[#EAF8F4] focus:bg-[#EAF8F4] active:bg-[#EAF8F4] focus:text-[#108F6F] active:text-[#108F6F] data-[selected=true]:text-[#108F6F]"
            >
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 18 18"
                  fill={openItem === 2 ? "currentColor" : "#6f7c97"}
                  className="w-5"
                >
                  <path d="M1,13c-.28,0-.53.11-.71.29-.18.18-.29.43-.29.71,0,.55.45,1,1,1h1.53c-.13-.31-.2-.65-.2-1s.07-.69.2-1h-1.53Z" />
                  <path d="M1,5h3.53c-.13-.31-.2-.65-.2-1s.07-.69.2-1H1c-.28,0-.53.11-.71.29-.18.18-.29.43-.29.71,0,.55.45,1,1,1Z" />
                  <path d="M17,5c.28,0,.53-.11.71-.29.18-.18.29-.43.29-.71,0-.55-.45-1-1-1h-7.53c.13.31.2.65.2,1s-.07.69-.2,1h7.53Z" />
                  <path d="M1,10h11.2c-.13-.31-.2-.65-.2-1s.07-.69.2-1H1c-.28,0-.53.11-.71.29-.18.18-.29.43-.29.71,0,.55.45,1,1,1Z" />
                  <path d="M17.14,8.01c.13.31.19.64.19.99s-.07.68-.19.99c.22-.03.42-.13.57-.28.18-.18.29-.43.29-.71,0-.51-.37-.92-.86-.99Z" />
                  <path d="M17,13H7.47c.13.31.2.65.2,1s-.07.69-.2,1h9.53c.28,0,.53-.11.71-.29.18-.18.29-.43.29-.71,0-.55-.45-1-1-1Z" />
                  <circle cx="7" cy="4" r="2" />
                  <circle cx="5" cy="14" r="2" />
                  <circle cx="14.67" cy="9" r="2" />
                </svg>
              </ListItemPrefix>
              Preferences
              <ChevronDownIcon
                strokeWidth={3}
                fill="currentColor"
                className={`ml-auto h-4 w-4 transition-transform ${
                  openItem === 2 ? "rotate-180" : ""
                }`}
              />
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("language")}
                >
                  Language & Region
                </ListItem>
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("currency")}
                >
                  Currency & Number Format
                </ListItem>
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("voucher")}
                >
                  Voucher Configuration
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <Accordion open={openItem === 3}>
            <ListItem
              selected={openItem === 3}
              data-selected={openItem === 3}
              onClick={() => handleOpenItem(3)}
              className="p-3 select-none hover:bg-[#EAF8F4] focus:bg-[#EAF8F4] active:bg-[#EAF8F4] focus:text-[#108F6F] active:text-[#108F6F] data-[selected=true]:text-[#108F6F]"
            >
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 18 18"
                  fill={openItem === 3 ? "currentColor" : "#6f7c97"}
                  className="w-5"
                >
                  <rect
                    x="5.96"
                    y="2.24"
                    width="3.36"
                    height="2.52"
                    rx=".81"
                    ry=".81"
                  />
                  <path d="M12.22,10.33v.36c0,.44-.36.8-.79.8h-7.16c-.44,0-.8-.36-.8-.8v-2.39c0-2.42,1.96-4.38,4.38-4.38.64,0,1.24.14,1.78.38-.53.64-.85,1.46-.85,2.35,0,1.95,1.52,3.55,3.44,3.68Z" />
                  <rect
                    x="2.39"
                    y="11.71"
                    width="10.92"
                    height="2.14"
                    rx=".68"
                    ry=".68"
                  />
                  <rect
                    x="6.17"
                    y="14.08"
                    width="3.36"
                    height="1.68"
                    rx=".54"
                    ry=".54"
                  />
                  <path d="M12.46,3.5c-1.74,0-3.15,1.41-3.15,3.15s1.41,3.15,3.15,3.15,3.15-1.41,3.15-3.15-1.41-3.15-3.15-3.15ZM13,8.19c0,.26-.21.46-.46.46h-.14c-.26,0-.46-.21-.46-.46v-.14c0-.26.21-.46.46-.46h.14c.26,0,.46.21.46.46v.14ZM13,6.65c0,.22-.18.4-.4.4h-.27c-.22,0-.4-.18-.4-.4v-1.6c0-.22.18-.4.4-.4h.27c.22,0,.4.18.4.4v1.6Z" />
                </svg>
              </ListItemPrefix>
              Notifications
              <ChevronDownIcon
                fill="currentColor"
                strokeWidth={3}
                className={`ml-auto h-4 w-4 transition-transform ${
                  openItem === 3 ? "rotate-180" : ""
                }`}
              />
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("channels")}
                >
                  Channels & Quiet Hours
                </ListItem>
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("lowStock")}
                >
                  Low Stock & Expiry Alerts
                </ListItem>
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("compliance")}
                >
                  Compliance Reminders
                </ListItem>
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("payment")}
                >
                  Payment Reminders
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <Accordion open={openItem === 4}>
            <ListItem
              selected={openItem === 4}
              data-selected={openItem === 4}
              onClick={() => handleOpenItem(4)}
              className="p-3 select-none hover:bg-[#EAF8F4] focus:bg-[#EAF8F4] active:bg-[#EAF8F4] focus:text-[#108F6F] active:text-[#108F6F] data-[selected=true]:text-[#108F6F]"
            >
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 18 18"
                  fill={openItem === 4 ? "currentColor" : "#6f7c97"}
                  className="w-5"
                >
                  <path d="M16.59,6.34c0,.11.04.24-.05.33-.43.37-.81.89-1.24,1.24-.35.29-.66-.29-.92-.5-1.06-.86-2.57.32-2,1.54.15.33.4.46.62.72.07.08.21.33.12.42l-1.21,1.21-1.77-1.77s-.21-.06-.26-.06c-.27.02-.74.65-.98.84-.61.51-1.52.07-1.46-.74.04-.56.67-.84.96-1.26.08-.12.12-.39.02-.5l-1.71-1.71,1.17-1.17s.04-.12.04-.14c0-.18-.17-.26-.26-.38-1.06-1.38.63-2.9,1.84-1.92.19.16.34.44.62.2.41-.34.83-.94,1.24-1.24.09-.07.2-.04.31-.03l4.92,4.92Z" />
                  <path d="M7.46,8.06l-.53.53c-.25.25-.38.89-.34,1.24.14,1.37,1.91,2.07,2.88,1.1l.43-.43,1.4,1.4-1.15,1.15s-.04.14-.04.16c0,.15.26.37.36.5.88,1.24-.74,2.75-1.92,1.8-.19-.16-.35-.45-.64-.22-.43.34-.83.95-1.26,1.26-.08.06-.21.05-.3.02L1.48,11.73c-.1-.08-.11-.28-.04-.38.3-.42.9-.83,1.24-1.24.26-.31-.02-.44-.2-.66-.95-1.18.57-2.79,1.8-1.92.13.09.35.36.5.36.02,0,.15-.04.16-.04l1.15-1.15,1.36,1.36Z" />
                </svg>
              </ListItemPrefix>
              Integrations
              <ChevronDownIcon
                strokeWidth={3}
                className={`ml-auto h-4 w-4 transition-transform ${
                  openItem === 4 ? "rotate-180" : ""
                }`}
                fill="currentColor"
              />
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("tallyPrimeSync")}
                >
                  Tally Prime Sync
                </ListItem>
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("bankFeeds")}
                >
                  Bank Feeds
                </ListItem>
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES} gap-4`}
                  onClick={() => handleDialogsOpen("eWayBill")}
                >
                  E-way Bill
                </ListItem>
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("eInvoicing")}
                >
                  E-invoicing
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          {/* <Accordion open={openItem === 5}>
            <ListItem
              selected={openItem === 5}
              data-selected={openItem === 5}
              onClick={() => handleOpenItem(5)}
              className="p-3 select-none hover:bg-[#EAF8F4] focus:bg-[#EAF8F4] active:bg-[#EAF8F4] hover:text-[#108F6F] focus:text-[#108F6F] active:text-[#108F6F] data-[selected=true]:text-[#108F6F]"
            >
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </ListItemPrefix>
              Contact & Information
              <ChevronDownIcon
                strokeWidth={3}
                className={`ml-auto h-4 w-4 transition-transform ${
                  openItem === 5 ? "rotate-180" : ""
                }`}
                fill="currentColor"
              />
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("about")}
                >
                  About & Versions
                </ListItem>
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("dataSecurity")}
                >
                  Data Security
                </ListItem>
                <ListItem
                  className={`px-16 ${LIST_ITEM_STYLES}`}
                  onClick={() => handleDialogsOpen("support")}
                >
                  Support
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion> */}
        </List>
      </Drawer>
      <Profile
        open={areDialogsOpen.profile}
        handleOpen={handleDialogsOpen}
      />
      <CompanyInformation
        open={areDialogsOpen.companyInformation}
        handleOpen={handleDialogsOpen}
      />
      <Language open={areDialogsOpen.language} handleOpen={handleDialogsOpen} />
      <CurrencyFormat
        open={areDialogsOpen.currency}
        handleOpen={handleDialogsOpen}
      />
      <EWayBill open={areDialogsOpen.eWayBill} handleOpen={handleDialogsOpen} />
      <EInvoicing
        open={areDialogsOpen.eInvoicing}
        handleOpen={handleDialogsOpen}
      />
      <Channels open={areDialogsOpen.channels} handleOpen={handleDialogsOpen} />
      <LowStock open={areDialogsOpen.lowStock} handleOpen={handleDialogsOpen} />
      <ComplianceRemainders
        open={areDialogsOpen.compliance}
        handleOpen={handleDialogsOpen}
      />
      <PaymentRemainders
        open={areDialogsOpen.payment}
        handleOpen={handleDialogsOpen}
      />
      <BankFeeds
        open={areDialogsOpen.bankFeeds}
        handleOpen={handleDialogsOpen}
      />
      <License open={areDialogsOpen.license} handleOpen={handleDialogsOpen} />
      <TallyPrimeSync
        open={areDialogsOpen.tallyPrimeSync}
        handleOpen={handleDialogsOpen}
      />
      <VoucherConfiguration
        open={areDialogsOpen.voucher}
        handleOpen={handleDialogsOpen}
      />
    </>
  );
};

export default SettingDrawer;
