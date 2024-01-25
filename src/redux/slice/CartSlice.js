import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
        state.push({...action.payload, qty: action.payload.qty + 1});
      } else {
        state[myindex].qty = state[myindex].qty + 1;
      }
    },
    removeItemToCart(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex !== -1) {
        state[myindex].qty = state[myindex].qty - 1;
      }
    },
    deleteMyCartItem(state, action) {
      return (state = state.filter(item => {
        item.id !== action.payload;
      }));
    },
  },
});

export const {addItemToCart, removeItemToCart, deleteMyCartItem} =
  CartSlice.actions;
export default CartSlice.reducer;
