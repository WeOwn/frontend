import React, { useEffect, useState } from "react";
import Profilebox from "../../Atoms/profilebox";
import styles from "./styles.module.css";
import upright from "./upright.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Index = () => {
  const [totalPropertiesViewed, setTotalPropertiesViewed] = useState(0);
  const userDetail = useSelector((store) => store.user);
  const getPropertiesViewed = () => {
    const propertiesViewed = localStorage.getItem("propertiesViewed");
    if (propertiesViewed) {
      const propertiesList = JSON.parse(propertiesViewed);

      setTotalPropertiesViewed(propertiesList.length);
    }
  };

  useEffect(() => {
    getPropertiesViewed();
  }, []);
  return (
    <div className={styles.profileContainerdiv}>
      <Profilebox />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "grey" }}>
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
            gap: "0.5rem",
            color: "black",
            width: "60%",
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
            {totalPropertiesViewed || 0}
          </p>{" "}
          <p style={{ fontSize: "0.75rem", fontWeight: "bold" }}> viewed</p>
        </div>
        <Link to={"/user/profile"} style={{ textDecoration: "none" }}>
          <div
            style={{
              backgroundColor: "#7065f0",
              paddingBlock: "0.5rem",
              paddingInline: "auto",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "0.75rem",
              color: "white",
            }}
          >
            View all activity
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;
