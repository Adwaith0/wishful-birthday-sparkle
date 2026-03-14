import { useEffect, useState } from "react";

const CONFETTI_COLORS = [
  "hsl(340, 82%, 65%)",
  "hsl(45, 93%, 70%)",
  "hsl(280, 60%, 75%)",
  "hsl(20, 90%, 85%)",
  "hsl(170, 70%, 65%)",
  "hsl(200, 80%, 75%)",
];

interface Piece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  shape: "circle" | "rect" | "star";
}

const ConfettiRain = () => {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    const shapes: Piece["shape"][] = ["circle", "rect", "star"];
    const created: Piece[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      size: 6 + Math.random() * 8,
      shape: shapes[i % 3],
    }));
    setPieces(created);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: "-20px",
            width: p.size,
            height: p.shape === "rect" ? p.size * 0.5 : p.size,
            backgroundColor: p.shape !== "star" ? p.color : "transparent",
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            animation: `confetti-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          {p.shape === "star" && (
            <svg width={p.size} height={p.size} viewBox="0 0 20 20">
              <polygon
                points="10,0 12.5,7.5 20,7.5 14,12.5 16,20 10,15 4,20 6,12.5 0,7.5 7.5,7.5"
                fill={p.color}
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default ConfettiRain;
