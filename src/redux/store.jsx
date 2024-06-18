import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import filterslice from "./filterslice";

const store = configureStore({
  reducer: { app: appslice, filters: filterslice },
});

export default store;
