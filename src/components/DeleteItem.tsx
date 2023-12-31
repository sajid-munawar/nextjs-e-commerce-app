import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "@/store/slices/cartItemsSlice";
import { ToastContainer, toast } from "react-toastify";

const DeleteItem = ({ _id, size }: { _id: string; size: string }) => {
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    dispatch(removeItemFromCart({ productId: _id, size }));
    toast.warn("Item removed from cart");
  };

  return (
    <>
      <div onClick={handleDeleteItem} className="cursor-pointer">
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
        <AiOutlineDelete size={25} />
      </div>
    </>
  );
};

export default DeleteItem;
