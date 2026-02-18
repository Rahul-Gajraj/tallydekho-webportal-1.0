import React, { useMemo, useState } from "react";

import Chart from "react-apexcharts";

import {
  Card,
  CardBody,
  CardHeader,
  List,
  ListItem,
  ListItemPrefix,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import merge from "deepmerge";

import EmptyData from "../common/EmptyData";

const AreaChart = ({ height = 250, series, colors, options }) => {
  const chartOptions = useMemo(
    () => ({
      colors,
      ...merge(
        {
          chart: {
            height: height,
            type: "area",
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          title: {
            show: "",
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: true,
          },
          markers: {
            size: 0,
            strokeWidth: 0,
            strokeColors: "transparent",
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          grid: {
            show: true,
            borderColor: "##EEEEEE",
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            yaxis: {
              lines: {
                show: true,
              },
            },
            padding: {
              top: 5,
              right: 20,
            },
          },
          tooltip: {
            theme: "light",
          },
          yaxis: {
            labels: {
              style: {
                colors: "#757575",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 300,
              },
            },
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
            },
            stepSize: 100,
            max: 500,
          },
          xaxis: {
            // axisTicks: {
            //   show: true,
            // },
            // axisBorder: {
            //   show: true,
            // },
            labels: {
              style: {
                colors: "#757575",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 300,
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0,
              opacityTo: 0,
              stops: [0, 100],
            },
          },
        },
        options ? options : {}
      ),
    }),
    [height, colors, options]
  );

  return (
    <Chart type="area" height={height} series={series} options={chartOptions} />
  );
};

const InventoryReport = () => {
  const [inventroyData, setInventroyData] = useState([
    {
      name: "Stock In",
      data: [0, 200, 180, 350, 500, 450, 250],
    },
    {
      name: "Stock Out",
      data: [200, 160, 150, 260, 300, 250, 100],
    },
  ]);

  const alerts = [
    {
      title: "7 items out of stock",
      subtitle: "Last updated 2 mins ago",
      img: <img src="/media/alerts/error.svg" className="h-5 w-5 mt-[3px]" />,
    },
    {
      title: "Batch expiry in next 30 days: 4 items",
      subtitle: "Check batch-wise report",
      img: <img src="/media/alerts/warning.svg" className="h-6 w-6 mt-[3px]" />,
    },
    {
      title: "Stock valuation mismatch with Tally",
      subtitle: "Difference ₹18,599 (FIFO vs Books)",
      img: <img src="/media/alerts/success.svg" className="h-6 w-6 mt-[3px]" />,
    },
    {
      title: "Warehouse W03 has negative stock",
      subtitle: "3 items affected",
      img: (
        <img
          src="/media/alerts/do_not_disturb.svg"
          className="h-5 w-5 mt-[3px]"
        />
      ),
    },
  ];

  const SALES_TABLE_HEAD = [
    {
      head: "Item",
      customeStyle: "text-center",
    },
    {
      head: "RO Level",
    },
    {
      head: "Current Stock",
    },
    {
      head: "Required",
    },
  ];

  const SALES_TABLE_ROW = [
    {
      item: "Pen",
      roLevel: "52 pcs",
      currentStock: "500 pcs",
      required: "250 pcs",
    },
    {
      item: "Pencil",
      roLevel: "52 pcs",
      currentStock: "550 pcs",
      required: "300 pcs",
    },
    {
      item: "Eraser",
      roLevel: "50 pcs",
      currentStock: "450 pcs",
      required: "200 pcs",
    },
    // {
    //   item: "Pencil",
    //   roLevel: "52 pcs",
    //   currentStock: "550 pcs",
    //   required: "300 pcs",
    // },
    // {
    //   item: "Eraser",
    //   roLevel: "50 pcs",
    //   currentStock: "450 pcs",
    //   required: "200 pcs",
    // },
    // {
    //   item: "Pencil",
    //   roLevel: "52 pcs",
    //   currentStock: "550 pcs",
    //   required: "300 pcs",
    // },
    // {
    //   item: "Eraser",
    //   roLevel: "50 pcs",
    //   currentStock: "450 pcs",
    //   required: "200 pcs",
    // },
  ];

  return (
    <section className="mx-auto">
      <div className="grid grid-cols-12 gap-5 my-5">
        <Card className="xl:col-span-4 md:col-span-12 sm:col-span-12 shadow-sm border border-gray-200 !rounded-lg">
          <CardHeader
            floated={false}
            shadow={false}
            className="p-2 pb-0 flex gap-6 flex-wrap items-center justify-between"
          >
            <Typography variant="h6">Stock Movement Trend</Typography>
          </CardHeader>
          <CardBody
            className={inventroyData.length > 0 ? "!py-0" : "!pt-2 !pb-4"}
          >
            {inventroyData.length > 0 ? (
              <div className="w-full overflow-x-auto overflow-y-hidden">
                <AreaChart
                  colors={["#4CAF50", "#2196F3"]}
                  options={{
                    xaxis: {
                      categories: [
                        "Day 1",
                        "Day 2",
                        "Day 3",
                        "Day 4",
                        "Day 5",
                        "Day 6",
                        "Day 7",
                      ],
                    },
                    fill: {
                      type: "gradient",
                      gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.7,
                        opacityTo: 0,
                        stops: [0, 90, 100],
                      },
                    },
                  }}
                  series={[
                    {
                      name: "Stock In",
                      data: [0, 200, 180, 350, 500, 450, 250],
                    },
                    {
                      name: "Stock Out",
                      data: [200, 160, 150, 260, 300, 250, 100],
                    },
                  ]}
                />
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center h-[250px] gap-2 bg-[#F6F7F9]">
                <img
                  src="/media/icons/line_graph.svg"
                  alt="line_graph"
                  className="h-5 w-5"
                />
                <Typography className="!text-[#6f7c97]">
                  Report Visualization
                </Typography>
              </div>
            )}
          </CardBody>
        </Card>
        <Card className="xl:col-span-4 md:col-span-6 sm:col-span-12 ">
          <CardBody className="h-[250px]">
            <Tabs value="top_moving">
              <TabsHeader>
                <Tab value="top_moving">Top Moving</Tab>
                <Tab value="slow_moving">Slow Moving</Tab>
              </TabsHeader>
              <TabsBody className="overflow-scroll h-[240px]">
                <TabPanel value="top_moving">
                  <table className="w-full min-w-max table-auto">
                    <thead>
                      <tr>
                        {SALES_TABLE_HEAD.map(({ head }) => (
                          <th
                            key={head}
                            className={"border-b border-gray-300 pb-4"}
                          >
                            <div className="flex gap-2 justify-center">
                              <Typography
                                variant="small"
                                className="!font-bold"
                              >
                                {head}
                              </Typography>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {SALES_TABLE_ROW.length > 0 ? (
                        SALES_TABLE_ROW.map(
                          (
                            { item, roLevel, currentStock, required },
                            index
                          ) => {
                            const classes = "!p-4 border-b border-gray-300";
                            return (
                              <tr key={index}>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal text-center"
                                  >
                                    {item}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal text-center"
                                  >
                                    {roLevel}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal text-center"
                                  >
                                    {currentStock}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal text-center"
                                  >
                                    {required}
                                  </Typography>
                                </td>
                              </tr>
                            );
                          }
                        )
                      ) : (
                        <EmptyData />
                      )}
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel value="slow_moving">
                  <table className="w-full min-w-max table-auto">
                    <thead>
                      <tr>
                        {SALES_TABLE_HEAD.map(({ head }) => (
                          <th
                            key={head}
                            className={"border-b border-gray-300 pb-4"}
                          >
                            <div className="flex gap-2 justify-center">
                              <Typography
                                variant="small"
                                className="!font-bold"
                              >
                                {head}
                              </Typography>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {SALES_TABLE_ROW.length > 0 ? (
                        SALES_TABLE_ROW.map(
                          (
                            { item, roLevel, currentStock, required },
                            index
                          ) => {
                            const classes = "!p-4 border-b border-gray-300";
                            return (
                              <tr key={index}>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal text-center"
                                  >
                                    {item}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal text-center"
                                  >
                                    {roLevel}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal text-center"
                                  >
                                    {currentStock}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    className="!font-normal text-center"
                                  >
                                    {required}
                                  </Typography>
                                </td>
                              </tr>
                            );
                          }
                        )
                      ) : (
                        <EmptyData />
                      )}
                    </tbody>
                  </table>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
        <Card className="xl:col-span-4 md:col-span-6 sm:col-span-12 shadow-sm border border-gray-200 !rounded-lg">
          <CardHeader
            floated={false}
            shadow={false}
            className="p-2 flex gap-6 flex-wrap items-center justify-between"
          >
            <Typography className="font-bold text-lg">Alerts</Typography>
          </CardHeader>
          <CardBody className="!p-2 !pt-0 mx-4 h-[250px] overflow-scroll">
            {alerts.length > 0 ? (
              <List className="pt-0 gap-3">
                {alerts.map(({ title, subtitle, img }) => (
                  <Card key={title} className="border shadow-none">
                    <ListItem className="items-start hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f]">
                      <ListItemPrefix className="items-start mr-2">
                        {img}
                      </ListItemPrefix>
                      <div>
                        <Typography>{title}</Typography>
                        <Typography className="text-[14px]">
                          {subtitle}
                        </Typography>
                      </div>
                    </ListItem>
                  </Card>
                ))}
              </List>
            ) : (
              <div className="flex flex-col justify-center items-center h-full gap-2 bg-[#F6F7F9]">
                <img
                  src="/media/icons/line_graph.svg"
                  alt="line_graph"
                  className="h-5 w-5"
                />
                <Typography className="!text-[#6f7c97]">No Alerts</Typography>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default InventoryReport;
