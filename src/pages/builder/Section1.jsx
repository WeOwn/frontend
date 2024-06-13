import React from "react";
import styles from "./styles.module.css";
import personprofile from "./personprofile.svg";
import starlogo from "./starlogo.svg";

const Section1 = () => {
  return (
    <div className={styles.section1Container}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div className={styles.section1imgdiv}>
          <img
            src={personprofile}
            alt="img"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <div
            style={{
              display: "flex",
              // backgroundColor: "yellow",
              gap: "1rem",
              flexWrap: "wrap",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h4
              style={{
                fontSize: "2rem",
                fontWeight: "bolder",
                whiteSpace: "wrap",
              }}
            >
              Shapoorji Pallonj
            </h4>
            <div style={{ width: "2rem", marginTop: "0.5rem" }}>
              <img
                src={starlogo}
                alt="img"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <p style={{ color: "#7065f0" }}>Legit builder</p>

            <span className={styles.dot}></span>

            <p>12 Projects</p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          fontSize: "0.9rem",
          fontWeight: "600",
          lineHeight: "1.5",
        }}
      >
        <p>
          Meet Rajesh Kumar, a passoniate and innovative builder hailing from
          the vibrant city of Mumbai, India. With a background in civil
          engennering and a heart pulsating with creativity. Rajesh has become
          the distinguished fihure in the construction industry.
        </p>
        <p>
          Meet Rajesh Kumar, a passoniate and innovative builder hailing from
          the vibrant city of Mumbai, India. With a background in civil
          engennering and a heart pulsating with creativity. Rajesh has become
          the distinguished fihure in the construction industry.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <p style={{ fontWeight: "bold" }}>Location</p>
          <p style={{ fontSize: "0.9rem", fontWeight: "600" }}>India,Delhi</p>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <p style={{ fontWeight: "bold" }}>Ratings</p>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.9rem", fontWeight: "600" }}>4.6</span>
            <span>*****</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
