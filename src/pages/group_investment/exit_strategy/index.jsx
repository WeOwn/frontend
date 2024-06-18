import React from "react";
import styles from "./styles.module.css";
import stardesign from "../stardesign.svg";
import grid1 from "./grid1.svg";
import grid2 from "./grid2.svg";
import grid3 from "./grid3.svg";
import grid4 from "./grid4.svg";

const index = () => {
  const list = [
    {
      id: 1,
      img: grid1,
      title: "Property Sale",
      para1:
        "One of the most common exit strategies is selling the property. After implementing value-add strategies and achieving the desired returns, the property is put on the market, and the syndication group seeks a buyer.",
      para2: "",
    },
    {
      id: 2,
      img: grid2,
      title: "Refinancing",
      para1:
        "Refinancing involves obtaining a new loan on the property to pay off the existing debt. This strategy allows investors to access the increased property value and extract cash from the investment.",
      para2:
        "The proceeds can be distributed to investors, providing them with liquidity while maintaining ownership of the property for continued cash flow and potential future appreciation.",
    },
    {
      id: 3,
      img: grid3,
      title: "Conversion to a Real Estate Investment Trust (REIT)",
      para1:
        "In some cases, syndications may be chosen to convert the property into a REIT. This allows the syndication to sell shares of the REIT to investors, providing liquidity and diversification. Investors can choose to hold or sell their shares based on their individual preferences.",
      para2: "",
    },
    {
      id: 4,
      img: grid4,
      title: "Buyout",
      para1:
        "In certain scenarios, another investor or entity may be interested in acquiring the syndication. This can occur through a buyout offer, where the acquiring party purchases the property and assumes the responsibilities of the syndication.",
      para2:
        "This provides investors with an opportunity to exit their investment while potentially realizing a profit.",
    },
  ];
  return (
    <div>
      <div style={{ width: "3rem", marginLeft: "-1rem" }}>
        <img
          src={stardesign}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h4 style={{ fontSize: "2rem", fontWeight: "650" }}>Exit Strategies</h4>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "0.5rem",
        }}
      >
        <p style={{ color: "grey", width: "80%" }}>
          Exit strategies are a crucial aspect of real estate syndication,
          providing investors with a roadmap for realizing their returns and
          capitalizing on their investments. Let's delve into the various exit
          strategies commonly employeed in real estate syndication.
        </p>
      </div>

      <div className={styles.grid}>
        {list.map((obj, index) => {
          return (
            <div key={obj.id} className={styles.card}>
              <div className={styles.introdiv}>
                <div className={styles.imgdiv}>
                  <img src={obj.img} alt="img" style={{ width: "100%" }} />
                </div>
                <div className={styles.heading}>{obj.title}</div>
              </div>
              <div className={styles.paradivp}>
                <p className={styles.para}>{obj.para1}</p>
                <p className={styles.para}>{obj.para2}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
