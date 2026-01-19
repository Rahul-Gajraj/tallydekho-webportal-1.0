import React from "react";

import {
  Card,
  CardBody,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

const OUTWARD_SUPPLY_HEAD = [
  "Invoice No",
  "Customer",
  "Taxable Value",
  "CGST",
  "SGST",
  "IGST",
  "POS",
  "Status",
];

const OUTWARD_SUPPLY_ROWS = [
  {
    invoiceNo: "INV26-01",
    customer: "XYZ Exports",
    taxableValue: "10%",
    csgst: "10%",
    sgst: "10%",
    igst: "10%",
    pos: "8%",
    status: "active",
  },
];

const RECONCILIATION_HEAD = [
  "Supplier",
  "Invoice",
  "Date",
  "Value",
  "Match/Unmatch",
  "Reason",
  "Action",
];

const RECONCILIATION_ROWS = [
  {
    suppliers: "XYZ Exports",
    invoice: "INV26-01",
    date: "02/Jan/2026",
    value: "10%",
    isMatched: "match",
  },
];

const SUMMARY_HEAD = ["Taxable Value", "ITC", "Output Tax", "Net GST"];

const SUMMARY_ROWS = [
  {
    taxableValue: "",
    itc: "INV26-01",
    outputTax: "02/Jan/2026",
    netGST: "10%",
  },
];

const COMPOSITION_DEALERS_HEAD = [
  "Quarter",
  "Outward Supply Value",
  "Tax Liability",
  "Late Fee",
  "Composition Tax Rate",
  "Status",
];

const COMPOSITION_DEALERS_ROWS = [
  {
    quarter: "",
    outwardSupplyValue: "INV26-01",
    taxLability: "02/Jan/2026",
    lateFee: "₹5,000",
    compositionTaxRate: "10%",
    status: "Active",
  },
];

const INPUT_SERVICE_DISTRIBUTOR_HEAD = [
  "Supplier GSTIN",
  "Invoice No",
  "Taxable Value",
  "IGST Distributed",
  "CGST Distributed",
  "SGST Distributed",
];

const INPUT_SERVICE_DISTRIBUTOR_ROWS = [
  {
    supplier_gstin: "",
    invoice_no: "",
    taxable_value: "",
    igst_distributed: "",
    distributed: "",
    sgst_distributed: "",
  },
];

const ANNUAL_RETURN_HEAD = [
  "Outward Supplies",
  "Input Supplies",
  "ITC",
  "Summary Table 6A / 6B / 6C",
  "Tax Paid",
  "Differences (auto/calculated)",
];

const ANNUAL_RETURN_ROWS = [
  {
    outward_supplies: "",
    input_supplies: "",
    itc: "",
    summary_table: "",
    tax_paid: "",
    differences: "",
  },
];

const GSTInfo = () => {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardBody className="pt-4">
        <Tabs value="outward_supply">
          <TabsHeader>
            <Tab value="outward_supply">Outward Supply</Tab>
            <Tab value="reconciliation">Reconciliation</Tab>
            <Tab value="summary">Summary</Tab>
            <Tab value="composition_dealers">Composition Dealers</Tab>
            <Tab value="input_service_distributor">
              Input Service Distributor
            </Tab>
            <Tab value="annual_return">Annual Return</Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel value="outward_supply">
              <table className="mt-4 min-w-full table-auto text-left">
                <thead>
                  <tr>
                    {OUTWARD_SUPPLY_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                      >
                        <Typography
                          variant="small"
                          className="font-normal leading-none pl-3"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {OUTWARD_SUPPLY_ROWS.map((row, idx) => {
                    const {
                      csgst,
                      customer,
                      igst,
                      invoiceNo,
                      pos,
                      sgst,
                      status,
                      taxableValue,
                    } = row;

                    const classes = "p-4 px-0 border-b border-blue-gray-50";

                    return (
                      <tr key={invoiceNo}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {invoiceNo || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {customer || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {taxableValue || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {csgst || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {sgst || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {igst || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {pos || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {status || "-"}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TabPanel>
            <TabPanel value="reconciliation">
              <table className="mt-4 min-w-full table-auto text-left">
                <thead>
                  <tr>
                    {RECONCILIATION_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                      >
                        <Typography
                          variant="small"
                          className="font-normal leading-none pl-3"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RECONCILIATION_ROWS.map((row, idx) => {
                    const { suppliers, invoice, date, value, isMatched } = row;

                    const classes = "p-4 px-0 border-b border-blue-gray-50";

                    return (
                      <tr key={suppliers}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {suppliers || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {invoice || "-"}
                          </Typography>
                        </td>
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
                            {value || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {isMatched || "-"}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TabPanel>
            <TabPanel value="summary">
              <table className="mt-4 min-w-full table-auto text-left">
                <thead>
                  <tr>
                    {SUMMARY_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                      >
                        <Typography
                          variant="small"
                          className="font-normal leading-none pl-3"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SUMMARY_ROWS.map((row, idx) => {
                    const { taxableValue, itc, outputTax, netGST } = row;

                    const classes = "p-4 px-0 border-b border-blue-gray-50";

                    return (
                      <tr key={taxableValue}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {taxableValue || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {itc || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {outputTax || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {netGST || "-"}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TabPanel>
            <TabPanel value="composition_dealers">
              <table className="mt-4 min-w-full table-auto text-left">
                <thead>
                  <tr>
                    {COMPOSITION_DEALERS_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                      >
                        <Typography
                          variant="small"
                          className="font-normal leading-none pl-3"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPOSITION_DEALERS_ROWS.map((row, idx) => {
                    const {
                      quarter,
                      outwardSupplyValue,
                      taxLability,
                      lateFee,
                      compositionTaxRate,
                      status,
                    } = row;

                    const classes = "p-4 px-0 border-b border-blue-gray-50";

                    return (
                      <tr key={quarter}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {quarter || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {outwardSupplyValue || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {taxLability || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {lateFee || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {compositionTaxRate || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {status || "-"}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TabPanel>
            <TabPanel value="input_service_distributor">
              <table className="mt-4 min-w-full table-auto text-left">
                <thead>
                  <tr>
                    {INPUT_SERVICE_DISTRIBUTOR_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                      >
                        <Typography
                          variant="small"
                          className="font-normal leading-none pl-3"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {INPUT_SERVICE_DISTRIBUTOR_ROWS.map((row, idx) => {
                    const {
                      supplier_gstin,
                      invoice_no,
                      taxable_value,
                      igst_distributed,
                      distributed,
                      sgst_distributed,
                    } = row;

                    const classes = "p-4 px-0 border-b border-blue-gray-50";

                    return (
                      <tr key={supplier_gstin}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {supplier_gstin || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {invoice_no || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {taxable_value || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {igst_distributed || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {distributed || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {sgst_distributed || "-"}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TabPanel>
            <TabPanel value="annual_return">
              <table className="mt-4 min-w-full table-auto text-left">
                <thead>
                  <tr>
                    {ANNUAL_RETURN_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 px-0"
                      >
                        <Typography
                          variant="small"
                          className="font-normal leading-none pl-3"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ANNUAL_RETURN_ROWS.map((row, idx) => {
                    const {
                      outward_supplies,
                      input_supplies,
                      itc,
                      summary_table,
                      tax_paid,
                      differences,
                    } = row;

                    const classes = "p-4 px-0 border-b border-blue-gray-50";

                    return (
                      <tr key={outward_supplies}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {outward_supplies || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {input_supplies || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {itc || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {summary_table || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {tax_paid || "-"}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="font-normal pl-3"
                          >
                            {differences || "-"}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default GSTInfo;
