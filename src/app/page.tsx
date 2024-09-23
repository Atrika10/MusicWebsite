import FeaturedCardSection from "@/components/FeaturedCardSection";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-black antialiased">
      <HeroSection/>
      <FeaturedCardSection/>
      <TestimonialsSection/>
    </main>
    </>
  );
}
