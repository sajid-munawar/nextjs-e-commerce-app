import Image from "next/image";
import React from "react";
import {
  AiOutlineDelete,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";

export default function page() {
  return (
    <>
      <div className="px-8 lg:px-32">
        <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
        {/* Cart Box */}
        <div className="flex flex-col gap-4 lg:flex-row ">
          {/* product image and summary container */}
          <div className="flex flex-col gap-4 md:flex-row  lg:w-2/3 lg:gap-8">
            {/* image */}
            <div>
              <Image
                src={"/Featured1.webp"}
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
                  Brushed Raglan Sweatshirt
                </div>
                {/* Delete icon */}
                <AiOutlineDelete size={25} />
              </div>
              <div className="py-2 font-semibold text-gray-700">Dress</div>
              <div className="font-semibold">Delivery Estimateion</div>
              <div className="py-2 font-semibold text-yellow-500">
                5 Working days
              </div>
              <div className="flex">
                <div className="text-xl font-semibold">$195</div>
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
          {/* summary */}
          <div className="flex flex-col gap-6 p-8 lg:gap-8 lg:pt-0">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="flex justify-between">
              <div>Quantity</div>
              <div>1 Product</div>
            </div>
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div>$195</div>
            </div>
            <button
              type="submit"
              className="border-l-2 border-t-2 border-textGrey bg-blackButton px-10 py-3 text-sm font-semibold text-white"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
