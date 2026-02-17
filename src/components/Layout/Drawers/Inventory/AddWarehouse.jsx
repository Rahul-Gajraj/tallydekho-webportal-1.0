import React from "react";

import {
  Button,
  Drawer,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";

import { Controller, useFieldArray, useForm } from "react-hook-form";

import Error from "@/components/Error/Error";

const defaultValues = {
  warehouseCode: "",
  name: "",
  phoneNumber: "",
  email: "",
  address: "",
  zipCode: "",
  racks: "",
  label: "",
  narration: "",
  racks: [{ rack: "", label: "" }],
};

const AddWarehouse = ({ open, toggleDrawer }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    getValues,
    setError,
    clearErrors,
    reset,
  } = useForm({
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "racks",
  });

  const resetFields = () => {
    toggleDrawer("addWarehouse");
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
      // onClose={() => toggleDrawer("addWarehouse")}
      size={500}
    >
      <div className="relative mt-0 block">
        <Typography variant="h4">Add Warehouse</Typography>
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
            <div className="col-span-12">
              <Controller
                name="warehouseCode"
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
                      label="Warehouse Code"
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
                condition={errors.warehouseCode}
                message={errors.warehouseCode?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="name"
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
                      label="Name"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.name} message={errors.name?.message} />
            </div>
            <div className="col-span-12">
              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Phone Number"
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
                condition={errors.phoneNumber}
                message={errors.phoneNumber?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Email"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.email} message={errors.email?.message} />
            </div>
            <div className="col-span-12">
              <Controller
                name="address"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Address"
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
                condition={errors.address}
                message={errors.address?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="zipCode"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Zip Code"
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
                condition={errors.zipCode}
                message={errors.zipCode?.message}
              />
            </div>
            <div className="col-span-12">
              {fields.map((item, idx) => (
                <div
                  className={`grid grid-cols-11 gap-5 ${
                    idx == 0 ? "mt-0" : "mt-5"
                  }`}
                  key={item.id}
                >
                  <div className="col-span-5">
                    <Controller
                      name={`racks.${idx}.rack`}
                      control={control}
                      rules={{ required: "This field is required" }}
                      render={({ field: { value, onChange } }) => (
                        <Input
                          label="Rack"
                          value={value}
                          onChange={onChange}
                          error={Boolean(errors?.racks?.[idx]?.rack)}
                          color="green"
                        />
                      )}
                    />
                    {errors?.racks?.[idx]?.rack && (
                      <Error
                        condition={errors?.racks?.[idx]?.rack}
                        message={errors?.racks?.[idx]?.rack.message}
                      />
                    )}
                  </div>
                  <div className="col-span-5">
                    <Controller
                      name={`racks.${idx}.label`}
                      control={control}
                      rules={{ required: "This field is required" }}
                      render={({ field: { value, onChange } }) => (
                        <Input
                          label="Label"
                          value={value}
                          onChange={onChange}
                          error={Boolean(errors?.racks?.[idx]?.label)}
                          color="green"
                        />
                      )}
                    />
                    {errors?.racks?.[idx]?.label && (
                      <Error
                        condition={errors?.racks?.[idx]?.label}
                        message={errors?.racks?.[idx]?.label.message}
                      />
                    )}
                  </div>
                  <div className="col-span-1">
                    {idx == fields.length - 1 ? (
                      <img
                        src="/media/icons/add.svg"
                        alt="add"
                        className="cursor-pointer mt-2"
                        onClick={() => {
                          const rackValue = getValues(`racks.${idx}.rack`);
                          const labelValue = getValues(`racks.${idx}.label`);
                          if (rackValue.length == 0) {
                            setError(`racks.${idx}.rack`, {
                              message: "This field is required",
                            });
                            return;
                          } else {
                            setError(`racks.${idx}.rack`, null);
                          }
                          if (labelValue.length == 0) {
                            setError(`racks.${idx}.label`, {
                              message: "This field is required",
                            });
                            return;
                          } else {
                            setError(`racks.${idx}.label`, null);
                          }

                          append({ rack: "", label: "" });
                        }}
                      />
                    ) : (
                      <img
                        src="/media/icons/close.svg"
                        alt="close"
                        className="cursor-pointer mt-2"
                        onClick={() => {
                          remove(idx);
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
              {/* <Controller
                name="racks"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Racks"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.racks} message={errors.racks?.message} /> */}
            </div>
            <div className="col-span-12">
              <Controller
                name="label"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Label"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.label} message={errors.label?.message} />
            </div>
            <div className="col-span-12">
              <Controller
                name="narration"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      containerProps={{ className: "!min-w-full" }}
                      label="Narration"
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
                condition={errors.narration}
                message={errors.narration?.message}
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

export default AddWarehouse;
