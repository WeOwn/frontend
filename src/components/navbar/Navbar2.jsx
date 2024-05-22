// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logowhite from "./logowhite.png";
import Vector from "./Vector.png";
import styles from "./navbar2.module.css";
import Dropdown from "../../Atoms/dropdown/Dropdown";
import hamburger2 from "./hamburger2.png";
import userimg from "./userimg.png";
import searchlogo from "./searchlogo.png";

function Navbar({ navbarColor }) {
  const megaMenuData = [
    {
      category: "Residential",
      subcategories: [
        "Ready To Move",
        "Subcategory 1.2",
        "Subcategory 1.3",
        "Subcategory 1.4",
      ],
    },
    {
      category: "Land/Plot",
      subcategories: ["Subcategory 2.1"],
    },
    {
      category: "Commercial",
      subcategories: [
        "Subcategory 2.1",
        "Subcategory 2.2",
        "Subcategory 2.3",
        "Subcategory 2.4",
        "Subcategory 2.5",
      ],
    },
    {
      category: "Top Localities",
      subcategories: ["Subcategory 2.1"],
    },
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  //
  return (
    <nav className={styles.navbar} style={{ backgroundColor: navbarColor }}>
      <Link to="/">
        <div className={styles.logo}>
          <img src={logowhite} alt="Logo" />
        </div>
      </Link>
      <div className={styles.center}>
        <div className={styles.dropdown1}>
          <p style={{ color: "white", whiteSpace: "nowrap" }}>Buy in</p>
          <select
            style={{
              outline: "none",
              border: "none",
              color: "white",
              fontWeight: "bold",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <option style={{ color: "black" }}>Banglore</option>
            <option style={{ color: "black" }}>Delhi</option>
            <option style={{ color: "black" }}>Noida</option>
          </select>
        </div>
        <div className={styles.navCenter}>
          <div className={styles.searchbar}>
            <div className={styles.dropdowndiv}>
              <select style={{ border: "none", outline: "none" }}>
                <option>View & Buy</option>
                <option>Search Builders</option>
                <option>Group Investment</option>
                <option>List Property</option>
                <option>Compare</option>
              </select>
            </div>
            <div className={styles.searchtext}>
              <input
                placeholder="Search for locality, landmark or builder"
                style={{
                  outline: "none",
                  border: "none",
                }}
              />
            </div>
          </div>
          <div style={{ cursor: "pointer" }}>
            <img
              src={searchlogo}
              style={{ height: "70%", width: "70%" }}
              alt="search"
            />
          </div>
        </div>
      </div>
      <div className={styles.navRight}>
        {/* <Link to="/signup" className={styles.registerButton}>
          Register
        </Link>
        <Link to="/login" className={styles.loginButton}>
          Login
        </Link> */}
        <div>
          <img
            src={hamburger2}
            alt="icon"
            style={{ height: "60%", width: "60%" }}
          />
        </div>
        <div
          style={{
            backgroundColor: "White",
            // boxShadow: "2px 2px 3px 0 black",
            padding: "0.2rem",
            borderRadius: "999px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={userimg}
            alt="icon"
            style={{ height: "80%", width: "80%" }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
