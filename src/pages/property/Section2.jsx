import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import stardesign from "./stardesign.svg";
import Toggle from "./toggleContainer";
import { Propertycard } from "../../components/propertyCard/Propertycard";
import api from "../../service/apiGateway";
import PropertycardSkeleton from "../../components/propertyCard/PropertycardSkeleton";

const Section2 = () => {
  const [allproperties, setAllProperties] = useState(null);
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
    <div className={styles.section2Container}>
      <div style={{ width: "3rem", marginLeft: "-1rem" }}>
        <img
          src={stardesign}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h4
        style={{
          fontSize: "2rem",
          fontWeight: "650",
          marginTop: "0.5rem",
          whiteSpace: "wrap",
        }}
      >
        Discover a World Property
      </h4>

      <p style={{ color: "#999999", width: "100%", marginTop: "1rem" }}>
        Our portfolio of properties is as diverse as your dreams. Explore ther
        following categories to find the perfect property that resonates with
        your vision of home.
      </p>
      <div style={{ marginTop: "4rem" }}>
        <Toggle />
      </div>

      <div className={styles.section2cardsp}>
        {allproperties?.length > 0
          ? allproperties?.map((property, index) => (
              <Propertycard key={property._id} {...property} />
            ))
          : Array(4)
              .fill(0)
              .map((_, index) => (
                <PropertycardSkeleton key={index} marginright="1rem" />
              ))}
      </div>
    </div>
  );
};

export default Section2;
