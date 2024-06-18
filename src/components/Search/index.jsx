import React, { useEffect, useRef, useState } from "react";
import Input from "../../Atoms/input";
import Button from "../../Atoms/Button";
import classNames from "classnames";
import styles from "./styles.module.css";
import down_arrow from "./down_arrow.svg";
import { Link } from "react-router-dom";

const Search = () => {
  const [isopen, setIsopen] = useState(-1);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const [dropdownname, setdropdownname] = useState("Banglore");
  const handleIsopen = (id) => {
    if (isopen === id) setIsopen(-1);
    else setIsopen(id);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef1.current &&
      !dropdownRef1.current.contains(event.target) &&
      dropdownRef2.current &&
      !dropdownRef2.current.contains(event.target)
    ) {
      setIsopen(-1);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlevar = (name, id) => {
    // setdropdownname(name);
    setIsopen(-1);
  };

  // function serachInputHandler(value) {

  // }

  const location = ["Banglore", "Delhi", "Ahemdabad"];

  return (
    <div>
      <div className={classNames(styles.search)}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            // background: "black",
          }}
          className={styles.searchover}
        >
          <div
            className={styles.selectBox}
            onClick={() => handleIsopen(0)}
            ref={dropdownRef1}
          >
            <span
              style={{
                fontSize: "1rem",
                whiteSpace: "nowrap",
                fontWeight: "550",
              }}
            >
              {dropdownname}
            </span>
            <div className={styles.arrowimgdiv}>
              <img
                src={down_arrow}
                alt="img"
                style={{ width: "100%", height: "100%" }}
                className={isopen === 0 && styles.rotate180}
              />
            </div>
          </div>

          <div className={styles.inputBox}>
            <input
              placeholder={"Search for locality, landmark or builder"}
              // onChange={(value) => {
              //   serachInputHandler(value);
              // }}
              style={{
                fontSize: "1rem",
                fontWeight: "550",
                letterSpacing: "normal",
                width: "100%",
                height: "100%",
                background: "transparent",
                color: "white",

                outline: "none",
                border: "none",
              }}
            />
          </div>
        </div>
        {/* <hr></hr> */}
        <Link to={"/properties_filter"}>
          <div>
            <Button type="primary">Search</Button>
          </div>
        </Link>

        {isopen === 0 && (
          <div className={styles.optionBox} ref={dropdownRef2}>
            <ul>
              {location?.map((name, index) => {
                return (
                  <li
                    onClick={() => handlevar(name, 0)}
                    style={{ whiteSpace: "nowrap", cursor: "pointer" }}
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
  );
};

export default Search;
