import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import "react-phone-input-2/lib/style.css";
import "react-phone-number-input/style.css";

import Login from "./pages/Login/Login";

import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import SettingDrawer from "./components/Layout/SettingDrawer";
import PublicRoutes from "./components/Routes/PublicRoutes";
import CustomToast from "./components/Toast";

function App() {
  const [isSettingDraweOpen, setIsSettingDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/login");
  //   }
  // }, []);

  const toggleSettingDrawer = () => {
    setIsSettingDrawerOpen((prev) => !prev);
  };

  const handleLogin = () => {};

  if (isLoggedIn) {
    return (
      <>
        <div className="flex grow bg-[#F9FAFC]">
          <CustomToast />
          <Sidebar />
          <Header toggleDrawer={toggleSettingDrawer} />
          <div className="wrapper flex grow flex-col wrapper-custom">
            <main className="grow content" id="content" role="content">
              <div className="container-fixed" id="content_container">
                {/* <Login /> */}
                <PrivateRoutes />
              </div>
            </main>
          </div>
        </div>
        {/* <Sidebar2> */}
        <SettingDrawer
          open={isSettingDraweOpen}
          toggleDrawer={toggleSettingDrawer}
        />
      </>
    );
  }

  return (
    <>
      <CustomToast />
      <PublicRoutes isLogged={setIsLoggedIn} />
    </>
  );
}

export default App;
