import { createSlice } from "@reduxjs/toolkit";

const filterslice = createSlice({
  name: "filters",
  initialState: {
    appliedfilters: [],
    rangeSlider: [0, 100],
  },
  reducers: {
    setFilters: (state, action) => {
      if (!state.appliedfilters.includes(action.payload)) {
        state.appliedfilters.push(action.payload);
      }
    },
    setrangeSlider: (state, action) => {
      state.rangeSlider = action.payload;
    },
    removerangeSlider: (state, action) => {
      state.rangeSlider = [0, 100];
    },
    removeFilter: (state, action) => {
      state.appliedfilters = state.appliedfilters.filter(
        (filter) => filter !== action.payload
      );
    },
    removeAll: (state) => {
      state.appliedfilters = [];
      state.rangeSlider = [0, 100];
    },
  },
});

export const {
  setFilters,
  removeFilter,
  removeAll,
  setrangeSlider,
  removerangeSlider,
} = filterslice.actions;

export default filterslice.reducer;
