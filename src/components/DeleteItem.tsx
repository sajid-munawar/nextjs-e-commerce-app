import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const DeleteItem = ({ _id }: { _id: string }) => {
  const handleDeleteItem = async () => {
    const res = await fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: _id,
      }),
    });
    return res;
  };

  return (
    <div onClick={handleDeleteItem} className="cursor-pointer">
      <AiOutlineDelete size={25} />
    </div>
  );
};

export default DeleteItem;
