import React from "react";

const Error = ({ condition, message }) => {
  return (
    <>
      {condition && (
        <div className="pl-2 rounded justify-center items-center gap-2 flex-col">
          <div className="text-[#eb4335] text-[12px] font-medium font-['Inter']">
            {message}
          </div>
        </div>
      )}
    </>
  );
};

export default Error;
