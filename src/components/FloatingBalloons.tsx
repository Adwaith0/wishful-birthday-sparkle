import { useEffect, useState } from "react";

const BALLOON_COLORS = [
  "hsl(340, 82%, 65%)",
  "hsl(45, 93%, 70%)",
  "hsl(280, 60%, 75%)",
  "hsl(20, 90%, 85%)",
  "hsl(340, 80%, 90%)",
  "hsl(200, 80%, 75%)",
];

interface Balloon {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

const FloatingBalloons = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const created: Balloon[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 6,
      size: 30 + Math.random() * 30,
      color: BALLOON_COLORS[i % BALLOON_COLORS.length],
    }));
    setBalloons(created);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="absolute"
          style={{
            left: `${b.left}%`,
            bottom: "-80px",
            animation: `float-balloon ${b.duration}s linear ${b.delay}s infinite`,
          }}
        >
          <svg width={b.size} height={b.size * 1.2} viewBox="0 0 40 52">
            <ellipse cx="20" cy="18" rx="16" ry="18" fill={b.color} opacity="0.7" />
            <polygon points="20,36 18,44 22,44" fill={b.color} opacity="0.5" />
            <line x1="20" y1="44" x2="20" y2="52" stroke={b.color} strokeWidth="1" opacity="0.4" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
