import React from "react";
import { Link } from "react-router-dom";
import logowhite from "./logowhite.png";
import styles2 from "./navbar2.module.css";
import styles from "./styles.module.css";
import hamburger2 from "./hamburger2.png";
import userimg from "./userimg.png";
import searchlogo from "./searchlogo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/appslice";
import Chatbot from "../chatbot/Chatbot";

const Navbar2 = () => {
  const userDetail = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handlesideopen = () => {
    dispatch(toggleSidebar());
  };
  return (
    <nav className={styles2.navbar}>
      <Link to="/home">
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
          <p>Buy in</p>
          <select>
            <option style={{ color: "black" }}>Banglore</option>
            <option style={{ color: "black" }}>Delhi</option>
            <option style={{ color: "black" }}>Noida</option>
          </select>
        </div>
        <div className={styles2.navCenter}>
          <div className={styles2.searchbar}>
            <div className={styles2.dropdowndiv}>
              <select style={{ border: "none", outline: "none" }}>
                <option>View &amp; Buy</option>
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
          <div style={{ cursor: "pointer", flexShrink: 0 }}>
            <img
              src={searchlogo}
              style={{ height: "70%", width: "70%" }}
              alt="search"
            />
          </div>
        </div>
      </div>
      <div className={styles2.navRight}>
        <button
          className={styles.hamburgerBtn}
          onClick={handlesideopen}
          aria-label="Open menu"
        >
          <img src={hamburger2} alt="" />
        </button>

        <Link to={"/activity"} className={styles.avatarLink}>
          <div className={styles.avatar}>
            <img src={userimg} alt="Account" />
          </div>
        </Link>
      </div>
      
      {/* AI Assistant Chatbot */}
      <Chatbot />
    </nav>
  );
};

export default Navbar2;
