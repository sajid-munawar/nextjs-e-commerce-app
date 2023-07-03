import HeroSection from "@/components/hero/HeroSection";
import NewsLetter from "@/components/newsletter/NewsLetter";
import Products from "@/components/products/Products";
import Promotions from "@/components/promotions/Promotions";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Promotions />
      <Products />
      <NewsLetter />
    </>
  );
}
