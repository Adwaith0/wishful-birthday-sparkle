import FloatingBalloons from "@/components/FloatingBalloons";
import ConfettiRain from "@/components/ConfettiRain";
import Sparkles from "@/components/Sparkles";
import MusicPlayer from "@/components/MusicPlayer";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import WishesSection from "@/components/WishesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background decorations */}
      <FloatingBalloons />
      <ConfettiRain />
      <Sparkles />
      <MusicPlayer />

      {/* Content */}
      <HeroSection />
      <PhotoGallery />
      <WishesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
