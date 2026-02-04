import React, { useEffect, useRef, useState } from "react";
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
  Switch,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import OTPInput from "react-otp-input";

import Error from "../../../../Error/Error";
import toast from "react-hot-toast";

const defaultValues = {
  fullName: "",
  phoneNumber: "",
  mobileOtp: "",
  email: "",
  emailOtp: "",
};

const Profile = ({ open, handleOpen, upsertHandler, initialData }) => {
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

  const [isMobileOtpSend, setIsMobileOtpSend] = useState(false);
  const [isEmailOtpSend, setIsEmailOtpSend] = useState(false);

  const [mobileOtp, setMobileOtp] = useState(Array(4).fill(""));
  const [emailOtp, setEmailOtp] = useState(Array(4).fill(""));

  const [mobileTimer, setMobileTimer] = useState(60);
  const [emailTimer, setEmailTimer] = useState(60);

  const inputMobileOtpRefs = useRef([]);
  const inputEmailOtpRefs = useRef([]);
  const intervalMobileRef = useRef(null);
  const intervalEmaileRef = useRef(null);

  useEffect(() => {
    if (mobileTimer === 0) return;

    intervalMobileRef.current = setInterval(() => {
      setMobileTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalMobileRef.current);
    };
  }, [mobileTimer]);

  useEffect(() => {
    if (emailTimer === 0) return;

    intervalEmaileRef.current = setInterval(() => {
      setEmailTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalEmaileRef.current);
    };
  }, [emailTimer]);

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset(defaultValues);
    }
  }, [initialData]);

  const handleMobileOtpChange = (index, value) => {
    const newOtp = [...mobileOtp];
    newOtp[index] = value.replace(/[^0-9]/g, "");
    // console.log(Number(newOtp[index]));
    // console.log(typeof newOtp[index]);
    setMobileOtp(newOtp);

    if (value && index < inputMobileOtpRefs.current.length - 1) {
      inputMobileOtpRefs.current[index + 1].focus();
    }
  };

  function handleMobileOtpBackspace(event, index) {
    if (event.key === "Backspace" && !event.target.value && index > 0) {
      // console.log(inputMobileOtpRefs.current[index - 1]);
      inputMobileOtpRefs.current[index - 1].focus();
    }
  }

  const handleEmailOtpChange = (index, value) => {
    const newOtp = [...emailOtp];
    newOtp[index] = value.replace(/[^0-9]/g, "");
    // console.log(Number(newOtp[index]));
    // console.log(typeof newOtp[index]);
    setEmailOtp(newOtp);

    if (value && index < inputEmailOtpRefs.current.length - 1) {
      inputEmailOtpRefs.current[index + 1].focus();
    }
  };

  function handleEmaileOtpBackspace(event, index) {
    if (event.key === "Backspace" && !event.target.value && index > 0) {
      // console.log(inputEmailOtpRefs.current[index - 1]);
      inputEmailOtpRefs.current[index - 1].focus();
    }
  }

  const resetFields = () => {
    setIsMobileOtpSend();
    setIsEmailOtpSend();
    setMobileOtp(Array(4).fill(""));
    setEmailOtp(Array(4).fill(""));
    setMobileTimer();
    setEmailTimer();
    inputMobileOtpRefs.current = [];
    inputEmailOtpRefs.current = [];
    intervalMobileRef.current = [];
    intervalEmaileRef.current = [];
    handleOpen("profile");
    reset();
  };

  const onSubmit = async (data) => {
    let isOtpFieldFilled = true;

    mobileOtp.forEach((otp) => {
      if(otp.length == 0) {
        isOtpFieldFilled = false;
      }
    })

    emailOtp.forEach((otp) => {
      if (otp.length == 0) {
        isOtpFieldFilled = false;
      }
    });

    if(!isOtpFieldFilled) {
      console.log('All fields are required');
      return;
    }

    console.log(data);
    resetFields();
  };

  return (
    <>
      <Dialog size="sm" open={open} handler={resetFields} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4">Profile</Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={resetFields}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogBody className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Controller
                name="fullName"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return <Input color="green" label="Full Name" {...field} />;
                }}
              />
              <Error
                condition={errors.fullName}
                message={errors.fullName?.message}
              />
            </div>

            <div className="col-span-12">
              <Typography className="text-[12px]">Phone Number</Typography>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <div className="relative flex w-full">
                      <Button
                        ripple={false}
                        variant="text"
                        color="blue-gray"
                        className="h-10 w-14 shrink-0 rounded-r-none border border-r-0 border-blue-gray-200 bg-transparent px-3"
                        disabled
                      >
                        +91
                      </Button>
                      <Input
                        color="green"
                        // label="Phone Number"
                        pattern="[0-9]*"
                        type="tel"
                        inputMode="numeric"
                        maxLength={12}
                        {...field}
                        onChange={(value) => {
                          //   onChange(value);
                          field.onChange(value);
                        }}
                        disabled={isMobileOtpSend}
                        className="appearance-none rounded-l-none !border-t-[#B0BEC5] placeholder:opacity-100 focus:!border-t-[#108f6f] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        containerProps={{
                          className: "min-w-0",
                        }}
                      />
                      {isMobileOtpSend ? (
                        <Button
                          size="sm"
                          color="green"
                          variant="text"
                          className="!absolute right-1 top-1 rounded normal-case"
                          onClick={() => {
                            inputMobileOtpRefs.current.values = [];
                            setMobileOtp(Array(4).fill(""));
                            setIsMobileOtpSend(false);
                          }}
                        >
                          Edit
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          color={
                            field.value.length == 10 ? "green" : "blue-gray"
                          }
                          variant="text"
                          disabled={field.value.length != 10}
                          className="!absolute right-1 top-1 rounded normal-case"
                          onClick={() => {
                            setIsMobileOtpSend(true);
                            setMobileTimer(60);
                          }}
                        >
                          Send OTP
                        </Button>
                      )}
                    </div>
                  );
                }}
              />
              <Error
                condition={errors.phoneNumber}
                message={errors.phoneNumber?.message}
              />
            </div>

            {isMobileOtpSend && (
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
                          className: "before:content-none after:content-none",
                        }}
                        containerProps={{
                          className: "!min-w-0 !w-10 !shrink-0",
                        }}
                        color="green"
                        value={digit}
                        onChange={(e) =>
                          handleMobileOtpChange(index, e.target.value)
                        }
                        onKeyDown={(e) => handleMobileOtpBackspace(e, index)}
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
                      mobileTimer == 0 ? "cursor-pointer text-[#108f6f]" : ""
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

            {/* <div className="col-span-12">
              <Controller
                name="mobileOtp"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <OTPInput
                      //   value={otp}
                      //   onChange={setOtp}
                      {...field}
                      numInputs={4}
                      renderSeparator={<span> </span>}
                      renderInput={(props) => (
                        <input
                          {...props}
                          className="!w-[35px] h-[35px] border rounded-[5px] border-[#C4CADA] mr-5"
                          //   disabled={!isOtpSend}
                        />
                      )}
                    />
                  );
                }}
              />
              <Typography className="text-[12px]">
                Enter otp send to your mobile number
              </Typography>
            </div> */}

            {/* <div className="col-span-12 mt-2">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <Input
                      color="green"
                      label="Email"
                      {...field}
                      onChange={(value) => {
                        //   onChange(value);
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
              <Error condition={errors.email} message={errors.email?.message} />
            </div> */}

            {/* <div className="col-span-12">
              <Controller
                name="emailOtp"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <OTPInput
                      //   value={otp}
                      //   onChange={setOtp}
                      {...field}
                      numInputs={4}
                      renderSeparator={<span> </span>}
                      renderInput={(props) => (
                        <input
                          {...props}
                          className="!w-[35px] h-[35px] border rounded-[5px] border-[#C4CADA] mr-5"
                          //   disabled={!isOtpSend}
                        />
                      )}
                    />
                  );
                }}
              />
              <Typography className="text-[12px]">
                Enter otp send to your email address
              </Typography>
            </div> */}

            <div className="col-span-12">
              <Typography className="text-[12px]">Email</Typography>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field }) => {
                  return (
                    <div className="relative flex w-full">
                      <Input
                        color="green"
                        // label="Phone Number"
                        // pattern="[0-9]*"
                        // type="tel"
                        // inputMode="numeric"
                        maxLength={12}
                        {...field}
                        onChange={(value) => {
                          //   onChange(value);
                          field.onChange(value);
                        }}
                        disabled={isEmailOtpSend}
                        className="appearance-none !border-t-[#B0BEC5] placeholder:opacity-100 focus:!border-t-[#108f6f] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        containerProps={{
                          className: "min-w-0",
                        }}
                      />
                      {isEmailOtpSend ? (
                        <Button
                          size="sm"
                          color="green"
                          variant="text"
                          className="!absolute right-1 top-1 rounded normal-case"
                          onClick={() => {
                            inputEmailOtpRefs.current.values = [];
                            setEmailOtp(Array(4).fill(""));
                            setIsEmailOtpSend(false);
                          }}
                        >
                          Edit
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          color={field.value.length > 0 ? "green" : "blue-gray"}
                          variant="text"
                          disabled={field.value.length == 0}
                          className="!absolute right-1 top-1 rounded normal-case"
                          onClick={() => {
                            setIsEmailOtpSend(true);
                            setEmailTimer(60);
                          }}
                        >
                          Send OTP
                        </Button>
                      )}
                    </div>
                  );
                }}
              />
              <Error condition={errors.email} message={errors.email?.message} />
            </div>

            {isEmailOtpSend && (
              <div className="col-span-12">
                <Typography className="flex items-center justify-center gap-1 text-[12px]">
                  Enter the 4-digit OTP sent to your email id
                </Typography>
                <div className="my-2 flex items-center justify-center gap-2">
                  {emailOtp.map((digit, index) => (
                    <React.Fragment key={index}>
                      <Input
                        type="text"
                        maxLength={1}
                        className="!w-10 appearance-none !border-t-blue-gray-200 text-center !text-lg placeholder:opacity-100 focus:!border-t-[#108f6f]"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        containerProps={{
                          className: "!min-w-0 !w-10 !shrink-0",
                        }}
                        color="green"
                        value={digit}
                        onChange={(e) =>
                          handleEmailOtpChange(index, e.target.value)
                        }
                        onKeyDown={(e) => handleEmaileOtpBackspace(e, index)}
                        inputRef={(el) =>
                          (inputEmailOtpRefs.current[index] = el)
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
                      emailTimer == 0 ? "cursor-pointer text-[#108f6f]" : ""
                    }`}
                    onClick={() => {
                      if (emailTimer == 0) {
                        inputEmailOtpRefs.current.values = [];
                        setEmailOtp(Array(4).fill(""));
                        setEmailTimer(60);
                      }
                    }}
                  >
                    Resend {emailTimer > 0 ? `(${emailTimer}s)` : ""}
                  </span>
                </Typography>
              </div>
            )}
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

export default Profile;
