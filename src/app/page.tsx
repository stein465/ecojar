import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import VideoSection from "@/components/VideoSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductsSection />
        <VideoSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
