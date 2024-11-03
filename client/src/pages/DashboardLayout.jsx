import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { SmallSidebar, BigSidebar, Navbar } from "../components";
import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();
const DashboardLayout = () => {
  const user = { name: "John" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logout = async () => {
    console.log("logout user");
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        isDarkTheme,
        toggleDarkTheme,
        showSidebar,
        toggleSidebar,
        logout,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
