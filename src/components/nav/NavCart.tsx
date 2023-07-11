"use client";
import { RootState } from "@/store/store";
import Link from "next/link";
import React from "react";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";

const NavCart = () => {
  const count = useSelector((state: RootState) => state.itemCount.value);

  //   const productQuantity = useSelector(
  //     (state: RootState) => state.CartSlice.totalQuantity
  //   );
  return (
    <div>
      <Link href="/cart">
        <div className="relative rounded-full bg-gray-200 p-3">
          <BsCart size={20} />
          <span className="absolute right-1 top-0 h-[18px] w-[18px] items-center justify-center rounded-full bg-red-600 text-center text-sm text-white">
            {/* {productQuantity} */}
            {count}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default NavCart;
