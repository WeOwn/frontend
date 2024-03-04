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
      <div
        style={{
          background: "#7065F0",
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
            gap: "3em",
            padding: "20px",
          }}
        >
          <div className={`${styles.mainHeading}`}>
            Experience a 3D Real Estate Platform
          </div>
          <div className={classNames(styles.subHeading)}>
            Weown provides easy way to visualize your dream house in seconds.to
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
            <div style={{ width: "100%", marginBottom: "2em" }}>
              <Search />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "3em",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "3em",
            width: "50%",
            gap: "1em",
          }}
        >
          <div style={{ fontWeight: "600", fontSize: "2em" }}>
            What are you searching for?
          </div>
          <div
            style={{
              fontWeight: "500",
              fontSize: "0.8em",
              lineHeight: "1.2em",
            }}
          >
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Weown. Click "View Details" for more information.
          </div>
        </div>
        <div style={{ margin: "3em" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: "1em",
              borderRadius: "5px",
              border: "0px solid #ccc",
              marginRight: "0.5em",
              backgroundColor: "rgba(244, 244, 244, 1)",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "30em",
            height: "20em",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s",
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              color: "#fff",
              zIndex: "2",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2em", fontWeight: "500" }}>Properties</div>
            <div
              style={{ padding: "1em", fontSize: "0.8em", marginBottom: "2em" }}
            >
              <p>
                Explore our handpicked selection of featured properties. Each
                listing offers a glimpse into exceptional homes and investments
                available through Weown. Click "View Details" for more
                information.
              </p>
            </div>
          </div>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s",
              transform: isHovered ? "scale(1.3)" : "scale(1)",
            }}
            src={card1}
            alt="Card"
          />
          <div
            style={{
              content: "''",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(112, 101, 240, 0.8)",
              zIndex: "1",
            }}
          ></div>
        </div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "30em",
            height: "20em",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s",
          }}
          onMouseEnter={handleHover1}
          onMouseLeave={handleLeave1}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              color: "#fff",
              zIndex: "2",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2em", fontWeight: "500" }}>Builders</div>
            <div
              style={{ padding: "1em", fontSize: "0.8em", marginBottom: "2em" }}
            >
              <p>
                Explore our handpicked selection of featured properties. Each
                listing offers a glimpse into exceptional homes and investments
                available through Weown. Click "View Details" for more
                information.
              </p>
            </div>
          </div>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s",
              transform: isHovered1 ? "scale(1.3)" : "scale(1)",
            }}
            src={card2}
            alt="Card"
          />
          <div
            style={{
              content: "''",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(112, 101, 240, 0.8)",
              zIndex: "1",
            }}
          ></div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "3em",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "3em",
            width: "50%",
            gap: "1em",
          }}
        >
          <div style={{ fontWeight: "600", fontSize: "2em" }}>
            Featured Properties
          </div>
          <div
            style={{
              fontWeight: "500",
              fontSize: "0.8em",
              lineHeight: "1.2em",
            }}
          >
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click "View Details" for more
            information.{" "}
          </div>
        </div>
        <div style={{ margin: "3em" }}>
          <button
            style={{
              padding: "1em",
              borderRadius: "5px",
              border: "0px solid #ccc",
              marginRight: "0.5em",
              backgroundColor: "rgba(244, 244, 244, 1)",
              cursor: "pointer",
            }}
          >
            View All Properties
          </button>
        </div>
      </div>
      <div style={{ padding: "2em" }}>
        <Propertycard />
      </div>
    </div>
  );
}

export default Home;
