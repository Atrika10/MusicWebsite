import FeaturedCardSection from "@/components/FeaturedCardSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-black antialiased">
      <HeroSection/>
      <FeaturedCardSection/>
    </main>
    </>
  );
}
