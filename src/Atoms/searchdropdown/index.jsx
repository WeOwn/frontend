import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

const Index = ({ dropdownname, logo, style, list }) => {
  const { bgcolor, border, droplogobg, namecolor, flexgap, selectBoxwidth } =
    style;
  const [isopen, setIsopen] = useState(-1);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const [name, setname] = useState(dropdownname);
  const handleIsopen = (id) => {
    if (isopen === id) setIsopen(-1);
    else setIsopen(id);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
      setIsopen(-1);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlevar = (name) => {
    setname(name);
    setIsopen(-1);
  };
  return (
    <div
      className={styles.selectBox}
      ref={dropdownRef1}
      onClick={() => handleIsopen(0)}
      style={{
        backgroundColor: bgcolor,
        border: border,
        "--flexgap": flexgap,
        "--selectBoxwidth": selectBoxwidth,
      }}
    >
      <span
        style={{
          fontSize: "1rem",
          whiteSpace: "nowrap",
          fontWeight: "600",
          color: namecolor,
        }}
      >
        {name}
      </span>
      <div
        style={{
          backgroundColor: droplogobg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "1.5rem",
          height: "1.5rem",
          padding: "0.2rem",
          borderRadius: "50%",
        }}
      >
        <div className={styles.droplogo}>
          <img
            src={logo}
            alt="img"
            style={{ width: "100%", height: "100%" }}
            className={isopen === 0 && styles.rotate180}
          />
        </div>
      </div>

      {isopen !== -1 && (
        <div className={styles.optionBox}>
          <ul>
            {list?.map((name, index) => {
              return (
                <li
                  onClick={() => handlevar(name)}
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
  );
};

export default Index;
