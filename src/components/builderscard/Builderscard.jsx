import React from "react";
import styles from "./styles.module.css";
import builderimage from "./builder.png";
import Button from "../../Atoms/Button";
import Chip from "../../Atoms/Chip";
import send from "./send.png";

export const Builderscard = ({ heading, subheading }) => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.imagediv}>
        <img
          src={builderimage}
          alt="builder Image"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
      </div>
      <div className={styles.description}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.subheading} style={{ color: "#999999" }}>
          {subheading}
        </div>
      </div>

      {/* <div className={styles.details}>
        <div className={styles.capsule}>
          <div className={styles.visit}>Visit</div>
          <div className={styles.builderButton}>
            <Button
              style={{
                backgroundColor: "rgba(112, 101, 240, 1)",
                color: "white",
                // padding: ".5em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "60px",
                border: "0px solid",
                height: "2rem",
                width: "2rem",
              }}
            >
              <img src={send} className={styles.sendImg} />
            </Button>
          </div>
        </div>
      </div> */}

      <div className={styles.lastdiv}>
        <div
          style={{
            fontSize: "0.9rem",
            fontWeight: "550",
            whiteSpace: "nowrap",
          }}
        >
          Contact Us
        </div>
        <div
          style={{
            backgroundColor: "#703BF7",
            padding: "0.5rem 1.5rem",
            borderRadius: "999px",
            color: "white",
          }}
        >
          View
        </div>
      </div>
    </div>
  );
};
