const FooterSection = () => {
  return (
    <section className="relative py-16 px-4 z-10 text-center">
      <div className="glass-card max-w-sm mx-auto rounded-3xl p-8 sparkle-shadow">
        <p className="text-6xl mb-4 animate-heart-beat">🎂</p>
        <h2 className="text-3xl md:text-4xl birthday-text-gradient mb-4">
          Happy Birthday!
        </h2>
        <p className="font-body text-foreground text-lg font-semibold mb-2">
          Wishing you the most magical 15th year!
        </p>
        <p className="font-body text-muted-foreground text-sm">
          With lots of love & cupcakes 🧁💖
        </p>
        <div className="mt-6 flex justify-center gap-2 text-3xl">
          {["🎈", "🎉", "💝", "🌟", "🎊"].map((emoji, i) => (
            <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
              {emoji}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-12 font-body text-muted-foreground text-xs">
        Made with 💖 just for you
      </p>
    </section>
  );
};

export default FooterSection;
