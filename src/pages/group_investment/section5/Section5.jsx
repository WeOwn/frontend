import React from "react";
import styles from "./styles.module.css";
import stardesign from "../stardesign.svg";

const Section5 = () => {
  const list = [
    { id: 1, type: "Purchase Price", color: "#6495EB" },
    { id: 2, type: "Cost of fit-outs", color: "#FF615F" },
    { id: 3, type: "Stamp duty", color: "#3EC5F3" },
    { id: 4, type: "Brokerage", color: "#40EC9A" },
    { id: 5, type: "Legal Fee", color: "#6495EB" },
    { id: 6, type: "Reserves", color: "#FF615F" },
  ];
  return (
    <div className={styles.maindiv}>
      <div style={{ width: "3rem", marginLeft: "-1rem" }}>
        <img
          src={stardesign}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h4
        style={{
          // fontSize: "1.1rem",
          // fontWeight: "600",
          whiteSpace: "noWrap",
        }}
      >
        Property Pricing
      </h4>

      <div
        style={{
          marginTop: "4rem",
          display: "flex",
          alignItems: "center",
          gap: "4rem",
          flexWrap: "wrap",
        }}
      >
        <div className={styles.slider}>
          <div className={styles.progress1}></div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            gap: "1rem",
          }}
        >
          {list.map((obj, index) => {
            return (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",
                  gap: "8rem",
                  //   display: "flex",
                  //   alignItems: "center",
                  //   gap: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    // width: "90%",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: obj.color,
                      height: "0.8rem",
                      width: "0.8rem",
                    }}
                  ></div>
                  <span style={{ fontWeight: "600" }}>{obj.type}</span>
                </div>
                <div style={{ fontWeight: "600" }}>+</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section5;
