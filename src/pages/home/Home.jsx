import React, { useEffect } from "react";
import { useState } from "react";

import styles from "./styles.module.css";
import Search from "../../components/Search";

import OptionToogle from "../../Atoms/OptionToogle";
import card1 from "./card1.png";
import card2 from "./card2.png";

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
import api from "../../service/apiGateway";
// import { axios } from "axios";

import Slider from "../../components/cardslider";
import PropertyCardSlider from "../../components/propertyCardSlider";
import BuilderCardSlider from "../../components/builderCardSlider";
import Button from "../../Atoms/Button";
import IntroContainer from "../../Atoms/introContainer/IntroContainer";


function Home() {
  const [properties, setAllProperties] = useState(null);
  const [builders, setAllBuilders] = useState(null);

  const fetchproperties = async () => {
    try {
      const propertiesResponse = await api.get(
        "/property/list?min-price=0&page=page-1"
      );
      // console.log("All properties:", propertiesResponse.data.data);
      setAllProperties(propertiesResponse.data.data);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  };
  const fetchbuilders = async () => {
    try {
      // const [buildersResponse, propertiesResponse] = await Promise.all([
      //   api.get("/builder/all"),
      //   api.get("property/list?min-price=0&page=page-2"),
      // ]);

      const buildersResponse = await api.get("/builder/all");

      console.log("All builders:", buildersResponse.data.data);

      setAllBuilders(buildersResponse.data.data);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    fetchproperties();
    fetchbuilders();
  }, []);
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

            <div style={{ width: "100%", marginTop: "-3rem" }}>
              <p className={styles.subHeading}>
                weown provides easy way to visualize your dream house in
                seconds.
              </p>
              <p className={styles.subHeading}>
                to visualize your dream house in seconds.
              </p>
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
                <IntroContainer
                  stardesign={stardesign}
                  heading="What are you searching for?"
                  desc={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.`}
                  descStyle={{}}
                />

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

          <div style={{ marginTop: "4rem" }}>
            <IntroContainer
              stardesign={stardesign}
              heading="Featured Properties"
              btntext="View All Properties"
              desc={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.`}
              descStyle={{}}
            />

            <PropertyCardSlider projects={properties} />
          </div>


          <div style={{ marginTop: "4rem" }}>
            <IntroContainer
              stardesign={stardesign}
              heading="Popular Builders"
              btntext="View All Builders"
              desc={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.`}
              descStyle={{}}
              path="/builders"
            />

            <BuilderCardSlider builders={builders} />

          </div>

          {/* <Aisection /> */}
        </div>

      </div>
    </>

  );
}

export default Home;
