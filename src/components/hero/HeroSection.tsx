import React from "react";
import { findImage, getProductData } from "@/interface/fetchFunction";
import { IProducts } from "@/interface/interface";
import { urlForImage } from "../../../sanity/lib/image";
import { Image as Iimage } from "sanity";
import Link from "next/link";
import Image from "next/image";
import { BsCart } from "react-icons/bs";

const HeroSection = async () => {
  const data: IProducts[] = await getProductData(
    `*[_type=="heroImage"]{title,image}`
  );
  const imageData = findImage(data, "hero Image");
  console.log(imageData);

  return (
    <header className="relative mx-8 flex gap-16 pt-8 lg:my-16 lg:ml-16 lg:mr-0 xl:ml-32 ">
      {/* Left Div */}
      <div className="min-w[450px] flex  flex-col gap-8 lg:gap-12">
        {/* Upper part */}
        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-lighBlue font-semibold text-textSaleBlue ">
          Sale 70%
        </div>
        <div className="text-5xl font-bold tracking-wide text-textBlack lg:text-6xl ">
          An Industrial Take on Streetwear
        </div>
        <div className="text-base font-normal text-textGrey ">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </div>
        {/* Black Button */}
        <Link href={"/all-products"}>
          <div className="flex w-4/5 min-w-[160px] items-center justify-center border-l-2 border-t-2 border-textGrey bg-blackButton p-4 text-base font-semibold text-white lg:w-2/6">
            <button className="flex flex-row items-center justify-center gap-2">
              <BsCart size={20} />
              <div className="text-center">Start Shopping</div>
            </button>
          </div>
        </Link>
        {/* Lower logo part */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Image
            src={"/Featured1.webp"}
            alt="HeroSection Featured1"
            height={"35"}
            width={"100"}
          />
          <Image
            src={"/Featured2.webp"}
            alt="HeroSection Featured2"
            height={"35"}
            width={"100"}
          />
          <Image
            src={"/Featured3.webp"}
            alt="HeroSection Featured3"
            height={"35"}
            width={"100"}
          />
          <Image
            src={"/Featured4.webp"}
            alt="HeroSection Featured4"
            height={"35"}
            width={"100"}
          />
        </div>
      </div>

      {/* Right Div */}
      <div className="hidden overflow-hidden lg:block">
        {/* Circle */}
        <div className="relative mr-32 h-[600px] w-[600px] rounded-[50%] bg-circleCream ">
          <Image
            className="absolute"
            src={imageData ? urlForImage(imageData).url() : ""}
            alt="HeroSection Girl"
            height={"650"}
            width={"650"}
            quality={100}
            priority={true}
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
