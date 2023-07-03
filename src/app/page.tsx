import HeroSection from "@/components/hero/HeroSection";
import Products from "@/components/products/Products";
import Promotions from "@/components/promotions/Promotions";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Promotions />
      <Products />
    </>
  );
}
