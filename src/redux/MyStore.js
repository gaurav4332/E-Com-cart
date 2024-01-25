import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slice/ProductSlice";
import CartReducer from "./slice/CartSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

let persistConfig = {
  key: "root",
  storage,
};
let rootReducer = combineReducers({
  product: ProductReducer,
  cart: CartReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);
export const mystore = configureStore({
  reducer: persistedReducer,
});
