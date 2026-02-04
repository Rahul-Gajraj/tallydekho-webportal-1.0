import React, { useState } from "react";
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

import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

import { XMarkIcon } from "@heroicons/react/24/outline";
import OTPInput from "react-otp-input";

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

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const onSubmit = async (data) => {
    console.log(data);
    // handleOpen("tallyPrimeSync");
    // reset();
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
            <Typography>Pairing</Typography>
            <div className="text-center">
              <div className="flex gap-3 justify-center">
                <Typography>1234</Typography>
                <Typography
                  variant="small"
                  className="bg-[#F6F7F8] rounded px-2 flex items-center !text-[#108f6f]"
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
          <Button color="green" onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          <Button color="green" onClick={handleNext} disabled={isLastStep}>
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
        <div className="col-span-12 flex flex-col items-center gap-2">
          <OTPInput
            numInputs={4}
            renderSeparator={<span> </span>}
            renderInput={(props) => (
              <input
                {...props}
                className="!w-[60px] h-[60px] border rounded-[5px] border-[#C4CADA] mr-5"
                //   disabled={!isOtpSend}
              />
            )}
          />
          <Typography variant="small">Enter 4-digit code</Typography>
          <Button color="green" type="submit">
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
              className={`border-b-0 transition-colors text-[16px] ${
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
