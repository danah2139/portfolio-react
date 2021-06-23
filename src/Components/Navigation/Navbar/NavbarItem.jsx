import React, { useEffect,useRef } from "react";
import styles from "./Navbar.module.css";
import useWindowDim from "../../../hooks/useWindowDim";

function NavbarItem({
  navItem,
  selectedItem,
  selectDims,
  toggleLinks,
}) {
  const ref = useRef();
  const isSelectedItem = selectedItem.elementId === navItem.elementId;

  const scrollToItem = (elementId) => {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
  };

 // const [ref, setRef] = useState(null);

  const { width } = useWindowDim();

  useEffect(() => {
    if (isSelectedItem) {
      selectDims({
        width: ref.offsetWidth || 0,
        offset: ref.offsetLeft || 0,
      });
    }
  }, [width, ref, isSelectedItem]);

  const handleClick = () => {
    toggleLinks(false);
    scrollToItem(navItem.elementId);
  };

  return (
    <li
      ref={ref}
      className={`${styles.navbar_item} ${
        isSelectedItem ? styles.item_selected : ""
      }`}
      onClick={() => handleClick()}
    >
      <div className={styles.item_text}>{navItem.label}</div>
    </li>
  );
}

export default React.memo(NavbarItem);
