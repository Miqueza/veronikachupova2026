import { useEffect, useRef, useState } from "react";

export default function ScrollKart() {
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<"down" | "up">("down");
  const lastScroll = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();
  const trailRef = useRef<HTMLDivElement>(null);

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
        ref={trailRef}
        className="absolute left-1/2 -translate-x-1/2 w-6 flex flex-col items-center gap-[2px]"
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

      {/* Kart icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        className="text-primary transition-transform duration-300"
        style={{
          transform: direction === "up" ? "scaleY(-1)" : "scaleY(1)",
        }}
      >
        {/* Kart body */}
        <rect x="4" y="10" width="16" height="5" rx="2" fill="currentColor" opacity="0.9" />
        {/* Driver */}
        <circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.7" />
        {/* Wheels */}
        <circle cx="7" cy="17" r="2" fill="currentColor" />
        <circle cx="17" cy="17" r="2" fill="currentColor" />
        {/* Axle */}
        <rect x="6" y="15" width="12" height="1.5" rx="0.75" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
  );
}
