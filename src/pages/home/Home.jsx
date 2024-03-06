import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./styles.module.css";
import Search from "../../components/Search";
import classNames from "classnames";
import OptionToogle from "../../Atoms/OptionToogle";
import card1 from "./card1.png";
import card2 from "./card2.png";
import { Propertycard } from "../../components/propertyCard/Propertycard";

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

  return (
    <div className={styles.maindiv}>
      <Navbar />
      <div className={styles.HelloSection}>
        <div className={styles.helloContentContainer}>
          <div className={`${styles.mainHeading}`}>
            Experience a 3D Real Estate Platform
          </div>
          <div className={classNames(styles.subHeading)}>
            Weown provides easy way to visualize your dream house in seconds.to
            visualize your dream house in seconds.
          </div>
          <div className={styles.optionTooglerDiv}>
            <OptionToogle />
            <div className={styles.searchContainer}>
              <Search />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.searchSection}>
        <div className={styles.searchSectionIntro} style={{}}>
          <div className={styles.searchSectionHeader}>
            What are you searching for?
          </div>
          <div className={styles.searchSectionDesc}>
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Weown. Click "View Details" for more information.
          </div>
        </div>
        <div className={styles.searchInputContainer}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div className={styles.searchResults}>
        <div
          className={styles.Search_Properties}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <div className={styles.searchProperty}>
            <div className={styles.propertyTitle}>Properties</div>
            <div className={styles.propertydesc}>
              <p>
                Explore our handpicked selection of featured properties. Each
                listing offers a glimpse into exceptional homes and investments
                available through Weown. Click "View Details" for more
                information.
              </p>
            </div>
          </div>
          <img
            className={styles.propertyImage}
            style={{ transform: isHovered ? "scale(1.3)" : "scale(1)" }}
            src={card1}
            alt="Card"
          />
          <div className={styles.searchPropertyBg}></div>
        </div>

        <div
          className={styles.Search_Properties}
          onMouseEnter={handleHover1}
          onMouseLeave={handleLeave1}
        >
          <div className={styles.searchProperty}>
            <div className={styles.propertyTitle}>Builders</div>
            <div className={styles.propertydesc}>
              <p>
                Explore our handpicked selection of featured properties. Each
                listing offers a glimpse into exceptional homes and investments
                available through Weown. Click "View Details" for more
                information.
              </p>
            </div>
          </div>
          <img
            className={styles.propertyImage}
            style={{ transform: isHovered ? "scale(1.3)" : "scale(1)" }}
            src={card2}
            alt="Card"
          />
          <div className={styles.searchPropertyBg}></div>
        </div>
      </div>

      {/* featured properties */}
      <div className={styles.FeaturedIntroContainer}>
        <div className={styles.introContainer}>
          <div className={styles.FeaturedSectionHeader}>
            Featured Properties
          </div>
          <div className={styles.FeaturedSectionDesc}>
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click "View Details" for more
            information.{" "}
          </div>
        </div>
        <div className={styles.FeaturedButtonContainer}>
          <button className={styles.FeaturedButton}>View All Properties</button>
        </div>
      </div>
      <div className={styles.FeaturedPropertyContainer}>
        <Propertycard />
      </div>
    </div>
  );
}

export default Home;
