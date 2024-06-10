import React from "react";
import styles from "./styles.module.css";
import home from "./home.svg";
import Search from "./searchContainer";
import { classNames } from "classnames";

const Section1 = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.section1Container}>
        <div style={{ width: "40%" }}>
          <h4>Find Your Dream Property</h4>
          <p style={{ color: "#999999", width: "100%", marginTop: "1rem" }}>
            Our portfolio of properties is as diverse as your dreams. Explore
            ther following categories to find the perfect property that
            resonates with your vision of home.
          </p>
        </div>

        <div className={styles.section1imgdiv}>
          <img
            src={home}
            alt="homeimage"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <Search />
    </div>
  );
};

export default Section1;
