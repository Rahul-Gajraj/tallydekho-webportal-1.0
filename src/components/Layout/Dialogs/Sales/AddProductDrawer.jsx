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
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Switch,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Error from "@/components/Error/Error";

const defaultValues = {
  warehouse: "",
  product: "",
  qty: "",
  unitPrice: "",
  discount: "0",
  tax: "0",
};

const AddProductDialog = ({ open, handleOpen, upsertHandler, initialData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    clearErrors,
    reset,
    watch,
  } = useForm({
    defaultValues,
  });

  const qtyTypes = ["KG", "liter", "Box"];
  const currencies = ["INR", "USD", "EUR"];

  const [selectedQtyType, setSelectedQtyType] = useState("KG");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  const [isFlatDiscount, setIsFlatDiscount] = useState(false);
  const [isFlatTax, setIsFlatTax] = useState(false);

  const qty = watch("qty");
  const unitPrice = watch("unitPrice");
  const discount = watch("discount");
  const taxAmount = watch("tax");

  useEffect(() => {
    if (initialData) {
      reset(initialData);
      setSelectedQtyType(initialData.qtyType);
      setSelectedCurrency(initialData.currencyType);
      setIsFlatDiscount(initialData.isFlatDiscount);
      setIsFlatTax(initialData.isFlatTax);

    } else {
      setSelectedQtyType("KG");
      setSelectedCurrency("INR");
      reset(defaultValues);
    }
  }, [initialData]);

  const calculateSubtotal = () => {
    const qtyNum = parseFloat(qty) || 0;
    const priceNum = parseFloat(unitPrice) || 0;
    const discountNum = parseFloat(discount) || 0;
    const taxNum = parseFloat(taxAmount) || 0;

    const baseAmount = qtyNum * priceNum;

    // Calculate discount based on discount toggle (flat or percentage)
    let discountAmount = 0;
    if (isFlatDiscount) {
      // Flat amount for discount
      discountAmount = discountNum;
    } else {
      // Percentage for discount - apply on baseAmount
      discountAmount = (discountNum / 100) * baseAmount;
    }

    // Calculate tax based on tax toggle (flat or percentage)
    // Tax is calculated on baseAmount (qty * unitPrice), not on discounted amount
    let taxAmountCalculated = 0;
    if (isFlatTax) {
      // Flat amount for tax
      taxAmountCalculated = taxNum;
    } else {
      // Percentage for tax - apply on baseAmount (matching Summary calculation)
      taxAmountCalculated = (taxNum / 100) * baseAmount;
    }

    // Final subtotal: baseAmount - discount + tax
    const subtotalValue = baseAmount - discountAmount + taxAmountCalculated;

    return `₹${subtotalValue.toFixed(2)}`;
  };

  const resetFields = () => {
    handleOpen("product");
    clearErrors();
    reset();
  };

  const onSubmit = async (data) => {
    upsertHandler({
      ...data,
      qtyType: selectedQtyType,
      currencyType: selectedCurrency,
      isFlatDiscount,
      isFlatTax
    });
    setSelectedQtyType("KG");
    setSelectedCurrency("INR");
    resetFields()
  };

  return (
    <>
      <Dialog size="md" open={open} handler={resetFields} className="p-4">
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
                name="warehouse"
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
                condition={errors.warehouse}
                message={errors.warehouse?.message}
              />
            </div>
            <div className="col-span-12">
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
            </div>
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
            <div className="col-span-12 flex rounded-md ring-1 focus-within:ring-2 ring-inset ring-[#b0bec5] h-[40px] items-center focus-within:ring-[#108f6f]">
              <Controller
                name="discount"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <div className="relative w-full">
                      <label className="text-[12px] absolute -top-2.5 left-3 z-10 bg-white px-1 text-blue-gray-600">
                        Discount
                      </label>
                      <input
                        type="number"
                        {...field}
                        onChange={(value) => {
                          //   onChange(value);
                          field.onChange(value);
                        }}
                        className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-600 sm:text-sm/6 focus:border-0 w-full"
                      />
                    </div>
                  );
                }}
              />
              <div className="flex justify-between items-center gap-4 mr-4">
                <Typography variant="small">%</Typography>
                <Switch
                  color="green"
                  // label="Optional/Regular"
                  checked={isFlatDiscount}
                  onChange={(e) => {
                    const newValue = e.target.checked;
                    setIsFlatDiscount(newValue);
                  }}
                  ripple={true}
                />
                <Typography variant="small">Flat</Typography>
              </div>
            </div>
            <div className="col-span-12 flex rounded-md ring-1 focus-within:ring-2 ring-inset ring-[#b0bec5] h-[40px] items-center focus-within:ring-[#108f6f]">
              <Controller
                name="tax"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <div className="relative w-full">
                      <label className="text-[12px] absolute -top-2.5 left-3 z-10 bg-white px-1 text-blue-gray-600">
                        Tax
                      </label>
                      <input
                        type="number"
                        {...field}
                        onChange={(value) => {
                          //   onChange(value);
                          field.onChange(value);
                        }}
                        className="block flex-1 focus:outline-none bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-600 sm:text-sm/6 focus:border-0 w-full"
                      />
                    </div>
                  );
                }}
              />
              <div className="flex justify-between items-center gap-4 mr-4">
                <Typography variant="small">%</Typography>
                <Switch
                  color="green"
                  // label="Optional/Regular"
                  checked={isFlatTax}
                  onChange={(e) => {
                    const newValue = e.target.checked;
                    setIsFlatTax(newValue);
                  }}
                  ripple={true}
                />
                <Typography variant="small">Flat</Typography>
              </div>
            </div>
            <div className="col-span-12">
              <Input disabled label="Subtotal" value={calculateSubtotal()} />
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

export default AddProductDialog;
