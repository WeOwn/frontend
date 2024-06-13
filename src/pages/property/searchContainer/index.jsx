import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import down_arrow from "./down_arrow.svg";
import Rangefilter from "../../../Atoms/rangeFilter";

const Search = () => {
  const [isopen, setIsopen] = useState(-1);
  const [dropdownname, setdropdownname] = useState([
    "Location",
    "Property Type",
    "Price Range",
    "Property Size",
    "Build Year",
  ]);

  const dropdownRefs = useRef([]);

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

  const handleClickOutside = (event) => {
    if (
      dropdownRefs.current.some(
        (ref) => ref.current && !ref.current.contains(event.target)
      )
    ) {
      setIsopen(-1);
    }
  };

  const list = [
    {
      id: 0,
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
      location: ["hello3"],
    },
    {
      id: 3,
      location: ["hello4"],
    },
    {
      id: 4,
      location: ["2015", "2018", "2020"],
    },
  ];

  useEffect(() => {
    // Initialize refs array if not already done
    if (dropdownRefs.current.length !== list.length) {
      dropdownRefs.current = Array(list.length)
        .fill()
        .map((_, i) => dropdownRefs.current[i] || React.createRef());
    }
  }, [list.length]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              whiteSpace: "nowrap",
            }}
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
              ref={dropdownRefs.current[idx]}
              onClick={() => handleIsopen(idx)}
            >
              <span
                style={{
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
                  color: "#999999",
                }}
              >
                {dropdownname[idx]}
              </span>
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
