import React from "react";
import styles from "./styles.module.css";
const Aisection = () => {
  return (
    <div>
      <div className={styles.AIintroContainer}>
        <div className={styles.introContainer}>
          <div className={styles.AISectionHeader}>AI Price Predictor</div>
          <div className={styles.AISectionDesc}>
            At Weown, our success is driven by the dedication and expertise of
            our team. Get to know the people behind our mission to make your
            real estate dream a reality.
          </div>
          <div className={styles.AISectionDesc}>
            Showing trends for last 3 years
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aisection;
