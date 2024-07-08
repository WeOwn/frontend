import React from "react";
import styles from "./styles.module.css";
import user1 from "./user1.png";
import { useSelector } from "react-redux";
import { isLoggedIn } from "./../../auth/index";
import { Link } from "react-router-dom";

const Index = () => {
  const userDetail = useSelector((store) => store.user);
  console.log("user", userDetail);
  return (
    <div
      style={{
        backgroundColor: "white",
        // marginTop: "2rem",
        padding: "1rem",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0.8rem",
        width: "100%",
        minWidth: "fit-content",
      }}
    >
      <Link to={userDetail.isLoggedIn ? "/user/profile" : "/login"}>
        <div
          style={{
            backgroundColor: "white",
            boxShadow: " 0 0 10px lightgrey",

            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2.5rem",
            height: "2.5rem",
            cursor: "pointer",
          }}
        >
          <img src={user1} alt="userlogo" style={{ height: "60%" }} />
        </div>
      </Link>
      <div>
        <div
          style={{
            whiteSpace: "nowrap",
            fontWeight: "650",
            fontSize: "0.8rem",
          }}
        >
          {/* {userDetail.isLoggedIn
            ? userDetail.firstName + " " + userDetail.lastName
            : "My Account"} */}
          My Account
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            color: "grey",
            marginTop: "0.2rem",
            fontWeight: "550",
          }}
        >
          {/* {userDetail ? "Welcome" : "Login/Register"} */}
          Login/Register
        </div>
      </div>
    </div>
  );
};

export default Index;
