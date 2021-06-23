import React, { useCallback, useContext, useState } from "react";
import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.css";
import Button from "../../Inputs/Button/Button";
import ColorPicker from "./ColorPicker/ColorPicker";
import { ThemeContext } from "./ColorPicker/ThemeContext";
import More from "../../Icons/More";
import Close from "../../Icons/Close";


function Navbar({ navItems, selectedItem }){
  const [selectedDims, setSelectedDims] = useState('');

  const indicatorStyle = {
    width: selectedDims.width,
    left: selectedDims.offset,
  };

  const selectDims = useCallback((dims) => {
    setSelectedDims(dims);
  }, []);

  const displayShadow = window.scrollY > 0;

  const [displayLinks, setDisplayLinks] = useState(false);

  const { selectedColor } = useContext(ThemeContext);

  const handleClick = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1XlP3fw0Khoq4Jq33-i0VcTaSC6N0Xtcg";
  };

  return (
    <nav
      className={`${styles.navbar} ${
        displayShadow ? styles.navbar_shadow : ""
      }`}
    >
      <div
        className={`${styles.side_wrapper} ${styles.open_menu}`}
        onClick={() => setDisplayLinks(!displayLinks)}
      >
        {displayLinks ? (
          <Close width={35} height={20} color={selectedColor} />
        ) : (
          <More width={35} height={35} color={selectedColor} />
        )}
      </div>

      <ColorPicker className={styles.side_wrapper} />
      <div
        className={`${styles.navbar_wrapper} ${
          displayLinks ? styles.navbar_wrapper_display : ""
        }`}
      >
        <ul className={styles.list}>
          {navItems.map((navItem) => (
            <NavbarItem
              key={navItem.elementId}
              navItem={navItem}
              selectedItem={selectedItem}
              selectDims={selectDims}
              toggleLinks={setDisplayLinks}
            />
          ))}
        </ul>
        <div style={indicatorStyle} className={styles.indicator} />
      </div>
      <div className={styles.side_wrapper}>
        <Button text="Resume" onClick={handleClick} />
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
