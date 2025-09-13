import React from "react";
import styles from "./styles.module.css";
import search_logo from "./search_logo.svg";

const Searchbar = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="Search for builders"
          style={{
            background: "transparent",
            // border: "1px solid black",
            width: "100%",
            height: "100%",
            fontSize: "1rem",
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "#7065f0",
          padding: "0.8rem 2.5rem",
          borderRadius: "10px",
          width: "fit-content",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div style={{ width: "1rem" }}>
          <img src={search_logo} alt="img" style={{ width: "100%" }} />
        </div>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            whiteSpace: "noWrap",
          }}
          className={styles.buttontext}
        >
          Find builder
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
