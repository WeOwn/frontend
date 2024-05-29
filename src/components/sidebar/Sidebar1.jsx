import React, { useState } from "react";
import styles from "./styles.module.css";
import user1 from "./user1.png";
import down_arrow from "./down_arrow.svg";
import right_arrow from "./right_arrow.svg";
import SearchBardrop from "../../Atoms/searchbardrop/SearchBardrop";
import a1 from "./1.svg";
import a2 from "./2.svg";
import a3 from "./3.svg";
import a4 from "./4.svg";
import a5 from "./5.svg";
import a6 from "./6.svg";
import a7 from "./7.svg";
import a8 from "./8.svg";
import a9 from "./9.svg";
import a10 from "./10.svg";
import a11 from "./11.svg";
import a12 from "./12.svg";
import star from "./star.svg";
import fraud from "./fraud.svg";

const Sidebar1 = ({
  handleside2open,
  handleside3open,
  handleside4open,
  handleside5open,
}) => {
  const [openDropdown, setOpenDropdown] = useState(0);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? 0 : index);
  };

  const list = ["Contacted Property", "Seen Property", "Saved Search List"];

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

      <div className={styles.sections}>
        <div className={styles.section1}>
          <ul>
            <li>
              <div className={styles.listsection1}>
                <span>
                  <img src={a1} alt="img" />
                </span>
                <span>Orders & Payments</span>
              </div>
            </li>
            <li>
              <div className={styles.listsection1}>
                <span>
                  <img src={a2} alt="img" />
                </span>
                <div>
                  <span>My Articles & News</span>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "grey",
                      marginTop: "0.2rem",
                    }}
                  >
                    posted by you
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.listsection1}>
                <span>
                  <img src={a3} alt="img" />
                </span>
                <span>Saved Properties</span>
              </div>
            </li>
            <li onClick={() => toggleDropdown(1)}>
              <span>
                <div className={styles.listsection1}>
                  <span>
                    <img src={a4} alt="img" />
                  </span>
                  <span>My Activity</span>
                </div>
              </span>
              <span>
                <img src={down_arrow} alt="down_arrow" />
              </span>
            </li>
            {openDropdown === 1 ? <SearchBardrop list={list} /> : null}
          </ul>
        </div>
        <hr />
        <div className={styles.section2}>
          <ul>
            <li onClick={() => handleside2open()}>
              <span>
                <div className={styles.listsection1}>
                  <span>
                    <img src={a5} alt="img" />
                  </span>
                  <span>For Buyers</span>
                </div>
              </span>
              <span>
                <img src={right_arrow} alt="down_arrow" />
              </span>
            </li>
            <li onClick={() => handleside3open()}>
              <span>
                <div className={styles.listsection1}>
                  <span>
                    <img src={a6} alt="img" />
                  </span>
                  <span>ForTentants</span>
                </div>
              </span>
              <span>
                <img src={right_arrow} alt="down_arrow" />
              </span>
            </li>
            <li onClick={() => handleside4open()}>
              <span>
                <div className={styles.listsection1}>
                  <span>
                    <img src={a7} alt="img" />
                  </span>
                  <span>For Owners</span>
                </div>
              </span>
              <span>
                <img src={right_arrow} alt="down_arrow" />
              </span>
            </li>
            <li onClick={() => handleside5open()}>
              <span>
                <div className={styles.listsection1}>
                  <span>
                    <img src={a8} alt="img" />
                  </span>
                  <span>For Dealers/Builders</span>
                </div>
              </span>
              <span>
                <img src={right_arrow} alt="down_arrow" />
              </span>
            </li>
          </ul>
        </div>
        <hr />
        <div className={styles.section3}>
          <ul>
            <li>
              <div className={styles.listsection1}>
                <span>
                  <img src={a9} alt="img" />
                </span>
                <span>Area Guides</span>
              </div>
            </li>
            <li>
              <div className={styles.listsection1}>
                <span>
                  <img src={a10} alt="img" />
                </span>
                <span>Property Images</span>
              </div>
            </li>
            <li>
              <div className={styles.listsection1}>
                <span>
                  <img src={a11} alt="img" />
                </span>
                <span>Property Videos</span>
              </div>
            </li>
            <li>
              <div className={styles.listsection1}>
                <span>
                  <img src={a12} alt="img" />
                </span>
                <span>Articles & News</span>
              </div>
            </li>
          </ul>
        </div>
        <hr />
        <div className={styles.section4}>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className={styles.lastdiv}>
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",

            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
            fontWeight: "650",
            fontSize: "1rem",
          }}
        >
          <div className={styles.listsection1}>
            <span>
              <img src={star} alt="img" />
            </span>
            <span>Help Center</span>
          </div>
          <span>
            <img src={right_arrow} alt="down_arrow" />
          </span>
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",

            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
            fontWeight: "650",
            fontSize: "1rem",
          }}
        >
          <div className={styles.listsection1}>
            <span>
              <img src={fraud} alt="img" />
            </span>
            <span>Report Fraud</span>
          </div>
          <span>
            <img src={right_arrow} alt="down_arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar1;
