import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const seletedSideValue = {
  ["/"]: 1,
  sales: 2,
  purchase: 3,
  inventory: 4,
};

const Sidebar = () => {
  // const LIST_ITEM_STYLES =
  //   "select-none text-black hover:bg-[#EAF8F4] hover:!text-[#108F6F]  menu-link";

  const LIST_ITEM_STYLES =
    "select-none text-black hover:bg-[#EAF8F4] menu-link";

  const [open, setOpen] = useState(1);

  const location = useLocation();
  useEffect(() => {
    const value = location.pathname.split("/");
    setOpen(seletedSideValue[value[1]]);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 1 : value);
  };

  return (
    <Card className="sidebar top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0 border-r border-r-gray rounded-none overflow-hidden">
      <List className="cursor-pointer mt-20">
        <Link to="/">
          <ListItem
            className={`${LIST_ITEM_STYLES} ${
              isActive("/") ? "!text-[#108F6F] !bg-[#EAF8F4]" : ""
            }`}
            ripple={false}
          >
            <ListItemPrefix>
              <svg
                className="fill-svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill={isActive("/") ? "#108F6F" : "black"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.475 9.37496H13.1083C11.4333 9.37496 10.625 8.63329 10.625 7.09996V3.31663C10.625 1.78329 11.4417 1.04163 13.1083 1.04163H16.475C18.15 1.04163 18.9583 1.78329 18.9583 3.31663V7.09163C18.9583 8.63329 18.1417 9.37496 16.475 9.37496ZM13.1083 2.29163C11.9917 2.29163 11.875 2.60829 11.875 3.31663V7.09163C11.875 7.80829 11.9917 8.11663 13.1083 8.11663H16.475C17.5917 8.11663 17.7083 7.79996 17.7083 7.09163V3.31663C17.7083 2.59996 17.5917 2.29163 16.475 2.29163H13.1083Z"
                  // fill="black"
                  // fill={isActive("/") ? "#108F6F" : "black"}
                />
                <path
                  d="M16.475 18.9583H13.1083C11.4333 18.9583 10.625 18.1417 10.625 16.475V13.1083C10.625 11.4333 11.4417 10.625 13.1083 10.625H16.475C18.15 10.625 18.9583 11.4417 18.9583 13.1083V16.475C18.9583 18.1417 18.1417 18.9583 16.475 18.9583ZM13.1083 11.875C12.125 11.875 11.875 12.125 11.875 13.1083V16.475C11.875 17.4583 12.125 17.7083 13.1083 17.7083H16.475C17.4583 17.7083 17.7083 17.4583 17.7083 16.475V13.1083C17.7083 12.125 17.4583 11.875 16.475 11.875H13.1083Z"
                  // fill="black"
                  // fill={isActive("/") ? "#108F6F" : "black"}
                />
                <path
                  d="M6.89163 9.37496H3.52496C1.84996 9.37496 1.04163 8.63329 1.04163 7.09996V3.31663C1.04163 1.78329 1.85829 1.04163 3.52496 1.04163H6.89163C8.56663 1.04163 9.37496 1.78329 9.37496 3.31663V7.09163C9.37496 8.63329 8.55829 9.37496 6.89163 9.37496ZM3.52496 2.29163C2.40829 2.29163 2.29163 2.60829 2.29163 3.31663V7.09163C2.29163 7.80829 2.40829 8.11663 3.52496 8.11663H6.89163C8.00829 8.11663 8.12496 7.79996 8.12496 7.09163V3.31663C8.12496 2.59996 8.00829 2.29163 6.89163 2.29163H3.52496Z"
                  // fill="black"
                  // fill={isActive("/") ? "#108F6F" : "black"}
                />
                <path
                  d="M6.89163 18.9583H3.52496C1.84996 18.9583 1.04163 18.1417 1.04163 16.475V13.1083C1.04163 11.4333 1.85829 10.625 3.52496 10.625H6.89163C8.56663 10.625 9.37496 11.4417 9.37496 13.1083V16.475C9.37496 18.1417 8.55829 18.9583 6.89163 18.9583ZM3.52496 11.875C2.54163 11.875 2.29163 12.125 2.29163 13.1083V16.475C2.29163 17.4583 2.54163 17.7083 3.52496 17.7083H6.89163C7.87496 17.7083 8.12496 17.4583 8.12496 16.475V13.1083C8.12496 12.125 7.87496 11.875 6.89163 11.875H3.52496Z"
                  // fill="black"
                  // fill={isActive("/") ? "#108F6F" : "black"}
                />
              </svg>
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Link to="/sales">
          <ListItem
            className={`${LIST_ITEM_STYLES} ${
              isActive("/sales") ? "!text-[#108F6F] !bg-[#EAF8F4]" : ""
            }`}
            ripple={false}
          >
            <ListItemPrefix>
              <svg
                className="fill-svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill={isActive("/sales") ? "#108F6F" : "black"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.5 14H15v-1H2V0H1v13.5l.5.5zM3 11.5v-8l.5-.5h2l.5.5v8l-.5.5h-2l-.5-.5zm2-.5V4H4v7h1zm6-9.5v10l.5.5h2l.5-.5v-10l-.5-.5h-2l-.5.5zm2 .5v9h-1V2h1zm-6 9.5v-6l.5-.5h2l.5.5v6l-.5.5h-2l-.5-.5zm2-.5V6H8v5h1z"></path>
              </svg>
            </ListItemPrefix>
            Sales
          </ListItem>
        </Link>
        <Link to="/purchase">
          <ListItem
            className={`${LIST_ITEM_STYLES} ${
              isActive("/purchase") ? "!text-[#108F6F] !bg-[#EAF8F4]" : ""
            }`}
            ripple={false}
          >
            <ListItemPrefix>
              <svg
                className="fill-svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={isActive("/purchase") ? "#108F6F" : "black"}
              >
                <path d="M7.38,4.46h9.2c.98.19.95,1.51-.05,1.66H7.42c-.93-.19-.97-1.42-.04-1.66Z" />
                <path d="M17.06,10.35c-.07.07-.22.12-.31.19l-9.33.04c-.83-.14-.99-1.28-.18-1.6,3.03-.18,6.09-.03,9.13-.08.78-.03,1.25.89.69,1.45Z" />
                <path d="M7.33,13.41h4.85c.99.29.8,1.59-.21,1.66-1.4-.09-3.01.15-4.38,0-1.06-.11-1.21-1.29-.26-1.66Z" />
                <path d="M20.26,1c.6.15.73.69.76.95v20.91s-2.56-1.7-2.56-1.7l-.25-.17h-.3c-.42,0-.61.13-2.22,1.32-.33.24-.61.45-.73.53-.06.04-.12.08-.18.11-.15-.12-.48-.42-.73-.64-1.13-1.02-1.3-1.18-1.7-1.21h-.07s-.05,0-.05,0c-.31,0-.6.12-.8.31l-1.77,1.57c-.33-.16-.75-.5-1.16-.84-.42-.34-.86-.7-1.31-.95l-.07-.04-.07-.03-.15-.06-.48-.18-.43.28-2.56,1.7V1.87c.07-.42.32-.74.69-.86h16.14M20.36,0H3.99c-.87.22-1.46.93-1.56,1.81v21.26c-.01.55.37.93.87.93.09,0,.19-.01.28-.04l2.96-1.96.15.06c.82.46,1.74,1.45,2.56,1.83.15.07.3.11.45.11.2,0,.39-.07.56-.22l1.83-1.62s.08-.05.13-.05c0,0,.02,0,.02,0,.13.01,1.7,1.51,2,1.72.19.13.35.19.51.19.25,0,.48-.15.75-.32.33-.21,2.24-1.68,2.4-1.68h0l2.92,1.95c.11.04.22.05.33.05.49,0,.87-.38.86-.93V1.91C21.94.94,21.34.18,20.36,0h0Z" />
                <path d="M7.7,4.86h9.01c.96.19.93,1.48-.05,1.63H7.74c-.92-.19-.95-1.4-.04-1.63Z" />
                <path d="M17.18,10.62c-.07.07-.22.12-.3.18l-9.14.04c-.82-.14-.97-1.25-.18-1.57,2.96-.18,5.97-.03,8.95-.08.76-.03,1.22.87.68,1.42Z" />
                <path d="M7.64,13.63h4.76c.97.29.79,1.56-.21,1.62-1.37-.09-2.95.15-4.3,0-1.04-.11-1.18-1.27-.25-1.62Z" />
              </svg>
            </ListItemPrefix>
            Purchase
          </ListItem>
        </Link>
        {/* <Link to="/inventory">
          <ListItem
            className={`${LIST_ITEM_STYLES} ${
              isActive("/inventory") ? "bg-[#EAF8F4]" : ""
            }`}
          >
            <ListItemPrefix>
              <svg
                className="fill-svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={isActive("/inventory") ? "black" : "black"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.28,22.23v-9.82L2.7,7.44v9.6c0,.06.02.13.05.18.03.06.08.11.15.15,0,0,8.39,4.85,8.39,4.85ZM12.72,22.23l8.39-4.85c.06-.04.11-.09.15-.15.03-.06.05-.12.05-.18V7.42l-8.58,4.98v9.82ZM11.09,23.76l-8.91-5.14c-.29-.16-.51-.38-.67-.67-.16-.29-.24-.59-.24-.91V6.96c0-.32.08-.62.24-.91.16-.29.38-.51.67-.67L11.09.24C11.38.08,11.68,0,12,0c.32,0,.62.08.91.24l8.91,5.14c.29.16.51.38.67.67.16.29.24.59.24.91v10.07c0,.32-.08.62-.24.91-.16.29-.38.51-.67.67l-8.91,5.14c-.29.16-.59.24-.91.24s-.62-.08-.91-.24ZM16.96,8.3l3.51-2.03L12.19,1.48c-.06-.03-.13-.05-.19-.05s-.13.02-.19.05l-3.29,1.9,8.44,4.92ZM12,11.19l3.54-2.07L7.05,4.23l-3.54,2.04,8.49,4.93Z" />
              </svg>
            </ListItemPrefix>
            Inventory
          </ListItem>
        </Link> */}
        {/* <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 3 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal pl-1"
              >
                Purchase
              </Typography>
            </AccordionHeader>
          </ListItem>
          {open == 3 && (
            <AccordionBody className="py-0">
              <List className="pl-5">
                <ListItem>Purchase Invoice</ListItem>
                <ListItem>Purchase Order</ListItem>
                <ListItem>Debit Notes</ListItem>
                <ListItem>Payments</ListItem>
              </List>
            </AccordionBody>
          )}
        </Accordion>
        <ListItem className="p-3" selected={open === 4}>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Typography color="blue-gray" className="mr-auto font-normal pl-1">
            Inventory
          </Typography>
        </ListItem>
        <Accordion
          open={open === 5}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 5 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 5}>
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal pl-1"
              >
                Accounting
              </Typography>
            </AccordionHeader>
          </ListItem>
          {open == 5 && (
            <AccordionBody className="py-0">
              <List className="pl-5">
                <ListItem>Ledgers</ListItem>
                <ListItem>Parties</ListItem>
              </List>
            </AccordionBody>
          )}
        </Accordion>
        <Accordion
          open={open === 6}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 6 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 6}>
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal pl-1"
              >
                Reports
              </Typography>
            </AccordionHeader>
          </ListItem>
          {open == 6 && (
            <AccordionBody className="py-0">
              <List className="pl-5">
                <ListItem>P&L</ListItem>
                <ListItem>Balance Sheet</ListItem>
                <ListItem>Trail Balance</ListItem>
                <ListItem>DayBooks</ListItem>
                <ListItem>GST</ListItem>
                <ListItem>My Entries</ListItem>
              </List>
            </AccordionBody>
          )}
        </Accordion>
        <ListItem className="p-3" selected={open === 7}>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Typography color="blue-gray" className="mr-auto font-normal pl-1">
            E-way Bill
          </Typography>
        </ListItem>
        <ListItem className="p-3" selected={open === 8}>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Typography color="blue-gray" className="mr-auto font-normal pl-1">
            E-Invoice
          </Typography>
        </ListItem> */}
      </List>
    </Card>
  );
};

export default Sidebar;
