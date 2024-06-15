import React from "react";
import styles from "./styles.module.css";
import banner from "./banner.svg";

import Searchbar from "./../searchbar/Searchbar";

const Section1 = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.section1}>
        <div className={styles.introdiv}>
          <div className={styles.headingdivp}>
            <h4 className={styles.heading}>Your Trusted</h4>
            <h4 className={styles.heading}>Real Estate Builders</h4>
          </div>
          <div>
            <p className={styles.para}>
              Welcome to Weown, where your real estate aspirations meet expert
              guidance and personalized service. Our journey in the real estate
              industry has been marked by a deep commitment to excellence, a
              passion for helping clients achieve their goals, and an unwavering
              dedication to professionalism.
            </p>
            {/* <p className={styles.para}>
              guidance and personalized service. Our journey in the real estate
            </p>
            <p className={styles.para}>
              industry has been marked by a deep commitment to excellence, a
            </p>
            <p className={styles.para}>
              passion for helping clients achieve their goals, and an unwavering
            </p>
            <p className={styles.para}>dedication to professionalism.</p> */}
          </div>
        </div>
      </div>

      <div className={styles.section2}>
        <img src={banner} alt="img" style={{ width: "100%", height: "100%" }} />
        <Searchbar />
      </div>
    </div>
  );
};

export default Section1;
