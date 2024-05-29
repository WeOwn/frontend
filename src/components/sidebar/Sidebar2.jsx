import React, { useState } from "react";
import styles from "./styles.module.css";
import user1 from "./user1.png";
import down_arrow from "./down_arrow.svg";
import left_arrow from "./left_arrow.svg";
import SearchBardrop from "../../Atoms/searchbardrop/SearchBardrop";

const Sidebar = ({ handleside2close }) => {
  const [openDropdown, setOpenDropdown] = useState(0);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? 0 : index);
  };

  const list1 = [
    "Verified Properties",
    "Flats",
    "Builder Floors",
    "Independent House",
    "Plots/Land",
    "Service Apartments",
    "New Projects",
  ];
  const list2 = [
    "Verified Properties",
    "Ready to Move office spaces",
    "Co-working office spaces",
    "Shops",
    "Showrooms",
    "Industrial Lands/Plots",
    "Commercial Lands/Inst. Lands",
    "Agricultural/Farm Land",
  ];
  const list3 = [
    "Verified Properties",
    "Ready to Move office spaces",
    "Co-working office spaces",
    "Shops",
    "Showrooms",
    "Industrial Lands/Plots",
    "Commercial Lands/Inst. Lands",
    "Agricultural/Farm Land",
  ];
  const list4 = [
    "Verified Properties",
    "Ready to Move office spaces",
    "Co-working office spaces",
    "Shops",
    "Showrooms",
    "Industrial Lands/Plots",
    "Commercial Lands/Inst. Lands",
    "Agricultural/Farm Land",
  ];

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
          onClick={() => handleside2close()}
        >
          <img src={left_arrow} alt="img" />
        </span>
        <span>
          <h4 style={{ fontSize: "1.2rem", fontWeight: "650", color: "black" }}>
            For Buyers
          </h4>
        </span>
      </div>
      <div className={styles.sections}>
        <div className={styles.section1}>
          <ul>
            <li onClick={() => toggleDropdown(1)}>
              <span>Buy a home in Banglore</span>

              <span>
                <img src={down_arrow} alt="down_arrow" />
              </span>
            </li>
            {openDropdown === 1 ? <SearchBardrop list={list1} /> : null}
            <li onClick={() => toggleDropdown(2)}>
              <span>Commercial in Banglore</span>

              <span>
                <img src={down_arrow} alt="down_arrow" />
              </span>
            </li>
            {openDropdown === 2 ? <SearchBardrop list={list2} /> : null}
            <li onClick={() => toggleDropdown(3)}>
              <span>Top Areas for Residential</span>

              <span>
                <img src={down_arrow} alt="down_arrow" />
              </span>
            </li>
            {openDropdown === 3 ? <SearchBardrop list={list3} /> : null}
            <li onClick={() => toggleDropdown(4)}>
              <span>Top Areas For Commercial</span>

              <span>
                <img src={down_arrow} alt="down_arrow" />
              </span>
            </li>
            {openDropdown === 4 ? <SearchBardrop list={list4} /> : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
