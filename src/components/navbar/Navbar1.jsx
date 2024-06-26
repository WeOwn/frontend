import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "./logo.png";
import Vector from "./Vector.png";
import styles from "./styles.module.css";
import NavDropdown from "../../Atoms/navdropdown";
import hamburger from "./hamburger.png";
import userimg from "./userimg.png";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/appslice";

const Navbar1 = () => {
  const dispatch = useDispatch();
  const handlesideopen = () => {
    dispatch(toggleSidebar());
  };
  const navdropdownlist = [
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

  const handleMouseOver = () => {
    setDropdownOpen(true);
  };

  const handleMouseOut = () => {
    setDropdownOpen(false);
  };
  return (
    <nav className={styles.navbar}>
      <Link to="/home">
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
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.3rem",
            }}
            className={`${styles.view} ${styles.navoption}`}
          >
            <span style={{ cursor: "pointer" }} onMouseOver={handleMouseOver}>
              View & Buy
            </span>
            <div>
              <img src={Vector} alt="arrow" />
            </div>
          </li>
          {isDropdownOpen && (
            <NavDropdown
              navdropdownlist={navdropdownlist}
              closeDropdown={handleMouseOut}
            />
          )}
          {/* </li> */}

          <li className={styles.navoption}>
            <span style={{ cursor: "pointer" }}>Search Builders</span>
          </li>
          <Link
            to="/group_investment"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={styles.navoption}>
              <span style={{ cursor: "pointer" }}>Group Investment</span>
            </li>
          </Link>

          <li className={styles.navoption}>
            <span style={{ cursor: "pointer" }}>List Property</span>
          </li>

          <li className={styles.navoption}>
            <span style={{ cursor: "pointer" }}>Compare</span>
          </li>
        </ul>
      </div>
      <div className={styles.navRight}>
        <div onClick={handlesideopen}>
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
  );
};

export default Navbar1;
