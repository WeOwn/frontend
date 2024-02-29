import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
name: 'users',
initialState: {
    firstName: '',
    lastName: '',
    phoneNumber:'',
    termsAccepted: false,
},

reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },


});

export const { setField } = userSlice.actions;

export default userSlice;
