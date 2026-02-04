import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import BuyCredit from "./BuyCredit";

const defaultValues = {
  email: false,
  whatsapp: false,
  sms: false,
};

const LICENSES = [
  "All-In-One Data Entry",
  "Secure Data Backup",
  "AI insight and reports",
  "E-Invoicing",
  "E-Way Bill",
  "Multi-Warehouse",
];

const License = ({ open, handleOpen, upsertHandler, initialData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    reset,
    watch,
  } = useForm({
    defaultValues,
  });

  const [isCreditDialogOpen, setIsCreditDialogOpen] = useState(false);
  const [purchaseHistory, setPurchaseHistory] = useState([
    {
      title: "INV-2025-0710-001",
      price: "0.00",
      purchaseDate: "23 July 20",
      credits: "Single User",
    },
    {
      title: "INV-2025-0710-002",
      price: "2000.00",
      purchaseDate: "22 July 20",
      credits: "100 Credits",
    },
    {
      title: "INV-2025-0710-003",
      price: "0.00",
      purchaseDate: "21 July 20",
      credits: "Single User",
    },
  ]);

  const handleCreditDialogOpen = () => {
    setIsCreditDialogOpen((prev) => !prev);
  };

  const onSubmit = async (data) => {
    console.log(data);
    // handleOpen("license");
    // reset();
  };

  return (
    <>
      <Dialog
        size="md"
        open={open}
        handler={() => {
          //   handleOpen("license");
        }}
        className="p-4"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4">License</Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={() => {
              handleOpen("license");
            }}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogBody className="grid grid-cols-12 gap-4 max-h-[42rem] overflow-scroll">
            <div className="col-span-12">
              <Card shadow={false} className="border">
                <CardBody>
                  <Typography className="text-center text-[30px]">
                    Free Forever
                  </Typography>
                  <Typography className="text-center text-[30px]">
                    ₹0/-
                  </Typography>
                  <div className="grid grid-cols-12 gap-1">
                    {LICENSES.map((license) => (
                      <div
                        key={license}
                        className="col-span-4 flex items-center"
                      >
                        <Checkbox
                          defaultChecked
                          disabled
                          color="green"
                          ripple={false}
                          className="h-4 w-4 before:!opacity-0"
                          containerProps={{
                            className: "mr-0",
                          }}
                        />
                        <Typography>{license}</Typography>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="col-span-12">
              <Card shadow={false} className="border">
                <CardBody>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12 flex justify-between">
                      <Typography>Plan</Typography>
                      <Typography>Free - 1 (1/1 Users)</Typography>
                    </div>
                    <div className="col-span-12 flex justify-between">
                      <Typography>Seats</Typography>
                      <Typography>1 Seat</Typography>
                    </div>
                    <div className="col-span-12 flex justify-between">
                      <Typography>Notification Credits</Typography>
                      <Typography>28/200 Available</Typography>
                    </div>
                    <div className="col-span-12 flex justify-between">
                      <Typography>Expires</Typography>
                      <Typography>Never</Typography>
                    </div>
                    <div className="col-span-12 flex justify-between">
                      <Typography>Team Seats</Typography>
                      <Typography>1 Seat</Typography>
                    </div>
                  </div>
                  <div className="col-span-12 mt-3">
                    <Button
                      className="w-full"
                      color="green"
                      onClick={handleCreditDialogOpen}
                    >
                      Buy Credit
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="col-span-12">
              <Typography>Use Credits For</Typography>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                  <Checkbox
                    color="green"
                    label="Email"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                  />
                </div>
                <div className="col-span-3">
                  <Checkbox
                    color="green"
                    label="Whatsapp"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                  />
                </div>
                <div className="col-span-3">
                  <Checkbox
                    color="green"
                    label="SMS"
                    ripple={false}
                    className="h-4 w-4 before:!opacity-0"
                    containerProps={{
                      className: "mr-0",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 flex items-center">
              <Typography className="w-[180px]">Purchase History</Typography>
              <div className="h-[1px] bg-[#B0BEC5] w-full"></div>
            </div>
            {purchaseHistory.map(({ title, price, purchaseDate, credits }) => (
              <div key={title} className="col-span-12">
                <Card shadow={false} className="border">
                  <CardBody className="flex justify-between p-2">
                    <div className="flex gap-5">
                      <img
                        className="w-7"
                        src="/media/common/docs.svg"
                        alt="docs"
                      />
                      <div>
                        <Typography>{title}</Typography>
                        <Typography>{purchaseDate}</Typography>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <Typography>₹{price}</Typography>
                      <Typography>{credits}</Typography>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </DialogBody>
        </form>
      </Dialog>
      <BuyCredit
        open={isCreditDialogOpen}
        handleOpen={handleCreditDialogOpen}
      />
    </>
  );
};

export default License;
