import React from "react";
import styles from "./styles.module.css";

const index = ({
  img,
  bigimg,
  title,
  location,
  ratings,
  bgopacitycolor,
  type,
}) => {
  return (
    <div
      className={styles.maindiv}
      // style={{ width: `${type === "big" ? "13rem" : "10rem"}` }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <img
          src={type === "big" ? bigimg : img}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={styles.titledivp}>
        <h4
          style={{
            color: "white",
            fontSize: `${type === "big" ? "1.3rem" : "1.1rem"}`,
            fontWeight: "normal",
          }}
        >
          {title}
        </h4>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <span style={{ fontSize: `${type === "big" ? "1rem" : "0.8rem"}` }}>
            {location}
          </span>
          <span>{ratings}</span>
        </div>
      </div>

      <div
        className={styles.bgopacitycolor}
        style={{ background: `${bgopacitycolor}` }}
      ></div>
    </div>
  );
};

export default index;
