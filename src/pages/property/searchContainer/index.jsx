import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import down_arrow from "./down_arrow.svg";
import Rangefilter from "../../../Atoms/rangeSlider";
import search_logo from "./search_logo.svg";
import droplogo1 from "./droplogo1.svg";
import droplogo2 from "./droplogo2.svg";
import droplogo3 from "./droplogo3.svg";
import droplogo4 from "./droplogo4.svg";
import droplogo5 from "./droplogo5.svg";

const Search = () => {
  const [isopen, setIsopen] = useState(-1);
  const [dropdownname, setdropdownname] = useState([
    "Location",
    "Property Type",
    "Price Range",
    "Property Size",
    "Build Year",
  ]);

  // const dropdownRefs = useRef([]);

  const handleIsopen = (id) => {
    if (isopen === id) setIsopen(-1);
    else setIsopen(id);
  };

  const handlevar = (name, id) => {
    setdropdownname((prevState) => {
      return prevState.map((item, idx) => {
        return idx === id ? name : item;
      });
    });

    setIsopen(-1);
  };

  // const handleClickOutside = (event) => {
  //   if (
  //     dropdownRefs.current.some(
  //       (ref) => ref.current && !ref.current.contains(event.target)
  //     )
  //   ) {
  //     setIsopen(-1);
  //   }
  // };

  const list = [
    {
      id: 0,
      img: droplogo1,
      location: [
        "Banglore",
        "Chennai",
        "Mumbai",
        "Jaipur",
        "Kolkata",
        "Mysore",
        "Darjeeling",
        "Ahemdabad",
      ],
    },

    {
      id: 1,
      img: droplogo2,
      location: [
        "Residential Property",
        "Commercial Property",
        "Land",
        "Industral Property",
        "Farm Houses",
        "Builder floor Apartments",
        "Holiday homes",
        "Heritage property",
      ],
    },

    {
      id: 2,
      img: droplogo3,
      location: ["hello3"],
    },
    {
      id: 3,
      img: droplogo4,
      location: ["hello4"],
    },
    {
      id: 4,
      img: droplogo5,
      location: ["2015", "2018", "2020"],
    },
  ];

  // useEffect(() => {
  //   // Initialize refs array if not already done
  //   if (dropdownRefs.current.length !== list.length) {
  //     dropdownRefs.current = Array(list.length)
  //       .fill()
  //       .map((_, i) => dropdownRefs.current[i] || React.createRef());
  //   }
  // }, [list.length]);

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.section1}>
        <div className={styles.inputBox}>
          <input
            type="text"
            placeholder="Search For Property"
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
            padding: "0.8rem 1rem",
            borderRadius: "10px",
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
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
            Find Property
          </button>
        </div>
      </div>

      <div className={styles.section2}>
        {list.map((obj, idx) => {
          return (
            <div
              className={styles.selectBox}
              key={obj.id}
              // ref={dropdownRefs.current[idx]}
              onClick={() => handleIsopen(idx)}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
              >
                <div style={{ width: "0.9rem" }}>
                  <img src={obj.img} alt="logo" style={{ width: "100%" }} />
                </div>
                <span
                  style={{
                    fontSize: "0.9rem",
                    whiteSpace: "nowrap",
                    color: "#999999",
                    paddingLeft: "0.5rem",
                    borderLeft: "1px solid #E1E1E1",
                    // background: "red",
                    width: "7rem",
                    overflow: "hidden",
                  }}
                >
                  {dropdownname[idx]}
                </span>
              </div>
              <div className={styles.arrowimgdiv}>
                <img
                  src={down_arrow}
                  alt="img"
                  style={{ width: "100%", height: "100%" }}
                  className={isopen === idx && styles.rotate180}
                />
              </div>
              {isopen === idx && (
                <div className={styles.optionBox}>
                  {idx === 2 || idx === 3 ? (
                    <Rangefilter />
                  ) : (
                    <ul>
                      {obj?.location?.map((name, index) => {
                        return (
                          <li
                            onClick={() => handlevar(name, idx)}
                            style={{ whiteSpace: "nowrap" }}
                          >
                            {name}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
