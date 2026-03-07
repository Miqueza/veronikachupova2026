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

      {/* Top-view F1-style kart */}
      <svg
        width="40"
        height="52"
        viewBox="0 0 100 130"
        fill="none"
        className="text-primary drop-shadow-[0_0_6px_hsl(120_100%_45%/0.5)]"
        style={{
          transform: direction === "down" ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
        }}
      >
        {/* Body main */}
        <path d="M35 25 L50 5 L65 25 L65 100 L60 110 L40 110 L35 100 Z" fill="currentColor" opacity="0.85" />
        {/* Nose cone */}
        <path d="M42 20 L50 2 L58 20" fill="currentColor" />
        {/* Rear wing */}
        <rect x="25" y="105" width="50" height="8" rx="3" fill="currentColor" opacity="0.9" />
        {/* Front left wheel */}
        <rect x="12" y="15" width="14" height="24" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="2" />
        {/* Front right wheel */}
        <rect x="74" y="15" width="14" height="24" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="2" />
        {/* Rear left wheel */}
        <rect x="12" y="88" width="14" height="24" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="2" />
        {/* Rear right wheel */}
        <rect x="74" y="88" width="14" height="24" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="2" />
        {/* Front axle */}
        <rect x="20" y="24" width="60" height="4" rx="2" fill="currentColor" opacity="0.5" />
        {/* Rear axle */}
        <rect x="20" y="97" width="60" height="4" rx="2" fill="currentColor" opacity="0.5" />
        {/* Cockpit */}
        <rect x="40" y="40" width="20" height="25" rx="8" fill="hsl(120 10% 5%)" opacity="0.5" />
        {/* Side pods */}
        <path d="M35 45 L20 50 L20 75 L35 80" fill="currentColor" opacity="0.6" />
        <path d="M65 45 L80 50 L80 75 L65 80" fill="currentColor" opacity="0.6" />
      </svg>
    </div>
  );
}
