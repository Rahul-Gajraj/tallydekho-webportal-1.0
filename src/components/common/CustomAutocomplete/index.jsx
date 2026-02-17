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
        const safeOptions = Array.isArray(options) ? options : [];

        const filteredOptions = inputValue
          ? safeOptions.filter((opt) => {
              if (!opt) return false;
              try {
                const optStr = String(opt).toLowerCase();
                const inputStr = String(inputValue).toLowerCase();
                return optStr.includes(inputStr);
              } catch (error) {
                console.error("Error filtering option:", error);
                return false;
              }
            })
          : safeOptions;

        return (
          <div ref={containerRef} className="relative w-full">
            <Input
              label={label}
              value={inputValue || ""}
              color="green"
              onFocus={() => {
                setOpen(true);
                setInputValue(field.value || "");
                setSelected(false);
              }}
              onChange={(e) => {
                try {
                  setInputValue(e.target.value || "");
                  setSelected(false);
                } catch (error) {
                  console.error("Error updating input value:", error);
                }
              }}
            />

            {field.value && (
              <IconButton
                size="sm"
                variant="text"
                className="!absolute right-2 top-1 text-blue-gray-400"
                onClick={() => {
                  try {
                    setInputValue("");
                    if (setValue) {
                      setValue(name, "", { shouldDirty: true });
                    }
                    setSelected(false);
                  } catch (error) {
                    console.error("Error clearing value:", error);
                  }
                }}
              >
                <XMarkIcon className="h-4 w-4" />
              </IconButton>
            )}

            {open && (
              <Card className="absolute z-50 mt-1 w-full max-h-60 overflow-auto">
                <List>
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((item, index) => {
                      const itemKey =
                        item && typeof item === "string"
                          ? item
                          : `option-${index}`;
                      return (
                        <ListItem
                          key={itemKey}
                          onClick={() => {
                            try {
                              if (setValue) {
                                setValue(name, item, { shouldDirty: true });
                              }
                              setInputValue(String(item || ""));
                              setSelected(true);
                              setOpen(false);
                            } catch (error) {
                              console.error("Error selecting option:", error);
                            }
                          }}
                        >
                          {String(item || "")}
                        </ListItem>
                      );
                    })
                  ) : (
                    <ListItem disabled>No results found</ListItem>
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
