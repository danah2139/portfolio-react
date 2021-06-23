import React, { useContext, useState } from "react";
import "./App.css";
import { ThemeContext } from "./Components/Navigation/Navbar/ColorPicker/ThemeContext";
import Navbar from "./Components/Navigation/Navbar/Navbar";
import SiteProvider from "./Site/context/SiteContext";
import { navItems } from "./Site/pageItems";
import SiteSections from "./Site/SiteSections";

function ContextWrapper() {
  const [selectedItem, setSelectedItem] = useState({
    elementId: navItems[0].elementId,
    index: 0,
  });

  const { selectedColor } = useContext(ThemeContext);

  const style = { "--main-color": selectedColor };

  return (
    <div style={style}>
      <Navbar navItems={navItems} selectedItem={selectedItem} />
      <SiteProvider setSelectedItem={setSelectedItem}>
        <SiteSections />
      </SiteProvider>
    </div>
  );
}

export default ContextWrapper;
