import React, { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { Controller, useForm } from "react-hook-form";

import Error from "@/components/Error/Error";

const defaultValues = {
  productName: "",
  qty: "",
  unitPrice: "",
  notes: "",
};

const qtyTypes = ["KG", "liter", "Box"];
const currencies = ["INR", "USD", "EUR"];

const DispatchItemDialog = ({
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
    clearErrors,
    reset,
  } = useForm({
    defaultValues,
  });

  const [selectedQtyType, setSelectedQtyType] = useState("KG");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  useEffect(() => {
    if (initialData) {
      reset(initialData);
      setSelectedQtyType(initialData.qtyType);
      setSelectedCurrency(initialData.currencyType);
    } else {
      setSelectedQtyType("KG");
      setSelectedCurrency("INR");
      reset(defaultValues);
    }
  }, [initialData]);

  const resetFields = () => {
    handleOpen();
    clearErrors();
    reset();
  };

  const onSubmit = async (data) => {
    upsertHandler({
      ...data,
      qtyType: selectedQtyType,
      currencyType: selectedCurrency,
    });
    setSelectedQtyType("KG");
    setSelectedCurrency("INR");
    resetFields();
  };

  return (
    <>
      <Dialog size="md" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4">Add Product</Typography>
          <Typography className="mt-1 font-normal">
            Fill the form for information
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={resetFields}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form id="sign_in_form" onSubmit={handleSubmit(onSubmit)}>
          <DialogBody className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Controller
                name="productName"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
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
                condition={errors.productName}
                message={errors.productName?.message}
              />
            </div>
            <div className="col-span-6">
              <div className="flex relative col-span-6">
                <Controller
                  name="qty"
                  control={control}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        type="number"
                        className="appearance-none rounded-r-none  placeholder:text-blue-gray-300  placeholder:opacity-100  [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        inputMode="numeric"
                        label="QTY. & Unit"
                        containerProps={{
                          className: "min-w-0",
                        }}
                        color="green"
                        {...field}
                        onChange={(value) => {
                          //   onChange(value);
                          field.onChange(value);
                        }}
                      />
                    );
                  }}
                />
                <Menu placement="bottom-start">
                  <MenuHandler>
                    <Button
                      ripple={false}
                      variant="outlined"
                      className="h-10 w-14 shrink-0 rounded-l-none border border-l-0 border-blue-gray-200 bg-transparent px-3"
                    >
                      {selectedQtyType}
                    </Button>
                  </MenuHandler>
                  <MenuList className="max-h-[20rem] max-w-[18rem] z-[9999]">
                    {qtyTypes.map((qty, index) => {
                      return (
                        <MenuItem
                          key={qty}
                          value={qty}
                          onClick={() => setSelectedQtyType(qty)}
                        >
                          {qty}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              </div>
              <Error condition={errors.qty} message={errors.qty?.message} />
            </div>
            <div className="col-span-6">
              <div className="flex relative col-span-6">
                <Controller
                  name="unitPrice"
                  control={control}
                  rules={{
                    required: "This field is required", 
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        type="number"
                        className="appearance-none rounded-r-none placeholder:text-blue-gray-300  placeholder:opacity-100 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        inputMode="numeric"
                        label="Unit Price"
                        containerProps={{
                          className: "min-w-0",
                        }}
                        color="green"
                        {...field}
                        onChange={(value) => {
                          //   onChange(value);
                          field.onChange(value);
                        }}
                      />
                    );
                  }}
                />
                <Menu placement="bottom-start">
                  <MenuHandler>
                    <Button
                      ripple={false}
                      variant="outlined"
                      className="h-10 w-14 shrink-0 rounded-l-none border border-l-0 border-blue-gray-200 bg-transparent px-3"
                      //   color="green"
                    >
                      {selectedCurrency}
                    </Button>
                  </MenuHandler>
                  <MenuList className="max-h-[20rem] max-w-[18rem] z-[9999]">
                    {currencies.map((currency, index) => {
                      return (
                        <MenuItem
                          key={currency}
                          value={currency}
                          onClick={() => setSelectedCurrency(currency)}
                        >
                          {currency}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              </div>
              <Error
                condition={errors.unitPrice}
                message={errors.unitPrice?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="notes"
                control={control}
                render={({ field }) => {
                  return (
                    <Textarea
                      color="green"
                      label="Narration/Notes"
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
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              className="ml-auto"
              color="green"
              type="submit"
            >
              {initialData ? "Update" : "Add"}
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default DispatchItemDialog;
