import { ICartProduct } from "@/interface/interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



const initialState:ICartProduct[] = [];


const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find(
        (item) => item.product_id === newItem.product_id
      );
      if (!existingItem) {
        return [...state, newItem];
      }
      return state;
    },
    removeItemFromCart: (state, action) => {
      const productId = action.payload;
      return state.filter((item) => item.product_id !== productId);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartItemsSlice.actions;


export default cartItemsSlice.reducer;
