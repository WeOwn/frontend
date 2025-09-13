import React from "react";
import styles from "./styles.module.css";
import investment_banner from "./investment_banner.svg";

const Section1 = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.section1}>
        <div className={styles.introdiv}>
          <div className={styles.headingdivp}>
            <h4 className={styles.heading}>The Best Value </h4>
            <h4 className={styles.heading}>
              for <span style={{ color: "#7065f0" }}>Business</span> and
            </h4>
            <h4 className={styles.heading}>
              <span style={{ color: "#7065f0" }}>Investment</span>
            </h4>
          </div>
          <div>
            <p className={styles.para}>
              WeOwn was born from poweful idea to democratize commercial real
              estate investing and Unlock value for investors, at scale.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#7065f0",
              padding: "0.8rem 1.5rem",
              borderRadius: "10px",
              width: "fit-content",
            }}
          >
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              Start Investing
            </button>
          </div>
        </div>
      </div>

      <div className={styles.section2}>
        <img
          src={investment_banner}
          alt="img"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Section1;
