import React from "react";
import styles from "./styles.module.css";
import home from "./home.svg";
import Search from "./searchContainer";
import { classNames } from "classnames";

const Section1 = () => {
  return (
    <div className={styles.section1relativediv}>
      <div className={styles.section1Container}>
        <div className={styles.section1textdiv}>
          <h4 style={{ whiteSpace: "wrap" }}>Find Your Dream Property</h4>
          <p style={{ color: "#999999", width: "100%", marginTop: "1rem" }}>
            Welecome to weown, where your dream property awaits in every comer
            of our beautiful world. Explore our curated selection of properties,
            each offering a unique story and a chance to redefine your life.
            With categories to suit every dreamer, your journey.
          </p>
        </div>

        <div className={styles.section1imgdiv}>
          <img
            src={home}
            alt="homeimage"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Section1;
