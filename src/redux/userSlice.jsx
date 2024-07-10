import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    // firstName: "",
    // lastName: "",
    // phoneNumber: "",
    // termsAccepted: "",
  },

  reducers: {
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    setLogOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setLoggedIn, setLogOut } = userSlice.actions;

export default userSlice.reducer;
