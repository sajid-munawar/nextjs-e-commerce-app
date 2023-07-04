import HeroSection from "@/components/hero/HeroSection";
import NewsLetter from "@/components/newsletter/NewsLetter";
import Products from "@/components/products/Products";
import Promotions from "@/components/promotions/Promotions";
import { getProductData } from "@/interface/fetchFunction";
import { IProductsDetail } from "@/interface/interface";

export default async function Home() {
  const productsData: IProductsDetail[] = await getProductData(
    `*[_type=="products"]{title,price,image}`
  );
  return (
    <>
      <HeroSection />
      <Promotions />
      <Products productsData={productsData} />
      <NewsLetter />
    </>
  );
}
