import React from "react";
import styles from "./styles.module.css";
import logo1 from "./logo1.svg";
import logo2 from "./logo2.svg";
import logo3 from "./logo3.svg";
import logo4 from "./logo4.svg";
import backimg from "./backimg.svg";

const Section5 = () => {
  const list = [
    {
      id: 1,
      img: logo1,
      serialno: "01",
      title1: "Portfolio",
      title2: "Diversification",
    },
    {
      id: 2,
      img: logo2,
      serialno: "02",
      title1: "Generate",
      title2: "Passive Income",
    },
    {
      id: 3,
      img: logo3,
      serialno: "03",
      title1: "Get Tax",
      title2: "Advantages",
    },
    {
      id: 4,
      img: logo4,
      serialno: "04",
      title1: "Ideal For Long",
      title2: "Term Investment",
    },
  ];

  return (
    <div className={styles.maindiv}>
      <div className={styles.introdiv}>
        <p className={styles.para}>BENEFITS OF REALITY INVESTMENT</p>

        <h4 className={styles.heading}>
          How Real Estate helps you acheive your financial goals
        </h4>
      </div>

      <div className={styles.griddiv}>
        {list.map((obj, index) => {
          return (
            <div className={styles.cardsdivp}>
              <div
                className={styles.imgdiv}
                style={{ backgroundColor: index === 1 ? "#7065f0" : "white" }}
              >
                <img
                  src={obj.img}
                  alt="img"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <div className={styles.cardtitledivp}>
                <span className={styles.title1}>
                  {obj.serialno + ". " + obj.title1}
                </span>
                <span className={styles.title2}>{obj.title2}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section5;
