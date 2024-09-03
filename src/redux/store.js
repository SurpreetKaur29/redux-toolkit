import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducers/todoSlice";
import productSlice from "./reducers/productSlice";

const rootReducer = combineReducers({
  todos: todoSlice,
  products: productSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
