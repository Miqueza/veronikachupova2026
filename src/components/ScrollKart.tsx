import { useEffect, useRef, useState } from "react";

export default function ScrollKart() {
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<"down" | "up">("down");
  const lastScroll = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const dir = y > lastScroll.current ? "down" : "up";
      lastScroll.current = y;
      setDirection(dir);
      setVisible(true);

      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setVisible(false), 800);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Smoke trail */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-[2px]"
        style={{
          [direction === "down" ? "bottom" : "top"]: "100%",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="rounded-full bg-muted-foreground/30"
            style={{
              width: `${6 + i * 2}px`,
              height: `${3 + i}px`,
              opacity: 0.5 - i * 0.08,
              filter: `blur(${1 + i}px)`,
            }}
          />
        ))}
      </div>

      {/* Go-kart SVG */}
      <svg
        width="40"
        height="24"
        viewBox="0 0 40 24"
        fill="none"
        className="text-primary drop-shadow-[0_0_6px_hsl(120_100%_45%/0.5)]"
        style={{
          transform: direction === "up" ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
        }}
      >
        {/* Chassis */}
        <rect x="6" y="8" width="28" height="7" rx="3" fill="currentColor" opacity="0.85" />
        {/* Front spoiler */}
        <rect x="30" y="10" width="8" height="3" rx="1" fill="currentColor" opacity="0.6" />
        {/* Rear wing */}
        <rect x="2" y="7" width="6" height="2" rx="1" fill="currentColor" opacity="0.7" />
        {/* Driver helmet */}
        <circle cx="18" cy="7" r="4" fill="currentColor" opacity="0.7" />
        <path d="M15 7 Q18 3 21 7" fill="currentColor" opacity="0.9" />
        {/* Steering wheel */}
        <rect x="22" y="9" width="4" height="1.5" rx="0.5" fill="hsl(120 10% 5%)" opacity="0.5" />
        {/* Rear wheels */}
        <ellipse cx="9" cy="18" rx="4" ry="3.5" fill="currentColor" />
        <ellipse cx="9" cy="18" rx="2.5" ry="2" fill="hsl(120 10% 5%)" opacity="0.4" />
        {/* Front wheels */}
        <ellipse cx="31" cy="18" rx="4" ry="3.5" fill="currentColor" />
        <ellipse cx="31" cy="18" rx="2.5" ry="2" fill="hsl(120 10% 5%)" opacity="0.4" />
        {/* Axles */}
        <rect x="5" y="15" width="8" height="1" rx="0.5" fill="currentColor" opacity="0.4" />
        <rect x="27" y="15" width="8" height="1" rx="0.5" fill="currentColor" opacity="0.4" />
        {/* Number */}
        <text x="16" y="14" fontSize="5" fontWeight="bold" fill="hsl(120 10% 5%)" opacity="0.6">10</text>
      </svg>
    </div>
  );
}
