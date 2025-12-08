import React, { useState } from "react";

import {
  Button,
  Card,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";

const ItemsWarehouseAvailability = ({ open, toggleDrawer, data }) => {
  const warehouseDetails = [
    {
      name: "W01 - Sitapura, Jaipur",
      address: "Plot 25-26, RIICO Industrial Area, Sitapura, Jaipur",
      onHand: 80,
      available: 60,
      status: "Good",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="#108f6f"
          className="h-5 w-5"
        >
          <path d="m424-408-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-408Zm56 328q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </svg>
      ),
      color: "#108f6f",
      bg: "#eaf8f4",
    },
    {
      name: "W02 - VKI, Jaipur",
      address: "Road No. 14, Vishwakarma Industrial Area, Rajasthan",
      onHand: 50,
      available: 40,
      status: "Fast moving",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="#108f6f"
          className="h-5 w-5"
        >
          <path d="M280-160q-50 0-85-35t-35-85h-51q-17 0-28.5-11.5T69-320q0-17 11.5-28.5T109-360h82q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h167l84-360H230q-17 0-28.5-11.5T190-760q0-17 11.5-28.5T230-800h440q20 0 32 15t7 34l-26 111h77q19 0 36 8.5t28 23.5l75 99q11 14 14 30.5t0 33.5l-27 133q-3 14-14 23t-25 9h-47q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35Zm357-280h193l4-21-74-99h-95l-28 120Zm-99 73 6.5-29q6.5-29 16.5-71 3-13 6-24t5-22l6.5-29q6.5-29 16.5-71t16.5-71l6.5-29 2-7-84 360 2-7ZM70-427q-17 0-28.5-11.5T30-467q0-17 11.5-28.5T70-507h140q17 0 28.5 11.5T250-467q0 17-11.5 28.5T210-427H70Zm80-146q-17 0-28.5-11.5T110-613q0-17 11.5-28.5T150-653h180q17 0 28.5 11.5T370-613q0 17-11.5 28.5T330-573H150Zm130 333q17 0 28.5-11.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm400 0q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320q-17 0-28.5 11.5T640-280q0 17 11.5 28.5T680-240Z" />
        </svg>
      ),
      color: "#108f6f",
      bg: "#eaf8f4",
    },
    {
      name: "W03 - Bhiwandi",
      address: "Godwon 3, Anjur Phata, Bhiwandi, Maharahtra",
      onHand: "-10",
      available: 0,
      status: "Negative stock",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#e53935"
          className="h-5 w-5"
          viewBox="0 -960 960 960"
        >
          <path d="M109-120q-11 0-20-5.5T75-140q-5-9-5.5-19.5T75-180l370-640q6-10 15.5-15t19.5-5q10 0 19.5 5t15.5 15l370 640q6 10 5.5 20.5T885-140q-5 9-14 14.5t-20 5.5H109Zm69-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm0-120q17 0 28.5-11.5T520-400v-120q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520v120q0 17 11.5 28.5T480-360Zm0-100Z" />
        </svg>
      ),
      color: "#e53935",
      bg: "#f8dcdc",
    },
  ];

  const [] = useState();

  return (
    <>
      <Drawer
        placement="right"
        className="p-4 overflow-scroll"
        open={open}
        onClose={() => toggleDrawer()}
        size={500}
      >
        <div className="relative mt-0 flex justify-between">
          <Typography variant="h4" color="blue-gray">
            Warehouse Availability
          </Typography>
          <img
            src="/media/custom/close.svg"
            className="h-7 w-7 cursor-pointer"
            alt="close_svg"
            onClick={() => toggleDrawer()}
          />
        </div>
        <span>{data ? data.item : ""}</span>
        <div className="flex flex-col gap-2 mt-5">
          <List className="pt-0 gap-3">
            {warehouseDetails.map(
              ({
                name,
                address,
                available,
                icon,
                onHand,
                status,
                color,
                bg,
              }) => (
                <Card key={name} className="border shadow-none">
                  <ListItem
                    className={`block hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]`}
                  >
                    <Typography variant="h6" color="black">
                      {name}
                    </Typography>
                    <Typography variant="small" className="font-normal">
                      {address}{" "}
                    </Typography>
                    <div className="flex gap-4 mt-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-lg`}
                          style={{ backgroundColor: color }}
                        ></span>
                        <Typography className="font-normal text-xs">
                          On-Hand: {onHand} pcs
                        </Typography>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-lg`}
                          style={{ backgroundColor: color }}
                        ></span>
                        <Typography className="font-normal text-xs">
                          Available: {available} pcs
                        </Typography>
                      </div>
                      <div
                        className={`flex gap-1 rounded-3xl px-2 py-1 items-center`}
                        style={{ backgroundColor: bg }}
                      >
                        {icon}{" "}
                        <Typography
                          className={"font-normal text-xs"}
                          style={{ color }}
                        >
                          {status}
                        </Typography>
                      </div>
                    </div>
                  </ListItem>
                </Card>
              )
            )}
          </List>
        </div>
        <div className="absolute bottom-0 w-[468px]">
          <div className="border rounded-xl"></div>
          <div className="flex justify-end gap-2 mt-2 mb-1">
            <Button
              size="sm"
              className="normal-case !ring-0 flex items-center gap-1 border-[#e1e6ea] rounded-3xl"
              variant="outlined"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#000"
                className="h-5 w-5"
              >
                <path d="M367-320H120q-17 0-28.5-11.5T80-360q0-17 11.5-28.5T120-400h247l-75-75q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l143 143q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L348-188q-12 12-28 11.5T292-189q-11-12-11.5-28t11.5-28l75-75Zm226-240 75 75q11 11 11 27.5T668-429q-12 12-28.5 12T611-429L468-572q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l144-144q12-12 28-11.5t28 12.5q11 12 11.5 28T668-715l-75 75h247q17 0 28.5 11.5T880-600q0 17-11.5 28.5T840-560H593Z" />
              </svg>
              Transfer Stock
            </Button>
            <Button
              size="sm"
              color="green"
              className="normal-case !ring-0 flex items-center gap-1 rounded-3xl shadow-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="h-5 w-5"
                fill="#fff"
              >
                <path d="M480-120q-17 0-28.5-11.5T440-160v-160q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320v40h280q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H520v40q0 17-11.5 28.5T480-120Zm-320-80q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280h160q17 0 28.5 11.5T360-240q0 17-11.5 28.5T320-200H160Zm160-160q-17 0-28.5-11.5T280-400v-40H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h120v-40q0-17 11.5-28.5T320-600q17 0 28.5 11.5T360-560v160q0 17-11.5 28.5T320-360Zm160-80q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520h320q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H480Zm160-160q-17 0-28.5-11.5T600-640v-160q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800v40h120q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H680v40q0 17-11.5 28.5T640-600Zm-480-80q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h320q17 0 28.5 11.5T520-720q0 17-11.5 28.5T480-680H160Z" />
              </svg>
              Adjust Stock
            </Button>
          </div>
          {/* <img
            src="/media/custom/close.svg"
            className="h-7 w-7 cursor-pointer"
            alt="close_svg"
            onClick={() => toggleDrawer()}
          /> */}
        </div>
      </Drawer>
    </>
  );
};

export default ItemsWarehouseAvailability;
