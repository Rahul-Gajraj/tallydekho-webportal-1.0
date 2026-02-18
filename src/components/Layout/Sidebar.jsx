import React, { useState } from "react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";

import { Link, NavLink, useLocation } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

import { NAVIGATION } from "@/utils/constants";

const COLLAPSED_WIDTH = 60;
const EXPANDED_WIDTH = 250;

const seletedSideValue = {
  ["/"]: 1,
  sales: 2,
  purchase: 3,
  inventory: 4,
  financials: 5,
  compliance: 6,
};

const Sidebar = ({ isPinned, setIsPinned }) => {
  const location = useLocation();

  const [openAccordion, setOpenAccordion] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const isOpen = isHovered || isPinned;

  const isActive = (path) => location.pathname === path;

  const isAnyChildActive = (children) =>
    children?.some((c) => location.pathname === c.path);

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
                const navigationItems = NAVIGATION(isActive);
                if (!navigationItems || !Array.isArray(navigationItems)) {
                  console.error("NAVIGATION returned invalid data");
                  return null;
                }
                return navigationItems.map((item, idx) => {
                  if (!item) return null;

                  try {
                    const active = item.path ? isActive(item.path) : false;
                    const hasChildren =
                      !!item.children && Array.isArray(item.children);
                    const isChildActive =
                      hasChildren && isAnyChildActive(item.children);

                    return (
                      <div key={idx}>
                        {!hasChildren ? (
                          <NavLink
                            key={idx}
                            to={item.path}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                              isActive(item.path)
                                ? "bg-[#eaf8f4] text-[#108f6f]"
                                : "hover:bg-[#eaf8f4]"
                            }
                `}
                          >
                            <span className="min-w-[24px] ">{item.icon}</span>

                            {isOpen && (
                              <Typography
                                variant="small"
                                className={`font-medium whitespace-nowrap !mt-0 ${
                                  isActive(item.path) ? "!text-[#108f6f]" : ""
                                }`}
                              >
                                {item.title}
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
                                  {item.title !== "Financials" ? (
                                    item.icon
                                  ) : (
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
                                  )}
                                </span>

                                {isOpen && (
                                  <Typography
                                    variant="small"
                                    className={`font-medium ${
                                      isChildActive ? "!text-[#108f6f]" : ""
                                    }`}
                                  >
                                    {item.title}
                                  </Typography>
                                )}
                              </div>
                            </AccordionHeader>

                            {isOpen && (
                              <AccordionBody className="py-1 px-2">
                                {item.children &&
                                  item.children.map((child, cIdx) => {
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
