import { Route, Routes, Navigate } from "react-router-dom";

import Login from "@/pages/Login/Login";

const PublicRoutes = ({ isLogged }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login isLogged={isLogged} />} />
      <Route path="*" element={<Login isLogged={isLogged} />} />
    </Routes>
  );
};

export default PublicRoutes;
