"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const MobileItemCount = () => {
  const cartItems = useSelector((state: RootState) => state.cartItems);

  return <div>{cartItems.length}</div>;
};

export default MobileItemCount;
