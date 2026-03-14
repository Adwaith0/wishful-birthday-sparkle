import { useEffect, useState } from "react";

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<{ id: number; left: number; top: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const created = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      size: 4 + Math.random() * 8,
    }));
    setSparkles(created);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute animate-sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        >
          <svg viewBox="0 0 20 20" width={s.size} height={s.size}>
            <polygon
              points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8"
              fill="hsl(45, 93%, 58%)"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Sparkles;
