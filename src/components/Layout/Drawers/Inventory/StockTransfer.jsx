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

import Error from "@/components/Error/Error";

const defaultValues = {
  warehouse: "",
  rack: "",
  qty: "",
  adjustmentQuentity: "0",
  batch: "",
  destinationWarehouse: "",
  destinationRack: "",
  quantityTransfer: "",
  narration: "",
};

const StockTransfer = ({ open, toggleDrawer }) => {
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
    toggleDrawer("stockTransfer");
    clearErrors();
    reset();
  };

  const onSubmitHandler = (data) => {
    resetFields();
  };

  return (
    <Drawer
      placement="right"
      className="p-4 overflow-scroll"
      open={open}
      // onClose={() => toggleDrawer("stockTransfer")}
      size={500}
    >
      <div className="relative mt-0 block">
        <Typography variant="h4">Stock Transfer</Typography>
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
                    <Typography variant="small">High Stock</Typography>
                    <Typography variant="small">12 Stock</Typography>
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
                    <Select
                      label="Warehouse"
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      <Option
                        value="Deltamas Logistics Center"
                        className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                      >
                        Deltamas Logistics Center
                      </Option>
                    </Select>
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
                    <Select
                      label="Source Rack"
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      <Option
                        value="Deltamas Logistics Center"
                        className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                      >
                        Deltamas Logistics Center
                      </Option>
                    </Select>
                  );
                }}
              />
              <Error condition={errors.rack} message={errors.rack?.message} />
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
                      label="On-hand Qty"
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
                name="destinationWarehouse"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Destination Warehouse"
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      <Option
                        value="Deltamas Logistics Center"
                        className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                      >
                        Deltamas Logistics Center
                      </Option>
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.destinationWarehouse}
                message={errors.destinationWarehouse?.message}
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
                name="destinationRack"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Destination Rack"
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      <Option
                        value="Deltamas Logistics Center"
                        className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                      >
                        Deltamas Logistics Center
                      </Option>
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.destinationRack}
                message={errors.destinationRack?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="quantityTransfer"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      label="Quanitiy To Transfer"
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
                condition={errors.quantityTransfer}
                message={errors.quantityTransfer?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="narration"
                control={control}
                render={({ field }) => {
                  return (
                    <Textarea
                      color="green"
                      size="md"
                      containerProps={{ className: "!min-w-full" }}
                      label="Narration"
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
              <Button className="w-full" color="green" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Drawer>
  );
};

export default StockTransfer;
