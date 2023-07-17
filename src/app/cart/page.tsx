"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { RootState } from "@/store/store";
import CheckOut from "@/components/checkout/CheckOut";

export default function Page() {
  const cartItems = useSelector((state: RootState) => state.cartItems);
  console.log("cartItems :>> ", cartItems);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmount: number = cartItems.reduce(
    (total: number, item) => total + +item.price,
    0
  );

  return (
    <>
      <div className="px-8 lg:px-32">
        <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
        {/* Cart Box */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* product image and summary container */}
          <CartItems />
          {/* summary */}
          <div className="flex flex-col gap-6 p-8 lg:gap-8 lg:pt-0">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="flex justify-between">
              <div>Quantity</div>
              <div>
                {totalQuantity} Product{totalQuantity !== 1 && "s"}
              </div>
            </div>
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div>${totalAmount}</div>
            </div>
            <CheckOut />
          </div>
        </div>
      </div>
    </>
  );
}
