import React, { useEffect } from "react";
import { useState } from "react";

import styles from "./styles.module.css";
import Search from "../../components/Search";

import OptionToogle from "../../Atoms/OptionToogle";
import card1 from "./card1.png";
import card2 from "./card2.png";
import { Propertycard } from "../../components/propertyCard/Propertycard";
import { Builderscard } from "../../components/builderscard/Builderscard";
import searchlogo from "./searchlogo.png";

import Aisection from "./Aisection";

import cloud from "./cloud.png";
import stardesign from "./stardesign.png";

import { Link } from "react-router-dom";
import Searchmob from "../../components/searchmob";

import ProfileCard from "../../components/profilecard";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../redux/appslice";
// import { axios } from "axios";
import api from "../../service/apiGateway";

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

  const changeNavbar = useSelector((store) => store.app.changeNavbar);
  // console.log(changeNavbar);
  const dispatch = useDispatch();
  const handleScroll = () => {
    const heroSection = document.getElementById("hero-section");
    // console.log("run");
    if (heroSection) {
      const heroSectionHeight = heroSection.offsetHeight;
      const navbarHeight = 76;

      if (window.scrollY >= heroSectionHeight - navbarHeight) {
        if (!changeNavbar) {
          dispatch(toggleNavbar(true));
        }
      } else {
        if (changeNavbar) {
          dispatch(toggleNavbar(false));
        }
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [mobsize, setMobSize] = useState(false);

  const handleresize = () => {
    // console.log("resize fun");
    if (window.innerWidth <= 768) setMobSize(true);
    else setMobSize(false);
  };

  useEffect(() => {
    // console.log("resize eefect");
    handleresize();
    window.addEventListener("resize", handleresize);
    return () => {
      dispatch(toggleNavbar(false));
      window.removeEventListener("resize", handleresize);
    };
  }, []);

  const [allbuilders, setAllBuilders] = useState([]);
  const [allproperties, setAllProperties] = useState([]);

  const fetchData = async () => {
    try {
      // const [buildersResponse, propertiesResponse] = await Promise.all([
      //   api.get("/builder/all"),
      //   api.get("property/list?min-price=0&page=page-2"),
      // ]);

      const buildersResponse = await api.get("/builder/all");

      console.log("All builders:", buildersResponse.data.data);

      setAllBuilders(buildersResponse.data.data);
      const propertiesResponse = await api.get(
        "property/list?min-price=0&page=page-2"
      );
      console.log("All properties:", propertiesResponse.data.data);
      setAllProperties(propertiesResponse.data.data);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.HelloSection} id="hero-section">
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

            {!mobsize ? (
              <div className={styles.optionTooglerDiv}>
                <OptionToogle />
                <div className={styles.searchContainer}>
                  <Search />
                </div>
              </div>
            ) : (
              <div style={{ width: "100%" }}>
                <Searchmob />
              </div>
            )}
          </div>
        </div>
        <div className={styles.seconddiv}>
          <div style={{ width: "3rem" }}>
            <img src={stardesign} alt="img" style={{ width: "100%" }} />
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
                <div className={styles.desc}>
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

            <ProfileCard />
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
                <div style={{ width: "3rem" }}>
                  <img src={stardesign} alt="img" style={{ width: "100%" }} />
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
                  <div className={styles.desc}>
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
              {allproperties.map((property) => (
                <Propertycard key={property.id} {...property} />
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
                <div style={{ width: "3rem" }}>
                  <img src={stardesign} alt="img" style={{ width: "100%" }} />
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
                  <div className={styles.desc}>
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
                          fontSize: "1rem",
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
              {allbuilders.map((builder) => (
                <Builderscard key={builder.id} {...builder} />
              ))}
            </div>
          </div>
          {/* <Aisection /> */}
        </div>
      </div>
    </>
  );
}

export default Home;
