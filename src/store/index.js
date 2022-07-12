import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  //Use state.counter and state.auth in components to get latest state
  //   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
