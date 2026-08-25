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
            className={styles.searchInput}
          />
        </div>
        <button className={styles.findButton}>
          <img src={search_logo} alt="" className={styles.findButtonIcon} />
          <span className={styles.buttontext}>Find Property</span>
        </button>
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
              <div className={styles.selectBoxLabel}>
                <div style={{ width: "0.9rem" }}>
                  <img src={obj.img} alt="" style={{ width: "100%" }} />
                </div>
                <span className={styles.selectBoxText}>
                  {dropdownname[idx]}
                </span>
              </div>
              <div className={styles.arrowimgdiv}>
                <img
                  src={down_arrow}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                  className={isopen === idx ? styles.rotate180 : ""}
                />
              </div>
              {isopen === idx && (
                <div className={styles.optionBox}>
                  {idx === 2 || idx === 3 ? (
                    <Rangefilter />
                  ) : (
                    <ul>
                      {obj?.location?.map((name) => {
                        return (
                          <li
                            key={name}
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
