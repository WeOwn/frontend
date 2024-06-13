import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: false,
  },

  reducers: {
    toggleSidebar: (state, action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = appslice.actions;

export default appslice.reducer;
