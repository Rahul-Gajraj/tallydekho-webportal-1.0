import React from "react";

import { Typography, Card, CardBody, Chip } from "@material-tailwind/react";

const KPIStrip = ({ title, subtitle, value, price, color, bg, img }) => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
      <CardBody className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {img}
            <div>
              <Typography className="font-medium !text-sm">{title}</Typography>
              {subtitle && (
                <Typography className="mt-1 !text-xs">{subtitle}</Typography>
              )}
            </div>
          </div>
          {value && (
            <Chip
              className={"px-2 normal-case"}
              value={value || 0}
              style={{ color, backgroundColor: bg }}
            />
          )}
        </div>
        <Typography className="mt-1 text-lg">{price || "₹0"}</Typography>
      </CardBody>
    </Card>
  );
};

export default KPIStrip;
