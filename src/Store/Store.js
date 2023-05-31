import { configureStore } from "@reduxjs/toolkit";
import vanReducer from "./VanSlice";
const store = configureStore({
  reducer: { van: vanReducer },
});

export default store;
