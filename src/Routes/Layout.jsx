import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import styles from "./layout.styles.css";

const Layout = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.maindiv}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
