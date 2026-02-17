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
    try {
      let productSubtotal = 0;
      let totalDiscounts = 0;
      let totalProductTax = 0;

      if (!products || !Array.isArray(products)) {
        return {
          productSubtotal: 0,
          totalDiscounts: 0,
          totalProductTax: 0,
          totalLogistics: 0,
          grandTotal: 0,
        };
      }

      products.forEach((item) => {
        if (!item) return;

        try {
          const qtyStr = item.qty?.toString().replace(/[^\d.]/g, "") || "0";
          const qty = parseFloat(qtyStr);
          const validQty = isNaN(qty) || qty < 0 ? 0 : qty;

          const unitPriceStr = item.unitPrice?.toString().replace(/[^\d.]/g, "") || "0";
          const unitPrice = parseFloat(unitPriceStr);
          const validUnitPrice = isNaN(unitPrice) || unitPrice < 0 ? 0 : unitPrice;

          const baseAmount = validQty * validUnitPrice;

          const discountStr = (item.discount ?? "").toString().trim();
          let discountAmount = 0;
          if (discountStr) {
            const discountValue = parseFloat(discountStr);
            if (!isNaN(discountValue) && discountValue >= 0) {
              if (!item.isFlatDiscount) {
                const discountPercent = Math.min(Math.max(discountValue, 0), 100);
                discountAmount = (discountPercent / 100) * baseAmount;
              } else {
                discountAmount = discountValue;
              }
            }
          }
          totalDiscounts += discountAmount;

          const taxStr = (item.tax ?? "").toString().trim();
          let taxAmount = 0;
          if (taxStr) {
            const taxValue = parseFloat(taxStr);
            if (!isNaN(taxValue) && taxValue >= 0) {
              if (!item.isFlatTax) {
                const taxPercent = Math.min(Math.max(taxValue, 0), 100);
                taxAmount = (taxPercent / 100) * baseAmount;
              } else {
                taxAmount = taxValue;
              }
            }
          }
          totalProductTax += taxAmount;

          productSubtotal += baseAmount;
        } catch (error) {
          console.error("Error processing product item:", error);
        }
      });

      let totalLogistics = 0;
      if (logistics && Array.isArray(logistics)) {
        logistics.forEach((item) => {
          if (!item) return;
          try {
            const amountStr = item.amount?.toString().replace(/[^\d.]/g, "") || "0";
            const amount = parseFloat(amountStr);
            const validAmount = isNaN(amount) || amount < 0 ? 0 : amount;
            totalLogistics += validAmount;
          } catch (error) {
            console.error("Error processing logistics item:", error);
          }
        });
      }

      const grandTotal =
        productSubtotal - totalDiscounts + totalProductTax + totalLogistics;

      const safeGrandTotal = isFinite(grandTotal) ? grandTotal : 0;
      const safeSubtotal = isFinite(productSubtotal) ? productSubtotal : 0;
      const safeDiscounts = isFinite(totalDiscounts) ? totalDiscounts : 0;
      const safeTax = isFinite(totalProductTax) ? totalProductTax : 0;
      const safeLogistics = isFinite(totalLogistics) ? totalLogistics : 0;

      return {
        productSubtotal: safeSubtotal,
        totalDiscounts: safeDiscounts,
        totalProductTax: safeTax,
        totalLogistics: safeLogistics,
        grandTotal: safeGrandTotal,
      };
    } catch (error) {
      console.error("Error in calculations:", error);
      return {
        productSubtotal: 0,
        totalDiscounts: 0,
        totalProductTax: 0,
        totalLogistics: 0,
        grandTotal: 0,
      };
    }
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
