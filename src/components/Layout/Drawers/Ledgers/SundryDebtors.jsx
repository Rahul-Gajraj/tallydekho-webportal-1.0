import React, { useState } from "react";

import {
  Button,
  Drawer,
  IconButton,
  Input,
  Option,
  Select,
  Switch,
  Textarea,
  Typography,
} from "@material-tailwind/react";

import { Controller, useForm } from "react-hook-form";

import Error from "../../../Error/Error";

const defaultValues = {
  name: "",
  underGroup: "Sundry Debtors",
  openingBalance: "",
  creditPeriod: "",
  mailingName: "",
  address: "",
  state: "",
  country: "",
  pincode: "",
  beneficiaryName: "",
  bankName: "",
  ifscCode: "",
  accountNumber: "",
  gstin: "",
  pan: "",
};

const STATES = ["Rajasthan", "Jammu & Kashmir", "Gujarat"];

const GST_TYPES = [
  { label: "Regular", value: "regular" },
  { label: "Unregistered", value: "unregistered" },
  { label: "Composition", value: "composition" },
];

const UNDER_GROUP = [
  "Sundry Debtors",
  "Sundry Creditors",
  "Duities & Taxes",
  "Custom Groups",
];

const SundryDebtors = ({ open, toggleDrawer }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    reset,
  } = useForm({
    defaultValues,
  });

  const [isMailingDetailEnable, setIsMailingDetailEnable] = useState(false);
  const [isBankingDetailEnable, setIsBankingDetailEnable] = useState(false);
  const [gstinDetailType, setGSTINDetailType] = useState(GST_TYPES[1].value);
  const [isCredit, setIsCredit] = useState(false);

  const onSubmitHandler = (data) => {
    console.log(data);
    reset();
    toggleDrawer("sundryDebtors");
  };

  return (
    <>
      <Drawer
        placement="right"
        className="p-4 overflow-scroll"
        open={open}
        // onClose={() => toggleDrawer("sundryDebtors")}
        size={500}
      >
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="relative mt-0 flex justify-between">
            <Typography variant="h4">Sundry Debtors</Typography>
            <IconButton
              size="sm"
              variant="text"
              // className="!absolute right-0 top-0"
              onClick={() => {
                reset();
                toggleDrawer("sundryDebtors");
              }}
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
          <div className="space-y-4 pb-6">
            <div className="grid grid-cols-12 gap-4 mt-5">
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
              {/* <div className="col-span-12">
                <Controller
                  name="underGroup"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Select
                        label="Under (Group)"
                        value={field.value}
                        onChange={(val) => {
                          field.onChange(val);
                        }}
                        color="green"
                      >
                        {UNDER_GROUP.map((group) => (
                          <Option
                            key={group}
                            value={group}
                            className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                          >
                            {group}
                          </Option>
                        ))}
                      </Select>
                    );
                  }}
                />
                <Error
                  condition={errors.underGroup}
                  message={errors.underGroup?.message}
                />
              </div> */}
              <div className="col-span-12 ">
                <div className="flex rounded-md ring-1 focus-within:ring-2 ring-inset ring-[#b0bec5] h-[40px] items-center focus-within:ring-[#108f6f]">
                  <Controller
                    name="openingBalance"
                    control={control}
                    rules={{
                      required: "This field is required",
                    }}
                    render={({ field }) => {
                      return (
                        <div className="relative w-full">
                          <label className="text-[12px] absolute -top-2.5 left-3 z-10 bg-white px-1 text-blue-gray-600">
                            Opening Balance
                          </label>
                          <input
                            type="number"
                            {...field}
                            onChange={(value) => {
                              //   onChange(value);
                              field.onChange(value);
                            }}
                            placeholder="0.00"
                            className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-600 sm:text-sm/6 focus:border-0 w-full"
                          />
                        </div>
                      );
                    }}
                  />
                  <div className="flex justify-between items-center gap-3 mr-4">
                    <Typography variant="small">Dr</Typography>
                    <Switch
                      color="green"
                      // label="Optional/Regular"
                      checked={isCredit}
                      onChange={(e) => {
                        const newValue = e.target.checked;
                        setIsCredit(newValue);
                      }}
                      ripple={true}
                    />
                    <Typography variant="small">Cr</Typography>
                  </div>
                </div>
                <Error
                  condition={errors.openingBalance}
                  message={errors.openingBalance?.message}
                />
              </div>
              <div className="col-span-12">
                <Controller
                  name="creditPeriod"
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        color="green"
                        label="Credit Period"
                        {...field}
                        onChange={(value) => {
                          //   onChange(value);
                          field.onChange(value);
                        }}
                      />
                    );
                  }}
                />
              </div>
              <div className="col-span-12">
                <label className="inline-flex items-center gap-3 flex-row-reverse cursor-pointer">
                  <Switch
                    label={null}
                    containerProps={{
                      className: "[&>label]:pointer-events-none",
                    }}
                    color="green"
                    value={isMailingDetailEnable}
                    onChange={(e) => {
                      const newValue = e.target.checked;
                      setIsMailingDetailEnable(newValue);
                    }}
                  />
                  <Typography className="select-none font-light">
                    Enable Mailing Details
                  </Typography>
                </label>
              </div>
              {/* {isMailingDetailEnable && (
                <> */}
                  <div className="col-span-12">
                    <Controller
                      name="mailingName"
                      control={control}
                      rules={{
                        required: isMailingDetailEnable
                          ? "This field is required"
                          : false,
                      }}
                      render={({ field }) => {
                        return (
                          <Input
                            color="green"
                            label="Mailing Name"
                            {...field}
                            onChange={(value) => {
                              //   onChange(value);
                              field.onChange(value);
                            }}
                          />
                        );
                      }}
                      disabled={!isMailingDetailEnable}
                    />
                    <Error
                      condition={errors.mailingName}
                      message={errors.mailingName?.message}
                    />
                  </div>
                  <div className="col-span-12">
                    <Controller
                      name="address"
                      control={control}
                      rules={{
                        required: isMailingDetailEnable
                          ? "This field is required"
                          : false,
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
                      disabled={!isMailingDetailEnable}
                    />
                    <Error
                      condition={errors.address}
                      message={errors.address?.message}
                    />
                  </div>
                  <div className="col-span-12">
                    <Controller
                      name="state"
                      control={control}
                      rules={{
                        required: isMailingDetailEnable
                          ? "This field is required"
                          : false,
                      }}
                      render={({ field }) => {
                        return (
                          <Select
                            label="State"
                            value={field.value}
                            onChange={(val) => {
                              field.onChange(val);
                            }}
                            color="green"
                            disabled={!isMailingDetailEnable}
                          >
                            {STATES.map((state) => (
                              <Option
                                key={state}
                                value={state}
                                className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                              >
                                {state}
                              </Option>
                            ))}
                          </Select>
                        );
                      }}
                    />
                    <Error
                      condition={errors.state}
                      message={errors.state?.message}
                    />
                  </div>
                  <div className="col-span-12">
                    <Controller
                      name="country"
                      control={control}
                      rules={{
                        required: isMailingDetailEnable
                          ? "This field is required"
                          : false,
                      }}
                      render={({ field }) => {
                        return (
                          <Input
                            color="green"
                            label="Country"
                            {...field}
                            disabled={!isMailingDetailEnable}
                            onChange={(value) => {
                              //   onChange(value);
                              field.onChange(value);
                            }}
                          />
                        );
                      }}
                    />
                    <Error
                      condition={errors.country}
                      message={errors.country?.message}
                    />
                  </div>
                  <div className="col-span-12">
                    <Controller
                      name="pincode"
                      control={control}
                      rules={{
                        required: isMailingDetailEnable
                          ? "This field is required"
                          : false,
                      }}
                      render={({ field }) => {
                        return (
                          <Input
                            color="green"
                            label="Pincode"
                            disabled={!isMailingDetailEnable}
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
                      condition={errors.pincode}
                      message={errors.pincode?.message}
                    />
                  </div>
                {/* </>
              )} */}
              <div className="col-span-12">
                <label className="inline-flex items-center gap-3 flex-row-reverse cursor-pointer">
                  <Switch
                    label={null}
                    containerProps={{
                      className: "[&>label]:pointer-events-none",
                    }}
                    color="green"
                    value={isBankingDetailEnable}
                    onChange={(e) => {
                      const newValue = e.target.checked;
                      setIsBankingDetailEnable(newValue);
                    }}
                  />
                  <Typography className="select-none font-light">
                    Provide Banking Details
                  </Typography>
                </label>
              </div>
              {/* {isBankingDetailEnable && (
                <> */}
                  <div className="col-span-12">
                    <Controller
                      name="beneficiaryName"
                      control={control}
                      rules={{
                        required: isBankingDetailEnable
                          ? "This field is required"
                          : false,
                      }}
                      render={({ field }) => {
                        return (
                          <Input
                            color="green"
                            label="Beneficiary Name"
                            disabled={!isBankingDetailEnable}
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
                      condition={errors.beneficiaryName}
                      message={errors.beneficiaryName?.message}
                    />
                  </div>
                  <div className="col-span-12">
                    <Controller
                      name="bankName"
                      control={control}
                      rules={{
                        required: isBankingDetailEnable
                          ? "This field is required"
                          : false,
                      }}
                      render={({ field }) => {
                        return (
                          <Input
                            color="green"
                            label="Bank Name"
                            disabled={!isBankingDetailEnable}
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
                      condition={errors.bankName}
                      message={errors.bankName?.message}
                    />
                  </div>
                  <div className="col-span-12">
                    <Controller
                      name="ifscCode"
                      control={control}
                      rules={{
                        required: isBankingDetailEnable
                          ? "This field is required"
                          : false,
                      }}
                      render={({ field }) => {
                        return (
                          <Input
                            color="green"
                            label="IFSC Code"
                            disabled={!isBankingDetailEnable}
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
                      condition={errors.ifscCode}
                      message={errors.ifscCode?.message}
                    />
                  </div>
                  <div className="col-span-12">
                    <Controller
                      name="accountNumber"
                      control={control}
                      rules={{
                        required: isBankingDetailEnable
                          ? "This field is required"
                          : false,
                      }}
                      render={({ field }) => {
                        return (
                          <Input
                            color="green"
                            label="Account Name"
                            disabled={!isBankingDetailEnable}
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
                      condition={errors.accountNumber}
                      message={errors.accountNumber?.message}
                    />
                  </div>
                {/* </>
              )} */}
              <div className="col-span-12">
                <Select
                  label="GST Registration Type"
                  value={gstinDetailType}
                  onChange={(val) => {
                    setGSTINDetailType(val);
                  }}
                  color="green"
                >
                  {GST_TYPES.map(({ label, value }) => (
                    <Option
                      key={value}
                      value={value}
                      className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                    >
                      {label}
                    </Option>
                  ))}
                </Select>
              </div>
              {gstinDetailType == "regular" && (
                <>
                  <div className="col-span-12">
                    <Controller
                      name="gstin"
                      control={control}
                      rules={{
                        required:
                          gstinDetailType == "regular"
                            ? "This field is required"
                            : false,
                      }}
                      render={({ field }) => {
                        return (
                          <Input
                            color="green"
                            label="Beneficiary Name"
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
                      condition={errors.gstin}
                      message={errors.gstin?.message}
                    />
                  </div>
                  <div className="col-span-12">
                    <Controller
                      name="pan"
                      control={control}
                      render={({ field }) => {
                        return (
                          <Input
                            color="green"
                            label="PAN/IT No."
                            {...field}
                            onChange={(value) => {
                              //   onChange(value);
                              field.onChange(value);
                            }}
                          />
                        );
                      }}
                    />
                  </div>
                </>
              )}
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
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default SundryDebtors;
