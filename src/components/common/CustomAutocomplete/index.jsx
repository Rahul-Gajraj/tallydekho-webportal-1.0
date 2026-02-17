import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  Input,
  Card,
  List,
  ListItem,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { Controller } from "react-hook-form";

const CustomAutocomplete = ({
  name,
  control,
  rules = {},
  setValue,
  getValues,
  options = [],
  value,
  label = "Select Option",
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");
  const [selected, setSelected] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!containerRef.current?.contains(e.target)) {
        if (!selected) {
        // setInputValue("");
        // setValue(name, "");
        }
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selected, name, setValue]);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => {
        const filteredOptions = inputValue
          ? options.filter((opt) =>
              opt.toLowerCase().includes(inputValue.toLowerCase())
            )
          : options;

        return (
          <div ref={containerRef} className="relative w-full">
            <Input
              label={label}
              value={inputValue}
              color="green"
              onFocus={() => {
                setOpen(true);
                setInputValue(field.value || "");
                setSelected(false);
              }}
              onChange={(e) => {
                setInputValue(e.target.value);
                setSelected(false);
              }}
            />

            {field.value && (
              <IconButton
                size="sm"
                variant="text"
                className="!absolute right-2 top-2 text-blue-gray-400"
                onClick={() => {
                  setInputValue("");
                  setValue(name, "");
                  setSelected(false);
                }}
              >
                <XMarkIcon className="h-4 w-4" />
              </IconButton>
            )}

            {open && (
              <Card className="absolute z-50 mt-1 w-full max-h-60 overflow-auto">
                <List>
                  {filteredOptions.length ? (
                    filteredOptions.map((item) => (
                      <ListItem
                        key={item}
                        onClick={() => {
                          setValue(name, item, { shouldDirty: true });
                          setInputValue(item);
                          setSelected(true);
                          setOpen(false);
                        }}
                      >
                        {item}
                      </ListItem>
                    ))
                  ) : (
                    <ListItem disabled>No results</ListItem>
                  )}
                </List>
              </Card>
            )}
          </div>
        );
      }}
    />
  );
};

export default CustomAutocomplete;
