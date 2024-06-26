import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
  name: "app",
  initialState: {
    issidebaropen: false,
  },

  reducers: {
    toggleSidebar: (state) => {
      state.issidebaropen = !state.issidebaropen;
    },
  },
});

export const { toggleSidebar } = appslice.actions;

export default appslice.reducer;
