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

const SettingDrawer = ({ open, toggleDrawer }) => {
  const [openItem, setOpenItem] = useState(0);

  const handleOpenItem = (value) => {
    setOpenItem(openItem === value ? 0 : value);
  };

  const LIST_ITEM_STYLES =
    "select-none text-black hover:bg-[#EAF8F4] hover:!text-[#108F6F] menu-link data-[selected=true]:text-[#108F6F] data-[selected=true]:bg-[#EAF8F4] active:bg-[#EAF8F4] focus:bg-[#EAF8F4] focus:text-[#108F6F]";

  return (
    <Drawer
      open={open}
      onClose={() => {
        setOpenItem(0);
        toggleDrawer();
      }}
      size={400}
      className="p-4"
      placement="right"
    >
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          Settings
        </Typography>
        <IconButton
          variant="text"
          color="blue-gray"
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
            className="p-3 select-none hover:bg-[#EAF8F4] focus:bg-[#EAF8F4] active:bg-[#EAF8F4] hover:text-[#108F6F] focus:text-[#108F6F] active:text-[#108F6F] data-[selected=true]:text-[#108F6F] data-[selected=true]:bg-[#EAF8F4] text-black"
          >
            <ListItemPrefix>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.111 4.663A2 2 0 1 1 6.89 1.337a2 2 0 0 1 2.222 3.326zm-.555-2.494A1 1 0 1 0 7.444 3.83a1 1 0 0 0 1.112-1.66zm2.61.03a1.494 1.494 0 0 1 1.895.188 1.513 1.513 0 0 1-.487 2.46 1.492 1.492 0 0 1-1.635-.326 1.512 1.512 0 0 1 .228-2.321zm.48 1.61a.499.499 0 1 0 .705-.708.509.509 0 0 0-.351-.15.499.499 0 0 0-.5.503.51.51 0 0 0 .146.356zM3.19 12.487H5v1.005H3.19a1.197 1.197 0 0 1-.842-.357 1.21 1.21 0 0 1-.348-.85v-1.81a.997.997 0 0 1-.71-.332A1.007 1.007 0 0 1 1 9.408V7.226c.003-.472.19-.923.52-1.258.329-.331.774-.52 1.24-.523H4.6a2.912 2.912 0 0 0-.55 1.006H2.76a.798.798 0 0 0-.54.232.777.777 0 0 0-.22.543v2.232h1v2.826a.202.202 0 0 0 .05.151.24.24 0 0 0 .14.05zm7.3-6.518a1.765 1.765 0 0 0-1.25-.523H6.76a1.765 1.765 0 0 0-1.24.523c-.33.335-.517.786-.52 1.258v3.178a1.06 1.06 0 0 0 .29.734 1 1 0 0 0 .71.332v2.323a1.202 1.202 0 0 0 .35.855c.18.168.407.277.65.312h2a1.15 1.15 0 0 0 1-1.167V11.47a.997.997 0 0 0 .71-.332 1.006 1.006 0 0 0 .29-.734V7.226a1.8 1.8 0 0 0-.51-1.258zM10 10.454H9v3.34a.202.202 0 0 1-.06.14.17.17 0 0 1-.14.06H7.19a.21.21 0 0 1-.2-.2v-3.34H6V7.226c0-.203.079-.398.22-.543a.798.798 0 0 1 .54-.232h2.48a.778.778 0 0 1 .705.48.748.748 0 0 1 .055.295v3.228zm2.81 3.037H11v-1.005h1.8a.24.24 0 0 0 .14-.05.2.2 0 0 0 .06-.152V9.458h1V7.226a.777.777 0 0 0-.22-.543.798.798 0 0 0-.54-.232h-1.29a2.91 2.91 0 0 0-.55-1.006h1.84a1.77 1.77 0 0 1 1.24.523c.33.335.517.786.52 1.258v2.182c0 .273-.103.535-.289.733-.186.199-.44.318-.711.333v1.81c0 .319-.125.624-.348.85a1.197 1.197 0 0 1-.842.357zM4 1.945a1.494 1.494 0 0 0-1.386.932A1.517 1.517 0 0 0 2.94 4.52 1.497 1.497 0 0 0 5.5 3.454c0-.4-.158-.784-.44-1.067A1.496 1.496 0 0 0 4 1.945zm0 2.012a.499.499 0 0 1-.5-.503.504.504 0 0 1 .5-.503.509.509 0 0 1 .5.503.504.504 0 0 1-.5.503z"
                ></path>
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
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                {/* <ListItemPrefix>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </ListItemPrefix> */}
                Profile
              </ListItem>
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                {/* <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 550 550"
                    stroke="currentColor"
                    className="h-7 w-7"
                    strokeWidth="15"
                    fill="none"
                  >
                    <path d="M304.73 467.72H175.8V16.29H424v238.4c5.55.52 10.98 1.38 16.3 2.56V14.31C440.3 6.44 433.85 0 425.99 0H173.82c-7.87 0-14.31 6.45-14.31 14.31v121.94H11.98C5.41 136.25 0 141.67 0 148.24v327.62c0 4.5 3.65 8.15 8.15 8.15l310.99-.07-2.1-2.05a133.83 133.83 0 0 1-12.31-14.17zm106.66-180.79c55.55 0 100.61 45.06 100.61 100.61s-45.06 100.61-100.61 100.61c-55.56 0-100.62-45.06-100.62-100.61s45.06-100.61 100.62-100.61zm7 42.5c4.54 0 8.12 1.32 10.73 3.92 2.57 2.59 3.88 6.16 3.88 10.74 0 4.66-2.22 8.79-6.68 12.42-4.49 3.62-9.7 5.46-15.65 5.46-4.44 0-8-1.27-10.72-3.77-2.71-2.54-4.07-5.8-4.07-9.87 0-5.14 2.21-9.56 6.62-13.32 4.42-3.71 9.7-5.58 15.89-5.58zm-29.61 91.88h5.83v-36.34h-11.03c0-15.02 27.61-5.27 47.93-10.4v46.74h7.68v12.98h-50.41v-12.98zM16.29 467.72V152.54h143.22v315.18H16.29zm332.62-198.1h-29.19l-.12.01h-.02l-.12.02h-.02l-.12.02h-.02l-.12.04h-.01l-.11.03h-.02l-.12.04h-.01l-.11.05h-.02c-1 .43-1.7 1.62-1.7 2.58v20.75c9.34-9.33 20.06-17.29 31.83-23.54zm-30.13-93.41c-1 .43-1.7 1.61-1.7 2.57v45.26c0 .97.7 2.15 1.7 2.58h.02l.11.05h.01l.12.04h.02l.11.03h.01l.12.04h.02l.12.02h.02l.12.02h.02l.12.01h.02l.12.01h53.6a2.8 2.8 0 0 0 2.79-2.8v-14.93l.03-.03v-30.3c0-1.21-.78-2.23-1.86-2.62l-.11-.04h-.02l-.11-.04h-.02l-.11-.03h-.02l-.12-.03h-.03l-.11-.02h-.17l-.12-.01h-53.62l-.12.01h-.16l-.12.02h-.02l-.12.03h-.02l-.12.03h-.01l-.11.04h-.02l-.12.04h-.01l-.11.05h-.02zm-40.87 187.04h-53.6c-1.32 0-2.79 1.46-2.79 2.79v45.26c0 1.33 1.26 2.8 2.79 2.8h53.6c1.02 0 1.93-.56 2.41-1.39-1.56-8.15-2.37-16.57-2.37-25.17 0-7.92.69-15.68 2.02-23.23-.59-.64-1.42-1.06-2.06-1.06zm0-93.63h-53.6c-1.32 0-2.79 1.46-2.79 2.79v45.26c0 1.33 1.26 2.79 2.79 2.79h53.6c1.54 0 2.79-1.25 2.79-2.79v-45.26c0-1.54-1.68-2.79-2.79-2.79zm0-93.63h-53.6c-1.32 0-2.79 1.47-2.79 2.79v45.26c0 1.33 1.26 2.8 2.79 2.8h53.6a2.8 2.8 0 0 0 2.79-2.8v-45.26c0-1.54-1.68-2.79-2.79-2.79zM120.05 321.17H55.48c-.72 0-1.36.55-1.36.99v26.53c0 .44.68.99 1.36.99h64.57c.69 0 1.37-.44 1.37-.99v-26.53c0-.54-.68-.99-1.37-.99zm267.5-269.44H212.26c-3.56 0-6.51 3-6.51 6.52v69.26c0 3.52 2.97 6.52 6.51 6.52h175.29c3.55 0 6.52-2.94 6.52-6.52V58.25c0-3.58-2.98-6.52-6.52-6.52zm-267.5 211.39H55.48c-.72 0-1.36.55-1.36.99v26.53c0 .44.68.99 1.36.99h64.57c.69 0 1.37-.45 1.37-.99v-26.53c0-.55-.68-.99-1.37-.99zm0-58.05H55.48c-.72 0-1.36.54-1.36.98v26.54c0 .43.68.98 1.36.98h64.57c.69 0 1.37-.44 1.37-.98v-26.54c0-.54-.68-.98-1.37-.98z" />
                  </svg>
                </ListItemPrefix> */}
                Company Information
              </ListItem>
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
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
            className="p-3 select-none hover:bg-[#EAF8F4] focus:bg-[#EAF8F4] active:bg-[#EAF8F4] hover:text-[#108F6F] focus:text-[#108F6F] active:text-[#108F6F] data-[selected=true]:text-[#108F6F] text-black"
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
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                Language & Region
              </ListItem>
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                Currency & Number Format
              </ListItem>
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
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
            className="p-3 select-none hover:bg-[#EAF8F4] focus:bg-[#EAF8F4] active:bg-[#EAF8F4] hover:text-[#108F6F] focus:text-[#108F6F] active:text-[#108F6F] data-[selected=true]:text-[#108F6F] text-black"
          >
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M11.53,23.98c-.16-.02-.51-.13-.68-.19-1.25-.42-2.16-1.6-2.32-2.9H3.63c-3.12-.36-3.36-4.74-.22-5.38.44-.09.81.09.86-.46.18-2.14-.31-4.54.25-6.64.63-2.39,2.52-4.45,4.86-5.24-.04-.71,0-1.32.38-1.94.9-1.48,3.07-1.67,4.22-.37.59.66.74,1.45.66,2.31,2.31.88,4.15,2.89,4.82,5.28.59,2.13.1,4.44.28,6.6.05.54.41.37.86.46,3.14.64,2.9,5.01-.22,5.37h-4.89c-.17,1.37-1.17,2.58-2.5,2.96-.11.03-.41.12-.51.13-.22.02-.72.02-.94,0ZM13.08,2.76c.08-1.61-2.24-1.61-2.16,0h2.16ZM11.47,4.28c-2.74.22-5.08,2.34-5.55,5.04-.33,1.89.04,4.07-.11,5.98-.05.61-.4,1.2-.94,1.49-.63.35-1.42.08-1.9.68-.62.78-.07,1.83.89,1.88h16.27c1.09-.03,1.59-1.44.67-2.08-.41-.29-.84-.19-1.28-.31-.73-.2-1.28-.91-1.34-1.66-.19-2.23.38-4.73-.39-6.87-.94-2.62-3.52-4.36-6.33-4.14ZM13.87,20.89h-3.75c.42,2.04,3.33,2.04,3.75,0Z" />
                <path d="M4.58,2.87c.25-.02.57.13.71.35.44.71-.31,1.15-.69,1.63-.58.72-1.11,1.59-1.44,2.45-.16.41-.38,1.5-.6,1.74-.46.52-1.39.17-1.37-.53,0-.32.28-1.14.4-1.47.4-1.13,1.07-2.3,1.84-3.22.26-.31.74-.92,1.16-.95Z" />
                <path d="M22.58,9.07c-.27.26-.77.29-1.06.04s-.47-1.26-.62-1.67c-.35-.95-.88-1.82-1.51-2.61-.38-.48-1.13-.91-.67-1.61.13-.2.43-.37.67-.36.43.01.89.61,1.15.92.84.99,1.59,2.31,1.98,3.55.15.48.48,1.36.06,1.75Z" />
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
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                Channels & Quiet Hours
              </ListItem>
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                Low Stock & Expiry Alerts
              </ListItem>
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                Compliance Reminders
              </ListItem>
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
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
            className="p-3 select-none hover:bg-[#EAF8F4] focus:bg-[#EAF8F4] active:bg-[#EAF8F4] hover:text-[#108F6F] focus:text-[#108F6F] active:text-[#108F6F] data-[selected=true]:text-[#108F6F] text-black"
          >
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                className="h-[25px] w-[25px]"
                fill="currentColor"
              >
                <g id="project">
                  <path
                    id="project-2"
                    data-name="project"
                    d="M13.438,4.811l-.062-.1a2.07,2.07,0,0,1-.3,0l-.062.1a.6.6,0,0,1-.687.252,2.269,2.269,0,0,1-.857-.452.6.6,0,0,1-.135-.76l.062-.107a2.14,2.14,0,0,1-.152-.265H11.01a.6.6,0,0,1-.59-.49,2.313,2.313,0,0,1,0-.962.6.6,0,0,1,.59-.487h.225a2.14,2.14,0,0,1,.152-.265l-.065-.112a.6.6,0,0,1,.13-.757,2.311,2.311,0,0,1,.837-.475A.6.6,0,0,1,13.005.2l.065.11a2.07,2.07,0,0,1,.3,0L13.44.2a.6.6,0,0,1,.715-.262,2.326,2.326,0,0,1,.837.477.6.6,0,0,1,.127.755l-.065.11a2.14,2.14,0,0,1,.152.265h.127a.6.6,0,0,1,.59.49,2.313,2.313,0,0,1,0,.962.6.6,0,0,1-.59.487h-.125a2.14,2.14,0,0,1-.152.265l.062.107a.6.6,0,0,1-.137.762,2.307,2.307,0,0,1-.85.447.6.6,0,0,1-.692-.252Zm.3-.862.265.457a2.125,2.125,0,0,0,.467-.27l-.265-.457.16-.187a1.5,1.5,0,0,0,.275-.477l.082-.232h.527a2.148,2.148,0,0,0,0-.537h-.527l-.082-.232a1.545,1.545,0,0,0-.275-.477l-.16-.187.262-.46A2.069,2.069,0,0,0,14,.617l-.265.457L13.5,1.029a1.466,1.466,0,0,0-.552,0l-.242.045L12.438.617a2.014,2.014,0,0,0-.465.27l.265.457-.16.187a1.5,1.5,0,0,0-.275.477l-.082.232h-.527a2.148,2.148,0,0,0,0,.537h.527l.082.232a1.545,1.545,0,0,0,.275.477l.16.187-.265.46a2.069,2.069,0,0,0,.467.27l.265-.457.242.045a1.467,1.467,0,0,0,.552,0ZM3.607,11.26v-.79a4.357,4.357,0,0,1-.91-.527l-.687.4a.6.6,0,0,1-.742-.115A5.247,5.247,0,0,1,0,8.023a.6.6,0,0,1,.27-.7l.682-.4a4.359,4.359,0,0,1,0-1.052L.272,5.479a.6.6,0,0,1-.27-.7,5.256,5.256,0,0,1,1.265-2.2.6.6,0,0,1,.742-.115l.685.4a4.47,4.47,0,0,1,.91-.527v-.79a.6.6,0,0,1,.47-.585,5.293,5.293,0,0,1,2.542,0,.6.6,0,0,1,.472.585v.79A4.459,4.459,0,0,1,8,2.857l.685-.395a.6.6,0,0,1,.745.115,5.708,5.708,0,0,1,1.3,2.212.6.6,0,0,1-.255.692l-.625.395a4.359,4.359,0,0,1,0,1.052l.7.437a.6.6,0,0,1,.27.637,5.473,5.473,0,0,1-1.4,2.23.6.6,0,0,1-.74.11L8,9.946a4.47,4.47,0,0,1-.91.527v.79a.6.6,0,0,1-.47.585,5.321,5.321,0,0,1-2.547,0,.6.6,0,0,1-.465-.587Zm.8-.155a4.771,4.771,0,0,0,1.882,0V9.913l.267-.095A3.611,3.611,0,0,0,7.7,9.156l.215-.185,1.035.6a5.109,5.109,0,0,0,1.052-1.63l-1.035-.6.052-.277a3.7,3.7,0,0,0,0-1.327l-.052-.277,1.035-.6a5.082,5.082,0,0,0-1.052-1.63l-1.035.6L7.7,3.644a3.539,3.539,0,0,0-1.147-.662l-.267-.095V1.7a4.771,4.771,0,0,0-1.882,0V2.889l-.267.095a3.611,3.611,0,0,0-1.147.662l-.215.185-1.035-.6A4.8,4.8,0,0,0,.8,4.864l1.035.6-.052.277a3.7,3.7,0,0,0,0,1.327l.052.277L.8,7.941a4.78,4.78,0,0,0,.942,1.63l1.035-.6.215.185a3.539,3.539,0,0,0,1.147.662l.267.095Zm.96-2.632A2.072,2.072,0,1,1,7.438,6.4,2.075,2.075,0,0,1,5.366,8.473Zm0-3.344A1.272,1.272,0,1,0,6.639,6.4,1.274,1.274,0,0,0,5.366,5.129Zm8.071,7.291-.062-.1a2.07,2.07,0,0,1-.3,0l-.062.1a.6.6,0,0,1-.687.252,2.269,2.269,0,0,1-.857-.452.6.6,0,0,1-.135-.76l.062-.107a2.14,2.14,0,0,1-.152-.265H11.01a.6.6,0,0,1-.59-.49,2.313,2.313,0,0,1,0-.962.6.6,0,0,1,.59-.487h.225a2.14,2.14,0,0,1,.152-.265l-.065-.112a.6.6,0,0,1,.13-.757,2.311,2.311,0,0,1,.837-.475.6.6,0,0,1,.712.265l.065.11a2.07,2.07,0,0,1,.3,0l.065-.11a.6.6,0,0,1,.715-.262,2.326,2.326,0,0,1,.837.477.6.6,0,0,1,.127.755l-.065.11a2.14,2.14,0,0,1,.152.265h.127a.6.6,0,0,1,.59.49,2.313,2.313,0,0,1,0,.962.6.6,0,0,1-.59.487h-.125a2.14,2.14,0,0,1-.152.265l.062.107a.6.6,0,0,1-.137.762,2.307,2.307,0,0,1-.85.447.608.608,0,0,1-.692-.252Zm.3-.865.265.457a2.125,2.125,0,0,0,.467-.27l-.265-.457.16-.187a1.5,1.5,0,0,0,.275-.477l.082-.232h.527a2.148,2.148,0,0,0,0-.537h-.527l-.082-.232a1.545,1.545,0,0,0-.275-.477l-.16-.187.265-.457a2.069,2.069,0,0,0-.467-.27l-.265.457L13.5,8.638a1.466,1.466,0,0,0-.552,0l-.242.045-.265-.457a2.125,2.125,0,0,0-.467.27l.265.457-.16.187a1.5,1.5,0,0,0-.275.477l-.082.232h-.527a2.148,2.148,0,0,0,0,.537h.527l.082.232a1.545,1.545,0,0,0,.275.477l.16.187-.265.457a2.069,2.069,0,0,0,.467.27l.265-.457.242.045a1.467,1.467,0,0,0,.552,0Zm.23-1.455a.8.8,0,1,0-.8.8A.8.8,0,0,0,13.972,10.1Zm0-7.606a.8.8,0,1,0-.8.8A.8.8,0,0,0,13.972,2.494Z"
                    transform="translate(2.026 3.1)"
                  />
                </g>
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
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                Tally Prime Sync
              </ListItem>
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                Bank Feeds
              </ListItem>
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                E-way Bill
              </ListItem>
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                E-invoicing
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion open={openItem === 5}>
          <ListItem
            selected={openItem === 5}
            data-selected={openItem === 5}
            onClick={() => handleOpenItem(5)}
            className="p-3 select-none hover:bg-[#EAF8F4] focus:bg-[#EAF8F4] active:bg-[#EAF8F4] hover:text-[#108F6F] focus:text-[#108F6F] active:text-[#108F6F] data-[selected=true]:text-[#108F6F] text-black"
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
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                About & Versions
              </ListItem>
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                Data Security
              </ListItem>
              <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                Support
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </Drawer>
  );
};

export default SettingDrawer;
