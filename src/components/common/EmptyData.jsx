import React from "react";

const EmptyData = ({colSpan = 6}) => {
  return (
    <tr>
      <td colSpan={colSpan}>
        <div className="flex flex-col items-center justify-center pt-8 text-gray-500">
          <h3 className="text-lg font-semibold">No records found</h3>
          <p className="text-sm mt-1">
            There is no data available at the moment.
          </p>
        </div>
      </td>
    </tr>
  );
};

export default EmptyData;
