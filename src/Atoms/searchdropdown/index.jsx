import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

import { useDispatch, useSelector } from "react-redux";

import { setFilters } from "../../redux/filterslice";

const Index = ({ dropdownname, logo, style, list, filterType = "city" }) => {
  const dispatch = useDispatch();
  const handleAppliedfilter = (name) => {

    dispatch(setFilters({ type: filterType, value: name }));

  };
  const { bgcolor, border, droplogobg, namecolor, flexgap, selectBoxwidth } =
    style;
  const [isopen, setIsopen] = useState(-1);
  const [selected, setSelected] = useState(dropdownname);
  const dropdownRef1 = useRef(null);

  const city = useSelector((store) => store.filters.city);
  const displayValue = filterType === "city" ? city || selected : selected;
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
    handleAppliedfilter(name);
    setSelected(name);
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
      <span className={styles.name} style={{ color: namecolor }}>
        {displayValue}
      </span>
      <div className={styles.droplogoBg} style={{ backgroundColor: droplogobg }}>
        {logo && (
          <div className={styles.droplogo}>
            <img
              src={logo}
              alt=""
              style={{ width: "100%", height: "100%" }}
              className={isopen === 0 ? styles.rotate180 : ""}
            />
          </div>
        )}
      </div>

      {isopen !== -1 && (
        <div className={styles.optionBox}>
          <ul>
            {list?.map((name, index) => {
              return (
                <li key={name} onClick={() => handlevar(name)}>
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
