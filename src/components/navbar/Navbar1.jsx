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
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              gap: "0.3rem",
              cursor: "pointer",
            }}
            className={`${styles.view} ${styles.navoption}`}
            onMouseOver={handleMouseOver}
          >
            <span>View & Buy</span>
            <div style={{ width: "0.7rem" }}>
              <img
                src={Vector}
                alt="arrow"
                style={{ width: "100%", height: "100%" }}
                className={isDropdownOpen ? styles.rotate180 : ""}
              />
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
            to="/investment_homepage"
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
            style={{ height: "70%", width: "70%", cursor: "pointer" }}
          />
        </div>
        <Link to={userDetail.isLoggedIn ? "/user/profile" : "/login"}>
          <div
            style={{
              backgroundColor: "white",
              // padding: "0.2rem",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "1.5rem",
              height: "1.5rem",
              borderRadius: "50%",
            }}
          >
            <img
              src={userimg}
              alt="icon"
              style={{ height: "50%", width: "50%" }}
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar1;
