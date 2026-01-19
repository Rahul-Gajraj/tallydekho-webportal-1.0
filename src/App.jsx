import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import "react-phone-input-2/lib/style.css";
import "react-phone-number-input/style.css";
import "react-perfect-scrollbar/dist/css/styles.css";

import Login from "./pages/Login/Login";

import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import PublicRoutes from "./components/Routes/PublicRoutes";
import CustomToast from "./components/Toast";
import SettingDrawer from "./components/Layout/Drawers/SettingDrawer";
import Sidebar2 from "./components/Layout/Sidebar2";

function App() {
  const [isSettingDrawerOpen, setIsSettingDrawerOpen] = useState(false);

  const [isPinned, setIsPinned] = useState(false);

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
        <div className="flex h-screen bg-[#F9FAFC]">
          <CustomToast />
          <Sidebar2 isPinned={isPinned} setIsPinned={setIsPinned} />
          <div
            className="wrapper flex flex-col wrapper-custom transition-[padding-left] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] w-full"
            style={{
              paddingLeft: isPinned ? "251px" : "61px",
            }}
          >
            <Header toggleDrawer={toggleSettingDrawer} isPinned={isPinned} />
            <main className="overflow-auto" id="content" role="content">
              <div className="container-fixed" id="content_container">
                <PrivateRoutes />
              </div>
            </main>
          </div>
        </div>
        <SettingDrawer
          open={isSettingDrawerOpen}
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
