import React, { useState } from "react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id + 1 === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const TERMS = [
  { title: "Due Date", body: "Specify the deadline for payment" },
  {
    title: "Late Payment Penalities",
    body: "Clearly state the consequences of delayed payments, such as interest rates or fixed charges",
  },
  { title: "Payment Methods", body: "Detail the acceptable payment options" },
  {
    title: "Currency",
    body: "Indicate the currency in which the payment is expected, especially for international transactions",
  },
  {
    title: "Accepted Payment Forms",
    body: "Specify if you accept cash, wire tranfers, or any other specific forms of payment.",
  },
];

const VoucherAccordion = ({ item, open, handleOpen, idx }) => {
  const { title } = item;

  const [selectedFormat, setSelectedFormat] = useState(null);

  return (
    <Accordion
      open={open === idx + 1}
      className="rounded-lg border border-blue-gray-100 px-4"
      icon={<Icon id={idx} open={open} />}
    >
      <AccordionHeader
        onClick={() => handleOpen(idx + 1)}
        className={`border-b-0 transition-colors text-[16px] ${
          open === idx + 1 ? "text-green-500 hover:!text-green-700" : ""
        }`}
      >
        {title}
      </AccordionHeader>
      <AccordionBody className="pt-0 text-base font-normal">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <Typography className="text-[14px]">Select Format</Typography>
          </div>
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-4">
              {[1, 2, 3].map((card, idx) => {
                const isSelected = selectedFormat === card;

                return (
                  <div key={card} className="col-span-4 mt-1">
                    <Card
                      className={`
                w-full cursor-pointer transition-all
                animate-pulse shadow-none
                ${
                  isSelected
                    ? "border-2 border-green-500 ring-2 ring-green-500/30 "
                    : "border border-green-100 hover:border-green-300"
                }
              `}
                      onClick={() => setSelectedFormat(card)}
                    >
                      <CardBody>
                        <Typography
                          as="div"
                          variant="paragraph"
                          className="mb-2 h-2 w-full rounded-full bg-gray-300"
                        >
                          &nbsp;
                        </Typography>
                        <Typography
                          as="div"
                          variant="paragraph"
                          className="mb-2 h-2 w-full rounded-full bg-gray-300"
                        >
                          &nbsp;
                        </Typography>
                        <Typography
                          as="div"
                          variant="paragraph"
                          className="mb-2 h-2 w-full rounded-full bg-gray-300"
                        >
                          &nbsp;
                        </Typography>
                        <div className="flex gap-2">
                          <Button
                            disabled
                            tabIndex={-1}
                            className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                          >
                            &nbsp;
                          </Button>
                          <Button
                            disabled
                            tabIndex={-1}
                            className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                          >
                            &nbsp;
                          </Button>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <Button
                            disabled
                            tabIndex={-1}
                            className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                          >
                            &nbsp;
                          </Button>
                          <Button
                            disabled
                            tabIndex={-1}
                            className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                          >
                            &nbsp;
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                    <Typography className="text-center mt-2" variant="small">
                      Format {card}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-12 my-4">
            <Card className="border shadow-none">
              <CardHeader floated={false} shadow={false} className="text-[14px]">
                Terms & Conditions
              </CardHeader>
              <CardBody>
                <ul className="list-disc list-outside pl-6 space-y-2">
                  {TERMS.map((term) => (
                    <li key={term.title}>
                      <div className="grid grid-cols-[220px_1fr] gap-2">
                        <Typography variant="small" className="font-bold">
                          {term.title}:
                        </Typography>
                        <Typography variant="small">{term.body}.</Typography>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter className="p-0 pb-2 text-center">
                <Button variant="text">Add New</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="col-span-12">
            <Button className="w-full" color="green">
              Use This Format
            </Button>
          </div>
        </div>
      </AccordionBody>
    </Accordion>
  );
};

const VOUCHERS = [
  { title: "Sales Invoice" },
  { title: "Purchase Invoice" },
  { title: "Sales Order" },
  { title: "Purchase Order" },
  { title: "Quotation" },
  { title: "Credit Note" },
];

const VoucherConfiguration = ({
  open,
  handleOpen,
  upsertHandler,
  initialData,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(0);

  const handleAccordionOpen = (value) =>
    setAccordionOpen(accordionOpen === value ? 0 : value);

  return (
    <Dialog
      size="md"
      open={open}
      handler={() => {
        handleOpen("tallyPrimeSync");
      }}
      className="p-4"
    >
      <DialogHeader className="relative m-0 block">
        <Typography variant="h4">Voucher Configuration</Typography>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-3.5 top-3.5"
          onClick={() => {
            handleOpen("voucher");
          }}
        >
          <XMarkIcon className="h-4 w-4 stroke-2" />
        </IconButton>
      </DialogHeader>
      <DialogBody className="space-y-8 max-h-[42rem] overflow-scroll">
        <div className="grid grid-cols-12 gap-4">
          {VOUCHERS.map((voucher, idx) => (
            <div key={voucher.title} className="col-span-12">
              <VoucherAccordion
                item={voucher}
                open={accordionOpen}
                handleOpen={handleAccordionOpen}
                idx={idx}
              />
            </div>
          ))}
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default VoucherConfiguration;
