import React, { useContext, useState } from "react";

const sidebarContext = React.createContext();

const SidebarContextProvider = (props) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const openSidebar = () => {
    setSidebarIsOpen(true);
  };
  const closeSidebar = () => {
    setSidebarIsOpen(false);
  };
  return (
    <sidebarContext.Provider
      value={{ sidebarIsOpen, openSidebar, closeSidebar }}
    >
      {props.children}
    </sidebarContext.Provider>
  );
};

const useSidebarContext = () => {
  return useContext(sidebarContext);
};

export { SidebarContextProvider, useSidebarContext };
