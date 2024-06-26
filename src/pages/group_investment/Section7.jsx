import React from "react";
import styles from "./styles.module.css";
import zoomlogo from "./zoomlogo.svg";
import stardesign from "./stardesign.svg";
import floorplan from "./floorplan.svg";

const section7 = () => {
  return (
    <div>
      <div style={{ width: "3rem", marginLeft: "-1rem" }}>
        <img
          src={stardesign}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h4 style={{ fontSize: "2rem", fontWeight: "650" }}>Floor Plan</h4>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "0.5rem",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <p style={{ color: "grey" }} className={styles.desc}>
          Find answers to common questions about Estateins's services, property
          listing, and the real estate process. We're here to provide clarity
          and assist you every tep of the way
        </p>
        <div
          style={{
            padding: "0.5rem 0.3rem",
            backgroundColor: "rgba(112, 101, 240, 0.14)",

            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={zoomlogo} alt="logo_img" style={{ width: "70%" }} />
        </div>
      </div>

      <div style={{ width: "100%", marginTop: "2rem" }}>
        <img src={floorplan} alt="img" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default section7;
