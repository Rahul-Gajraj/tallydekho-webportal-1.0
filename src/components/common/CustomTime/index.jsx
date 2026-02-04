import React, { useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { Card, Input, Typography } from "@material-tailwind/react";

const HOURS = Array.from({ length: 24 }, (_, i) =>
  i.toString().padStart(2, "0")
);
const MINUTES = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, "0")
);

const CustomTime = ({
  name,
  control,
  label,
  rules = { required: "Time is required" },
}) => {
  const [openTimeMenu, setOpenTimeMenu] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenTimeMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        const [h = "00", m = "00"] = field.value?.split(":") || [];

        return (
          <div className="relative w-full" ref={wrapperRef}>
            <Input
              label={label || ""}
              value={field.value}
              readOnly
              onClick={() => setOpenTimeMenu((o) => !o)}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  // class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              }
              labelProps={{
                className: label
                  ? ""
                  : "before:content-none after:content-none",
              }}
              className={`cursor-pointer ${
                label ? "" : "!border-t-blue-gray-200 focus:!border-t-[#108f6f]"
              }`}
              color="green"
            />

            {openTimeMenu && (
              <Card className="absolute z-50 mt-2 p-2 shadow-xl w-full h-50 overflow-hidden pt-0">
                <div className="grid grid-cols-2 gap-1">
                  <div className="col-span-1">
                    <Typography className="text-[11px] text-center">
                      Hours
                    </Typography>
                  </div>
                  <div className="col-span-1">
                    <Typography className="text-[11px] text-center">
                      Minutes
                    </Typography>
                  </div>
                  <div className="max-h-40 overflow-y-auto">
                    {HOURS.map((hour) => (
                      <button
                        key={hour}
                        type="button"
                        onClick={() => field.onChange(`${hour}:${m}`)}
                        className={`flex h-9 w-full items-center justify-center rounded-md ${
                          h === hour
                            ? "bg-[#108f6f] text-white"
                            : "hover:bg-[#eaf8f4]"
                        } cursor-pointer`}
                      >
                        {hour}
                      </button>
                    ))}
                  </div>

                  {/* MINUTES */}
                  <div className="max-h-40 overflow-y-auto">
                    {MINUTES.map((min) => (
                      <button
                        key={min}
                        onClick={() => {
                          field.onChange(`${h}:${min}`);
                          setOpenTimeMenu(false);
                        }}
                        type="button"
                        className={`flex h-9 w-full items-center justify-center rounded-md ${
                          m === min
                            ? "bg-[#108f6f] text-white"
                            : "hover:bg-[#eaf8f4]"
                        } cursor-pointer`}
                      >
                        {min}
                      </button>
                    ))}
                  </div>
                </div>
              </Card>
            )}
          </div>
        );
      }}
    />
  );
};

export default CustomTime;
