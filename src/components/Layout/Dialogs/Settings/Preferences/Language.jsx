import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment-timezone";

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

import Error from "@/components/Error/Error";
import { updatePreference } from "@/store/preferenceSlice";

const defaultValues = {
  language: "english",
  country: "india",
  timezone: "Asia/Kolkata",
  firstDayOfWeek: "monday",
};

const LANGUAGES = [
  { label: "English", value: "english" },
  { label: "Hindi", value: "hindi" },
  { label: "Gujarati", value: "gujarati" },
  { label: "Marathi", value: "marathi" },
  { label: "Bengali", value: "bengali" },
  { label: "Tamil", value: "tamil" },
  { label: "Telgu", value: "telgu" },
  { label: "Kannada", value: "kannada" },
  { label: "Malayalam", value: "malayalam" },
  { label: "Punjabi", value: "punjabi" },
];

const COUNTRIES = [
  { label: "India", value: "india" },
  { label: "United States", value: "united_states" },
  { label: "United Kingdom", value: "united_kingdom" },
  { label: "Canada", value: "canada" },
  { label: "Australia", value: "australia" },
  { label: "Germany", value: "germany" },
  { label: "France", value: "france" },
  { label: "Japan", value: "japan" },
  { label: "China", value: "china" },
  { label: "Brazil", value: "brazil" },
];

const DAYS = [
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thrusday", value: "thrusday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "staurday" },
  { label: "Sunday", value: "sunday" },
];

const generateTimezoneOptions = () => {
  return moment.tz.names().map((zone) => {
    const offset = moment.tz(zone).utcOffset() / 60;
    const label = `UTC${offset >= 0 ? "+" : ""}${offset}:00 - ${zone.replace(
      /_/g,
      " "
    )}`;
    return { value: zone, label };
  });
};

const TIME_ZONES = generateTimezoneOptions();

const Language = ({ open, handleOpen, upsertHandler, initialData }) => {
  const { preference } = useSelector((state) => state.preferences);

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
    defaultValues: preference,
  });

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (initialData) {
  //       reset(initialData);
  //     } else {
  //       reset(defaultValues);
  //     }
  //   }, [initialData]);

  const resetFields = () => {
    clearErrors();
    handleOpen("language");
    // reset();
  };

  const onSubmit = async (data) => {
    dispatch(updatePreference(data));
    resetFields();
  };

  return (
    <>
      <Dialog
        size="md"
        open={open}
        handler={() => {
          resetFields();
          reset();
        }}
        className="p-4"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4">Langauge & Region</Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={() => {
              resetFields();
              reset();
            }}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogBody className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Controller
                name="language"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Language"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {LANGUAGES.map(({ label, value }) => (
                        <Option
                          key={value}
                          value={value}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {label}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.language}
                message={errors.language?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="country"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Country"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {COUNTRIES.map(({ label, value }) => (
                        <Option
                          key={value}
                          value={value}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {label}
                        </Option>
                      ))}
                    </Select>
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
                name="timezone"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="Timezone"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {TIME_ZONES.map((timezone) => (
                        <Option
                          key={timezone.value}
                          value={timezone.value}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {timezone.label}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.timezone}
                message={errors.timezone?.message}
              />
            </div>
            <div className="col-span-12">
              <Controller
                name="firstDayOfWeek"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Select
                      label="First Day of Week"
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      color="green"
                    >
                      {DAYS.map(({ label, value }) => (
                        <Option
                          key={value}
                          value={value}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {label}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error
                condition={errors.firstDayOfWeek}
                message={errors.firstDayOfWeek?.message}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button className="ml-auto" color="green" type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default Language;
