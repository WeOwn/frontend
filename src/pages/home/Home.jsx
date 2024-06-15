import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
// import Navbar2 from "../../components/navbar/Navbar2";
import styles from "./styles.module.css";
import Search from "../../components/Search";
import classNames from "classnames";
import OptionToogle from "../../Atoms/OptionToogle";
import card1 from "./card1.png";
import card2 from "./card2.png";
import { Propertycard } from "../../components/propertyCard/Propertycard";
import { Builderscard } from "../../components/builderscard/Builderscard";

import searchlogo from "./searchlogo.png";
import user1 from "./user1.png";
import Aisection from "./Aisection";
import Footer from "../../components/Footer/Footer";
import cloud from "./cloud.png";
import stardesign from "./stardesign.png";
import upright from "./upright.png";
import wishlist_btn from "./wishlist_btn.png";

import banner_img from "./banner_img.svg";
import { Link } from "react-router-dom";


function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  const handleHover1 = () => {
    setIsHovered1(true);
  };

  const handleLeave1 = () => {
    setIsHovered1(false);
  };

  const List1 = [
    {
      id: "1",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
    {
      id: "2",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
    {
      id: "3",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
  ];

  const List2 = [
    { id: "1", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "2", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "3", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
  ];
  const [changenav, setChangeNav] = useState(false);
  const handleScroll = () => {
    const heroSection = document.getElementById("hero-section");

    if (heroSection) {
      const heroSectionHeight = heroSection.offsetHeight;
      const navbarHeight = 76;
      console.log(heroSectionHeight);
      if (window.scrollY >= heroSectionHeight - navbarHeight) {
        setChangeNav(true);
      } else {
        setChangeNav(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar changenav={changenav} />
      <div className={styles.maindiv}>
        <div className={styles.HelloSection} id="hero-section">
          {/* <div className={styles.cloud1}>
            <img src={cloud} alt="cloudimg" className={styles.cloud} />
          </div>
          <div className={styles.cloud2}>
            <img src={cloud} alt="cloudimg" className={styles.cloud} />
          </div>
          <div className={styles.cloud3}>
            <img src={cloud} alt="cloudimg" className={styles.cloud} />
          </div>
          <div className={styles.cloud4}>
            <img src={cloud} alt="cloudimg" className={styles.cloud} />
          </div>
          <div className={styles.cloud5}>
            <img src={cloud} alt="cloudimg" className={styles.cloud} />
          </div> */}
          <div className={styles.helloContentContainer}>
            <div className={styles.mainheadingdiv}>
              <div className={`${styles.mainHeading}`}>
                Experience a 3D Real
              </div>
              <div className={`${styles.mainHeading}`}>Estate Platform</div>
            </div>

            <div className={styles.subHeading}>
              weown provides easy way to visualize your dream house in seconds.
              to visualize your dream house in seconds.
            </div>

            <div className={styles.optionTooglerDiv}>
              <OptionToogle />
              <div className={styles.searchContainer}>
                <Search />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.seconddiv}>
          <div>
            <img src={stardesign} alt="img" />
          </div>
          <div
            className={styles.home1}
            style={
              {
                // gap: "2rem",
                // flexWrap: "wrap",
                // paddingTop: "6rem",
              }
            }
          >
            <div className={styles.searchSection}>
              <div className={styles.searchSectionIntro}>
                <div className={styles.searchSectionHeader}>
                  What are you searching for?
                </div>
                <div className={styles.searchSectionDesc}>
                  <div>
                    Explore our handpicked selection of featured properties.
                    Each listing offers a glimpse into exceptional homes and
                    investments available through Weown. Click "View Details"
                    for more information.
                  </div>
                </div>

                <div className={styles.searchInputContainer}>
                  <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search"
                  />
                  <div
                    style={{ position: "absolute", right: "2%", top: "30%" }}
                  >
                    <img
                      src={searchlogo}
                      style={{ height: "70%", width: "70%" }}
                      alt="search"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.searchResults}>
                <Link to={"/properties"}>
                  <div
                    className={styles.Search_Properties}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                  >
                    <div className={styles.searchProperty}>
                      <div className={styles.propertyTitle}>Properties</div>
                      <div className={styles.propertydesc}>
                        Explore our handpicked selection of featured properties.
                        Each listing offers a glimpse into exceptional homes and
                        investments available through Weown. Click "View
                        Details" for more information.
                      </div>
                    </div>
                    <img
                      className={styles.propertyImage}
                      style={{
                        transform: isHovered ? "scale(1.3)" : "scale(1)",
                      }}
                      src={card1}
                      alt="Card"
                    />
                    <div className={styles.searchPropertyBg}></div>
                  </div>
                </Link>

                <Link to={"/builders"}>
                  <div
                    className={styles.Search_Properties}
                    onMouseEnter={handleHover1}
                    onMouseLeave={handleLeave1}
                  >
                    <div className={styles.searchProperty}>
                      <div className={styles.propertyTitle}>Builders</div>
                      <div className={styles.propertydesc}>
                        <p>
                          Explore our handpicked selection of featured
                          properties. Each listing offers a glimpse into
                          exceptional homes and investments available through
                          Weown. Click "View Details" for more information.
                        </p>
                      </div>
                    </div>
                    <img
                      className={styles.propertyImage}
                      style={{
                        transform: isHovered1 ? "scale(1.3)" : "scale(1)",
                      }}
                      src={card2}
                      alt="Card"
                    />
                    <div className={styles.searchPropertyBg}></div>
                  </div>
                </Link>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#EAEAEA",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                height: "18rem",
                paddingInline: "1rem",
                paddingBlock: "1.5rem",
                borderRadius: "10px",
                // width: "20rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  paddingBlock: "1rem",
                  paddingRight: "4rem",
                  paddingLeft: "1rem",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: "0.5rem",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
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
                <span style={{ whiteSpace: "nowrap" }}>My Account</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <p style={{ fontSize: "0.8rem", color: "grey" }}>
                  Your recent activity
                </p>
                <div
                  style={{
                    backgroundColor: "#CDC9FA",
                    paddingInline: "1rem",
                    paddingBlock: "0.5rem",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                    color: "black",
                    width: "70%",
                    textAlign: "left",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "0rem",
                      right: "0.5rem",
                    }}
                  >
                    <img src={upright} alt="img" />
                  </div>
                  <p
                    style={{
                      fontWeight: "bolder",
                      fontSize: "1.02rem",
                    }}
                  >
                    12
                  </p>{" "}
                  <p style={{ fontSize: "0.75rem", fontWeight: "bold" }}>
                    {" "}
                    viewed
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#7065f0",
                    paddingBlock: "0.5rem",
                    paddingInline: "auto",
                    borderRadius: "10px",
                    textAlign: "center",
                    fontSize: "0.8rem",
                    color: "white",
                  }}
                >
                  View all activity
                </div>
              </div>
            </div>
          </div>

          {/* featured properties */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              width: "100%",

              // marginInline: "auto",
            }}
          >
            <div className={styles.FeaturedIntroContainer}>
              <div className={styles.introContainer}>
                <div>
                  <img src={stardesign} alt="img" />
                </div>
                <div className={styles.FeaturedSectionHeader}>
                  Featured Properties
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    gap: "2rem",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <div className={styles.FeaturedSectionDesc}>
                    Explore our handpicked selection of featured properties.
                    Each listing offers a glimpse into exceptional homes and
                    investments available through Estatein. Click "View Details"
                    for more information.{" "}
                  </div>
                  <Link to={"/properties"}>
                    <div className={styles.FeaturedButtonContainer}>
                      <button className={styles.FeaturedButton}>
                        View All Properties
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.FeaturedPropertyContainer}>
              {List1.map((obj) => (
                <Propertycard key={obj.id} {...obj} />
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "3rem",
              // width: "85%",
              // marginInline: "auto",
            }}
          >

            <div className={styles.builderContainerp}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1em",
                }}
              >
                <div>
                  <img src={stardesign} alt="img" />
                </div>
                <div style={{ fontWeight: "bolder", fontSize: "2rem" }}>
                  Popular Builders
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    gap: "2rem",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "400",
                      fontSize: "0.9rem",
                      lineHeight: "1.2rem",
                      width: "70%",
                    }}
                  >
                    Explore our handpicked selection of featured properties.
                    Each listing offers a glimpse into exceptional homes and
                    investments available through Estatein. Click "View Details"
                    for more information.{" "}
                  </div>
                  <Link to={"/builders"}>
                    <div>
                      <button
                        style={{
                          paddingBlock: "1rem",
                          // paddingInline: "2em",
                          borderRadius: "10px",
                          border: "1px solid #E1E1E1",
                          marginRight: "0.5rem",
                          backgroundColor: "#EAEAEA",
                          cursor: "pointer",
                          width: "10rem",
                          color: "#0F0B3E",
                        }}
                      >
                        View All Builders
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.builderContainer}>
              {List2.map((obj) => (
                <Builderscard key={obj.id} {...obj} />
              ))}
            </div>
          </div>
          {/* <Aisection /> */}
        </div>


        <Footer />
      </div>
    </>

  );
}

export default Home;
