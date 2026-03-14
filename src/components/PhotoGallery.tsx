import photo1 from "@/assets/placeholder-photo-1.jpg";
import photo2 from "@/assets/placeholder-photo-2.jpg";
import photo3 from "@/assets/placeholder-photo-3.jpg";
import { Heart } from "lucide-react";

const photos = [
  { src: photo1, caption: "The Little Princess 👸", year: "Childhood" },
  { src: photo2, caption: "Growing Up Beautiful 🌸", year: "Sweet memories" },
  { src: photo3, caption: "The Birthday Girl! 🎂", year: "Now - 15!" },
];

const PhotoGallery = () => {
  return (
    <section className="relative py-16 px-4 z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl birthday-text-gradient mb-3">
          Growing Up Beautiful
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          A journey through the years 💕
        </p>
      </div>

      <div className="max-w-lg mx-auto space-y-8">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="animate-slide-up"
            style={{ animationDelay: `${i * 0.2}s`, animationFillMode: "both" }}
          >
            <div className="glass-card rounded-2xl overflow-hidden sparkle-shadow">
              <div className="relative">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Heart className="w-4 h-4 text-primary fill-primary" />
                  <span className="font-body text-xs font-bold text-foreground">{photo.year}</span>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="font-body text-foreground font-bold text-lg">{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center mt-8 font-body text-muted-foreground text-sm italic">
        (Replace these with real photos! 📸)
      </p>
    </section>
  );
};

export default PhotoGallery;
