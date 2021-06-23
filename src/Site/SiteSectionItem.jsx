import React, { useContext, useRef } from "react";
import useElementReach from "../Components/Navigation/Navbar/useElementReach";
import { SiteContext } from "./context/SiteContext";
import SiteSectionMap from "./SiteSecitonMap";
import styles from "./SiteSections.module.css";

function SiteSectionItem({
  sectionItem,
  index,
  width,
  height,
}) {
  const context = useContext(SiteContext);

  const ref = useRef(null);
  const onElementReach = () => {
    context.selectItem(sectionItem.elementId, index);
  };

  useElementReach(ref, () => onElementReach());

  return (
    <div
      ref={ref}
      style={{ minHeight: height, width }}
      className={styles.section_wrapper}
    >
      <SiteSectionMap elementId={sectionItem.elementId} />
    </div>
  );
}

export default SiteSectionItem;
