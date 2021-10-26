import { createSlice } from "@reduxjs/toolkit";

const robotSlice = createSlice({
  name: "robot",
  initialState: {
    robots: [],
    isFetching: false,
    error: false
  },
  reducers: {
    roboStart: (state) => {
      state.isFetching = true;
    },
    roboSuccess: (state, action) => {
      state.isFetching = false;
      state.robots = action.payload;
    },
    roboFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { roboStart, roboFailure, roboSuccess } = robotSlice.actions;
export default robotSlice.reducer;
