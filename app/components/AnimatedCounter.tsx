'use client';
import { useState, useEffect, useRef } from 'react';

export interface AnimatedCounterProps {
  value: number;
  duration?: number;
  delay?: number; // ✅ NEU: Delay prop hinzufügen
}

export function AnimatedCounter({
  value,
  duration = 2000,
  delay = 0 // ✅ Default: kein Delay
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const startAnimation = () => {
      startTimeRef.current = null;

      const animate = (currentTime: number) => {
        if (!startTimeRef.current) startTimeRef.current = currentTime;

        const elapsed = currentTime - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * value);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    if (delay > 0) {
      // ✅ Mit Delay starten
      const timer = setTimeout(startAnimation, delay);
      return () => clearTimeout(timer);
    } else {
      // ✅ Sofort starten
      startAnimation();
    }
  }, [value, duration, delay]);

  return <span>{count.toLocaleString()}</span>;
}
