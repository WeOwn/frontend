import React from "react";
import styles from "./styles.module.css";
import stardesign from "../stardesign.svg";

const Section3 = () => {
  const rows = 6;
  const cols = 6;

  let arr = [
    [null, "Day 0", "Year 1", "Year 2", "Year 3", "Year 4"],
    ["Investments", "(₹2,19,50,00,000)", "", "", "", ""],
    [
      "Rents",
      "",
      "(₹19,74,55,104)",
      "(₹19,74,55,104)",
      "(₹19,74,55,104)",
      "(₹19,74,55,104)",
    ],
    ["Enhanced Yield", "", "(₹19,74,55,104)", "-", "-", "-"],
    ["Sales Value", "", "-", "-", "-", "(₹3,02,73,194)"],
    [
      "Return",
      "(₹0)",
      "(₹2,19,500)",
      "(₹2,19,500)",
      "(₹2,19,500)",
      "(₹2,19,500)",
    ],
  ];

  const renderTable = () => {
    // let table = [];
    let cells = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        cells.push(
          <div
            key={j}
            style={{
              backgroundColor:
                i === 0 || j === 0 ? "rgba(112, 101, 240,0.20)" : "#F1F2F2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ wordSpace: "nowrap", fontWeight: "600" }}>
              {" "}
              {arr[i][j]}
            </span>
          </div>
        );
      }
    }

    return cells;
  };
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
        Financial Model
      </h4>

      <div className={styles.grid}>{renderTable()}</div>
      <div
        style={{
          padding: "1.5rem 2rem",
          border: "1px solid #7065f0",
          borderRadius: "10px",
          color: "#7065f0",
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          whiteSpace: "noWrap",
          overflow: "auto",
        }}
      >
        <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>Note</span>
        <span
          style={{
            padding: "0.2rem 0.5rem",
            borderLeft: "1px solid #7065f0",

            fontWeight: "550",

            fontSize: "0.9rem",
          }}
        >
          The figures provided above are estimates and may vary depending on the
          property, location, and individual circumstances.
        </span>
      </div>
    </div>
  );
};

export default Section3;
