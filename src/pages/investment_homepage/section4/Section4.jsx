import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import PropertyCardSlider from "../../../components/propertyCardSlider";
import stardesign2 from "./stardesign2.svg";
import IntroContainer from "../../../Atoms/introContainer/IntroContainer";
import api from "../../../service/apiGateway";

const Section4 = () => {
  const [properties, setAllProperties] = useState(null);

  const fetchData = async () => {
    try {
      const propertiesResponse = await api.get(
        "/property/list?min-price=0&page=page-1"
      );
      // console.log("All properties:", propertiesResponse.data.data);
      setAllProperties(propertiesResponse.data.data);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.maindiv}>
      <IntroContainer
        stardesign={stardesign2}
        heading="Build secondary income"
        btntext={`View All Properties`}
        desc={`With great monthly rentals.`}
        descStyle={{}}
        path="/properties"
      />

      <PropertyCardSlider projects={properties} />
    </div>
  );
};

export default Section4;
