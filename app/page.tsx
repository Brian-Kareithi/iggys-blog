import BackgroundImage from "./components/BackgroundImage";
import Navbar from "./components/Navbar";
import LogoBanner from "./components/LogoBanner";
import CTAButtons from "./components/CTAButtons";
import HeroCard from "./components/HeroCard";
import CategoriesGrid from "./components/CategoriesGrid";
import FeaturesGrid from "./components/FeaturesGrid";
import BestOfIggy from "./components/BestOfIggy";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <BackgroundImage />
      <Navbar />

      <div className="relative z-20 max-w-6xl mx-auto px-5 sm:px-8 pt-20 sm:pt-24 pb-20 sm:pb-24">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 mb-14 sm:mb-20">
          <LogoBanner />
          <CTAButtons />
        </div>

        <div className="text-center mb-16 sm:mb-24">
          <HeroCard />
        </div>

        <CategoriesGrid />

        <div className="flex flex-col md:flex-row items-end justify-between gap-6 sm:gap-8">
          <FeaturesGrid />
          <BestOfIggy />
        </div>
      </div>
    </div>
  );
}
