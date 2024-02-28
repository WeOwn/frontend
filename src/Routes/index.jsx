import React from "react";
import { Route, Routes } from "react-router-dom";



export const Router = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<Home />} />
        <Route path={"login"} element={<SignUp />} />
        <Route path={"signup"} element={<Login />} />
      </Route>
    </Routes>
  );
};
