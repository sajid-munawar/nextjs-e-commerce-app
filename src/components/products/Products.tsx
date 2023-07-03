"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { urlForImage } from "../../../sanity/lib/image";
import { IProductsDetail } from "@/interface/interface";
import { getProductData } from "@/interface/fetchFunction";
import { useEffect, useState } from "react";

export default async function Products({
  imageData,
}: {
  imageData: IProductsDetail[];
}) {
  const responsive = {
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 1,
    },
    768: {
      width: 800,
      slidesPerView: 2,
    },
    1080: {
      width: 1080,
      slidesPerView: 3,
    },
  };

  return (
    <div className="px-8 py-16 lg:px-16 xl:px-32">
      {/* Top heading */}
      <div className="">
        <div className="mb-4 text-center text-xs font-bold tracking-widest text-textBlue">
          PRODUCTS
        </div>
        <div className="mb-8 text-center text-4xl font-bold -tracking-tight text-textBlack">
          Check What We Have
        </div>
      </div>
      {/* Bottom Items */}
      <Swiper
        spaceBetween={80}
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={responsive}
      >
        {imageData?.map((items: any) => (
          <SwiperSlide className=" text-center lg:pl-[18px]" key={items.title}>
            <div className="lg:2-[400px] inline-block  h-[320px] w-[300px] cursor-pointer pt-8 duration-500  ease-in-out hover:scale-110 lg:w-[380px] lg:pb-14">
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                id="myLink"
                className="drag-none"
              >
                <Image
                  src={urlForImage(items.image).url()}
                  alt={items.title}
                  width={380}
                  height={400}
                />
                <div className="mt-2 text-center text-lg font-semibold tracking-wide text-textBlack lg:text-left">
                  <div>{items.title}</div>
                  <div className="">{items.price}</div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
