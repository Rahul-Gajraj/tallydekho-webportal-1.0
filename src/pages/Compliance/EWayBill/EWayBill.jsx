import React from "react";

import Chart from "react-apexcharts";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import KPIStrip from "@/components/common/KPIStrip";

const kpiData = [
  {
    title: "Generated",
    price: "267",
  },
  {
    title: "Pending",
    price: "17",
  },
  {
    title: "Cancelled",
    price: "17",
  },
  {
    title: "Error",
    price: "9",
  },
  {
    title: "Expising 24H",
    price: "6",
  },
];

const days = [
  "Jan 1",
  "Jan 2",
  "Jan 3",
  "Jan 4",
  "Jan 5",
  "Jan 6",
  "Jan 7",
  "Jan 8",
  "Jan 9",
  "Jan 10",
  "Jan 11",
  "Jan 12",
  "Jan 13",
  "Jan 14",
  "Jan 15",
  "Jan 16",
  "Jan 17",
  "Jan 18",
  "Jan 19",
  "Jan 20",
  "Jan 21",
  "Jan 22",
  "Jan 23",
  "Jan 24",
  "Jan 25",
  "Jan 26",
  "Jan 27",
  "Jan 28",
  "Jan 29",
  "Jan 30",
  "Jan 31",
];

const recentActivity = [
  { date: "10 Jul 14:42", activity: "14 bills generated" },
  { date: "07 Jul 18:55", activity: "9 bills generated" },
  { date: "05 Jul 09:40", activity: "1 bill cancelled" },
];

const eWayBillList = [
  {
    column: "date",
    example: "12 Jul 23:59",
    actions: [
      "Extend Validity",
      "Cancel E-Way Bill",
      "View E-Way Bill",
      "Share PDF",
    ],
  },
  {
    colmn: "invoice",
    example: "INV-30865",
    actions: [
      "Extend Validity",
      "Cancel E-Way Bill",
      "View E-Way Bill",
      "Share PDF",
    ],
  },
  {
    column: "party",
    example: "Maaruji Technologies Pvt Ltd",
    actions: [
      "Extend Validity",
      "Cancel E-Way Bill",
      "View E-Way Bill",
      "Share PDF",
    ],
  },
  {
    column: "ewbNo",
    example: "EWB-10045678",
    actions: [
      "Extend Validity",
      "Cancel E-Way Bill",
      "View E-Way Bill",
      "Share PDF",
    ],
  },
  {
    column: "vehicle",
    example: "RJ14 XX 5555",
    actions: [
      "Extend Validity",
      "Cancel E-Way Bill",
      "View E-Way Bill",
      "Share PDF",
    ],
  },
  {
    column: "status",
    example: "Generated / Pending / Expired",
    actions: [
      "Extend Validity",
      "Cancel E-Way Bill",
      "View E-Way Bill",
      "Share PDF",
    ],
  },
];

