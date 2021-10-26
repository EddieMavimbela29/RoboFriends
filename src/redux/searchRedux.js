import { createSlice } from "@reduxjs/toolkit";

const searchFieldSlice = createSlice({
  name: "robot",
  initialState: {
    searchField: ""
  },
  reducers: {
    change_searchFeild: (state, action) => {
      state.searchField = action.payload;
    }
  },
});

export const { change_searchFeild } = searchFieldSlice.actions;
export default searchFieldSlice.reducer;
