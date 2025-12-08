import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Checkbox,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Error from "../../../Error/Error";

const defaultValues = {
  warehouse: "",
  product: "",
  qty: "",
  unitPrice: "",
  discount: "",
  isFlat: false,
  tax: "",
};

const AddProductDialog = ({ open, handleOpen, addHandler }) => {
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

  const qtyTypes = ["KG", "liter", "Box"];
  const currencies = ["INR", "USD", "EUR"];

  const [selectedQtyType, setSelectedQtyType] = useState("KG");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  const onSubmit = async (data) => {
    console.log(data);
    addHandler(data);
    handleOpen("product");
    reset();
  };

  return (
    <>
      <Dialog
        size="md"
        open={open}
        handler={() => {
          handleOpen("product");
        }}
        className="p-4"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Add Product
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Fill the form for information
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={() => {
              handleOpen("product");
            }}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form id="sign_in_form" onSubmit={handleSubmit(onSubmit)}>
          <DialogBody className="flex flex-col pb-6">
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
                    size="lg"
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
            <Controller
              name="product"
              control={control}
              rules={{
                required: "This field is required",
              }}
              render={({ field }) => {
                return (
                  <Input
                    color="green"
                    size="lg"
                    containerProps={{ className: "!min-w-full mt-4" }}
                    label="Product Name"
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
              condition={errors.product}
              message={errors.product?.message}
            />
            <div className="mt-4 flex gap-4">
              <div className="relative flex w-full max-w-sm">
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
                          // onClick={() => handleCurrencyChange("from", qty)}
                        >
                          {qty}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              </div>
              <div className="relative flex w-full max-w-sm">
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
                          // onClick={() => handleCurrencyChange("from", currency)}
                        >
                          {currency}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              </div>
            </div>
            <Controller
              name="discount"
              control={control}
              rules={{
                required: "This field is required",
              }}
              render={({ field }) => {
                return (
                  <Input
                    type="number"
                    label="Discount"
                    containerProps={{
                      className: "min-w-0 mt-4",
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
            <Controller
              name="tax"
              control={control}
              rules={{
                required: "This field is required",
              }}
              render={({ field }) => {
                return (
                  <Input
                    type="number"
                    label="Tax"
                    containerProps={{
                      className: "min-w-0 mt-4",
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
          </DialogBody>
          <DialogFooter>
            <Button className="ml-auto" color="green" type="submit">
              Add Product
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default AddProductDialog;
