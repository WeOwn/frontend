import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    termsAccepted: false,
  },

  reducers: {
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    // setLogOut: (state) => {
    //   state.isLoggedIn = false;
    //   state.userdetails.firstName = "";
    //   state.userdetails.lastName = "";
    //   state.userdetails.phoneNumber = "";
    //   state.userdetails.termsAccepted = "";
    // },
  },
});

export const { setLoggedIn } = userSlice.actions;

export default userSlice.reducer;
