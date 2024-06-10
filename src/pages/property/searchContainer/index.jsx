import React, { useState } from "react";
import styles from "./styles.module.css";
import down_arrow from "./down_arrow.svg";
import { classNames } from "classnames";

const Search = () => {
  const [isopen, setIsopen] = useState(0);
  const [var1, setVar1] = useState("Location");
  const [var2, setVar2] = useState("Property Type");
  const [var3, setVar3] = useState("Price Range");
  const [var4, setVar4] = useState("Proerty Size");
  const [var5, setVar5] = useState("Build Year");

  const list1 = ["Banglore", "Delhi", "Noida"];
  const list2 = ["Land", "Commercial", "Industrial"];
  const list3 = ["10-20", "30-50", "60-70"];
  const list4 = ["1000 sq.ft", "2000 sq.ft", "3000 sq.ft"];
  const list5 = ["2015", "2018", "2020"];

  const handleIsopen = (id) => {
    if (isopen === id) setIsopen(0);
    else setIsopen(id);
  };

  const handlevar = (name, id) => {
    if (id === 1) setVar1(name);
    else if (id === 2) setVar2(name);
    else if (id === 3) setVar3(name);
    else if (id === 4) setVar4(name);
    else if (id === 5) setVar5(name);
    setIsopen(0);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.section1}>
        <input
          type="text"
          placeholder="Search For Property"
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            width: "70%",
            fontSize: "1.1rem",
          }}
        />

        <div
          style={{
            backgroundColor: "#7065f0",
            padding: "0.8rem 2.5rem",
            borderRadius: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              fontSize: "0.8rem",
            }}
          >
            Find Property
          </button>
        </div>
      </div>

      <div className={styles.section2}>
        <div>
          <div className={styles.selectBox} onClick={() => handleIsopen(1)}>
            <span
              style={{
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
                color: "#999999",
              }}
            >
              {var1}
            </span>
            <div className={styles.arrowimgdiv}>
              <img
                src={down_arrow}
                alt="img"
                style={{ width: "100%", height: "100%" }}
                className={isopen === 1 && styles.rotate180}
              />
            </div>
          </div>
          {isopen === 1 && (
            <div className={styles.optionBox}>
              <ul>
                {list1.map((name, index) => {
                  return (
                    <li
                      onClick={() => handlevar(name, 1)}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div>
          <div className={styles.selectBox} onClick={() => handleIsopen(2)}>
            <span
              style={{
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
                color: "#999999",
              }}
            >
              {var2}
            </span>
            <div className={styles.arrowimgdiv}>
              <img
                src={down_arrow}
                alt="img"
                style={{ width: "100%", height: "100%" }}
                className={isopen === 2 && styles.rotate180}
              />
            </div>
          </div>
          {isopen === 2 && (
            <div className={styles.optionBox}>
              <ul>
                {list2.map((name, index) => {
                  return (
                    <li
                      onClick={() => handlevar(name, 2)}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div>
          <div className={styles.selectBox} onClick={() => handleIsopen(3)}>
            <span
              style={{
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
                color: "#999999",
              }}
            >
              {var3}
            </span>
            <div className={styles.arrowimgdiv}>
              <img
                src={down_arrow}
                alt="img"
                style={{ width: "100%", height: "100%" }}
                className={isopen === 3 && styles.rotate180}
              />
            </div>
          </div>
          {isopen === 3 && (
            <div className={styles.optionBox}>
              <ul>
                {list3.map((name, index) => {
                  return (
                    <li
                      onClick={() => handlevar(name, 3)}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div>
          <div className={styles.selectBox} onClick={() => handleIsopen(4)}>
            <span
              style={{
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
                color: "#999999",
              }}
            >
              {var4}
            </span>
            <div className={styles.arrowimgdiv}>
              <img
                src={down_arrow}
                alt="img"
                style={{ width: "100%", height: "100%" }}
                className={isopen === 4 && styles.rotate180}
              />
            </div>
          </div>
          {isopen === 4 && (
            <div className={styles.optionBox}>
              <ul>
                {list4.map((name, index) => {
                  return (
                    <li
                      onClick={() => handlevar(name, 4)}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div>
          <div className={styles.selectBox} onClick={() => handleIsopen(5)}>
            <span
              style={{
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
                color: "#999999",
              }}
            >
              {var5}
            </span>
            <div className={styles.arrowimgdiv}>
              <img
                src={down_arrow}
                alt="img"
                style={{ width: "100%", height: "100%" }}
                className={isopen === 5 && styles.rotate180}
              />
            </div>
          </div>
          {isopen === 5 && (
            <div className={styles.optionBox}>
              <ul>
                {list5.map((name, index) => {
                  return (
                    <li
                      onClick={() => handlevar(name, 5)}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
