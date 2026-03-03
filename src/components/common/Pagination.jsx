import React, { useState } from "react";

import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const Pagination = () => {
  const [dataCountPerPage, setDataCountPerPage] = useState(20);

  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState(1);

  const next = () => {
    if (active === 3) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-between items-center mt-5">
      <div className="flex items-center gap-2">
        <Typography className="text-[14px]">Show</Typography>
        <Menu open={openMenu} handler={setOpenMenu}>
          <MenuHandler className="flex items-center gap-3">
            <Button variant="outlined" size="sm">
              {dataCountPerPage}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${
                  openMenu ? "rotate-180" : ""
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem onClick={() => setDataCountPerPage("20")}>20</MenuItem>
            <MenuItem onClick={() => setDataCountPerPage("50")}>50</MenuItem>
            <MenuItem onClick={() => setDataCountPerPage("100")}>100</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outlined"
          size="sm"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ChevronLeftIcon strokeWidth={3} className="h-3 w-3" /> Prev
        </Button>
        <div className="flex items-center gap-2">
          <Typography variant="h6" color="blue-gray">
            2 <span className="font-normal text-gray-600">of 10</span>
          </Typography>
        </div>
        <Button
          variant="outlined"
          size="sm"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === 3}
        >
          Next
          <ChevronRightIcon strokeWidth={3} className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
