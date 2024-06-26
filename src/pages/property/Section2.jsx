import React from "react";
import styles from "./styles.module.css";
import stardesign from "./stardesign.svg";
import Toggle from "./toggleContainer";
import { Propertycard } from "../../components/propertyCard/Propertycard";

const Section2 = () => {
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
    {
      id: "4",
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
      id: "5",
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
      id: "6",
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
      id: "7",
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
      id: "8",
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
      id: "9",
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
      id: "10",
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
      id: "11",
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
      id: "12",
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
        {List1.map((obj) => (
          <Propertycard key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Section2;
