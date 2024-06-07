import React from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Property = () => {
  return (
    <>
      <Navbar />
      <div className={styles.maindiv}>
        <div className={styles.section1}>
          <Section1 />
        </div>
        <div className={styles.section2}>
          <Section2 />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Property;
