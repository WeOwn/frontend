import React from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import Section5 from "./Section5.jsx";
import Section6 from "./Section6.jsx";
import Section7 from "./Section7.jsx";
import Section8 from "./Section8.jsx";
import Section9 from "./Section9.jsx";
import Section10 from "./Section10.jsx";
import Section11 from "./Section11.jsx";

const PropertyDescription = () => {
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
        {/* <div className={styles.section7}>
          <Section7 />
        </div> */}
        <div className={styles.section8}>
          <Section8 />
        </div>
        <div className={styles.section9}>
          <Section9 />
        </div>
        <div className={styles.section10}>
          <Section10 />
        </div>
        <div className={styles.section11}>
          <Section11 />
        </div>
      </div>
    </>
  );
};

export default PropertyDescription;
