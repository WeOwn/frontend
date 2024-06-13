import React from "react";
import styles from "./styles.module.css";
import icon from "./icon.svg";

const Section2 = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.section1}>
        <h4 className={styles.heading}>We Provide Professional</h4>
        <h4 className={styles.heading}>Buisness Solutions.</h4>
      </div>

      <div className={styles.secion2}>
        <div className={styles.card}>
          <div>
            <div>
              <span>Prereleased Shops </span>
              <span>& offices</span>
            </div>
            <div className={styles.imgdiv}>
              <img src={icon} alt="img" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
