import React from "react";
import styles from "./styles.module.css";
import stardesign from "./stardesign.svg";

import { Builderscard } from "../../../components/builderscard/Builderscard";

const Section2 = () => {
  const List = [
    { id: "1", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "2", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "3", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "5", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "6", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "7", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "8", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "9", heading: "Sara Johnson", subheading: "Delhi City Towner" },
  ];
  return (
    <div className={styles.maindiv}>
      <div className={styles.intro}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          <div style={{ width: "3rem", marginLeft: "-1rem" }}>
            <img
              src={stardesign}
              alt="img"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <h4>Meet our Builders</h4>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              gap: "2rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontWeight: "400",
                fontSize: "0.9rem",
                lineHeight: "1.2rem",
                width: "70%",
                color: "#999999",
              }}
            >
              Get to know people behind our mission to make your real estate
              dream a reality.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.builderContainer}>
        {List.map((obj) => (
          <Builderscard key={obj.id} {...obj} style={{ background: "red" }} />
        ))}
      </div>
    </div>
  );
};

export default Section2;
