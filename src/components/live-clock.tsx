"use client";

import { useEffect, useState } from "react";

const fmt = () =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());

export function LiveClock({ className }: { className?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const raf = requestAnimationFrame(() => setTime(fmt()));
    const id = window.setInterval(() => setTime(fmt()), 1000);
    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(id);
    };
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time || "––:––:––"}
    </span>
  );
}
