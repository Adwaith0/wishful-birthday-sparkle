import cakeImg from "@/assets/birthday-cake.png";
import balloonsImg from "@/assets/balloons.png";
import bannerImg from "@/assets/party-banner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Banner */}
      <div className="animate-bounce-in mb-4">
        <img src={bannerImg} alt="Happy Birthday Banner" className="w-64 md:w-80 mx-auto drop-shadow-lg" />
      </div>

      {/* Balloons floating beside */}
      <img
        src={balloonsImg}
        alt="Balloons"
        className="absolute top-8 left-4 w-24 md:w-32 animate-float opacity-80"
        style={{ animationDelay: "0.5s" }}
      />
      <img
        src={balloonsImg}
        alt="Balloons"
        className="absolute top-12 right-4 w-20 md:w-28 animate-float opacity-70"
        style={{ animationDelay: "1.5s", transform: "scaleX(-1)" }}
      />

      {/* Main heading */}
      <div className="text-center z-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-2 font-semibold tracking-wider uppercase">
          🎉 Today is your special day! 🎉
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl birthday-text-gradient leading-snug mb-4 drop-shadow-sm">
          Happy 15th Birthday Kalyani !
        </h1>
        <p className="font-body text-xl md:text-2xl text-foreground font-bold mb-6">
          🌟 You're officially a Superstar! 🌟
        </p>
      </div>

      {/* Cake */}
      <div className="animate-bounce-in z-10" style={{ animationDelay: "0.6s" }}>
        <img src={cakeImg} alt="Birthday Cake" className="w-40 md:w-52 mx-auto animate-wiggle drop-shadow-xl" />
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 animate-float z-10">
        <p className="font-body text-muted-foreground text-sm">Scroll down for more ✨</p>
        <div className="mx-auto mt-2 w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
