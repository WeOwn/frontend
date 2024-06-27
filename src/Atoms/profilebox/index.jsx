import React from "react";
import styles from "./styles.module.css";
import user1 from "./user1.png";
import { useSelector } from "react-redux";
import { isLoggedIn } from "./../../auth/index";

const Index = () => {
  const userDetail = useSelector((store) => store.user);
  console.log("user", userDetail);
  return (
    <div
      style={{
        backgroundColor: "white",
        // marginTop: "2rem",
        paddingBlock: "1rem",
        paddingRight: "5rem",
        paddingLeft: "1rem",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: "0.8rem",
        width: "100%",
        minWidth: "fit-content",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          boxShadow: " 0 0 10px lightgrey",
          padding: "0.6rem 0.8rem",
          // border: "1px solid black",
          borderRadius: "15px",
          //   width: "3rem",
        }}
      >
        <img src={user1} alt="userlogo" /*style={{ width: "100%" }}*/ />
      </div>
      <div>
        <div
          style={{
            whiteSpace: "nowrap",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          {userDetail.isLoggedIn
            ? userDetail.firstName + " " + userDetail.lastName
            : "My Account"}
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            color: "grey",
            marginTop: "0.2rem",
            fontWeight: "550",
          }}
        >
          {userDetail ? "Welcome" : "Login/Register"}
        </div>
      </div>
    </div>
  );
};

export default Index;
