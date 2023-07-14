import { ICartProduct } from "@/interface/interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ICartProduct[] = [];

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const quantity = newItem.quantity;
      const price = +newItem.price; // Convert price to a number

      const existingItemIndex = state.findIndex(
        (item) =>
          item.product_id === newItem.product_id && item.size === newItem.size
      );

      if (existingItemIndex !== -1) {
        // If item already exists, update the quantity and adjust the price
        const updatedState = [...state];
        const existingItem = updatedState[existingItemIndex];
        existingItem.quantity += quantity;
        existingItem.price = +existingItem.price + price * quantity;
        return updatedState;
      } else {
        // If item doesn't exist, create a new item with the adjusted price
        const newItemWithAdjustedPrice = {
          ...newItem,
          quantity: quantity,
          price: price * quantity,
        };
        return [...state, newItemWithAdjustedPrice];
      }
    },

    removeItemFromCart: (state, action) => {
      const { productId, size } = action.payload;
      return state.filter(
        (item) => !(item.product_id === productId && item.size === size)
      );
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
