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

      {/* Top-view go-kart SVG */}
      <svg
        width="36"
        height="48"
        viewBox="0 0 36 48"
        fill="none"
        className="text-primary drop-shadow-[0_0_6px_hsl(120_100%_45%/0.5)]"
        style={{
          transform: direction === "up" ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
        }}
      >
        {/* Body */}
        <rect x="10" y="8" width="16" height="32" rx="4" fill="currentColor" opacity="0.8" />
        {/* Nose */}
        <path d="M14 8 L18 2 L22 8" fill="currentColor" opacity="0.9" />
        {/* Rear */}
        <rect x="12" y="38" width="12" height="4" rx="2" fill="currentColor" opacity="0.7" />
        {/* Front left wheel */}
        <rect x="3" y="6" width="6" height="12" rx="3" fill="currentColor" />
        {/* Front right wheel */}
        <rect x="27" y="6" width="6" height="12" rx="3" fill="currentColor" />
        {/* Rear left wheel */}
        <rect x="3" y="32" width="6" height="12" rx="3" fill="currentColor" />
        {/* Rear right wheel */}
        <rect x="27" y="32" width="6" height="12" rx="3" fill="currentColor" />
        {/* Front axle */}
        <rect x="6" y="11" width="24" height="2" rx="1" fill="currentColor" opacity="0.5" />
        {/* Rear axle */}
        <rect x="6" y="37" width="24" height="2" rx="1" fill="currentColor" opacity="0.5" />
        {/* Steering column */}
        <rect x="16" y="14" width="4" height="6" rx="1" fill="hsl(120 10% 5%)" opacity="0.4" />
        {/* Steering wheel */}
        <ellipse cx="18" cy="14" rx="4" ry="2" fill="currentColor" opacity="0.6" />
        {/* Number plate */}
        <text x="18" y="32" fontSize="7" fontWeight="bold" fill="hsl(120 10% 5%)" opacity="0.5" textAnchor="middle">10</text>
      </svg>
    </div>
  );
}
