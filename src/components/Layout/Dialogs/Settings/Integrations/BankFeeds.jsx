import React, { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";

import Error from "@/components/Error/Error";

const ACCOUNTS = [
  {
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    branch: "",
  },
];

const BankCards = ({
  accountNumber,
  ifscCode,
  bankName,
  fields,
  branch,
  control,
  errors,
  remove,
  idx,
  id,
}) => {
  const [number, setNumber] = useState(accountNumber);
  const [code, setCode] = useState(ifscCode);
  const [name, setName] = useState(bankName);
  const [branchName, setBranchName] = useState(branch);

  return (
    <Card shadow={false} className="border">
      <CardBody className="grid grid-cols-11 p-4">
        <div className="col-span-5">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Controller
                name={`accounts.${idx}.accountNumber`}
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => {
                  return (
                    <Input
                      label="Account Number"
                      value={field.value}
                      onChange={(e) => {
                        setNumber(e.target.value);
                        field.onChange(e.target.value);
                      }}
                      color="green"
                    />
                  );
                }}
              />
              <Error
                condition={errors.accounts}
                message={errors?.accounts?.[idx]?.accountNumber?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name={`accounts.${idx}.ifscCode`}
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => {
                  return (
                    <Input
                      label="IFSC Code"
                      value={field.value}
                      onChange={(e) => {
                        setCode(e.target.value);
                        field.onChange(e.target.value);
                      }}
                      color="green"
                    />
                  );
                }}
              />
              <Error
                condition={errors.accounts}
                message={errors?.accounts?.[idx]?.ifscCode?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name={`accounts.${idx}.bankName`}
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => {
                  return (
                    <Input
                      label="Bank Name"
                      value={field.value}
                      onChange={(e) => {
                        setName(e.target.value);
                        field.onChange(e.target.value);
                      }}
                      color="green"
                    />
                  );
                }}
              />
              <Error
                condition={errors.accounts}
                message={errors?.accounts?.[idx]?.bankName?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name={`accounts.${idx}.branch`}
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => {
                  return (
                    <Input
                      label="Branch"
                      value={field.value}
                      onChange={(e) => {
                        setBranchName(e.target.value);
                        field.onChange(e.target.value);
                      }}
                      color="green"
                    />
                  );
                }}
              />
              <Error
                condition={errors.accounts}
                message={errors?.accounts?.[idx]?.branch?.message}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-full w-[1px] bg-[#898989] rounded"></div>
        </div>
        <div className="col-span-5">
          <div className="flex justify-between">
            <Typography>Preview</Typography>
            {fields.length > 1 && (
              <TrashIcon
                onClick={() => remove(idx)}
                className="h-4 w-4 text-red-500 -mt-2 -mr-2 cursor-pointer"
              />
            )}
          </div>
          <div className="flex mt-5">
            <Card shadow={false} className="border w-full">
              <CardBody className=" h-[150px] flex flex-col justify-between p-4 w-full">
                <div className="flex  justify-between">
                  <Typography className="text-[12px]">
                    {name || "Enter Bank Name"}
                  </Typography>
                  <Typography className="text-[12px]">
                    {!number ? "Enter Account Number" : `${number}`}
                  </Typography>
                </div>
                <div className="flex justify-between">
                  <div>
                    <Typography className="text-[12px]">
                      {code || "Enter IFSC Code"}
                    </Typography>
                    <Typography className="text-[12px]">
                      {branchName || "Enter Branch  Name"}
                    </Typography>
                  </div>
                  <Typography className="text-[12px]">CURRENT</Typography>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const BankFeeds = ({ open, handleOpen, upsertHandler, initialData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    reset,
    watch,
    clearErrors,
  } = useForm({
    defaultValues: {
      accounts: ACCOUNTS,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "accounts",
  });

  const resetFields = () => {
    clearErrors();
    handleOpen("bankFeeds");
    reset();
  };

  const onSubmit = async (data) => {
    resetFields();
  };

  return (
    <Dialog
      size="md"
      open={open}
      handler={() => {
        resetFields();
      }}
      className="p-4"
    >
      <DialogHeader className="relative m-0 block">
        <Typography variant="h4">Bank Feeds</Typography>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-3.5 top-3.5"
          onClick={() => {
            resetFields();
          }}
        >
          <XMarkIcon className="h-4 w-4 stroke-2" />
        </IconButton>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogBody className="grid grid-cols-12 gap-4 max-h-[42rem] overflow-scroll pl-2 pr-0">
          <div className="col-span-12">
            {fields.map((item, idx) => (
              <div key={item.id} className={`${idx === 0 ? "mt-0" : "mt-4"}`}>
                <BankCards
                  control={control}
                  fields={fields}
                  remove={remove}
                  {...item}
                  //   key={idx}
                  idx={idx}
                  errors={errors}
                />
              </div>
            ))}
          </div>
          <div className="col-span-12">
            <Button
              className="w-full"
              color="green"
              onClick={() =>
                append({
                  accountNumber: "",
                  ifscCode: "",
                  bankName: "",
                  branch: "",
                })
              }
            >
              Add Bank
            </Button>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" color="green" type="submit">
            Save
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};

export default BankFeeds;
