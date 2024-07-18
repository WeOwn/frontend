import React from "react";
import styles from "./styles.module.css";
import user1 from "./user1.png";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "./../../auth/index";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { setLogOut } from "../../redux/userSlice";
//import persistStore from "redux-persist/es/persistStore";
//import store from "../../redux/store";

const Index = () => {
  const userDetail = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.setItem("propertiesViewed", []);
    dispatch(setLogOut());
    //const persistor = persistStore(store); // Create a persistor
    //persistor.purge(); // Purge the persisted state
  };
  const handlelogin = () => {
    navigate("/login");
  };

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
      <Link to={"/user/profile"}>
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
          {userDetail?.isLoggedIn
            ? `${userDetail?.firstName} ${userDetail?.lastName}`
            : "Guest"}
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            color: "grey",
            marginTop: "0.2rem",
            fontWeight: "550",
            cursor: "pointer",
          }}
          onClick={userDetail?.isLoggedIn ? handlelogout : handlelogin}
        >
          {userDetail?.isLoggedIn ? "Logout" : "Login/Register"}
        </div>
      </div>
    </div>
  );
};

export default Index;
