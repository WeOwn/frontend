import React from "react";
import styles from "./styles.module.css";

import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";

const Property = () => {
  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.section1}>
          <Section1 />
        </div>
        <div className={styles.section2}>
          <Section2 />
        </div>
      </div>
    </>
  );
};

export default Property;
