import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 100,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    add: (currentState, action) => {
      const sum =
        Number(action.payload.firstNumberInput) +
        Number(action.payload.secondNumberInput);
      currentState.result = sum;
    },
  },
});

export const { add, printHello } = calcSlice.actions;
export default calcSlice.reducer;
