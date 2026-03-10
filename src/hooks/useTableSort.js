import { useState, useMemo } from "react";

const useTableSort = (data) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState(null);

  const handleSort = (column) => {
    if (!column) return;

    if (sortBy === column) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const parseAmount = (val) => {
    let str = String(val).replace("₹", "").trim();

    if (str.includes("K")) {
      return parseFloat(str.replace("K", "")) * 1000;
    }

    return parseFloat(str.replace(/,/g, ""));
  };

  const sortedData = useMemo(() => {
    if (!sortBy || !data) return data ?? [];

    return [...data].sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (!valA) return 1;
      if (!valB) return -1;
      // if (sortBy === "amount" || sortBy.includes("₹")) {
      //   valA = Number(String(valA).replace(/[₹, ]/g, ""));
      //   valB = Number(String(valB).replace(/[₹, ]/g, ""));
      // }
      if (sortBy === "amount") {
        valA = parseAmount(valA);
        valB = parseAmount(valB);
      }

      if (sortBy === "date") {
        valA = new Date(valA);
        valB = new Date(valB);
      }
      if (sortBy !== "date" && sortBy !== "amount" && !sortBy.includes("₹")) {
        const strA =
          typeof valA === "string" ? valA.split(" ")[0] : String(valA);
        const strB =
          typeof valB === "string" ? valB.split(" ")[0] : String(valB);
        if (Number(strA) && Number(strB)) {
          valA = parseInt(String(valA).match(/\d+/)?.[0] || 0, 10);
          valB = parseInt(String(valB).match(/\d+/)?.[0] || 0, 10);
        }
      }

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;

      return 0;
    });
  }, [data, sortBy, sortOrder]);

  return { sortedData, sortBy, sortOrder, handleSort };
};

export default useTableSort;
