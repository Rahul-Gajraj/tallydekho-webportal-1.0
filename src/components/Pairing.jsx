import React from "react";

import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

function Login() {
  return (
    <section className="px-8">
      <div className="container mx-auto h-screen grid place-items-center">
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
              One-Click Web3 Access
            </Typography>
            <Typography className="!text-gray-600 text-[18px] font-normal md:max-w-md">
              Access your Web3 accounts with just one click using our convenient
              login card.
            </Typography>
          </CardHeader>
          <CardBody className="md:px-0">
            <form action="#" className="flex flex-col gap-4">
              <label htmlFor="email">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Your Phone Number
                </Typography>
              </label>
              <Input
                id="email"
                color="red"
                size="lg"
                type="email"
                name="email"
                placeholder="+1 (202) 756-873"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
              />
              <Button size="lg" color="gray" fullWidth>
                continue
              </Button>
              <a href="#google">
                <Button
                  variant="outlined"
                  size="lg"
                  className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
                  fullWidth
                >
                  <img
                    src={`https://www.material-tailwind.com/logos/logo-google.png`}
                    alt="google"
                    className="h-6 w-6"
                  />{" "}
                  sign in with google
                </Button>
              </a>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Login;
