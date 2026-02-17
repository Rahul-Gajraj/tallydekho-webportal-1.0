import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Step,
  Stepper,
  Typography,
  Button,
  Input,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { XMarkIcon } from "@heroicons/react/24/outline";

const defaultValues = {
  fullName: "",
  phoneNumber: "",
  mobileOtp: "",
  email: "",
  emailOtp: "",
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const MOBILE_OTP = ["1", "2", "3", "4"];

const TallyPrimeSync = ({ open, handleOpen, upsertHandler, initialData }) => {
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

  //   const [activeStep, setActiveStep] = useState(0);

  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [mobileOtp, setMobileOtp] = useState(Array(4).fill(""));

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const inputMobileOtpRefs = useRef([]);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

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

  const onSubmit = async (data) => {
    handleOpen("tallyPrimeSync");
    reset();
  };

  return (
    <Dialog
      size="md"
      open={open}
      handler={() => {
        handleOpen("tallyPrimeSync");
      }}
      className="p-4"
    >
      <DialogHeader className="relative m-0 block">
        <Typography variant="h4">Tally Prime Sync</Typography>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-3.5 top-3.5"
          onClick={() => {
            handleOpen("tallyPrimeSync");
          }}
        >
          <XMarkIcon className="h-4 w-4 stroke-2" />
        </IconButton>
      </DialogHeader>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <DialogBody className="grid grid-cols-12 gap-4 max-h-[42rem] overflow-scroll">
          <div className="w-full col-span-12">
            <Stepper>
              <Step>
                <div className="absolute -bottom-[4.5rem] w-max text-center">
                  <Typography>Step 1</Typography>
                  <div className="items-center">
                    <Typography>Tally</Typography>
                    <Typography>
                      Download TallyDekho Agent from
                      https://www.tallydekho.com/download
                    </Typography>
                  </div>
                </div>
              </Step>
              <Step>
                <div className="absolute -bottom-[4.5rem] w-max text-center">
                  <Typography>Step 2</Typography>

                  <div className="items-center">
                    <Typography>Pairing</Typography>
                    <Typography>
                      Enter this code in the mobile app {`->`} Settings {`->`}{" "}
                      Account Pairing
                    </Typography>
                  </div>
                </div>
              </Step>
            </Stepper>
          </div>
          <div className="col-span-12">
            <Typography>Pairing Device</Typography>
          </div>
        </DialogBody>
      </form> */}
      <DialogBody className="space-y-8 max-h-[42rem] overflow-y-scroll overflow-x-hidden">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step
            className="h-4 w-4"
            activeClassName="!bg-[#108f6f]"
            completedClassName="!bg-[#108f6f]"
            onClick={() => setActiveStep(0)}
          >
            <div className="absolute -bottom-7 w-max text-center">
              <Typography color={activeStep === 0 ? "blue-gray" : "gray"}>
                Step 1
              </Typography>
            </div>
          </Step>

          <Step
            className="h-4 w-4"
            activeClassName="!bg-[#108f6f]"
            onClick={() => setActiveStep(1)}
          >
            <div className="absolute -bottom-7 w-max text-center">
              <Typography color={activeStep === 1 ? "blue-gray" : "gray"}>
                Step 2
              </Typography>
            </div>
          </Step>
        </Stepper>
        {activeStep === 0 && (
          <div className="text-center">
            <Typography>Tally</Typography>
            <Typography>Download TallyDekho Agent from</Typography>
            <Typography>https://www.tallydekho.com/download</Typography>
          </div>
        )}

        {activeStep === 1 && (
          <div className="space-y-4">
            <Typography className="text-center">Pairing</Typography>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                {MOBILE_OTP.map((digit, index) => (
                  <React.Fragment key={index}>
                    <Input
                      type="password"
                      maxLength={1}
                      disabled
                      className="!w-10 appearance-none text-center !text-3xl !bg-transparent"
                      containerProps={{
                        className: "!min-w-0 !w-5 !shrink-0",
                      }}
                      color="green"
                      value={digit}
                    />
                  </React.Fragment>
                ))}
                <Typography
                  variant="small"
                  className="bg-[#F6F7F8] rounded px-2 py-1 rounded-lg flex items-center !text-[#108f6f] ml-5"
                >
                  Reveal Code
                </Typography>
              </div>
              <Typography>
                Enter this code in the mobile app {`->`} Settings {`->`} Account
                Pairing
              </Typography>
            </div>
          </div>
        )}
        <div className="mt-32 flex justify-between">
          <Button
            size="sm"
            color="green"
            onClick={handlePrev}
            disabled={isFirstStep}
          >
            Prev
          </Button>
          <Button
            size="sm"
            color="green"
            onClick={handleNext}
            disabled={isLastStep}
          >
            Next
          </Button>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 flex gap-3 items-center">
            <Typography className="w-[110px]" variant="h6">
              Pair Device
            </Typography>
            <div className="h-[1px] bg-[#B0BEC5] w-full"></div>
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-center gap-2">
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
                onChange={(e) => handleMobileOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleMobileOtpBackspace(e, index)}
                inputRef={(el) => (inputMobileOtpRefs.current[index] = el)}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="col-span-12 text-center !mt-2">
          <Typography variant="small">Enter 4-digit code</Typography>
          <Button color="green" type="submit" className="mt-1" size="sm">
            Pair Now
          </Button>
        </div>
        <div className="col-span-12">
          <Accordion
            open={isAccordionOpen}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
            icon={<Icon id={true} open={isAccordionOpen} />}
          >
            <AccordionHeader
              onClick={() => setIsAccordionOpen((prev) => !prev)}
              className={`border-b-0 transition-colors text-[15px] ${
                isAccordionOpen ? "text-green-500 hover:!text-green-700" : ""
              } font-normal`}
            >
              Where do I find the code?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <ol>
                <li>
                  <Typography>
                    1. On the desktop where Tally is installed, open your web
                    browser and visit{" "}
                    <a
                      className="underline text-green-600"
                      target="_blank"
                      href="https://www.tallydekho.com"
                    >
                      www.tallydekho.com
                    </a>
                  </Typography>
                </li>
                <li>2. Download the TallyDekho Desktop Application.</li>
                <li>
                  3. Run the setup file and complete the installation process.
                </li>
                <li>4. Open the application anf sync with the company.</li>
                <li>
                  5. Once the company is successfully synced, a 4-digit code
                  will be displayed in the TallyDekho Desktop Application
                </li>
              </ol>
            </AccordionBody>
          </Accordion>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default TallyPrimeSync;
