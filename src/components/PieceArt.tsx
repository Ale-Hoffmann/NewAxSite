import { useId } from "react";
import type { PieceShape } from "@/data/landing";

// Desenho simples de cada peça, usado no lugar das fotos enquanto as fotos reais não chegam
const paths: Record<PieceShape, string> = {
  tee: "M62 10 L30 22 L4 58 L34 76 L44 62 L44 172 L156 172 L156 62 L166 76 L196 58 L170 22 L138 10 C132 26 118 34 100 34 C82 34 68 26 62 10 Z",
  polo: "M62 10 L30 22 L4 58 L34 76 L44 62 L44 172 L156 172 L156 62 L166 76 L196 58 L170 22 L138 10 L118 14 L100 50 L82 14 Z",
  tank: "M66 6 L80 6 C84 30 92 40 100 40 C108 40 116 30 120 6 L134 6 C136 40 148 56 158 64 L158 174 L42 174 L42 64 C52 56 64 40 66 6 Z",
  hoodie: "M70 14 C70 4 130 4 130 14 L170 28 L196 120 L168 128 L156 84 L156 174 L44 174 L44 84 L32 128 L4 120 L30 28 Z",
};

type Props = {
  shape: PieceShape;
  // Uma cor (ex.: "#FFFFFF") ou "gradient" para simular uma peça sublimada
  color: string;
  label?: string;
  width?: string;
};

export default function PieceArt({ shape, color, label, width = "50%" }: Props) {
  const gradientId = useId();
  const fill = color === "gradient" ? `url(#${gradientId})` : color;

  return (
    <svg viewBox="0 0 200 180" style={{ width, height: "auto" }} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0070F2" />
          <stop offset="0.5" stopColor="#1D2D3E" />
          <stop offset="1" stopColor="#0070F2" />
        </linearGradient>
      </defs>
      <path d={paths[shape]} fill={fill} />
      {label && (
        <text x="100" y="112" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="38" fill="#0070F2">
          {label}
        </text>
      )}
    </svg>
  );
}
