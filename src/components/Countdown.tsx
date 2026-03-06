import { useState, useEffect } from "react";

const TARGET = new Date("2026-05-22T00:00:00+03:00").getTime();

export default function Countdown() {
  const [diff, setDiff] = useState(TARGET - Date.now());

  useEffect(() => {
    const id = setInterval(() => setDiff(TARGET - Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (diff <= 0) return null;

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  return (
    <div className="text-center space-y-2">
      <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
        До дня рождения Вероники осталось
      </p>
      <div className="flex items-center justify-center gap-3">
        <TimeUnit value={days} label="дн" />
        <span className="text-primary font-display text-xl mb-4">:</span>
        <TimeUnit value={hours} label="ч" />
        <span className="text-primary font-display text-xl mb-4">:</span>
        <TimeUnit value={minutes} label="мин" />
        <span className="text-primary font-display text-xl mb-4">:</span>
        <TimeUnit value={seconds} label="сек" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-primary font-display text-2xl md:text-3xl tabular-nums w-12 text-center">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-muted-foreground text-[10px] uppercase">{label}</span>
    </div>
  );
}
