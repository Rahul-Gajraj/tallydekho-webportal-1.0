import React from "react";

import {
  Button,
  Card,
  Chip,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";

const ReceivablesDocsDrawer = ({ open, toggleDrawer, data }) => {
  const attachments = [
    {
      title: "Bill_Bill-554.pdf",
      subtitle: "PDF 310 KB",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="#000000"
          className="h-5 w-5"
        >
          <path d="M400-540h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-60q-8 0-14 6t-6 14v160q0 8 6 14t14 6q8 0 14-6t6-14v-60Zm0-40v-40h40v40h-40Zm200 120q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-60q-8 0-14 6t-6 14v160q0 8 6 14t14 6h60Zm-40-40v-120h40v120h-40Zm160-40h20q8 0 14-6t6-14q0-8-6-14t-14-6h-20v-40h20q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v160q0 8 6 14t14 6q8 0 14-6t6-14v-60ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm160-720v480-480Z" />
        </svg>
      ),
    },
    {
      title: "Delivery_Challan.jpg",
      subtitle: "Image 540 KB",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 -960 960 960"
          fill="#000000"
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0 0v-560 560Zm80-80h400q12 0 18-11t-2-21L586-459q-6-8-16-8t-16 8L450-320l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11Z" />
        </svg>
      ),
    },
  ];

  return (
    <Drawer
      placement="right"
      className="p-4 overflow-scroll"
      open={open}
      onClose={() => toggleDrawer()}
      size={500}
    >
      <div className="relative mt-0 flex justify-between">
        <div>
          <Typography variant="h4" color="black">
            Bill-554 ABC Traders
          </Typography>
          <Typography variant="small" color="blue-gray">
            12 Junw 2025 - Due on 12 Jul 2025 - ₹380,000
          </Typography>
        </div>
        <img
          src="/media/custom/close.svg"
          className="h-7 w-7 cursor-pointer"
          alt="close_svg"
          onClick={() => toggleDrawer()}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 mt-2">
          <Chip value="Payable" color="green" size="sm" />
          <Chip value="Overdue" color="green" size="sm" />
        </div>
        <div>
          <Typography color="black" className="font-semibold">
            Amounts
          </Typography>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <Typography>Invoice Amount</Typography>
              <Typography className="font-bold">₹380,000</Typography>
            </div>
            <div className="col-span-1">
              <Typography>Paid</Typography>
              <Typography className="font-bold">₹70,000</Typography>
            </div>
            <div className="col-span-1 mt-3">
              <Typography>Balance</Typography>
              <Typography className="font-bold">₹310,000</Typography>
            </div>
            <div className="col-span-1 mt-3">
              <Typography>Aging</Typography>
              <Typography className="font-bold">₹70,000</Typography>
            </div>
          </div>
        </div>
        <div>
          <Typography color="black" className="font-semibold">
            Party & Document
          </Typography>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-1">
              <Typography>Party</Typography>
              <Typography className="font-bold">ABC Traders</Typography>
            </div>
            <div className="col-span-1">
              <Typography>Type</Typography>
              <Typography className="font-bold">Bill</Typography>
            </div>
            <div className="col-span-1">
              <Typography>Document No</Typography>
              <Typography className="font-bold">BILL-554</Typography>
            </div>
            <div className="col-span-1">
              <Typography>Due Date</Typography>
              <Typography className="font-bold">12 jul 2025</Typography>
            </div>
            <div className="col-span-2">
              <Typography className="mt-5 font-bold">Attachments</Typography>
            </div>
            <div className="col-span-2">
              <List className="pt-0 gap-3">
                {attachments.map(({ title, subtitle, icon }) => (
                  <Card key={title} className="border shadow-none">
                    <ListItem className="block hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]">
                      <div className="flex gap-5 items-center">
                        {icon}
                        <div>
                          <Typography variant="h6" color="black">
                            {title}
                          </Typography>
                          <Typography variant="small" className="font-normal">
                            {subtitle}{" "}
                          </Typography>
                        </div>
                      </div>
                    </ListItem>
                  </Card>
                ))}
              </List>
            </div>
          </div>
        </div>
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
  );
};

export default ReceivablesDocsDrawer;
