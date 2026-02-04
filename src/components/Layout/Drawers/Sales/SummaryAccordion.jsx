import React, { useMemo, useState } from "react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from "@material-tailwind/react";

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

const SummaryAccordion = ({ products, logistics }) => {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const calculations = useMemo(() => {
    // Product calculations
    let productSubtotal = 0;
    let totalDiscounts = 0;
    let totalProductTax = 0;

    products.forEach((item) => {
      const qty = parseFloat(item.qty?.replace(/[^\d.]/g, "") || 0);
      const unitPrice = parseFloat(item.unitPrice?.replace(/[^\d.]/g, "") || 0);
      const baseAmount = qty * unitPrice;

      // Calculate discount
      const discountStr = (item.discount ?? "").toString().trim();
      let discountAmount = 0;
      if (discountStr) {
        if (!item.isFlatDiscount) {
          // Percentage: multiply qty * unitPrice, then apply percentage
          const discountPercent = parseFloat(discountStr) || 0;
          discountAmount = (discountPercent / 100) * baseAmount;
        } else {
          // Flat amount: use the value directly
          discountAmount = parseFloat(discountStr) || 0;
        }
      }
      totalDiscounts += discountAmount;

      // Calculate tax
      const taxStr = (item.tax ?? "").toString().trim();
      let taxAmount = 0;
      if (taxStr) {
        if (!item.isFlatTax) {
          // Percentage: multiply qty * unitPrice, then apply percentage
          const taxPercent = parseFloat(taxStr) || 0;
          taxAmount = (taxPercent / 100) * baseAmount;
        } else {
          // Flat amount: use the value directly
          taxAmount = parseFloat(taxStr) || 0;
        }
      }
      totalProductTax += taxAmount;

      productSubtotal += baseAmount;
    });

    // Logistics calculations
    let totalLogistics = 0;
    if (logistics) {
      logistics.forEach((item) => {
        const amount = parseFloat(item.amount?.replace(/[^\d.]/g, "") || 0);
        totalLogistics += amount;
      });
    }

    const grandTotal =
      productSubtotal - totalDiscounts + totalProductTax + totalLogistics;

    return {
      productSubtotal,
      totalDiscounts,
      totalProductTax,
      totalLogistics,
      grandTotal,
    };
  }, [products, logistics]);

  const handleSummaryAccordionOpen = () => {
    setIsSummaryOpen((prev) => !prev);
  };

  return (
    <Accordion
      open={isSummaryOpen}
      className="rounded-lg border border-blue-gray-100"
      icon={<Icon id={1} open={isSummaryOpen} />}
    >
      <AccordionHeader
        onClick={handleSummaryAccordionOpen}
        className="border-b-0 transition-colors font-medium text-md bg-[#f4f5f6] px-4 rounded-lg overflow-auto"
      >
        Grand Total (₹
        {calculations.grandTotal.toLocaleString("en-IN", {
          maximumFractionDigits: 2,
        })}
        )
      </AccordionHeader>
      <AccordionBody className="pt-0 text-base font-normal px-4">
        <table className="min-w-full table-auto text-left">
          <tbody>
            <tr>
              <td className="p-4 px-0 border-b border-blue-gray-50">
                <Typography variant="small" className="font-normal">
                  Subtotal
                </Typography>
              </td>
              <td className="p-4 px-0 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  className="font-normal pl-3 float-right"
                >
                  ₹
                  {calculations.productSubtotal.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </Typography>
              </td>
            </tr>
            <tr>
              <td className="p-4 px-0 border-b border-blue-gray-50">
                <Typography variant="small" className="font-normal">
                  Taxes
                </Typography>
              </td>
              <td className="p-4 px-0 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  className="font-normal pl-3 float-right"
                >
                  ₹
                  {calculations.totalProductTax.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </Typography>
              </td>
            </tr>
            <tr>
              <td
                className={`pt-4 px-0 ${
                  logistics ? "pb-4 border-b border-blue-gray-50" : ""
                }`}
              >
                <Typography variant="small" className="font-normal">
                  Discount
                </Typography>
              </td>
              <td
                className={`pt-4 px-0 ${
                  logistics ? "pb-4 border-b border-blue-gray-50" : ""
                }`}
              >
                <Typography
                  variant="small"
                  className="font-normal pl-3 float-right"
                >
                  ₹
                  {calculations.totalDiscounts.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </Typography>
              </td>
            </tr>
            {logistics && (
              <tr>
                <td className="pt-4 px-0">
                  <Typography variant="small" className="font-normal">
                    Logistics
                  </Typography>
                </td>
                <td className="pt-4 px-0">
                  <Typography
                    variant="small"
                    className="font-normal pl-3 float-right"
                  >
                    ₹
                    {calculations.totalLogistics.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </Typography>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </AccordionBody>
    </Accordion>
  );
};

export default SummaryAccordion;
