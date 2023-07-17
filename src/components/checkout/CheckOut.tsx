import React from "react";
import getStripePromise from "@/lib/stripe";

const CheckOut = () => {
  const product = [
    {
      price: 10,
      name: "Abc",
      quantity: 1,
    },
  ];
  const handleCheckOut = async () => {
    const stripe = await getStripePromise();
    const res = await fetch("/api/stripe-session", {
      method: "POST",
      body: JSON.stringify(product),
    });
    const data = await res.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
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
