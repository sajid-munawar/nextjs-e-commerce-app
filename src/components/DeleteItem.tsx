import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "@/store/slices/cartItemsSlice";
import { ToastContainer, toast } from "react-toastify";

const DeleteItem = ({ _id }: { _id: string }) => {
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    dispatch(removeItemFromCart(_id));
    toast.warn("Item removed from cart");

    // try {
    //   const res = await fetch("/api/cart", {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       id: _id,
    //     }),
    //   });
    //   return res;
    // } catch (error) {
    //   console.log("error from delete api call", error);
    // }
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
      <div onClick={handleDeleteItem} className="cursor-pointer">
        <AiOutlineDelete size={25} />
      </div>
    </>
  );
};

export default DeleteItem;
