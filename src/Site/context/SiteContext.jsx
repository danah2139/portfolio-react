import React, { createContext, useCallback } from "react";

export const SiteContext = createContext(null);



const SiteProvider = ({ children, setSelectedItem }) => {
  const selectItem = useCallback((elementId, index) => {
    setSelectedItem({ elementId, index });
  }, []);

  const value = {
    selectItem,
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export default SiteProvider;
