import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import OTPInput from "react-otp-input";

const PairingScreen = ({ isLogged }) => {
  const [pairCode, setPairCode] = useState(Array(4).fill(""));

  const inputPairCodeRefs = useRef([]);
  const navigate = useNavigate();

  const handlePairCodeChange = (index, value) => {
    const newPairCode = [...pairCode];
    newPairCode[index] = value.replace(/[^0-9]/g, "");
    setPairCode(newPairCode);

    if (value && index < inputPairCodeRefs.current.length - 1) {
      inputPairCodeRefs.current[index + 1].focus();
    }
  };

  function handlePairCodeBackspace(event, index) {
    if (event.key === "Backspace" && !event.target.value && index > 0) {
      inputPairCodeRefs.current[index - 1].focus();
    }
  }

  return (
    <section className="flex items-center justify-center h-[100vh]">
      <Card
        shadow={false}
        className="md:px-24 md:py-10 py-8 border border-gray-300"
      >
        <CardHeader shadow={false} floated={false} className="text-center">
          <Typography variant="h1" className="mb-4 !text-3xl lg:text-4xl">
            Input Your Tally Pair key
          </Typography>
          <Typography className="text-2sm text-[#77819d] mb-1.5">
            Please check your Tally application to see the pair key
          </Typography>
        </CardHeader>
        <CardBody className="md:px-0">
          <div className="flex justify-center gap-5">
          {pairCode.map((digit, index) => (
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
                onChange={(e) => handlePairCodeChange(index, e.target.value)}
                onKeyDown={(e) => handlePairCodeBackspace(e, index)}
                inputRef={(el) => (inputPairCodeRefs.current[index] = el)}
              />
              {/* {index === 2 && (
                                                  <span className="text-2xl text-slate-700">-</span>
                                                )} */}
            </React.Fragment>
          ))}
          </div>
          <Button
            className="bg-[#07624c] normal-case mt-5"
            fullWidth
            disabled={pairCode.length < 4}
            onClick={() => {
              isLogged(true);
              // navigate("/");
            }}
          >
            Submit
          </Button>
        </CardBody>
      </Card>
    </section>
  );
};

export default PairingScreen;
