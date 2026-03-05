import React from "react";

import { Typography } from "@material-tailwind/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import useTableSort from "@/hooks/useTableSort";

const ITEM_TABLE_HEAD = [
  { head: "Warehouse", value: "warehouse" },
  { head: "Product", value: "product" },
  { head: "Quantity", value: "quantity" },
  { head: "Discount", value: "discount" },
  { head: "Tax", value: "tax" },
  { head: "Unit Price", value: "unitPrice" },
  { head: "Actions", value: "actions" },
];

const ProductFilterTable = ({
  products,
  setSelectedItem,
  handleDialogsOpen,
  deleteProductHandler,
}) => {
  const {
    sortedData: sortedProductsTableRows,
    handleSort: handleProductsTableSort,
  } = useTableSort(products);

  return (
    <table className="w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {ITEM_TABLE_HEAD &&
            ITEM_TABLE_HEAD.map(({ head, value }, idx) => (
              <th key={head} className="px-4 pt-4">
                <div className="flex">
                  <Typography
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none !font-bold cursor-pointer"
                    onClick={() => handleProductsTableSort(value)}
                  >
                    {head}
                    {idx < ITEM_TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </div>
                {/* <Typography variant="small" className="font-bold leading-none">
                      {head}
                    </Typography> */}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {sortedProductsTableRows.map((item, index) => {
          if (!item) return null;

          try {
            const {
              id,
              warehouse,
              product,
              qty,
              discount,
              tax,
              unitPrice,
              isFlatDiscount,
              isFlatTax,
            } = item || {};

            const itemKey = id || `item-${index}`;

            const safeQty =
              qty !== null && qty !== undefined ? Number(qty) || 0 : 0;
            const safeDiscount =
              discount !== null && discount !== undefined
                ? Number(discount) || 0
                : 0;
            const safeTax =
              tax !== null && tax !== undefined ? Number(tax) || 0 : 0;
            const safeUnitPrice =
              unitPrice !== null && unitPrice !== undefined
                ? Number(unitPrice) || 0
                : 0;

            return (
              <tr key={itemKey}>
                <td className="p-2 px-4">
                  <Typography variant="small" className="font-normal">
                    {warehouse || "-"}
                  </Typography>
                </td>
                <td className="p-2 px-4">
                  <Typography variant="small" className="font-normal">
                    {product || "-"}
                  </Typography>
                </td>
                <td className="p-2 px-4">
                  <Typography variant="small" className="font-normal">
                    {safeQty}
                  </Typography>
                </td>
                <td className="p-2 px-4">
                  <Typography variant="small" className="font-normal">
                    {isFlatDiscount && "₹"}
                    {safeDiscount}
                    {!isFlatDiscount && "%"}
                  </Typography>
                </td>
                <td className="p-2 px-4">
                  <Typography variant="small" className="font-normal">
                    {isFlatTax && "₹"}
                    {safeTax}
                    {!isFlatTax && "%"}
                  </Typography>
                </td>
                <td className="p-2 px-4">
                  <Typography variant="small" className="font-normal">
                    ₹{safeUnitPrice}
                  </Typography>
                </td>
                <td className="p-2 px-4">
                  <div className="flex gap-3">
                    <img
                      src="/media/common/edit.svg"
                      alt="edit"
                      className="h-5 cursor-pointer"
                      onClick={() => {
                        if (item) {
                          setSelectedItem(item);
                          handleDialogsOpen("product");
                        }
                      }}
                    />
                    <img
                      src="/media/common/delete.svg"
                      alt="delete"
                      className="h-5 cursor-pointer"
                      onClick={() => {
                        if (id && deleteProductHandler) {
                          deleteProductHandler(id);
                        }
                      }}
                    />
                  </div>
                </td>
              </tr>
            );
          } catch (error) {
            console.error("Error rendering product item:", error);
            return null;
          }
        })}
      </tbody>
    </table>
  );
};

export default ProductFilterTable;
