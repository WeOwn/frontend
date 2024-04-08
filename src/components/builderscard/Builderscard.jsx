import React from "react";
import styles from "./styles.module.css";
import builderimage from "./builder.png";
import Button from "../../Atoms/Button";
import Chip from "../../Atoms/Chip";
import send  from "./send.png";
 
export const Builderscard = () => {
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
        <div className={styles.heading}>Sara Johnson</div>
        <div className={styles.subheading}>
          Delhi City Towner
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.capsule}>
          <div className={styles.visit}>Visit</div>
        <div className={styles.builderButton}>
          <Button
            style={{
              backgroundColor: "rgba(112, 101, 240, 1)",
              color: "white",
              padding: ".5em",
              borderRadius: "60px",
              border: "0px solid",
              height: "32px",
              width: "37px"
            }}
          >
          <img src={send} className={styles.sendImg} />
          </Button>
        </div>
        </div>
        
      </div>

     
    </div>
  );
};
