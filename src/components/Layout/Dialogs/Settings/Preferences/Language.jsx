import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

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

import Error from "../../../../Error/Error";

const defaultValues = {
  language: "",
  country: "",
  timezone: "",
  day: "",
};

const LANGUAGES = [
  "English",
  "Hindi",
  "Gujarati",
  "Marathi",
  "Bengali",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Punjabi",
];

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germmany",
  "France",
  "Japan",
  "China",
  "Brazil",
];

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
  "Sunday",
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
    handleOpen("language");
    reset();
  };

  return (
    <>
      <Dialog
        size="md"
        open={open}
        handler={() => {
          handleOpen("language");
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
              handleOpen("language");
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
                      {LANGUAGES.map((language) => (
                        <Option
                          key={language}
                          value={language}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {language}
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
                      {COUNTRIES.map((country) => (
                        <Option
                          key={country}
                          value={country}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {country}
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
                name="day"
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
                      {DAYS.map((day) => (
                        <Option
                          key={day}
                          value={day}
                          className="hover:!bg-[#EAF8F4] focus:!bg-[#EAF8F4] data-[selected=true]:bg-[#EAF8F4] data-[selected=true]:!text-[#108F6F]"
                        >
                          {day}
                        </Option>
                      ))}
                    </Select>
                  );
                }}
              />
              <Error condition={errors.day} message={errors.day?.message} />
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

export default Language;
