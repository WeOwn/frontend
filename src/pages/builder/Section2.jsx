import React from "react";
import styles from "./styles.module.css";
import house1 from "./house1.svg";
import house2 from "./house2.svg";
import house3 from "./house3.svg";
import bighouse1 from "./bighouse1.svg";
import bighouse2 from "./bighouse2.svg";
import Toggle from "./Toggle.jsx";

import Homecard from "../../components/homecard";

const Section2 = () => {
  const list1 = [
    {
      id: 1,
      title: "The Home",
      location: "Delhi",
      img: house1,
      bigimg: bighouse1,
      ratings: "",
      bgopacitycolor:
        "linear-gradient(to bottom, rgba(119, 123, 4, 0), rgba(119, 123, 4, 1))",
    },
    {
      id: 2,
      title: "The Home",
      location: "Delhi",
      img: house2,
      bigimg: bighouse2,
      ratings: "",
      bgopacitycolor:
        "linear-gradient(to bottom, rgba(81, 144, 157, 0), rgba(81, 144, 157, 1))",
    },
    {
      id: 3,
      title: "The Home",
      location: "Delhi",
      img: house3,
      bigimg: bighouse1,
      ratings: "",
      bgopacitycolor:
        "linear-gradient(to bottom, rgba(78, 99, 55, 0), rgba(78, 99, 55, 1))",
    },
    {
      id: 4,
      title: "The Home",
      location: "Delhi",
      img: house1,
      bigimg: bighouse2,
      ratings: "",
      bgopacitycolor:
        "linear-gradient(to bottom, rgba(119, 123, 4, 0), rgba(119, 123, 4, 1))",
    },
    {
      id: 5,
      title: "The Home",
      location: "Delhi",
      img: house1,
      bigimg: bighouse2,
      ratings: "",
      bgopacitycolor:
        "linear-gradient(to bottom, rgba(119, 123, 4, 0), rgba(119, 123, 4, 1))",
    },
    {
      id: 6,
      title: "The Home",
      location: "Delhi",
      img: house1,
      bigimg: bighouse2,
      ratings: "",
      bgopacitycolor:
        "linear-gradient(to bottom, rgba(119, 123, 4, 0), rgba(119, 123, 4, 1))",
    },
  ];

  return (
    <div className={styles.section2Container}>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <h4 style={{ whiteSpace: "wrap" }}>Popular Projects</h4>
        <div className={styles.section2fleximgdivp}>
          {list1.map((card, index) => {
            return (
              <div key={card.id} style={{ width: "100%" }}>
                <Homecard {...card} type={"small"} />
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <h4>All Projects</h4>
        <Toggle />
        <div className={styles.section2gridimgdivp}>
          {list1.map((card, index) => {
            return (
              <div key={card.id}>
                <Homecard {...card} type={"big"} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section2;
