import giftsImg from "@/assets/gifts.png";
import { Star, Heart, Cake, PartyPopper } from "lucide-react";

const wishes = [
  { icon: Star, text: "May all your dreams come true this year! ✨" },
  { icon: Heart, text: "You bring so much joy to everyone around you 💕" },
  { icon: Cake, text: "Here's to 15 amazing years & many more to come! 🎂" },
  { icon: PartyPopper, text: "The world is so lucky to have you in it! 🎉" },
];

const WishesSection = () => {
  return (
    <section className="relative py-16 px-4 z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl birthday-text-gradient mb-3">
          Birthday Wishes
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          From your biggest fans! 🥳
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4 mb-12">
        {wishes.map((wish, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl p-5 flex items-center gap-4 animate-slide-up"
            style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "both" }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 animate-heart-beat" style={{ animationDelay: `${i * 0.3}s` }}>
              <wish.icon className="w-6 h-6 text-primary" />
            </div>
            <p className="font-body text-foreground font-semibold">{wish.text}</p>
          </div>
        ))}
      </div>

      {/* Gifts */}
      <div className="text-center animate-bounce-in" style={{ animationDelay: "0.5s" }}>
        <img src={giftsImg} alt="Birthday Gifts" className="w-48 md:w-64 mx-auto animate-float drop-shadow-lg" />
        <p className="mt-4 font-body text-foreground text-xl font-bold">
          🎁 A very special gift awaits you! 🎁
        </p>
      </div>
    </section>
  );
};

export default WishesSection;
