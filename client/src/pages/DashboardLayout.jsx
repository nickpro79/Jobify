import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { SmallSidebar, BigSidebar, Navbar } from "../components";
import { createContext, useContext, useState } from "react";
import { checkDarkTheme } from "../App";

const DashboardContext = createContext();

const DashboardLayout = (isDarkThemeEnabled) => {
  const user = { name: "John" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(checkDarkTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
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
