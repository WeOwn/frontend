import React from "react";
import styles from "./styles.module.css";
import PropertyCardSlider from "../../../components/propertyCardSlider";
import stardesign2 from "./stardesign2.svg";
import IntroContainer from "../../../Atoms/introContainer/IntroContainer";

const Section4 = () => {
  return (
    <div className={styles.maindiv}>
      <IntroContainer
        stardesign={stardesign2}
        heading="Build secondary income"
        btntext={`View All Properties`}
        desc={`With great monthly rentals.`}
        descStyle={{}}
      />

      <PropertyCardSlider />
    </div>
  );
};

export default Section4;
