import React from "react";
import Profilebox from "../../Atoms/profilebox";
import styles from "./styles.module.css";
import upright from "./upright.png";

const index = () => {
  return (
    <div className={styles.profileContainerdiv}>
      <Profilebox />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "grey" }}>
          Your recent activity
        </p>
        <div
          style={{
            backgroundColor: "#CDC9FA",
            paddingInline: "1rem",
            paddingBlock: "0.5rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            color: "black",
            width: "60%",
            textAlign: "left",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0rem",
              right: "0.5rem",
            }}
          >
            <img src={upright} alt="img" />
          </div>
          <p
            style={{
              fontWeight: "bolder",
              fontSize: "1.02rem",
            }}
          >
            12
          </p>{" "}
          <p style={{ fontSize: "0.75rem", fontWeight: "bold" }}> viewed</p>
        </div>
        <div
          style={{
            backgroundColor: "#7065f0",
            paddingBlock: "0.5rem",
            paddingInline: "auto",
            borderRadius: "10px",
            textAlign: "center",
            fontSize: "0.75rem",
            color: "white",
          }}
        >
          View all activity
        </div>
      </div>
    </div>
  );
};

export default index;
