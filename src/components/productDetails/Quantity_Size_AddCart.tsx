"use client";
import React, { useState } from "react";
import { IProductsDetail } from "../../interface/interface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/store/slices/cartItemsSlice";
import { BsCart } from "react-icons/bs";
import { BiLoaderCircle } from "react-icons/bi";

export default function Quantity_Size_AddCart({
  product,
}: {
  product: IProductsDetail;
}) {
  const [itemsQuanity, setItemsQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState("m");
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    setLoading(true);
    const newItem = {
      product_id: product._id,
      quantity: itemsQuanity,
      image: product.image,
      price: product.price,
      title: product.title,
      category: product.category,
      size: selectedSize,
    };
    toast.success("Item added to cart");
    dispatch(addItemToCart(newItem));
  };
  const handleInrease = () => {
    setItemsQuantity(itemsQuanity + 1);
  };

  const handleDescrease = () => {
    if (itemsQuanity > 1) {
      setItemsQuantity(itemsQuanity - 1);
    }
  };

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        rtl={false}
        theme="light"
      />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 ">
          <div className="text-sm font-bold leading-4 tracking-wider text-textBlack">
            SELECT SIZE
          </div>
          <div className="flex flex-wrap gap-4">
            <div
              className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full ${
                selectedSize === "xs" ? "bg-black/70 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleSizeSelection("xs")}
            >
              XS
            </div>
            <div
              className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full ${
                selectedSize === "s" ? "bg-black/70 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleSizeSelection("s")}
            >
              S
            </div>
            <div
              className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full ${
                selectedSize === "m" ? "bg-black/70 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleSizeSelection("m")}
            >
              M
            </div>
            <div
              className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full ${
                selectedSize === "l" ? "bg-black/70 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleSizeSelection("l")}
            >
              L
            </div>
            <div
              className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full ${
                selectedSize === "xl" ? "bg-black/70 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleSizeSelection("xl")}
            >
              XL
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 ">
          <div className="text-base font-bold leading-4 tracking-wider text-textBlack">
            Quantity
          </div>
          <div className="flex items-center gap-1">
            <button onClick={handleDescrease} className="mr-2 cursor-pointer">
              -
            </button>
            <span>{itemsQuanity}</span>
            <button
              onClick={handleInrease}
              className="ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-textBlack"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex w-4/5 min-w-[180px] items-center justify-center border-l-2 border-t-2 border-textGrey bg-blackButton p-4 text-base font-semibold text-white lg:w-2/6">
            {!loading ? (
              <button
                onClick={handleAddToCart}
                className="flex flex-row items-center justify-center gap-3"
              >
                <BsCart size={20} />
                <div className="text-center">Add to Cart</div>
              </button>
            ) : (
              <button className="flex flex-row items-center justify-center gap-3">
                <BiLoaderCircle size={20} />
                <div className="text-center">Adding</div>
              </button>
            )}
          </div>
          <div className="min-w-[120px] text-2xl font-bold text-textBlack">{`$ ${product.price}.00`}</div>
        </div>
      </div>
    </>
  );
}
