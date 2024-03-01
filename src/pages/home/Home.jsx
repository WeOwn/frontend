import React from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./styles.module.css";
import Search from "../../components/Search";
import classNames from "classnames";
import OptionToogle from "../../Atoms/OptionToogle";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          background: "#7065F0",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
          }}
        >
          <div className={`${styles.mainHeading}`}>
            Experience a 3D Real Estate Platform
          </div>
          <div className={classNames(styles.subHeading)}>
            weown provides easy way to visualize your dream house in seconds. to
            visualize your dream house in seconds.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            <OptionToogle />
            <div style={{ width: "100%" }}>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// <div
//   style={{
//     width: "40%",
//     height: "50px",
//     position: "absolute",
//     border: "1px solid black",
//   }}
// >
//   <div style={{ fontSize: "20px" }}>Experience a 3D Real Estate Platform</div>
//   <Search />
// </div>;
