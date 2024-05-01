import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import OtpModal from "../components/modals/OtpModal";
import Desktop from "../pages/desktop/Desktop";

export const Router = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<Desktop />} />
        {/*<Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/otp"} element={<OtpModal />} /> */}
        {/* <Route path={"/desktop"} element={<Desktop />} /> */}
      </Route>
    </Routes>
  );
};
