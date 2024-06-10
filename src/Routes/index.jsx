import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
// import Homepage from "../pages/Homepage";
import Desktop from "../pages/desktop/Home";
import OtpModal from "../components/modals/OtpModal";
import PropertyDescription from "../pages/Propertydescription";
import Property from "../pages/property";
import Profile from "../pages/profile";
import PropertiesFilter from "../pages/properties_filter";

export const Router = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<Desktop />} />
        <Route path={"/home"} element={<Home />} />
        {/* <Route path={"/homepage"} element={<Homepage />} /> */}
        <Route
          path={"/property_description"}
          element={<PropertyDescription />}
        />
        <Route path={"/property"} element={<Property />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/properties_filter"} element={<PropertiesFilter />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/otp"} element={<OtpModal />} />
        {/* <Route path={"/desktop"} element={<Desktop />} /> */}
      </Route>
    </Routes>
  );
};
