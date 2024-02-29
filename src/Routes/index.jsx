import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";

export const Router = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<h1>HOME</h1>} />
        {/* <Route path={"/login"} element={< />} /> */}
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
      </Route>
    </Routes>
  );
};
