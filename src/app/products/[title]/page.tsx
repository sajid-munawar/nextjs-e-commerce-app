import { IProductsDetail } from "@/interface/interface";
import { getProductData } from "@/interface/fetchFunction";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
// import Quantity_Size_AddCart from "./Quantity_Size_AddCart";
import Quantity_Size_AddCart from "@/components/productDetails/Quantity_Size_AddCart";

export default async function ProductPage({
  params,
}: {
  params: { title: string };
}) {
  const URL = `*[_type=="products" && title== "${params.title
    .split("%20")
    .join(" ")}"]{title,image,price,category,details,care}`;
  const data: IProductsDetail[] = await getProductData(URL);

  return (
    <>
      {data && (
        <>
          <div className="p-8 lg:px-16 xl:px-32">
            <div className="flex flex-col justify-between  gap-8 sm:items-start lg:flex-row lg:items-center">
              {/* Left Div */}
              <div className="flex gap-8">
                {/* Other Images */}
                <div className="flex flex-col gap-4">
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="relative h-[50px] w-[50px] md:h-[100px] md:w-[100px]"
                      >
                        <Image
                          src={urlForImage(data[0].image).url()}
                          alt={data[0].title}
                          fill={true}
                        />
                      </div>
                    ))}
                </div>
                {/* Product Image */}
                <div className="relative h-[270px] w-[250px] md:h-[460px] md:w-[460px] ">
                  <Image
                    src={urlForImage(data[0].image).url()}
                    alt={data[0].title}
                    fill={true}
                    className=""
                    quality={100}
                  />
                </div>
              </div>
              {/* Text and cart button area */}
              <div className="flex flex-col gap-10">
                <div>
                  <div className="text-2xl font-normal leading-8 tracking-wider text-textBlack lg:text-3xl">
                    {data[0].title}
                  </div>
                  <div className="pt-1 text-xl font-semibold opacity-30">
                    {data[0].category}
                  </div>
                </div>
                <Quantity_Size_AddCart params={data[0]} />
                <div></div>
              </div>
            </div>
            {/* Bottom section */}
            <div className="relative bg-white/95 px-8 py-28 shadow-sm">
              <div className="absolute -z-10 pt-24 text-6xl font-extrabold text-backgroundGrey lg:pt-4 lg:text-9xl ">
                Overview
              </div>
              <div className="py-16 text-2xl font-bold">
                Product Information
              </div>
              <div className="h-[2px] w-full bg-gray-400"></div>
              {/* product details */}
              <div className="grid grid-cols-3 grid-rows-1 py-8">
                <div className="col-span-1 font-bold text-black/60">
                  PRODUCT DETAILS
                </div>

                <div className=" col-span-2 tracking-widest text-black/90">
                  {data[0].details}
                </div>
              </div>
              {/* product Care */}
              <div className="grid grid-cols-3 grid-rows-1">
                <div className="col-span-1 font-bold text-black/60">
                  PRODUCT CARE
                </div>

                <ul className="col-span-2 list-disc font-semibold">
                  {data[0].care.map((careItem) => (
                    <li className="my-2" key={careItem}>
                      {careItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
