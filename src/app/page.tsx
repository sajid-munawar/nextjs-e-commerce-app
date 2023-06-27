import Footer from "@/components/footer/footer";
import HeroSection from "@/components/hero/HeroSection";
import Nav from "@/components/nav/Nav";
import Promotions from "@/components/promotions/Promotions";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Promotions />
      <Footer />
    </>
  );
}
