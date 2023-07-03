import React from "react";

export default function NewsLetter() {
  return (
    <div>
      <div className="relative flex flex-col items-center px-8 py-24 text-center lg:px-32 lg:py-40">
        <div className="absolute -z-10 pt-24 text-6xl font-extrabold text-backgroundGrey lg:pt-4 lg:text-9xl ">
          Newsletter
        </div>
        <div className="mb-4 text-3xl font-bold tracking-wide text-textBlack lg:text-4xl">
          Subscribe Our Newsletter
        </div>
        <div className="mb-8 text-base font-light text-textBlack">
          Get the latest information and promo offers directly
        </div>
        <form className="flex flex-col items-center lg:flex-row">
          <input
            type="email"
            placeholder="Input email address"
            className="mb-4 mr-2 border-[1px] border-gray-500 py-2 pl-5 pr-28 lg:mb-0"
          />
          <button
            type="submit"
            className="border-l-2 border-t-2 border-textGrey bg-blackButton px-10 py-3 text-sm font-semibold text-white"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}
