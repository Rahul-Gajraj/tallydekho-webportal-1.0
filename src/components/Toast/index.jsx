import React from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";

const CustomToast = () => {
  return (
    <Toaster position="top-right">
      {(t) => (
        <div style={{ cursor: "pointer" }} onClick={() => toast.dismiss(t.id)}>
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                <div sx={{ wordBreak: "break-word" }}>{message}</div>
              </>
            )}
          </ToastBar>
        </div>
      )}
    </Toaster>
  );
};

export default CustomToast;
