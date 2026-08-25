import React from "react";
import styles from "./styles.module.css";
import home from "./home.svg";
import Search from "./searchContainer";

const Section1 = () => {
  return (
    <div className={styles.section1relativediv}>
      <div className={styles.section1Container}>
        <div className={styles.section1textdiv}>
          <h4 className={styles.heading}>
            Find Your Dream Property
          </h4>
          <p className={styles.section1para}>
            Welcome to weown, where your dream property awaits in every corner of
            our beautiful world. Explore our curated selection of properties,
            each offering a unique story and a chance to redefine your life.
            With categories to suit every dreamer, your journey.
          </p>
        </div>

        <div className={styles.section1imgdiv}>
          <img src={home} alt="" className={styles.heroImage} />
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Section1;
