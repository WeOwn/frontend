import React from "react";
import styles from "./styles.module.css";
import icon from "./icon.svg";

const Section2 = () => {
  const cards = [
    {
      id: 1,
      heading1: "Prereleased Shops",
      heading2: "& Offices",
      icon: icon,
    },
    {
      id: 2,
      heading1: "New Launch",
      heading2: "Deals",
      icon: icon,
    },
    {
      id: 3,
      heading1: "Invest in",
      heading2: "Land",
      icon: icon,
    },
    {
      id: 4,
      heading1: "Invest with trusted",
      heading2: "Builders",
      icon: icon,
    },
    {
      id: 5,
      heading1: "Commercial ",
      heading2: "Properties",
      icon: icon,
    },
    {
      id: 6,
      heading1: "Commercial ",
      heading2: "Properties",
      icon: icon,
    },
  ];

  return (
    <div className={styles.maindiv}>
      <div className={styles.section1}>
        <h4 className={styles.heading}>We Provide Professional</h4>
        <h4 className={styles.heading}>Buisness Solutions.</h4>
      </div>

      <div className={styles.section2}>
        {cards.map((card, index) => {
          return (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardtextdiv}>
                <div className={styles.cardheadingdivp}>
                  <span className={styles.cardheading}>{card.heading1} </span>
                  <span className={styles.cardheading}>{card.heading2}</span>
                </div>
                <div className={styles.imgdiv}>
                  <img
                    src={card.icon}
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div>
                <span style={{ color: "#7065F0", fontWeight: "600" }}>
                  Read More
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section2;
