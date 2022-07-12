import { createSlice } from "@reduxjs/toolkit";
//import { createStore } from "redux";

const initialCounterState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  //Register the reducers that will change the state
  reducers: {
    increment(state) {
      state.counter++;
      return state;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //   state.counter = state.counter + action.amount;// Use amount if any amount field is dispatched from the component as a part of dispatched object
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
