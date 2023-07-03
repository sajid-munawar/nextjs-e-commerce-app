import Footer from "@/components/footer/footer";
import HeroSection from "@/components/hero/HeroSection";
import Nav from "@/components/nav/Nav";
import Products from "@/components/products/Products";
import Promotions from "@/components/promotions/Promotions";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Promotions />
      <Products />
      <Footer />
    </>
  );
}
