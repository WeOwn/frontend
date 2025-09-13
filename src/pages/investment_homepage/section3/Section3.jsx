import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import PropertyCardSlider from "../../../components/propertyCardSlider";
import stardesign2 from "./stardesign2.svg";
import IntroContainer from "../../../Atoms/introContainer/IntroContainer";
import api from "../../../service/apiGateway";

const Section3 = () => {
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
        heading=" Get high returns in long run"
        btntext={`View All Properties`}
        desc={`Projects with promising gains.`}
        descStyle={{}}
        path="/properties"
      />

      <PropertyCardSlider projects={properties} />

      <div
        style={{
          padding: "1.5rem 2rem",
          border: "1px solid #7065f0",
          borderRadius: "10px",
          color: "#7065f0",
          marginTop: "5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          whiteSpace: "noWrap",
          overflow: "auto",
        }}
      >
        <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>Note</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // gap: "0.2rem",
            padding: "0.2rem 0.5rem",
            borderLeft: "1px solid #7065f0",
          }}
        >
          <span
            style={{
              fontWeight: "650",
              fontSize: "1rem",
            }}
          >
            ROI: Returns On Investment
          </span>
          <span
            style={{
              fontWeight: "550",
              fontSize: "0.9rem",
            }}
          >
            ROI is a measure of how much money, or profit, you have earned on an
            investment as a percentage of its total cost.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section3;
