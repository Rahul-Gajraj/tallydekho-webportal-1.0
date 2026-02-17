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
        render={({ field: { value, onChange } }) => {
          const currentValue =
            value !== null && value !== undefined
              ? typeof value === "number"
                ? value
                : Number(value) || 0
              : 0;
          const safeValue =
            isNaN(currentValue) || currentValue < 0
              ? 0
              : Math.floor(currentValue);

          const handleDecrease = () => {
            const newValue = safeValue > 0 ? safeValue - 1 : 0;
            onChange(newValue);
          };

          const handleIncrease = () => {
            const newValue = safeValue + 1;
            onChange(newValue);
          };

          const handleInputChange = (e) => {
            const inputVal = e.target.value;

            if (inputVal === "" || inputVal === null) {
              onChange(0);
              return;
            }

            const numValue = Number(inputVal);

            if (
              !isNaN(numValue) &&
              numValue >= 0 &&
              Number.isInteger(numValue)
            ) {
              onChange(numValue);
            }
          };

          return (
            <div className="flex justify-between focus-within:ring-2 focus-within:ring-[#108F6F] rounded-[7px] ring-1 ring-[#B0BEC5] h-[40px] items-center">
              <IconButton
                size="sm"
                variant="text"
                ripple={false}
                className="rounded hover:bg-transparent active:bg-transparent ml-2"
                onClick={handleDecrease}
                disabled={safeValue === 0}
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
                // type="number"
                min="0"
                step="1"
                value={safeValue}
                onChange={handleInputChange}
                onBlur={(e) => {
                  const numValue = Number(e.target.value);
                  if (isNaN(numValue) || numValue < 0) {
                    onChange(0);
                  } else {
                    onChange(Math.floor(numValue));
                  }
                }}
                className="text-center focus:outline-none w-full h-full bg-transparent"
              />
              <IconButton
                size="sm"
                variant="text"
                ripple={false}
                className="rounded hover:bg-transparent active:bg-transparent mr-2"
                onClick={handleIncrease}
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
          );
        }}
      />
    </>
  );
};

export default IntegerInput;
