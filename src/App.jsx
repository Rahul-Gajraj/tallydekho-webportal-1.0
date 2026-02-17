import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import "react-phone-input-2/lib/style.css";
import "react-phone-number-input/style.css";
import "react-perfect-scrollbar/dist/css/styles.css";

import Login from "./pages/Login/Login";

import Header from "./components/Layout/Header";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import PublicRoutes from "./components/Routes/PublicRoutes";
import CustomToast from "./components/Toast";
import SettingDrawer from "./components/Layout/Drawers/SettingDrawer";
import Sidebar from "./components/Layout/Sidebar";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";

function App() {
  const [isSettingDrawerOpen, setIsSettingDrawerOpen] = useState(false);

  const [isPinned, setIsPinned] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/login", { replace: true });
  //   }
  // }, [isLoggedIn, navigate]);

  const toggleSettingDrawer = () => {
    setIsSettingDrawerOpen((prev) => !prev);
  };

  if (isLoggedIn) {
    return (
      <>
        <div className="flex h-screen bg-[#F9FAFC]">
          <CustomToast />
          <ErrorBoundary fallbackMessage="Sidebar failed to load">
            <Sidebar isPinned={isPinned} setIsPinned={setIsPinned} />
          </ErrorBoundary>
          <div
            className="wrapper flex flex-col wrapper-custom transition-[padding-left] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] w-full"
            style={{
              paddingLeft: isPinned ? "251px" : "61px",
            }}
          >
            <ErrorBoundary fallbackMessage="Header failed to load">
              <Header toggleDrawer={toggleSettingDrawer} isPinned={isPinned} />
            </ErrorBoundary>
            <main className="overflow-auto" id="content" role="content">
              <div className="container-fixed" id="content_container">
                <ErrorBoundary fallbackMessage="Page failed to load">
                  <PrivateRoutes />
                </ErrorBoundary>
              </div>
            </main>
          </div>
        </div>
        <ErrorBoundary fallbackMessage="Settings drawer failed to load">
          <SettingDrawer
            open={isSettingDrawerOpen}
            toggleDrawer={toggleSettingDrawer}
          />
        </ErrorBoundary>
      </>
    );
  }

  return (
    <>
      <CustomToast />
      <ErrorBoundary fallbackMessage="Public routes failed to load">
        <PublicRoutes isLogged={setIsLoggedIn} />
      </ErrorBoundary>
    </>
  );
}

export default App;
