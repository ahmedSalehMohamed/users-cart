import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";

const store = configureStore({
  reducer: usersReducer, 
  devTools: true,
});

export default store;

