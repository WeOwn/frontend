// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "./logo.png";
import Vector from "./Vector.png";
import styles from "./styles.module.css";
import Dropdown from "../../Atoms/dropdown/Dropdown";
import hamburger from "./hamburger.png";
import userimg from "./userimg.png";
import Sidebar1 from "../../components/sidebar/Sidebar1";
import Sidebar2 from "../../components/sidebar/Sidebar2";
import Sidebar3 from "../../components/sidebar/Sidebar3";
import Sidebar4 from "../../components/sidebar/Sidebar4";
import Sidebar5 from "../../components/sidebar/Sidebar5";
import logowhite from "./logowhite.png";

import styles2 from "./navbar2.module.css";

import hamburger2 from "./hamburger2.png";

import searchlogo from "./searchlogo.png";
// import Sidebar from "../sidebar/Sidebar";

function Navbar({ changenav }) {
  const [issideopen, setIssideopen] = useState(false);
  const [isside2open, setIsside2open] = useState(false);
  const [isside3open, setIsside3open] = useState(false);
  const [isside4open, setIsside4open] = useState(false);
  const [isside5open, setIsside5open] = useState(false);

  const handlesideopen = () => {
    setIssideopen(true);
  };
  const handlesideclose = () => {
    setIssideopen(false);
  };
  const handleside2open = () => {
    setIsside2open(true);
  };
  const handleside2close = () => {
    setIsside2open(false);
  };
  const handleside3open = () => {
    setIsside3open(true);
  };
  const handleside3close = () => {
    setIsside3open(false);
  };
  const handleside4open = () => {
    setIsside4open(true);
  };
  const handleside4close = () => {
    setIsside4open(false);
  };
  const handleside5open = () => {
    setIsside5open(true);
  };
  const handleside5close = () => {
    setIsside5open(false);
  };

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

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  //
  return (
    <div>
      <div>
        {issideopen && (
          <div
            className={styles.sidebarouterContainer}
            onClick={handlesideclose}
          ></div>
        )}
        {issideopen && (
          <Sidebar1
            handleside2open={handleside2open}
            handleside3open={handleside3open}
            handleside4open={handleside4open}
            handleside5open={handleside5open}
          />
        )}
        {issideopen && isside2open && (
          <Sidebar2 handleside2close={handleside2close} />
        )}
        {issideopen && isside3open && (
          <Sidebar3 handleside3close={handleside3close} />
        )}
        {issideopen && isside4open && (
          <Sidebar4 handleside4close={handleside4close} />
        )}
        {issideopen && isside5open && (
          <Sidebar5 handleside5close={handleside5close} />
        )}
      </div>
      {!changenav ? (
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
            <div onClick={() => handlesideopen()}>
              <img
                src={hamburger}
                alt="icon"
                style={{ height: "60%", width: "60%", cursor: "pointer" }}
              />
            </div>
            <Link to="/login">
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
            </Link>
          </div>
        </nav>
      ) : (
        <nav className={styles2.navbar}>
          <Link to="/">
            <div className={styles2.logo}>
              <img
                src={logowhite}
                alt="Logo"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Link>
          <div className={styles2.center}>
            <div className={styles2.dropdown1}>
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
            <div className={styles2.navCenter}>
              <div className={styles2.searchbar}>
                <div className={styles2.dropdowndiv}>
                  <select style={{ border: "none", outline: "none" }}>
                    <option>View & Buy</option>
                    <option>Search Builders</option>
                    <option>Group Investment</option>
                    <option>List Property</option>
                    <option>Compare</option>
                  </select>
                </div>
                <div className={styles2.searchtext}>
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
          <div className={styles2.navRight}>
            {/* <Link to="/signup" className={styles2.registerButton}>
          Register
        </Link>
        <Link to="/login" className={styles2.loginButton}>
          Login
        </Link> */}
            <div onClick={handlesideopen}>
              <img
                src={hamburger2}
                alt="icon"
                style={{ height: "60%", width: "60%", cursor: "pointer" }}
              />
            </div>
            <Link to="/login">
              <div
                style={{
                  backgroundColor: "White",
                  // boxShadow: "2px 2px 3px 0 black",
                  padding: "0.2rem",
                  borderRadius: "999px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={userimg}
                  alt="icon"
                  style={{ height: "80%", width: "80%" }}
                />
              </div>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
