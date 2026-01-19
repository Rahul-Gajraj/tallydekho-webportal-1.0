import React from "react";

import { Chip, Drawer, Typography } from "@material-tailwind/react";

const EMIS_TABLE_HEAD = [
  {
    head: "Loan",
    customeStyle: "text-center",
  },
  {
    head: "Lender",
  },
  {
    head: "EMI",
  },
  {
    head: "Status",
  },
  {
    head: "Paid On",
  },
  {
    head: "Penalty/Interest",
  },
];

const EMIDetailDrawer = ({ open, toggleDrawer, data }) => {

  return (
    <Drawer
      placement="right"
      className="p-4 overflow-scroll z-[10px]"
      open={open}
      onClose={() => toggleDrawer()}
      size={700}
    >
      <div className="relative mt-0 flex justify-between">
        <Typography variant="h4">
          EMI Details
        </Typography>
        <img
          src="/media/custom/close.svg"
          className="h-7 w-7 cursor-pointer"
          alt="close_svg"
          onClick={() => toggleDrawer()}
        />
      </div>
      {data && data.emis && (
        <div>
          <Typography className="font-semibold">
            EMI's on {data.date}
          </Typography>
          <table className="mt-10 min-w-full table-auto text-left">
            <thead>
              <tr>
                {EMIS_TABLE_HEAD.map(({ head, customeStyle }) => (
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
              {data.emis.map((row, index) => {
                const { loan, lender, emi, paidOn, penality, status, textColor, bgColor } = row;
                const isLast = index === data.emis.length - 1;
                const classes = "p-4 px-0 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {loan || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {lender || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {emi || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex pl-3">
                        <Chip
                          value={status || "-"}
                          size="sm"
                          className="h-[30px] normal-case"
                          style={{
                            color: textColor,
                            backgroundColor: bgColor,
                          }}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {paidOn || "-"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal pl-3">
                        {penality || "-"}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {/* <div className="absolute bottom-0 w-[468px]">
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
      </div> */}
    </Drawer>
  );
};

export default EMIDetailDrawer;
