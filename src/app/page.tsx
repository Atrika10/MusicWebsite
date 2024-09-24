import FeaturedCardSection from "@/components/FeaturedCardSection";
import FeaturedWebinarSection from "@/components/FeaturedWebinarSection";
import HeroSection from "@/components/HeroSection";
import TeamMembers from "@/components/TeamMembers";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-black antialiased">
      <HeroSection/>
      <FeaturedCardSection/>
      <TestimonialsSection/>
      <FeaturedWebinarSection/>
      <TeamMembers/>
    </main>
    </>
  );
}
