"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  AiOutlineDelete,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { CartProduct } from "@/interface/interface";
import { urlForImage } from "../../../sanity/lib/image";
import { client } from "../../../sanity/lib/client";

type item = {
  id: number;
  product_id: string;
  qunatity: number;
  user_id: string;
};

const CartItems = () => {
  const [itemsFromDb, setItemsFromDb] = useState<item[]>();
  const [productsFromSentiy, setProductsFromSanity] = useState<CartProduct[]>();
  const getProducts = async () => {
    const res = await fetch("/api/cart", {
      method: "GET",
    });
    const result = await res.json();
    setItemsFromDb(result.res);
    // console.log("products from get request", result.res);
  };
  useEffect(() => {
    getProducts();
  }, []);
  // fetch products
  useEffect(() => {
    if (itemsFromDb) {
      const fetchData = async () => {
        const temp: CartProduct[] = [];
        for (const item of itemsFromDb) {
          const res = await client.fetch(
            `*[_type=="products" && _id=="${item.product_id}"]{title,image,price,category}[0]`
          );
          temp.push(res);
        }
        setProductsFromSanity(temp);
      };

      fetchData();
    }
  }, [itemsFromDb]);

  return (
    <>
      {/* product image and summary container */}
      {!productsFromSentiy ? (
        "Your cart is empty"
      ) : (
        <>
          {productsFromSentiy &&
            productsFromSentiy.map((product: CartProduct) => {
              return (
                <div className="flex flex-col gap-4   lg:w-2/3 lg:gap-8">
                  {/* image */}
                  <div>
                    <Image
                      src={urlForImage(product.image).url()}
                      height={300}
                      width={250}
                      alt="product"
                      className="rounded-md"
                    />
                  </div>
                  {/* product details */}
                  <div className="flex flex-grow flex-col md:gap-4">
                    <div className="flex justify-between pt-8 md:pt-0">
                      <div className="text-2xl font-light">{product.title}</div>
                      {/* Delete icon */}
                      <AiOutlineDelete size={25} />
                    </div>
                    <div className="py-2 font-semibold text-gray-700">
                      {product.category}
                    </div>
                    <div className="font-semibold">Delivery Estimateion</div>
                    <div className="py-2 font-semibold text-yellow-500">
                      5 Working days
                    </div>
                    <div className="flex">
                      <div className="text-xl font-semibold">
                        ${product.price}
                      </div>
                      <div className="ml-auto flex items-center gap-4">
                        {/* Minus */}
                        <AiOutlineMinusCircle size={25} />
                        <span>1</span>
                        {/* Plus */}
                        <AiOutlinePlusCircle size={25} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </>
  );
};

export default CartItems;
