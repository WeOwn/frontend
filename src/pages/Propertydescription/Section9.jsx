import React from "react";
import styles from "./styles.module.css";
import { Propertycard } from "../../components/propertyCard/Propertycard";
import stardesign2 from "./stardesign2.svg";
import Button from "../../Atoms/Button";
import IntroContainer from "../../Atoms/introContainer/IntroContainer";
import PropertyCardSlider from "../../components/propertyCardSlider";

const Section8 = () => {
  return (
    <div>
      <IntroContainer
        stardesign={stardesign2}
        heading="Similar Properties"
        desc={`Find answers to common questions about Estateins's services, property
          listing, and the real estate process. We're here to provide clarity
          and assist you every tep of the way `}
        btntext="View All Similar Projects"
      />
      <PropertyCardSlider />
    </div>
  );
};

export default Section8;
