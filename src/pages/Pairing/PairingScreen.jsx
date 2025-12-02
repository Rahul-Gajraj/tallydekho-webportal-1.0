import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import OTPInput from "react-otp-input";

const PairingScreen = ({ isLogged }) => {
  const [pairCode, setPairCode] = useState("");

  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center h-[100vh]">
      <Card
        shadow={false}
        className="md:px-24 md:py-10 py-8 border border-gray-300"
      >
        <CardHeader shadow={false} floated={false} className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:text-4xl"
          >
            Input Your Tally Pair key
          </Typography>
          <Typography className="text-2sm text-[#77819d] mb-1.5">
            Please check your Tally application to see the pair key
          </Typography>
        </CardHeader>
        <CardBody className="md:px-0">
          <OTPInput
            value={pairCode}
            onChange={setPairCode}
            numInputs={4}
            renderSeparator={<span> </span>}
            renderInput={(props) => (
              <input
                {...props}
                className="!w-[35px] h-[35px] border rounded-[5px] border-[#C4CADA] mr-5"
              />
            )}
          />
          <Button
            size="lg"
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
