import React from "react";

import { IconButton, Typography } from "@material-tailwind/react";
import { Controller } from "react-hook-form";

const IntegerInput = ({
  name,
  control,
  rules = { required: "This field is required" },
  label = "Input",
  labelClass = "text-[14px]",
}) => {
  return (
    <>
      <Typography className={labelClass}>{label}</Typography>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <div className="flex justify-between focus-within:ring-2 focus-within:ring-[#108F6F] rounded-[7px] ring-1 ring-[#B0BEC5] h-[40px] items-center">
            <IconButton
              size="sm"
              variant="text"
              ripple={false}
              className="rounded hover:bg-transparent active:bg-transparent ml-2"
              onClick={() => {
                const newValue = Number(value) == 0 ? 0 : Number(value) - 1;
                onChange(newValue);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
              </svg>
            </IconButton>
            <input
              value={value}
              onChange={(e) => {
                const newValue = Number(e.target.value);
                if (newValue || e.target.value.length == 0) {
                  onChange(newValue);
                }
              }}
              //   label="Reorder Point"
              className="text-center focus:outline-none w-full h-full"
            />
            <IconButton
              size="sm"
              variant="text"
              ripple={false}
              className="rounded hover:bg-transparent active:bg-transparent mr-2"
              onClick={() => onChange(Number(value) + 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
              </svg>
            </IconButton>
          </div>
        )}
      />
    </>
  );
};

export default IntegerInput;
