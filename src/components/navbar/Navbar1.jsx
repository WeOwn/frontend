import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "./logo.png";
import Vector from "./Vector.png";
import styles from "./styles.module.css";
import NavDropdown from "../../Atoms/navdropdown";
import hamburger from "./hamburger.png";
import userimg from "./userimg.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/appslice";
import Chatbot from "../chatbot/Chatbot";

const Navbar1 = () => {
  const userDetail = useSelector((store) => store.user);
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
            className={`${styles.view} ${styles.navoption}`}
            // onMouseOver={handleMouseOver}
          >
            <span>View &amp; Buy</span>
            <div style={{ width: "0.7rem" }}>
              <img
                src={Vector}
                alt="arrow"
                style={{ width: "100%", height: "100%" }}
                className={`${styles.rotate180} ${
                  isDropdownOpen ? styles.rotate1802 : null
                }`}
              />
            </div>
          </li>
          <div className={styles.dropdown} onMouseOver={handleMouseOver}>
            <NavDropdown
              navdropdownlist={navdropdownlist}
              closeDropdown={handleMouseOut}
            />
          </div>

          {/* </li> */}

          <li className={styles.navoption}>
            <span>Search Builders</span>
          </li>
          <Link
            to="/investment_homepage"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={styles.navoption}>
              <span>Group Investment</span>
            </li>
          </Link>

          <li className={styles.navoption}>
            <span>List Property</span>
          </li>

          <li className={styles.navoption}>
            <span>Compare</span>
          </li>
        </ul>
      </div>
      <div className={styles.navRight}>
        <button
          className={styles.hamburgerBtn}
          onClick={handlesideopen}
          aria-label="Open menu"
        >
          <img src={hamburger} alt="" />
        </button>

        <Link to={"/activity"} className={styles.avatarLink}>
          <div className={styles.avatar}>
            <img src={userimg} alt="Account" />
          </div>
        </Link>
      </div>

      {/* Chatbot Component — floating dock is the only entry point now */}
      <Chatbot />
    </nav>
  );
};

export default Navbar1;
