import React from "react";
import stardesign2 from "./stardesign2.svg";
import styles from "./styles.module.css";
import downloadlogo from "./downloadlogo.svg";

const Section9 = () => {
  const list = [
    {
      id: 1,
      title: "Property title deed",
      download: "Download Property title deed",
    },
    {
      id: 2,
      title: "Market analysis report",
      download: "Download Market analysis report",
    },
    {
      id: 3,
      title: "Financial projections",
      download: "Download Financial projections",
    },
    {
      id: 4,
      title: "Legal documents",
      download: "Download Legal documents",
    },
  ];
  return (
    <div>
      <div style={{ width: "3rem", marginLeft: "-1rem" }}>
        <img
          src={stardesign2}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h4 style={{ fontSize: "2rem", fontWeight: "650", whiteSpace: "wrap" }}>
        Resources
      </h4>
      <div>
        {list.map((obj, index) => {
          return (
            <div key={obj.id} className={styles.section9box}>
              <span style={{ fontWeight: "600" }}>{obj.title}</span>

              <div
                style={{
                  backgroundColor: "#7065f0",
                  padding: "0.8rem 1rem",
                  borderRadius: "10px",
                  width: "fit-content",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                    whiteSpace: "noWrap",
                    fontSize: "0.9rem",
                  }}
                >
                  {obj.download}
                </button>
                <div style={{ width: "1rem" }}>
                  <img
                    src={downloadlogo}
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section9;
