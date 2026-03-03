import React, { useEffect, useMemo, useRef, useState } from "react";
import { useCountries } from "use-react-countries";

import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import PairingScreen from "../Pairing/PairingScreen";

function Login({ isLogged }) {
  const [showPairingScreen, setShowPairingScreen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [mobileOtp, setMobileOtp] = useState(Array(4).fill(""));
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [mobileTimer, setMobileTimer] = useState(60);

  const inputMobileOtpRefs = useRef([]);
  const intervalMobileRef = useRef(null);

  const { countries } = useCountries();

  const sortedCountries = useMemo(() => {
    if (countries) {
      return countries.sort((a, b) => a?.name?.localeCompare(b?.name)) || [];
    } else {
      return [];
    }
  }, []);

  const [country, setCountry] = useState(
    sortedCountries.findIndex((country) => country.name == "India") || 0
  );
  const { name, flags, countryCallingCode } = sortedCountries[country];

  useEffect(() => {
    if (mobileTimer === 0) return;

    intervalMobileRef.current = setInterval(() => {
      setMobileTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalMobileRef.current);
    };
  }, [mobileTimer]);

  const handleMobileOtpChange = (index, value) => {
    const newOtp = [...mobileOtp];
    newOtp[index] = value.replace(/[^0-9]/g, "");
    setMobileOtp(newOtp);

    if (value && index < inputMobileOtpRefs.current.length - 1) {
      inputMobileOtpRefs.current[index + 1].focus();
    }
  };

  function handleMobileOtpBackspace(event, index) {
    if (event.key === "Backspace" && !event.target.value && index > 0) {
      inputMobileOtpRefs.current[index - 1].focus();
    }
  }

  return (
    <>
      {!showPairingScreen ? (
        <section className="flex items-center justify-center h-[100vh]">
          <div className="container mx-auto grid place-items-center">
            {!isLoggedIn ? (
              <Card
                shadow={false}
                className="md:px-20 md:py-10 py-8 border border-gray-300 w-[600px]"
              >
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="text-center"
                >
                  <Typography
                    variant="h1"
                    className="mb-4 !text-3xl lg:text-4xl"
                  >
                    Login
                  </Typography>
                </CardHeader>
                <CardBody className="md:px-0 grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <Typography variant="small" className="-mb-2">Enter your Whtasapp Number</Typography>
                  </div>
                  <div className="col-span-12">
                    <div className="relative flex w-full">
                      <Menu placement="bottom-start">
                        <MenuHandler>
                          <Button
                            ripple={false}
                            variant="text"
                            className="flex h-10 items-center justify-between rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3 w-[150px] pr-3"
                            disabled={isOtpSend}
                          >
                            <img
                              src={flags.svg}
                              alt={name}
                              className="h-4 w-4 rounded-full object-cover"
                            />
                            {countryCallingCode}
                            <img
                              src="/media/icons/cheron_down.svg"
                              alt="down"
                              className="w-4 h-4"
                            />
                          </Button>
                        </MenuHandler>
                        <MenuList className="max-h-[20rem] max-w-[18rem]">
                          {sortedCountries.map(
                            ({ name, flags, countryCallingCode }, index) => {
                              return (
                                <MenuItem
                                  key={name}
                                  value={name}
                                  className="flex items-center gap-2"
                                  onClick={() => setCountry(index)}
                                >
                                  <img
                                    src={flags.svg}
                                    alt={name}
                                    className="h-5 w-5 rounded-full object-cover"
                                  />
                                  {name}{" "}
                                  <span className="ml-auto">
                                    {countryCallingCode}
                                  </span>
                                </MenuItem>
                              );
                            }
                          )}
                        </MenuList>
                      </Menu>
                      <Input
                        type="tel"
                        // placeholder="Mobile Number"
                        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-[#108f6f]"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        containerProps={{
                          className: "min-w-0",
                        }}
                        color="green"
                        disabled={isOtpSend}
                      />
                      {isOtpSend ? (
                        <Button
                          size="sm"
                          color="green"
                          variant="text"
                          className="!absolute right-1 top-1 rounded normal-case"
                          onClick={() => {
                            inputMobileOtpRefs.current.values = [];
                            setMobileOtp(Array(4).fill(""));
                            setIsOtpSend(false);
                          }}
                        >
                          Edit
                        </Button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  {isOtpSend && (
                    <div className="col-span-12">
                      <Typography className="flex items-center justify-center gap-1 text-[12px]">
                        Enter the 4-digit OTP sent to your mobile number
                      </Typography>
                      <div className="my-2 flex items-center justify-center gap-2">
                        {mobileOtp.map((digit, index) => (
                          <React.Fragment key={index}>
                            <Input
                              type="text"
                              maxLength={1}
                              className="!w-10 appearance-none !border-t-blue-gray-200 text-center !text-lg placeholder:opacity-100 focus:!border-t-[#108f6f]"
                              labelProps={{
                                className:
                                  "before:content-none after:content-none",
                              }}
                              containerProps={{
                                className: "!min-w-0 !w-10 !shrink-0",
                              }}
                              color="green"
                              value={digit}
                              onChange={(e) =>
                                handleMobileOtpChange(index, e.target.value)
                              }
                              onKeyDown={(e) =>
                                handleMobileOtpBackspace(e, index)
                              }
                              inputRef={(el) =>
                                (inputMobileOtpRefs.current[index] = el)
                              }
                            />
                            {/* {index === 2 && (
                                        <span className="text-2xl text-slate-700">-</span>
                                      )} */}
                          </React.Fragment>
                        ))}
                      </div>
                      <Typography className="text-center font-normal text-[12px]">
                        Did not receive the code?{" "}
                        <span
                          className={`font-bold ${
                            mobileTimer == 0
                              ? "cursor-pointer text-[#108f6f]"
                              : ""
                          }`}
                          onClick={() => {
                            if (mobileTimer == 0) {
                              inputMobileOtpRefs.current.values = [];
                              setMobileOtp(Array(4).fill(""));
                              setMobileTimer(60);
                            }
                          }}
                        >
                          Resend {mobileTimer > 0 ? `(${mobileTimer}s)` : ""}
                        </span>
                      </Typography>
                    </div>
                  )}
                  <div className="col-span-12 text-center">
                    {!isOtpSend ? (
                      <Button
                        className="bg-[#07624c] normal-case w-[200px]"
                        onClick={() => {
                          setIsOtpSend(true);
                          setMobileTimer(60);
                        }}
                      >
                        Send OTP
                      </Button>
                    ) : (
                      <Button
                        className="bg-[#07624c] normal-case w-[200px]"
                        onClick={() => {
                          setIsLoggedIn(true);
                        }}
                      >
                        Continue
                      </Button>
                    )}
                  </div>
                </CardBody>
              </Card>
            ) : (
              <Card
                shadow={false}
                className="md:px-24 md:py-10 py-8 border border-gray-300"
              >
                <div className="text-center mb-2">
                  <h3 className="text-2xl font-semibold mb-5">
                    Would you like to sync with Tally?
                  </h3>
                  <div className="flex flex-col">
                    <span className="text-2sm text-[#77819d] mb-1.5">
                      Syncing with Tally ensures accurate, real-time financial
                      data integration,
                    </span>
                    <span className="text-2sm text-[#77819d] mb-1.5">
                      keeping records up-to-date and business operations smooth.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <Button
                    className="bg-[#07624c] normal-case w-[200px]"
                    onClick={() => {
                      // isLogged(true);
                      setShowPairingScreen(true);
                      // navigate("/");
                    }}
                  >
                    Sync with Tally
                  </Button>
                  <Button
                    variant="outlined"
                    className="normal-case w-[200px]"
                    onClick={() => {
                      isLogged(true);
                      // navigate("/");
                    }}
                  >
                    Skip
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </section>
      ) : (
        <PairingScreen isLogged={isLogged} />
      )}
    </>
  );
}

export default Login;
