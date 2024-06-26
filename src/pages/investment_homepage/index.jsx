import React from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
import Section6 from "./section6/Section6";

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
        <div className={styles.section3}>
          <Section3 />
        </div>
        <div className={styles.section4}>
          <Section4 />
        </div>
        <div className={styles.section5}>
          <Section5 />
        </div>
        <div className={styles.section6}>
          <Section6 />
        </div>
      </div>
    </>
  );
};

export default Property;
