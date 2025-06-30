import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    sum: (currentState, action) => {
      console.log("calling the reducer");
    },
  },
});

export const { sum } = calcSlice.actions;
export default calcSlice.reducer;