const EWayBill = () => {
  return (
    <div className="mx-5">
      <section className="mx-auto mt-8">
        <div className="grid grid-cols-12 xl:grid-cols-5 md:grid-cols-12 sm:grid-cols-6 items-center md:gap-2.5 gap-4">
          {kpiData.map((data) => (
            <div
              key={data.title}
              className="xl:col-span-1 lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-12"
            >
              <KPIStrip {...data} />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-5">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
              <CardHeader
                floated={false}
                shadow={false}
                className="p-2 flex gap-6 flex-wrap items-center justify-between"
              >
                <Typography variant="h6">E Bill</Typography>
              </CardHeader>
              <CardBody className="!p-2">
                <div className="overflow-x-auto overflow-y-hidden">
                  <Chart
                    type="bar"
                    height={350}
                    series={[
                      {
                        // name: "Cash In",
                        data: [
                          110419, 210419, 110519, 120419, 130419, 113419,
                          150419, 220419, 210519, 210219, 115419, 160819, 10419,
                          210419, 110519, 120419, 130419, 113419, 150419,
                          220419, 210519, 210219, 115419, 160819, 110419,
                          210419, 110519, 120419, 130419, 113419, 150419,
                        ],
                      },
                    ]}
                    options={{
                      fill: {
                        type: "gradient",
                      },
                      plotOptions: {
                        bar: {
                          borderRadius: 5,
                          borderRadiusApplication: "end",
                          borderRadiusWhenStacked: "all",
                          barHeight: "80%",
                        },
                        toolbar: {
                          show: false,
                        },
                      },
                      dataLabels: {
                        enabled: false,
                      },
                      stroke: {
                        show: true,
                        width: 1,
                        colors: ["#fff"],
                      },
                      tooltip: {
                        shared: true,
                        intersect: false,
                      },
                      xaxis: {
                        categories: days,
                        tickPlacement: "on",
                      },
                      yaxis: {
                        show: true,
                        stepSize: 50000,
                        axisTicks: {
                          show: true,
                        },
                        axisBorder: {
                          show: true,
                        },
                      },
                      chart: {
                        toolbar: {
                          show: false,
                        },
                        zoom: {
                          enabled: false,
                        },
                      },
                      colors: ["#41cdff", "#7bffd9"],
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-4">
            <Card className="shadow-sm border border-gray-200 !rounded-lg">
              <CardHeader
                floated={false}
                shadow={false}
                className="p-0 flex gap-6 flex-wrap items-center justify-between"
              >
                <Typography variant="h6">Transport</Typography>
              </CardHeader>
              <CardBody className="!p-2">
                <table className="min-w-full table-auto text-left">
                  <tbody>
                    <tr>
                      <td className="pt-4 pr-4">
                        <Typography
                          variant="small"
                          className="font-normal pl-3"
                        >
                          Road
                        </Typography>
                      </td>
                      <td className="pt-4 pr-4">
                        <Typography
                          variant="small"
                          className="font-normal pl-3 float-right"
                        >
                          240
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-4 pr-4">
                        <Typography
                          variant="small"
                          className="font-normal pl-3"
                        >
                          Rail
                        </Typography>
                      </td>
                      <td className="pt-4 pr-4">
                        <Typography
                          variant="small"
                          className="font-normal pl-3 float-right"
                        >
                          20
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-4 pr-4">
                        <Typography
                          variant="small"
                          className="font-normal pl-3"
                        >
                          Air
                        </Typography>
                      </td>
                      <td className="pt-4 pr-4">
                        <Typography
                          variant="small"
                          className="font-normal pl-3 float-right"
                        >
                          38
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 pl-0">
                        <Typography
                          variant="small"
                          className="font-normal pl-3"
                        >
                          Ship
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          className="font-normal pl-3 float-right"
                        >
                          0
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
            <Card className="shadow-sm border border-gray-200 !rounded-lg mt-5">
              <CardHeader
                floated={false}
                shadow={false}
                className="p-0 flex gap-6 flex-wrap items-center justify-between"
              >
                <Typography variant="h6">Recent Activity</Typography>
              </CardHeader>
              <CardBody className="!p-4">
                <table className="min-w-full table-auto text-left">
                  <thead>
                    <tr>
                      <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0">
                        <Typography
                          variant="small"
                          className="font-normal leading-none pl-3"
                        >
                          Date
                        </Typography>
                      </th>
                      <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0">
                        <Typography
                          variant="small"
                          className="font-normal leading-none pl-3"
                        >
                          Activity
                        </Typography>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivity.map(({ date, activity }) => {
                      const classes = "p-4 px-0 border-b border-blue-gray-50";

                      return (
                        <tr key={activity}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {date || "-"}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3"
                            >
                              {activity || "-"}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-12">
            <Card className="shadow-sm border border-gray-200 !rounded-lg">
              <CardHeader
                floated={false}
                shadow={false}
                className="p-2 flex gap-6 flex-wrap items-center justify-between"
              >
                <Typography variant="h6">E-Way Bill List</Typography>
              </CardHeader>
              <CardBody className="!p-2">
                <table className="min-w-full table-auto text-left">
                  <thead>
                    <tr>
                      <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0">
                        <Typography
                          variant="small"
                          className="font-normal leading-none pl-3 text-center"
                        >
                          Column
                        </Typography>
                      </th>
                      <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0">
                        <Typography
                          variant="small"
                          className="font-normal leading-none pl-3 text-center"
                        >
                          Example
                        </Typography>
                      </th>
                      <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0">
                        <Typography
                          variant="small"
                          className="font-normal leading-none pl-3"
                        >
                          Actions
                        </Typography>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {eWayBillList.map(({ column, example, actions }) => {
                      const classes = "p-4 px-0 border-b border-blue-gray-50";

                      return (
                        <tr key={column}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3 text-center"
                            >
                              {column || "-"}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal pl-3 text-center"
                            >
                              {example || "-"}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <div className="flex gap-3 pl-3">
                              {actions.map((action) => (
                                <Typography
                                  variant="small"
                                  className="font-normal cursor-pointer"
                                  key={action}
                                >
                                  {action || "-"}
                                </Typography>
                              ))}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EWayBill;
