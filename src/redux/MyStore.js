import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './slice/ProductSlice';
import CartReducer from './slice/CartSlice';

export const mystore = configureStore({
  reducer: {
    product: ProductReducer,
    cart: CartReducer,
  },
});
