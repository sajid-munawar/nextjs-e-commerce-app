import React, { useState } from "react";
import getStripePromise from "@/lib/stripe";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { BiLoaderCircle } from "react-icons/bi";

const CheckOut = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.cartItems);
  const handleCheckOut = async () => {
    setLoading(true);
    const stripe = await getStripePromise();
    const res = await fetch("/api/stripe-session", {
      method: "POST",
      body: JSON.stringify(cartItems),
    });
    const data = await res.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
      setLoading(false);
    }
  };
  return (
    <>
      <div className="border-l-2 border-t-2 border-textGrey bg-blackButton px-10 py-3 text-sm font-semibold text-white">
        {!loading ? (
          <>
            <button onClick={handleCheckOut} type="submit">
              Proceed to Checkout
            </button>
          </>
        ) : (
          <button className="flex flex-row items-center justify-center gap-3">
            <BiLoaderCircle size={20} />
            <div className="text-center">Processing...</div>
          </button>
        )}
      </div>
    </>
  );
};

export default CheckOut;
