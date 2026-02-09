import { useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Chip,
  List,
  ListItem,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";

const CustomMultiSelect = ({
  OPTIONS = [],
  placeholder = "",
  selectedValues = [],
  setValues = () => {},
  name = "",
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selected, setSelected] = useState(selectedValues);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (value) => {
    const newValue = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];

    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
    setValues(name, newValue);
  };

  return (
    //<div ref={containerRef} className="relative w-full cursor-pointer">
    <>
      <Popover
        open={openMenu}
        handler={setOpenMenu}
        placement="bottom-start"
        dismiss={{ outsidePress: true }}
      >
        <PopoverHandler>
          <div
            // onClick={() => setOpenMenu(true)}
            className={`relative flex flex-wrap items-center gap-1 rounded-md px-3 pr-7 !h-[40px] ${
              openMenu ? "ring-2 ring-[#108F6F]" : "border border-blue-gray-200"
            } cursor-pointer`}
          >
            {selected.length === 0 && (
              <span className="text-blue-gray-400 text-sm">{placeholder}</span>
            )}

            {selected.map((item, idx) =>
              idx != 3 ? (
                <Chip
                  key={item}
                  value={item}
                  size="sm"
                  className="rounded-full normal-case"
                  color="green"
                  onClose={(e) => {
                    e.stopPropagation();
                    toggleOption(item);
                  }}
                />
              ) : (
                <Chip
                  key={item}
                  value="+1"
                  size="sm"
                  color="green"
                  className="rounded-full"
                  // onClose={() => toggleOption(item)}
                />
              )
            )}

            {/* CHEVRON ICON */}
            <ChevronDownIcon
              className={`absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 
            transition-transform duration-200 ease-out
            ${openMenu ? "rotate-180" : ""}`}
            />
          </div>
        </PopoverHandler>
        <PopoverContent className="z-[9999] p-0 max-h-60 overflow-auto w-[325px]">
          <Card shadow={false} className="w-full">
            <List className="min-w-full">
              {OPTIONS.map((option) => (
                <ListItem
                  key={option}
                  onClick={() => toggleOption(option)}
                  className="flex items-center gap-2 hover:bg-[#eaf8f4] w-full focus:bg-[#eaf8f4]"
                  ripple={false}
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(option)}
                    readOnly
                    className="accent-[#108f6f]"
                  />
                  {option}
                </ListItem>
              ))}
            </List>
          </Card>
        </PopoverContent>
      </Popover>
      {/* {openMenu && (
        <Card className="absolute z-[1] mt-1 w-full max-h-60 overflow-auto">
          <List>
            {OPTIONS.map((option) => (
              <ListItem
                key={option}
                onClick={() => toggleOption(option)}
                ripple={false}
                className="flex items-center gap-2 hover:bg-[#EAF8F4] focus:bg-[#EAF8F4]"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  readOnly
                  className="pointer-events-none accent-[#108f6f]"
                />
                {option}
              </ListItem>
            ))}
          </List>
        </Card>
      )} */}
    </>
    //</div>
  );
};

export default CustomMultiSelect;
