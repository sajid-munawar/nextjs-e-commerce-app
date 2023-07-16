import React from "react";

const CheckOut = () => {
  const product = [
    {
      price: 10,
      name: "Abc",
    },
  ];
  const handleCheckOut = async () => {
    const res = await fetch("/api/stripe-session", {
      method: "POST",
      body: JSON.stringify(product),
    });
  };
  return (
    <>
      <button
        onClick={handleCheckOut}
        type="submit"
        className="border-l-2 border-t-2 border-textGrey bg-blackButton px-10 py-3 text-sm font-semibold text-white"
      >
        Proceed to Checkout
      </button>
    </>
  );
};

export default CheckOut;
