import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Select,
  Option,
  Input,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Popover,
  PopoverHandler,
  PopoverContent,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import moment from "moment";

import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import { DayPicker } from "react-day-picker";
import AddCustomerDialog from "../../Dialogs/Sales/AddCustomerDialog";
import AddProductDialog from "../../Dialogs/Sales/AddProductDrawer";

const ITEM_TABLE_HEAD = [
  "Warehouse",
  "Product",
  "Quantity",
  "Discount",
  "Tax",
  "Unit Price",
];

const CreateInvoiceDrawer = ({ open, toggleDrawer }) => {
  const [ledgers, setLedgers] = useState([
    "Purchase - Raw Material",
    "Purchase - Finished Goods",
    "Expenses",
    "Capital Purchases",
    "Etc",
  ]);
  const [selectedLeger, setSelectedLedger] = useState(ledgers[0]);
  const [customers, setCustomers] = useState(["Yash", "Shirish", "Manish"]);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const [products, setProducts] = useState([]);

  //   console.log(customers);
  //   console.log(selectedCustomer);
  const [areDialogsOpen, setAreDialogsOpen] = useState({
    customer: false,
    product: false,
    logistics: false,
  });

  const handleDialogsOpen = (key) => {
    setAreDialogsOpen((prev) => {
      return { ...prev, [key]: !prev[key] };
    });
  };

  const addCustomerHandler = (newCustomer) => {
    setCustomers((prev) => [...prev, newCustomer]);
  };

  const addProductHandler = (productInfo) => {
    setProducts((prev) => [...prev, productInfo]);
  };

  return (
    <>
      <Drawer
        placement="right"
        className="p-4 overflow-scroll"
        open={open}
        // onClose={() => toggleDrawer("salesInvoice")}
        size={750}
      >
        <div className="relative mt-0 block">
          <Typography variant="h4" color="blue-gray">
            Sales Invoice
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-0"
            onClick={() => toggleDrawer("salesInvoice")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="space-y-4 pb-6 pt-5">
          <div className="flex gap-4">
            <Select
              label="Ledger Selection"
              value={selectedLeger}
              onChange={(val) => setSelectedLedger(val)}
              containerProps={{
                style: {
                  minWidth: "200px",
                },
              }}
              color="green"
            >
              {ledgers.map((ledger) => (
                <Option
                  key={ledger}
                  value={ledger}
                  className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                >
                  {ledger}
                </Option>
              ))}
            </Select>
            <div className="w-full">
              <Input
                color="green"
                label="Invoice Number"
                containerProps={{
                  className: "!min-w-full",
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Popover
              placement="bottom"
              open={popoverOpen}
              handler={setPopoverOpen}
            >
              <PopoverHandler>
                <Button
                  variant="outlined"
                  className="flex items-center gap-3 !border-[#B0BEC5] !w-[348.5px] text-[#455a64] font-medium justify-between focus:ring-0"
                  ripple={false}
                >
                  {moment(date).format("DD MMM, yyyy")}
                  <CalendarDaysIcon
                    strokeWidth={2}
                    className="w-4 h-4 text-gray-600"
                  />
                </Button>
              </PopoverHandler>
              <PopoverContent className="z-[9999]">
                <DayPicker
                  selected={date}
                  onDayClick={(newDate) => {
                    console.log(newDate);
                    if (newDate) {
                      setDate(newDate);
                      setPopoverOpen(false);
                    }
                  }}
                  showOutsideDays
                  className="border-0"
                  classNames={{
                    caption:
                      "flex justify-center py-2 mb-4 relative items-center",
                    caption_label: "text-sm !font-medium text-gray-900",
                    nav: "flex items-center",
                    nav_button:
                      "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                    nav_button_previous: "absolute left-1.5",
                    nav_button_next: "absolute right-1.5",
                    table: "w-full border-collapse",
                    head_row: "flex !font-medium text-gray-900",
                    head_cell: "m-0.5 w-9 !font-normal text-sm",
                    row: "flex w-full mt-2",
                    cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                    day: "h-9 w-9 p-0 !font-normal",
                    day_range_end: "day-range-end",
                    day_selected:
                      "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                    day_today: "rounded-md bg-gray-200 text-gray-900",
                    day_outside:
                      "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                    day_disabled: "text-gray-500 opacity-50",
                    day_hidden: "invisible",
                  }}
                  components={{
                    IconLeft: ({ ...props }) => (
                      <ChevronLeftIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                    IconRight: ({ ...props }) => (
                      <ChevronRightIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                  }}
                />
              </PopoverContent>
            </Popover>
            <div className="w-[348.5px]">
              <Select
                label="Customer Selection"
                value={selectedCustomer}
                onChange={(val) => {
                  console.log(val);
                  setSelectedCustomer(val);
                }}
                // containerProps={{
                //   style: {
                //     minWidth: "100%",
                //   },
                // }}
                color="green"
                key={selectedCustomer}
              >
                {customers.map((customer) => (
                  <Option
                    key={customer}
                    value={customer}
                    className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                  >
                    {customer}
                  </Option>
                ))}
              </Select>
            </div>
            {/* <IconButton
              color="green"
              className="h-[40px] border-[#B0BEC5] focus:ring-0 rounded-[7px] px-4"
              onClick={() => handleDialogsOpen("customer")}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 ml-1"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"></path>
              </svg>
            </IconButton> */}
            {/* <div className="flex items-center w-full"> */}
            {/* </div> */}
          </div>
          <div className="flex gap-3 items-center">
            <Typography variant="h6" color="blue-gray">
              Item/Services
            </Typography>
            <div className="h-[1px] bg-[#B0BEC5] w-full"></div>
          </div>
          <div className="">
            {products.length == 0 ? (
              <Card
                className="border border-[#B0BEC5] h-[100px] cursor-pointer flex items-center justify-center"
                onClick={() => handleDialogsOpen("product")}
              >
                <Typography>Add Product</Typography>
              </Card>
            ) : (
              <>
                <Card className="max-h-[300px] border border-[#B0BEC5] overflow-scroll">
                  <table className="w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {ITEM_TABLE_HEAD.map((head) => (
                          <th key={head} className="px-4 pt-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold leading-none"
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(
                        ({
                          warehouse,
                          product,
                          qty,
                          discount,
                          tax,
                          unitPrice,
                        }) => {
                          return (
                            <tr key={warehouse}>
                              <td className="p-2 px-4">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal text-gray-600"
                                >
                                  {warehouse}
                                </Typography>
                              </td>
                              <td className="p-2 px-4">
                                <Typography
                                  variant="small"
                                  className="font-normal text-gray-600"
                                >
                                  {product}
                                </Typography>
                              </td>
                              <td className="p-2 px-4">
                                <Typography
                                  variant="small"
                                  className="font-normal text-gray-600"
                                >
                                  {qty || 0}
                                </Typography>
                              </td>
                              <td className="p-2 px-4">
                                <Typography
                                  variant="small"
                                  className="font-normal text-gray-600"
                                >
                                  {discount || 0}
                                </Typography>
                              </td>
                              <td className="p-2 px-4">
                                <Typography
                                  variant="small"
                                  className="font-normal text-gray-600"
                                >
                                  {tax || 0}
                                </Typography>
                              </td>
                              <td className="p-2 px-4">
                                <Typography
                                  variant="small"
                                  className="font-normal text-gray-600"
                                >
                                  {unitPrice || 0}
                                </Typography>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                    <tfoot className="border-t border-gray-300">
                      <tr>
                        <td className="p-2 px-4">
                          <Typography
                            color="blue-gray"
                            variant="small"
                            className="font-bold"
                          >
                            Total
                          </Typography>
                        </td>
                        <td className="p-2 px-4"></td>
                        <td className="p-2 px-4"></td>
                        <td className="p-2 px-4"></td>
                        <td className="p-2 px-4"></td>
                        <td className="p-2 px-4">
                          <Typography
                            color="blue-gray"
                            variant="small"
                            className="font-bold"
                          >
                            ₹
                            {products.reduce((prevVal, currVal) => {
                              const { qty, unitPrice, discount, tax } = currVal;
                              return (
                                prevVal +
                                Number(qty || 0) * Number(unitPrice || 0) -
                                Number(discount || 0) / 100 +
                                Number(tax || 0)
                              );
                            }, 0)}
                          </Typography>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </Card>
                <Button
                  color="green"
                  className="normal-case w-full mt-4"
                  onClick={() => handleDialogsOpen("product")}
                >
                  Add Product
                </Button>
              </>
            )}
          </div>
          <div className="flex gap-3 items-center">
            <Typography variant="h6" color="blue-gray">
              Logistics/Shipping
            </Typography>
            <div className="h-[1px] bg-[#B0BEC5] w-full"></div>
          </div>
          <div className="">
            {products.length == 0 ? (
              <Card
                className="border border-[#B0BEC5] h-[100px] cursor-pointer flex items-center justify-center"
                onClick={() => handleDialogsOpen("product")}
              >
                <Typography>Add Logistics</Typography>
              </Card>
            ) : (
              <>
                <Card className="max-h-[300px] border border-[#B0BEC5] overflow-scroll">
                  <table className="w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {ITEM_TABLE_HEAD.map((head) => (
                          <th key={head} className="px-4 pt-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold leading-none"
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(
                        ({
                          warehouse,
                          product,
                          qty,
                          discount,
                          tax,
                          unitPrice,
                        }) => {
                          return (
                            <tr key={warehouse}>
                              <td className="p-2 px-4">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal text-gray-600"
                                >
                                  {warehouse}
                                </Typography>
                              </td>
                              <td className="p-2 px-4">
                                <Typography
                                  variant="small"
                                  className="font-normal text-gray-600"
                                >
                                  {product}
                                </Typography>
                              </td>
                              <td className="p-2 px-4">
                                <Typography
                                  variant="small"
                                  className="font-normal text-gray-600"
                                >
                                  {qty || 0}
                                </Typography>
                              </td>
                              <td className="p-2 px-4">
                                <Typography
                                  variant="small"
                                  className="font-normal text-gray-600"
                                >
                                  {discount || 0}
                                </Typography>
                              </td>
                              <td className="p-2 px-4">
                                <Typography
                                  variant="small"
                                  className="font-normal text-gray-600"
                                >
                                  {tax || 0}
                                </Typography>
                              </td>
                              <td className="p-2 px-4">
                                <Typography
                                  variant="small"
                                  className="font-normal text-gray-600"
                                >
                                  {unitPrice || 0}
                                </Typography>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                    <tfoot className="border-t border-gray-300">
                      <tr>
                        <td className="p-2 px-4">
                          <Typography
                            color="blue-gray"
                            variant="small"
                            className="font-bold"
                          >
                            Total
                          </Typography>
                        </td>
                        <td className="p-2 px-4"></td>
                        <td className="p-2 px-4"></td>
                        <td className="p-2 px-4"></td>
                        <td className="p-2 px-4"></td>
                        <td className="p-2 px-4">
                          <Typography
                            color="blue-gray"
                            variant="small"
                            className="font-bold"
                          >
                            ₹
                            {products.reduce((prevVal, currVal) => {
                              const { qty, unitPrice, discount, tax } = currVal;
                              return (
                                prevVal +
                                Number(qty || 0) * Number(unitPrice || 0) -
                                Number(discount || 0) / 100 +
                                Number(tax || 0)
                              );
                            }, 0)}
                          </Typography>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </Card>
                <Button
                  color="green"
                  className="normal-case w-full mt-4"
                  onClick={() => handleDialogsOpen("product")}
                >
                  Add Logistics
                </Button>
              </>
            )}
          </div>
          {/* <Card className="shadow-none border border-[#B0BEC5] h-[300px] overflow-scroll">
            <CardHeader color="transparent" floated={false} shadow={false}>
              <Typography variant="h6" color="blue-gray">
                Item/Services
              </Typography>
            </CardHeader>
            <CardBody className="m-0 pt-3">
              {products.map((product, idx) => (
                <Card
                  key={idx}
                  className=" border border-[#B0BEC5] h-[220px] overflow-scroll p-4 mb-4"
                  onClick={() => handleDialogsOpen("product")}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"></path>
                        <path d="M6 18h12"></path>
                        <path d="M6 14h12"></path>
                        <rect width="12" height="12" x="6" y="10"></rect>
                      </svg>
                      <Typography>{product.product}</Typography>
                    </div>
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"></path>
                        <path d="M6 18h12"></path>
                        <path d="M6 14h12"></path>
                        <rect width="12" height="12" x="6" y="10"></rect>
                      </svg>
                      <Typography>{product.warehouse}</Typography>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-1">
                        <Typography>Qty</Typography>
                        <Typography>{product.qty}</Typography>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Typography>Discount</Typography>
                        <Typography>{product.discount}</Typography>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Typography>Tax</Typography>
                        <Typography>{product.tax}</Typography>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Typography>Unit Price</Typography>
                        <Typography>{product.unitPrice}</Typography>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              <Card
                className=" border border-[#B0BEC5] h-[220px] cursor-pointer flex items-center justify-center"
                onClick={() => handleDialogsOpen("product")}
              >
                <Typography>Add Product</Typography>
              </Card>
            </CardBody>
          </Card> */}
        </div>
        {/* <DialogFooter>
          <Button className="ml-auto" onClick={handleOpen}>
            submit
          </Button>
        </DialogFooter> */}
      </Drawer>
      <AddCustomerDialog
        open={areDialogsOpen.customer}
        handleOpen={handleDialogsOpen}
        addHandler={addCustomerHandler}
      />
      <AddProductDialog
        open={areDialogsOpen.product}
        handleOpen={handleDialogsOpen}
        addHandler={addProductHandler}
      />
    </>
  );
};

export default CreateInvoiceDrawer;
