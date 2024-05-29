// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "./logo.png";
import Vector from "./Vector.png";
import styles from "./styles.module.css";
import Dropdown from "../../Atoms/dropdown/Dropdown";
import hamburger from "./hamburger.png";
import userimg from "./userimg.png";
// import Sidebar from "../sidebar/Sidebar";

function Navbar({ handlesideopen }) {
  const megaMenuData = [
    {
      category: "Residential",
      subcategories: [
        {
          heading: "Ready To Move",
          para: "Constructed and finished properties that are ready for immediate occupancy",
        },
        {
          heading: "Under-Construction",
          para: "Constructed and finished properties that are ready for immediate occupancy",
        },
        {
          heading: "Independent House",
          para: "Constructed and finished properties that are ready for immediate occupancy",
        },
        {
          heading: "Builder Floor",
          para: "Constructed and finished properties that are ready for immediate occupancy",
        },
      ],
    },
    {
      category: "Land/Plot",
      subcategories: [
        {
          heading: "Plots in different Cities",
          para: "Constructed and finished properties that are ready for immediate occupancy",
        },
      ],
    },
    {
      category: "Commercial",
      subcategories: [
        {
          heading: "Office",
          para: "Constructed and finished properties that are ready for immediate occupancy",
        },
        {
          heading: "Shop",
          para: "Constructed and finished properties that are ready for immediate occupancy",
        },
        {
          heading: "Complex",
          para: "Constructed and finished properties that are ready for immediate occupancy",
        },
        {
          heading: "Co-working",
          para: "Constructed and finished properties that are ready for immediate occupancy",
        },
        {
          heading: "Mall",
          para: "Constructed and finished properties that are ready for immediate occupancy",
        },
      ],
    },
    {
      category: "Top Localities",
      subcategories: [
        {
          heading: "Top Localities",
          para: "Constructed and finished properties that are ready for immediate occupancy",
        },
      ],
    },
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const opensidebar = () => {
    handlesideopen();
  };

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  //
  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/">
          <div className={styles.logo}>
            <img
              src={LogoImage}
              alt="Logo"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Link>
        <div className={styles.navCenter}>
          <ul className={styles.navOptions}>
            <li
              className={`${styles.navItem} ${styles.megaDropdownContainer}`}
              onMouseEnter={openDropdown}
              // onMouseLeave={closeDropdown}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "0.3rem",
                }}
              >
                <Link to="">View & Buy</Link>
                <div>
                  <img src={Vector} alt="arrow" />
                </div>
              </div>
              {isDropdownOpen && (
                <Dropdown
                  megaMenuData={megaMenuData}
                  isOpen={isDropdownOpen}
                  openDropdown={openDropdown}
                  closeDropdown={closeDropdown}
                />
              )}
            </li>
            <li>
              <Link to="">Search Builders</Link>
            </li>
            <li>
              <Link to="">Group Investment</Link>
            </li>
            <li>
              <Link to="">List Property</Link>
            </li>
            <li>
              <Link to="">Compare</Link>
            </li>
          </ul>
        </div>
        <div className={styles.navRight}>
          {/* <Link to="/signup" className={styles.registerButton}>
          Register
        </Link>
        <Link to="/login" className={styles.loginButton}>
          Login
        </Link> */}
          <div onClick={opensidebar}>
            <img
              src={hamburger}
              alt="icon"
              style={{ height: "60%", width: "60%" }}
            />
          </div>
          <div
            style={{
              backgroundColor: "White",
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
    </div>
  );
}

export default Navbar;
