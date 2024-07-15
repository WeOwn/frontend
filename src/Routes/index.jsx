import React from "react";
import { Route, Routes } from "react-router-dom";

import Desktop from "../pages/desktop/Home";

import Layout from "./Layout";

export const Router = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<Desktop />} />
      </Route>
    </Routes>
  );
};
