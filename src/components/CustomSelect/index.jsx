import React from "react";

import { Option, Select } from "@material-tailwind/react";

const CustomSelect = ({
  label = "Select",
  value = "",
  onChange = () => {},
  options = [],
  color = "green",
  bgColor = "green-50",
  textColor = "green",
}) => {
  return (
    <Select
      label={label}
      value={value}
      onChange={(val) => onChange(val)}
      containerProps={{
        style: {
          minWidth: "200px",
        },
      }}
      color={color}
    >
      {options.map((option) => (
        <Option
          key={option}
          value={option}
          className={`hover:!bg-${bgColor} focus:!bg-${bgColor} data-[selected=true]:bg-${bgColor} data-[selected=true]:!text-${textColor}`}
        >
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default CustomSelect;
