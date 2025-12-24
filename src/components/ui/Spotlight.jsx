import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../lib/utils";

export const Spotlight = ({ className, fill = "white" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100",
        className
      )}
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
      }}
    />
  );
};

export const SpotlightCard = ({ children, className = "" }) => {
    return (
        <div className={cn("relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 group", className)}>
            <Spotlight className="-z-10" />
            <div className="relative h-full">
                {children}
            </div>
        </div>
    )
}
