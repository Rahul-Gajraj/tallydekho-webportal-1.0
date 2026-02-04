import React, { useState } from "react";

import {
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Switch,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { Controller, useForm } from "react-hook-form";
import BuyCredit from "../Account/BuyCredit";
import CustomTime from "../../../../common/CustomTime";
import Error from "../../../../Error/Error";

const defaultValues = {
  email: false,
  whatsapp: false,
  sms: false,
  pushNotification: false,
  doNotDisturb: false,
  startHour: "",
  endHour: "",
  staturday: false,
  sunday: false,
};

const Channels = ({ open, handleOpen, upsertHandler, initialData }) => {
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

  const handleCreditDialogOpen = () => {
    setIsCreditDialogOpen((prev) => !prev);
  };

  const onSubmit = async (data) => {
    // console.log(data);
    handleOpen("channels");
    reset();
  };

  return (
    <>
      <Dialog
        size="md"
        open={open}
        // handler={() => {
        //   handleOpen("channels");
        // }}
        className="p-4"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4">Channels & Quite Hours</Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={() => {
              handleOpen("channels");
            }}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogBody className="grid grid-cols-12 gap-5">
            <div className="col-span-12 -mb-3">
              <Typography>Delivery Channels</Typography>
            </div>
            <div className="col-span-3">
              <Controller
                name="email"
                control={control}
                render={({ field }) => {
                  return <Switch color="green" {...field} label="Email" />;
                }}
              />
            </div>
            <div className="col-span-3">
              <Controller
                name="whatsapp"
                control={control}
                render={({ field }) => {
                  return <Switch color="green" {...field} label="Whatsapp" />;
                }}
              />
            </div>
            <div className="col-span-3">
              <Controller
                name="sms"
                control={control}
                render={({ field }) => {
                  return <Switch color="green" {...field} label="SMS" />;
                }}
              />
            </div>
            <div className="col-span-3">
              <Controller
                name="pushNotification"
                control={control}
                render={({ field }) => {
                  return <Switch color="green" {...field} label="Push" />;
                }}
              />
            </div>
            <div className="col-span-12">
              <Input label="Credit Balance" value="128" disabled />
            </div>
            <div className="col-span-12">
              <Button
                color="green"
                className="w-full"
                onClick={handleCreditDialogOpen}
              >
                Buy Credit
              </Button>
            </div>
            <div className="col-span-12 -mb-3">
              <Typography>Quiet Hours</Typography>
            </div>
            <div className="col-span-12">
              <Controller
                name="doNotDisturb"
                control={control}
                render={({ field }) => {
                  return (
                    <Switch color="green" {...field} label="Do Not Disturb" />
                  );
                }}
              />
            </div>
            <div className="col-span-6">
              <CustomTime
                name="startHour"
                control={control}
                label="Start"
                rules={{ required: "Start Time is required" }}
              />
              <Error
                condition={errors.startHour}
                message={errors.startHour?.message}
              />
            </div>
            <div className="col-span-6">
              <CustomTime
                name="endHour"
                control={control}
                label="End"
                rules={{ required: "End Time is required" }}
              />
              <Error
                condition={errors.endHour}
                message={errors.endHour?.message}
              />
            </div>
            <div className="col-span-12 -mb-7">
              <Typography>Weekends</Typography>
            </div>
            <div className="col-span-12 flex gap-4 items-center">
              <Typography>Mute:</Typography>
              <Controller
                name="saturday"
                control={control}
                render={({ field }) => {
                  return <Checkbox {...field} label="Saturday" color="green" />;
                }}
              />
              <Controller
                name="sunday"
                control={control}
                render={({ field }) => {
                  return <Checkbox {...field} label="Sunday" color="green" />;
                }}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              className="ml-auto"
              color="green"
              type="submit"
              style={{ color: "white !importannt" }}
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
      <BuyCredit
        open={isCreditDialogOpen}
        handleOpen={handleCreditDialogOpen}
      />
    </>
  );
};

export default Channels;
