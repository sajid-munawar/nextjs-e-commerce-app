"use client";
import React, { useEffect, useState } from "react";
import { IProductsDetail } from "../../interface/interface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/app/store/store";
// import type { RootState } from "@/store/store";
// import { decrement, increment } from "@/store/slices/counterSlice";
import { BsCart } from "react-icons/bs";

// import { counterActions } from "@/app/store/slice/CartSlice";

export default function Quantity_Size_AddCart({
  product,
}: {
  product: IProductsDetail;
}) {
  // const dispatch = useDispatch();
  // const itemCount = useSelector((state: RootState) => state.itemCount.value);
  const [itemsQuanity, setItemsQuantity] = useState<number>(1);

  const handleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: product._id,
        quantity: itemsQuanity,
      }),
    });
    // console.log("this is res", res);
    if (res.ok) {
      toast.success("Item added to cart");
    }
    // const result = await res.json();
    // console.log(result);
  };
  const handleInrease = () => {
    setItemsQuantity(itemsQuanity + 1);
  };

  const handleDescrease = () => {
    if (itemsQuanity > 1) {
      setItemsQuantity(itemsQuanity - 1);
    }
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
          {/* Test div for total items in redux */}
          {/* <div>
            <ul>
              {allitems.map((i) => (
                <li
                  key={`${i.id}${i.size}`}
                >{`id:${i.id} quantity${i.quantity} size${i.size} price${i.totalPrice}`}</li>
              ))}
            </ul>
          </div> */}
          <div className="flex gap-3 ">
            <button
            // onClick={() => handleSize("XS")}
            // className={getButtonClassName("XS")}
            >
              XS
            </button>
            <button
            // onClick={() => handleSize("S")}
            // className={getButtonClassName("S")}
            >
              S
            </button>
            <button
            // onClick={() => handleSize("M")}
            // className={getButtonClassName("M")}
            >
              M
            </button>
            <button
            // onClick={() => handleSize("L")}
            // className={getButtonClassName("L")}
            >
              L
            </button>
            <button
            // onClick={() => handleSize("XL")}
            // className={getButtonClassName("XL")}
            >
              XL
            </button>
          </div>
        </div>
        <div className="flex items-center gap-8 ">
          <div className="text-base font-bold leading-4 tracking-wider text-textBlack">
            Quantity
          </div>
          <div className="flex items-center gap-1">
            <button
              //  onClick={smallDec}
              onClick={handleDescrease}
              className="mr-2 cursor-pointer"
            >
              -
            </button>
            {/* <span>{specificItem?.quantity}</span> */}
            <span>{itemsQuanity}</span>
            <button
              // onClick={smallInc}
              onClick={handleInrease}
              className="ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-textBlack"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex w-4/5 min-w-[180px] items-center justify-center border-l-2 border-t-2 border-textGrey bg-blackButton p-4 text-base font-semibold text-white lg:w-2/6">
            <button
              onClick={handleAddToCart}
              // onClick={addCartIncrement}
              className="flex flex-row items-center justify-center gap-3"
            >
              <BsCart size={20} />
              <div className="text-center">Add to Cart</div>
            </button>
          </div>
          <div className="min-w-[120px] text-2xl font-bold text-textBlack">{`$ ${product.price}.00`}</div>
        </div>
      </div>
    </>
  );
}

// const user_size = useSelector((state: RootState) => state.CartSlice.size);
// const value = useSelector((state: RootState) => state.CartSlice.value);
// const allitems = useSelector((state: RootState) => state.CartSlice.items);

// post item on DB
// const postCartItemtoDB = async () => {
//   toast.loading(`Wait... Adding to cart`);
//   const res = await fetch("/api/cart", {
//     method: "POST",
//     body: JSON.stringify({
//       product_id: product.title,
//       size: user_size,
//       quantity: value,
//       price: product.price,
//     }),
//   });
// const result = await res.json();
// console.log(result);
//   toast.dismiss();
// };

// // Update selected size state
// const handleSize = (curSize: string) => {
//   dispatch(counterActions.updateSize(curSize));
// };
// // Selected Size CSS
// const getButtonClassName = (buttonSize: string) => {
//   return `min-w-[23px] cursor-pointer rounded-full p-[1px] text-center text-base font-bold text-textGrey hover:shadow-lg hover:shadow-gray-400 ${
//     user_size === buttonSize ? "shadow-xl shadow-gray-500" : ""
//   }`;
// };

// // Add items to cart
// const addCartIncrement = async () => {
//   if (value > 0 && user_size !== "") {
//     dispatch(
//       counterActions.addToCart({
//         product: {
//           id: product.title,
//           price: parseInt(product.price, 10),
//           size: user_size,
//         },
//         quantity: value,
//       })
//     );
//     await postCartItemtoDB();
//     toast(`${product.title} added to cart`);
//   } else {
//     if (user_size === "") {
//       toast.error(`Please select size`);
//     } else {
//       toast.error(`Please Select quantity`);
//     }
//   }
// };

// const smallInc = () => {
//   if (value < 5) {
//     dispatch(counterActions.smallIncrement(1));
//   }
// };
// const smallDec = () => {
//   if (value > 0) {
//     dispatch(counterActions.smallDecrement(1));
//   }
// };
