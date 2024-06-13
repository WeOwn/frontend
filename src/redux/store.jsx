import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";

const store = configureStore({
  reducer: { appslice },
});

export default store;
