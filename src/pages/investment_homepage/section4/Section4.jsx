import React from "react";
import styles from "./styles.module.css";
import { Propertycard } from "../../../components/propertyCard/Propertycard";
import stardesign2 from "./stardesign2.svg";

const Section4 = () => {
  const List1 = [
    {
      id: "1",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
    {
      id: "2",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
    {
      id: "3",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
  ];

  return (
    <div className={styles.maindiv}>
      <div style={{ width: "3rem", marginLeft: "-1rem" }}>
        <img
          src={stardesign2}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h4 style={{ fontSize: "2rem", fontWeight: "650", whiteSpace: "wrap" }}>
        Build secondary income
      </h4>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
          marginTop: "0.5rem",
        }}
      >
        <p style={{ color: "#525252", width: "80%" }}>
          With great monthly rentals.
        </p>
        <div
          style={{
            backgroundColor: "#EAEAEA",
            border: "1px solid #E1E1E1",
            padding: "0.8rem 1rem",

            borderRadius: "10px",
            fontSize: "0.9rem",
          }}
        >
          View All Properties
        </div>
      </div>
      <div className={styles.FeaturedPropertyContainer}>
        {List1.map((obj) => (
          <Propertycard key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Section4;
