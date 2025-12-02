import React, { useEffect, useRef, useState } from "react";

import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";
// import PhoneInput from "react-phone-input-2";
import OTPInput from "react-otp-input";
import toast from "react-hot-toast";
import PairingScreen from "../Pairing/PairingScreen";
import PhoneInput from "react-phone-number-input";

function CustomInput({ value, onChange, country, ...rest }) {
  const code = country ? `+${getCountryCallingCode(country)}` : "";

  // Remove country code from value
  const numberOnly = value?.replace(code, "") || "";

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Non-editable prefix */}
      {/* <div
        style={{
          padding: "8px 10px",
          border: "1px solid #ccc",
          borderRight: "none",
          background: "#f4f4f4",
          borderRadius: "6px 0 0 6px",
          fontWeight: "bold",
          minWidth: "60px",
        }}
      >
        {code}
      </div> */}

      {/* Editable Input */}
      <input
        {...rest}
        value={numberOnly}
        onChange={(e) => onChange(code + e.target.value)}
        className="focus:!border-none active:!border-none bg-transparent"
        // autoFocus={false}
        // onFocus={(e) => e.target.blur()}
      />
    </div>
  );
}

function Login({ isLogged }) {
  const [showPairingScreen, setShowPairingScreen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isOtpSend, setIsOtpSend] = useState(false);
  const [mobile, setMobile] = useState("");
  const [phone, setPhone] = useState();
  const [otp, setOtp] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      // Remove default focus
      inputRef.current.blur();
    }
  }, []);

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
                    color="black"
                    className="mb-4 !text-3xl lg:text-4xl"
                  >
                    Login
                  </Typography>
                </CardHeader>
                <CardBody className="md:px-0">
                  <form action="#" className="flex flex-col">
                    <div className="flex flex-col gap-2 w-full mb-7">
                      <label htmlFor="mobile">
                        <Typography
                          variant="small"
                          color="black"
                          className="block font-medium"
                        >
                          Your Phone Number
                        </Typography>
                      </label>
                      {/* <PhoneInput
                        country="in"
                        // {...field}
                        // inputProps={{
                        //   ref: (e) => {
                        //     field.ref(e);
                        //   },
                        // }}
                        // ref={(e) => {
                        //   e && setValue("phoneNumberCountry", e.getCountryData());
                        // }}
                        onChange={(value, country) => {
                          setMobile(value);
                          if (value.length != 12) {
                            setIsOtpSend(false);
                            setOtp("");
                          }
                          // else {
                          //   setIsOtpSend(false);
                          // }
                          // setValue("phoneNumberCountry", country);
                          // field.onChange(value);
                        }}
                        inputStyle={{
                          width: "100%",
                          border: "1px solid #DBDFE9",
                          borderRadius: "5px",
                          height: "2.5rem",
                          backgroundColor: isOtpSend
                            ? "#e9e9eb"
                            : "transparent",
                        }}
                        defaultMask="... ... ... .."
                        enableSearch={false}
                        disabled={isOtpSend}
                        // disableCountryCode={true}
                        countryCodeEditable={false}
                      /> */}
                      <div>
                        <PhoneInput
                          // country="IN"
                          defaultCountry="IN"
                          international
                          placeholder="Enter phone number"
                          value={phone}
                          onChange={setPhone}
                          countryCallingCodeEditable={false}
                          inputRef={inputRef}
                          style={{
                            border: "1px solid #E2E2E2",
                            height: "40px",
                          }}
                          className="rounded-lg"
                          disabled={isOtpSend}
                          // inputComponent={CustomInput}
                        />
                      </div>
                    </div>
                    {isOtpSend && (
                      <div className="flex flex-col gap-2">
                        <Typography
                          variant="small"
                          color="black"
                          className="font-medium"
                        >
                          We have sent OTP on your mobile number
                          {/* +{mobile.slice(0, 2)} {mobile.slice(2, 5)}***
                          {mobile.slice(8)} */}
                        </Typography>
                        <OTPInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={4}
                          renderSeparator={<span> </span>}
                          renderInput={(props) => (
                            <input
                              {...props}
                              className="!w-[35px] h-[35px] border rounded-[5px] border-[#C4CADA] mr-5"
                              disabled={!isOtpSend}
                            />
                          )}
                        />
                        <Typography
                          variant="small"
                          color="black"
                          className="text-[12px] underline cursor-pointer"
                          onClick={() => setOtp("")}
                        >
                          Resend OTP
                        </Typography>
                      </div>
                    )}
                    {!isOtpSend ? (
                      <Button
                        size="lg"
                        className="bg-[#07624c] normal-case h-[2.5rem] py-2 mt-5"
                        fullWidth
                        disabled={phone ? phone.length != 13 : true}
                        onClick={() => {
                          setIsOtpSend(true);
                          // if (otp.length == 4) {
                          // } else {
                          //   toast.error("Enter valid otp");
                          // }
                        }}
                      >
                        Send Otp
                      </Button>
                    ) : (
                      <Button
                        size="lg"
                        className="bg-[#07624c] normal-case h-[2.5rem] py-2 mt-7"
                        fullWidth
                        onClick={() => {
                          if (otp.length == 4) {
                            setIsLoggedIn(true);
                          } else {
                            toast.error("Enter valid otp");
                          }
                        }}
                      >
                        Login
                      </Button>
                    )}
                  </form>
                </CardBody>
              </Card>
            ) : (
              <Card
                shadow={false}
                className="md:px-24 md:py-10 py-8 border border-gray-300"
              >
                <div className="text-center mb-2">
                  <h3 className="text-2xl font-semibold text-black mb-5">
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
                    size="lg"
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
                    size="lg"
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
