import React, { useState } from "react";
import styles from "./styles.module.css";
import user1 from "./user1.png";
import down_arrow from "./down_arrow.svg";
import left_arrow from "./left_arrow.svg";
import SearchBardrop from "../../Atoms/searchbardrop/SearchBardrop";

const Sidebar = ({ handleside5close }) => {
  const [openDropdown, setOpenDropdown] = useState(0);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? 0 : index);
  };

  const list1 = ["Post Property", "Dealer Services", "Builder Services"];

  return (
    <div className={styles.sidebarContainer}>
      <div
        style={{
          backgroundColor: "white",
          // marginTop: "2rem",
          paddingBlock: "1rem",
          paddingRight: "5rem",
          paddingLeft: "1rem",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "0.8rem",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            boxShadow: " 0 0 10px lightgrey",
            padding: "0.6rem 0.8rem",
            // border: "1px solid black",
            borderRadius: "15px",
          }}
        >
          <img src={user1} alt="userlogo" />
        </div>
        <div>
          <div
            style={{
              whiteSpace: "nowrap",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            My Account
          </div>
          <div
            style={{ fontSize: "0.75rem", color: "grey", marginTop: "0.2rem" }}
          >
            Login/Register
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          //   backgroundColor: "yellow",
          margin: "1rem 0 0 ",
          alignItems: "center",
          width: "92%",
        }}
      >
        <span
          style={{ position: "absolute", left: "-1.5rem", cursor: "pointer" }}
          onClick={() => handleside5close()}
        >
          <img src={left_arrow} alt="img" />
        </span>
        <span>
          <h4 style={{ fontSize: "1.2rem", fontWeight: "650", color: "black" }}>
            For Dealers
          </h4>
        </span>
      </div>
      <div className={styles.sections}>
        <div className={styles.section1}>
          <ul>
            <li onClick={() => toggleDropdown(1)}>
              <span>For Dealers/Builders</span>

              <span>
                <img src={down_arrow} alt="down_arrow" />
              </span>
            </li>
            {openDropdown === 1 ? <SearchBardrop list={list1} /> : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
