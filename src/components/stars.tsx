"use client";
import { useMemo } from "react";

export default function Stars({ of }: { of?: number }) {
  const stars = useMemo(() => {
    const positions: { top: number; left: number }[] = [];
    const MIN_DISTANCE = 40; // px distance between stars (tweak if needed)

    const random = () => ({
      top: Math.random() * (of ?? 33), // top 1/3 area
      left: Math.random() * 100,
    });

    const isFarEnough = (a: any, b: any) => {
      const dx = a.left - b.left;
      const dy = a.top - b.top;
      return Math.sqrt(dx * dx + dy * dy) > MIN_DISTANCE * 0.6;
    };

    while (positions.length < 6) {
      const candidate = random();
      if (positions.every((p) => isFarEnough(p, candidate))) {
        positions.push(candidate);
      }
    }

    return positions;
  }, []);
  return stars.map((pos, i) => (
    <div
      suppressHydrationWarning
      key={i}
      className="absolute bg-background size-2 rounded-full"
      style={{
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        boxShadow: "0px 0px 12px white",
      }}
    />
  ));
}
