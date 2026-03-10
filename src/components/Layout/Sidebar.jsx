import React, { useState } from "react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import { NavLink, useLocation } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

import { NAVIGATION } from "@/utils/constants";

const COLLAPSED_WIDTH = 60;
const EXPANDED_WIDTH = 250;

const Sidebar = ({ isPinned, setIsPinned }) => {
  const location = useLocation();

  const [openAccordion, setOpenAccordion] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const isOpen = isHovered || isPinned;

  const isActive = (path) => location.pathname === path;

  const isAnyChildActive = (children) =>
    children?.some((c) => location.pathname === c.path);

  const navigationsIcons = (path, title) => {
    return title === "Financials" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 filter-gray"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
          clipRule="evenodd"
        />
      </svg>
    ) : title === "Compliance" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="w-5 h-5 filter-gray"
      >
        <path d="M571-270q11-10 12-25t-10-26L462-438l1-3h10q54 0 89.5-33t43.5-77h17q10 0 16.5-7t6.5-17q0-10-6.5-16.5T623-598h-18q-3-15-10.5-28.5T576-653h47q10 0 16.5-7t6.5-17q0-10-6.5-16.5T623-700H343q-12 0-20.5 8.5T314-671q0 12 8.5 20t20.5 8h127q26 0 42.5 13t22.5 32H337q-10 0-16.5 7t-6.5 17q0 10 6.5 16.5T337-551h199q-6 20-23 34.5T467-502h-68q-13 0-22.5 6T362-479q-5 11-3 22.5t11 21.5l150 164q10 11 25 11t26-10ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg>
    ) : (
      <img
        src={`/media/icons/${path === "/" ? "dashboard" : path}.svg`}
        className={`w-5 ${isActive(path) ? "filter-green" : "filter-gray"}`}
      />
    );
  };

  return (
    <div
      onMouseEnter={() => !isPinned && setIsHovered(true)}
      onMouseLeave={() => !isPinned && setIsHovered(false)}
      className="fixed left-0 top-0 h-screen z-50"
    >
      <Drawer
        open={true}
        // isOpen="left"
        overlay={false}
        className="transition-all duration-300 ease-in-out"
        size={isOpen ? EXPANDED_WIDTH : COLLAPSED_WIDTH}
      >
        <div className="flex items-center justify-center pr-1 py-3">
          <div className="flex items-center gap-2 overflow-hidden">
            {isOpen ? (
              <img
                src="/media/logos/tallydekho_logo.png"
                alt="logo"
                className="h-10 cursor-pointer"
              />
            ) : (
              <img
                src="/media/logos/tallydekho_mini_logo.png"
                alt="logo"
                className="h-10 cursor-pointer"
              />
            )}
          </div>

          {isOpen && (
            <IconButton
              ripple={false}
              variant="text"
              size="sm"
              onClick={() => setIsPinned((prev) => !prev)}
              className="active:!bg-transparent hover:!bg-transparent absolute right-1"
            >
              {!isPinned ? (
                <img
                  src="/media/icons/circle.svg"
                  alt="cirlce"
                  className="w-6 h-6"
                />
              ) : (
                <img
                  src="/media/icons/circle_circle.svg"
                  alt="cirlce"
                  className="w-6 h-6"
                />
              )}
            </IconButton>
          )}
        </div>

        <PerfectScrollbar>
          <div className="mt-4 flex flex-col gap-4 px-2">
            {(() => {
              try {
                if (!NAVIGATION || !Array.isArray(NAVIGATION)) {
                  console.error("NAVIGATION returned invalid data");
                  return null;
                }
                return NAVIGATION.map((item, idx) => {
                  if (!item) return null;

                  try {
                    const {title, children, path} = item

                    const hasChildren =
                      !!children && Array.isArray(children);
                    const isChildActive =
                      hasChildren && isAnyChildActive(children);

                    return (
                      <div key={idx}>
                        {!hasChildren ? (
                          <NavLink
                            key={idx}
                            to={path}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                              isActive(path)
                                ? "bg-[#eaf8f4] text-[#108f6f]"
                                : "hover:bg-[#eaf8f4]"
                            }
                `}
                          >
                            <span className="min-w-[24px] ">
                              {navigationsIcons(path, title)}
                            </span>

                            {isOpen && (
                              <Typography
                                variant="small"
                                className={`font-medium whitespace-nowrap !mt-0 ${
                                  isActive(path) ? "!text-[#108f6f]" : ""
                                }`}
                              >
                                {title}
                              </Typography>
                            )}
                          </NavLink>
                        ) : (
                          <Accordion
                            open={
                              (isOpen && openAccordion === idx) || isChildActive
                            }
                            icon={
                              (isOpen || isChildActive) && (
                                <svg
                                  className={`h-4 w-4 transition-transform ${
                                    openAccordion === idx || isChildActive
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M6 9l6 6 6-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  />
                                </svg>
                              )
                            }
                          >
                            <AccordionHeader
                              onClick={() =>
                                setOpenAccordion(
                                  openAccordion === idx ? null : idx
                                )
                              }
                              className={`border-b-0 px-3 py-2 rounded-lg ${
                                isChildActive
                                  ? "bg-[#eaf8f4] text-[#108f6f]"
                                  : "hover:bg-[#eaf8f4]"
                              }`}
                            >
                              <div className="flex items-center gap-3 w-full">
                                <span className="min-w-[24px]">
                                  {title === "Financials" ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      className={`w-5 ${
                                        isChildActive
                                          ? "filter-green"
                                          : "filter-gray"
                                      }`}
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  ) : title === "Compliance" ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      className={`w-5 ${
                                        isChildActive
                                          ? "filter-green"
                                          : "filter-gray"
                                      }`}
                                    >
                                      <path d="m12,7V.46c.913.346,1.753.879,2.465,1.59l3.484,3.486c.712.711,1.245,1.551,1.591,2.464h-6.54c-.552,0-1-.449-1-1Zm-.849,12h-6.151c-.553,0-1-.447-1-1s.447-1,1-1h6v-2h-6c-.553,0-1-.447-1-1s.447-1,1-1h6.034c.166-1.278.939-2.393,2.069-3h-.103c-1.654,0-3-1.346-3-3V.024c-.161-.011-.322-.024-.485-.024h-4.515C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h9.479c-1.391-1.122-2.86-2.783-3.327-5Zm7.932,4.858c1.153-.464,4.917-2.292,4.917-6.322v-4.017c0-.862-.551-1.625-1.37-1.896l-3.815-1.265c-.203-.068-.426-.068-.629,0l-3.815,1.265c-.819.271-1.37,1.034-1.37,1.896v4.017c0,3.57,3.715,5.703,4.85,6.27,0,0,.325.209.651.209s.582-.156.582-.156Z" />
                                    </svg>
                                  ) : (
                                    navigationsIcons(path, title)
                                  )}
                                </span>

                                {isOpen && (
                                  <Typography
                                    variant="small"
                                    className={`font-medium ${
                                      isChildActive ? "!text-[#108f6f]" : ""
                                    }`}
                                  >
                                    {title}
                                  </Typography>
                                )}
                              </div>
                            </AccordionHeader>

                            {isOpen && (
                              <AccordionBody className="py-1 px-2">
                                {children &&
                                  children.map((child, cIdx) => {
                                    if (!child) return null;
                                    return (
                                      <NavLink
                                        key={cIdx}
                                        to={child.path}
                                        className={`block rounded-md px-5 py-2 text-sm mb-2 mt-1 transition-colors ${
                                          isActive(child.path)
                                            ? "bg-[#eaf8f4] text-[#108f6f]"
                                            : "hover:bg-[#eaf8f4]"
                                        }`}
                                      >
                                        <div className="flex items-center gap-1 w-full">
                                          <span className="min-w-[30px]">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              height="10px"
                                              viewBox="0 -960 960 960"
                                              width="10px"
                                              fill="#000000"
                                            >
                                              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                            </svg>
                                          </span>
                                          <Typography
                                            variant="small"
                                            className={`font-medium ${
                                              isActive(child.path)
                                                ? "!text-[#108f6f]"
                                                : ""
                                            }`}
                                          >
                                            {child.title}
                                          </Typography>
                                        </div>
                                      </NavLink>
                                    );
                                  })}
                              </AccordionBody>
                            )}
                          </Accordion>
                        )}
                      </div>
                    );
                  } catch (error) {
                    console.error("Error rendering navigation item:", error);
                    return null;
                  }
                });
              } catch (error) {
                console.error("Error in navigation:", error);
                return null;
              }
            })()}
          </div>
        </PerfectScrollbar>
      </Drawer>
    </div>
  );
};

export default Sidebar;
