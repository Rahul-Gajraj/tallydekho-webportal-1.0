import React from "react";

import { Drawer, Typography } from "@material-tailwind/react";

const UNMATCHED_GST_TABLE_HEAD = [
  "Party",
  "Voucher No",
  "Date",
  "Amount",
  "Type",
  "Reason",
];

const UNMATCHED_GST_TABLE_BODY = [
  {
    party: "Alliance Tranding Co.",
    voucherNo: "XYD-0909A",
    date: "25 Jul",
    amount: "₹36,000",
    type: "Sales",
    reason: "HSN Code mismatch",
  },
];

const UnmatchedGSTDrawer = ({ open, toggleDrawer }) => {
  return (
    <Drawer
      placement="right"
      className="p-4 overflow-scroll"
      open={open}
      onClose={() => toggleDrawer()}
      size={750}
    >
      <div className="relative mt-0 flex justify-between">
        <Typography variant="h4">Unmatched GST</Typography>
        <img
          src="/media/custom/close.svg"
          className="h-7 w-7 cursor-pointer"
          alt="close_svg"
          onClick={() => toggleDrawer()}
        />
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <table className="mt-4 min-w-full table-auto text-left">
          <thead>
            <tr>
              {UNMATCHED_GST_TABLE_HEAD.map((head) => (
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
            {UNMATCHED_GST_TABLE_BODY.map((row, idx) => {
              const { party, voucherNo, date, amount, type, reason } = row;
              const classes = "p-4 px-0 border-b border-blue-gray-50";

              return (
                <tr key={voucherNo}>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {party || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {voucherNo || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {date || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {amount || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {type || "-"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal pl-3">
                      {reason || "-"}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Drawer>
  );
};

export default UnmatchedGSTDrawer;
