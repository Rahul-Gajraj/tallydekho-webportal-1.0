import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Switch,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Error from "../../../../Error/Error";

const defaultValues = {
  name: "",
  address: "",
  gstin: "",
  registrationType: "",
  pan: "",
  fyStartMonth: "",
  isAfterFYEnd: false,
  phone: "",
  email: "",
  website: "",
};

const REGISTRATION_TYPES = ["Regular", "Composition", "Unregistered"];

const FY_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CompanyInformation = ({
  open,
  handleOpen,
  upsertHandler,
  initialData,
}) => {
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

//   useEffect(() => {
//     if (initialData) {
//       reset(initialData);
//     } else {
//       reset(defaultValues);
//     }
//   }, [initialData]);

  const onSubmit = async (data) => {
    // console.log(data);
    handleOpen('companyInformation');
    reset();
  };

  return (
    <>
      <Dialog
        size="md"
        open={open}
        handler={() => {
          handleOpen("companyInformation");
        }}
        className="p-4"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4">Company Information</Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={() => {
              handleOpen("companyInformation");
            }}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogBody className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Controller
                name="name"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input color="green" label="Company Name" {...field} />
                  );
                }}
              />
              <Error condition={errors.name} message={errors.name?.message} />
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
                    <Textarea
                      color="green"
                      label="Address"
                      rows={2}
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
                name="gstin"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      label="GSTIN"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.gstin} message={errors.gstin?.message} />
            </div>
            <div className="col-span-12">
              <Controller
                name="registrationType"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Registration Type"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {REGISTRATION_TYPES.map((registrationType) => (
                        <Option
                          key={registrationType}
                          value={registrationType}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {registrationType}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.registrationType}
                message={errors.registrationType?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="fyStartMonth"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="FY Start Month"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {FY_MONTHS.map((fyStartMonth) => (
                        <Option
                          key={fyStartMonth}
                          value={fyStartMonth}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {fyStartMonth}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.fyStartMonth}
                message={errors.fyStartMonth?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="pan"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      label="Pan"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.pan} message={errors.pan?.message} />
            </div>

            <div className="col-span-12">
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      label="Phone"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.phone} message={errors.phone?.message} />
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
                name="website"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      label="Website"
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
                condition={errors.website}
                message={errors.website?.message}
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
    </>
  );
};

export default CompanyInformation;
