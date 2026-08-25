import React from "react";
import styles from "./styles.module.css";
import user1 from "./user1.png";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "./../../auth/index";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { setLogOut } from "../../redux/userSlice";
//import persistStore from "redux-persist/es/persistStore";
//import store from "../../redux/store";

const Index = ({sidebar}) => {
  const userDetail = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  // const handlelogout = () => {
  //   dispatch(setLogOut());

  // };
  const handlelogin = () => {
    navigate("/login");
  };


  return (
    <div className={styles.card}>
      <Link to={"/activity"} className={styles.avatarLink}>
        <div className={styles.avatar}>
          <img src={user1} alt="" />
        </div>
      </Link>
      <div>
        <div className={styles.name}>
          {userDetail?.isLoggedIn
            ? `${userDetail?.firstName} ${userDetail?.lastName}`
            : "Guest user"}
        </div>
        {sidebar && !userDetail?.isLoggedIn && (
          <div className={styles.loginLink} onClick={handlelogin}>
            Login/Register
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
