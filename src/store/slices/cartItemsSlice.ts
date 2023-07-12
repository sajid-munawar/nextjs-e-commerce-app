import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { cookies } from "next/headers";

type CartProduct = {
  user_id: string;
  product_id: string;
  quantity: number;
};

// const uid = cookies().get("user_id")?.value;

// if (uid) {
//   // fetch()
// }

const initialState = 0;
//  async () => {
//   const res = await fetch("/api/cart", {
//     method: "GET",
//   });
//   const result = await res.json();
//   return result.res;
// setItemsFromDb(result.res);
// console.log("products from get request", result.res);
// };
console.log("initial state", initialState);

const CartItemsSlics = createSlice({
  name: "CartItemsSlice",
  initialState,
  reducers: {
    addItemToCart: (state) => {
      return state;
    },
  },
});

export default CartItemsSlics.reducer;
