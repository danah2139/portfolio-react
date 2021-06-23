import React, { useContext } from "react";
import { ThemeContext } from "../../Components/Navigation/Navbar/ColorPicker/ThemeContext";
import useWindowDim from "../../hooks/useWindowDim";
import Boxes from "./Boxes";
import styles from "./WhoIAm.module.css";
import github from "../../assests/icons/github.png";
import linkedin from "../../assests/icons/linkedin.jpg";

function WhoIAm(){
  const { width, height } = useWindowDim();

  const dims = width >= 650 ? 500 : "95%";

  const { selectedColor } = useContext(ThemeContext);

  return (
    <div
      style={{
        width,
        height,
      }}
      className={styles.wrapper}
      id="who-i-am"
    >
      <div className={styles.container}>
        <div />
        <div className={styles.titles}>
          <div className={styles.title}>Dana Cohen</div>
          <div className={styles.sub_title}>Full Stack Web Developer</div>
          <div className={styles.social}>
            <a
              href="https://github.com/danah2139"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.social_image} src={github} alt='github'/>
            </a>
            <a
              href="https://www.linkedin.com/in/dana-cohen-5176b514b/"
              target="_blank"
              className={styles.link_item}
              rel="noopener noreferrer"
            >
              <img className={styles.social_image} src={linkedin} alt='linkedin'/>
            </a>
          </div>
        </div>
        <Boxes className={styles.image} width={dims} color={selectedColor} />
      </div>
    </div>
  );
}

export default React.memo(WhoIAm);
