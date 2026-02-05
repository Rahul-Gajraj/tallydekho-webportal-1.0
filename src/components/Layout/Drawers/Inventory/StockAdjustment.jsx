import React from "react";

import {
  Button,
  Card,
  CardBody,
  Drawer,
  IconButton,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";

import { Controller, useForm } from "react-hook-form";

import Error from "../../../Error/Error";

const defaultValues = {
  warehouse: "Deltamas Logistics Center",
  rack: "",
  batch: "",
  qty: "0",
  adjustmentQuentity: "0",
  adjustmentReason: "",
  reference: "",
};

const StockAdjustment = ({ open, toggleDrawer }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    clearErrors,
    reset,
  } = useForm({
    defaultValues,
  });

  const resetFields = () => {
    toggleDrawer("stockAdjustment");
    clearErrors();
    reset();
  };

  const onSubmitHandler = (data) => {
    console.log(data);
    resetFields()
  };

  return (
    <Drawer
      placement="right"
      className="p-4 overflow-scroll"
      open={open}
      // onClose={() => toggleDrawer("stockAdjustment")}
      size={500}
    >
      <div className="relative mt-0 block">
        <Typography variant="h4">Stock Adjustment</Typography>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-0 top-0"
          onClick={resetFields}
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
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="grid grid-cols-12 gap-5">
            {/* <div className="col-span-12">
              <Card className="border border-[#B0BEC5] shadow-none cursor-pointer">
                <CardBody className="flex justify-between !p-4">
                  <div className="flex gap-3">
                    <div className="rounded-full border !h-[40px] w-[40px] border-black flex items-center justify-center">
                      <img className="h-5" src="/nav-icons/inventory.svg" />
                    </div>
                    <Typography variant="small">Raw Material x</Typography>
                  </div>
                  <div>
                    <Typography variant="small">Low Stock</Typography>
                    <Typography variant="small">0 Stock</Typography>
                  </div>
                </CardBody>
              </Card>
            </div> */}
            <div className="col-span-12">
              <Controller
                name="warehouse"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      size="md"
                      containerProps={{ className: "!min-w-full" }}
                      label="Warehouse"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error
                condition={errors.warehouse}
                message={errors.warehouse?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="rack"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      size="md"
                      containerProps={{ className: "!min-w-full" }}
                      label="Bin / Rack"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.rack} message={errors.rack?.message} />
            </div>
            <div className="col-span-12">
              <Controller
                name="batch"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      size="md"
                      containerProps={{ className: "!min-w-full" }}
                      label="Batch / Serial Picker"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.batch} message={errors.batch?.message} />
            </div>
            <div className="col-span-12">
              <Controller
                name="qty"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      size="md"
                      containerProps={{ className: "!min-w-full" }}
                      label="Current On-hand Qty"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.qty} message={errors.qty?.message} />
            </div>
            <div className="col-span-12">
              <Controller
                name="adjustmentQuentity"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      size="md"
                      containerProps={{ className: "!min-w-full" }}
                      label="Adjustment Quantity"
                      required
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error
                condition={errors.adjustmentQuentity}
                message={errors.adjustmentQuentity?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="adjustmentReason"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Adjustment Reason"
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      <Option
                        value="payment_received"
                        className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                      >
                        Damage
                      </Option>
                      <Option
                        value="15"
                        className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                      >
                        Wrong Item
                      </Option>
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.adjustmentReason}
                message={errors.adjustmentReason?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="reference"
                control={control}
                render={({ field }) => {
                  return (
                    <Textarea
                      color="green"
                      size="md"
                      containerProps={{ className: "!min-w-full" }}
                      label="Reference / Note"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                      rows={2}
                    />
                  );
                }}
              />
            </div>
            <div className="col-span-12">
              <Button
                className="w-full"
                color="green"
                type="submit"
                style={{ color: "white !importannt" }}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Drawer>
  );
};

export default StockAdjustment;
