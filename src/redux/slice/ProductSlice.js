import {createSlice} from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addMyProduct(state, action) {
      state.push(action.payload);
    },
  },
});

export const {addMyProduct} = ProductSlice.actions;
export default ProductSlice.reducer;
