import React, { useState } from "react";
import styles from "./styles.module.css";

import down_arrow from "./down_arrow.svg";
import left_arrow from "./left_arrow.svg";
import Dropdownlist from "../../Atoms/dropdownlist";
import Profilebox from "../../Atoms/profilebox";

const Sidebar = ({ heading, list, handlesideclose }) => {
  const arr = list.map(() => false);

  const [isopenDropdown, setIsOpenDropdown] = useState(arr);

  const handleisopendropdown = (index) => {
    setIsOpenDropdown((prevstate) => {
      return prevstate.map((state, id) => {
        return id === index ? !state : state;
      });
    });
  };

  return (
    <div className={styles.sidebarContainer}>
      <Profilebox sidebar={true} />
      <div className={styles.subHeader}>
        <span
          className={styles.backBtn}
          onClick={handlesideclose}
          role="button"
          aria-label="Back"
        >
          <img src={left_arrow} alt="" />
        </span>
        <h4 className={styles.subHeaderTitle}>{heading}</h4>
      </div>
      <div className={styles.sections}>
        <div className={styles.section1}>
          <ul>
            {list.map((dropdown, index) => {
              return (
                <div>
                  <li
                    onClick={() => handleisopendropdown(index)}
                    className={styles.listdiv}
                  >
                    <span>{dropdown.title}</span>

                    <span>
                      <img
                        src={down_arrow}
                        alt="down_arrow"
                        className={
                          isopenDropdown[index] === true ? styles.rotate180 : ""
                        }
                      />
                    </span>
                  </li>
                  {isopenDropdown[index] ? (
                    <Dropdownlist list={dropdown.dropdownlist} />
                  ) : null}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
