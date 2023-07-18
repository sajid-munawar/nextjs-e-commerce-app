"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { urlForImage } from "../../../sanity/lib/image";
import { IProductsDetail } from "@/interface/interface";

export default async function Products({
  productsData,
}: {
  productsData: IProductsDetail[];
}) {
  const responsive = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1080: {
      slidesPerView: 3,
      spaceBetween: 40,
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
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper"
        breakpoints={responsive}
        modules={[Pagination, Autoplay]}
      >
        {productsData &&
          productsData.map((items: any) => (
            <SwiperSlide
              className="pb-14 text-center md:mx-2 lg:mx-4 lg:pl-[18px] 2xl:mx-6"
              key={items.title}
            >
              <div className="lg:2-[400px] inline-block  h-[320px] w-[300px] cursor-pointer pt-8 duration-500  ease-in-out hover:scale-110 lg:w-[380px] lg:pb-14">
                <Link
                  href={`/products/${items.title}`}
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
                  <div className="my-2 text-center text-lg font-semibold tracking-wide text-textBlack lg:text-left">
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
