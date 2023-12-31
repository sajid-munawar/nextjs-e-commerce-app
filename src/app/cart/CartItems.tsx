"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { ICartProduct } from "@/interface/interface";
import { urlForImage } from "../../../sanity/lib/image";
import { client } from "../../../sanity/lib/client";
import DeleteItem from "@/components/DeleteItem";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementFromCart,
  incrementFromCart,
} from "@/store/slices/cartItemsSlice";

const CartItems = () => {
  const cartItems = useSelector((state: RootState) => state.cartItems);
  const dispatch = useDispatch();
  // const [itemsFromDb, setItemsFromDb] = useState<item[]>();
  // const [productsFromSentiy, setProductsFromSanity] =
  //   useState<ICartProduct[]>();
  // const getProducts = async () => {
  //   const res = await fetch("/api/cart", {
  //     method: "GET",
  //   });
  //   const result = await res.json();
  //   setItemsFromDb(result.res);
  //   // console.log("products from get request", result.res);
  // };
  // useEffect(() => {
  //   getProducts();
  // }, []);
  // // fetch products
  // useEffect(() => {
  //   if (itemsFromDb) {
  //     const fetchData = async () => {
  //       const temp: ICartProduct[] = [];
  //       for (const item of itemsFromDb) {
  //         const res = await client.fetch(
  //           `*[_type=="products" && _id=="${item.product_id}"]{title,image,price,category,_id}[0]`
  //         );
  //         temp.push(res);
  //       }
  //       setProductsFromSanity(temp);
  //     };

  //     fetchData();
  //   }
  // }, [itemsFromDb]);

  return (
    <>
      <div className="lg:w-2/3 lg:gap-8">
        {/* product image and summary container */}
        {cartItems.length < 1 ? (
          <div className="pt-12 text-center text-2xl font-semibold">
            Your cart is empty
          </div>
        ) : (
          <>
            {cartItems &&
              cartItems.map((product: ICartProduct) => {
                return (
                  <div
                    className="my-8 flex flex-col gap-4 pr-4  shadow-lg md:flex-row "
                    key={product?.product_id + product?.size}
                  >
                    {/* image */}
                    <div>
                      <Image
                        src={
                          product?.image ? urlForImage(product.image).url() : ""
                        }
                        height={300}
                        width={250}
                        alt="product"
                        className="rounded-md"
                      />
                    </div>
                    {/* product details */}
                    <div className="flex flex-grow flex-col md:gap-4">
                      <div className="flex justify-between pt-8 md:pt-0">
                        <div className="text-2xl font-light">
                          {product?.title}
                        </div>
                        {/* Delete icon */}
                        <DeleteItem
                          _id={product?.product_id}
                          size={product.size}
                        />
                      </div>
                      <div className="flex justify-between py-2 font-semibold text-gray-700">
                        <div>{product?.category}</div>
                        <div>{product.size.toLocaleUpperCase()}</div>
                      </div>
                      <div className="font-semibold">Delivery Estimateion</div>
                      <div className="py-2 font-semibold text-yellow-500">
                        5 Working days
                      </div>
                      <div className="flex">
                        <div className="text-xl font-semibold">
                          ${product?.price}
                        </div>
                        <div className="ml-auto flex items-center gap-4">
                          <div
                            className="cursor-pointer"
                            onClick={() => dispatch(decrementFromCart(product))}
                          >
                            {/* Minus */}
                            <AiOutlineMinusCircle size={25} />
                          </div>
                          <span>{product.quantity}</span>
                          <div
                            className="cursor-pointer"
                            onClick={() => dispatch(incrementFromCart(product))}
                          >
                            {/* Plus */}
                            <AiOutlinePlusCircle size={25} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        )}
      </div>
    </>
  );
};

export default CartItems;
