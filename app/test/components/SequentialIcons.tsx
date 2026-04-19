'use client';

import { useState, useEffect } from 'react';
import Icon, { type AllowedIconName } from './DynamicIcon';

interface SequentialIconsProps extends Omit<React.ComponentProps<typeof Icon>, 'name'> {
  icons: AllowedIconName[];
  interval?: number;
  fadeDuration?: number;
  className?: string;
}

const SequentialIcons = ({
  icons,
  interval = 2000,
  fadeDuration = 500,
  className = '',
  ...iconProps // Alle Icon-Props (strokeWidth, size, color, etc.)
}: SequentialIconsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (icons.length === 0) return;

    const cycleIcons = () => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % icons.length);
        setIsVisible(true);
      }, fadeDuration);
    };

    const timer = setInterval(cycleIcons, interval);

    return () => clearInterval(timer);
  }, [icons, interval, fadeDuration]);

  if (icons.length === 0) return null;

  return (
    <div className={`relative float-left ${className}`}>
      <div
        className={`transition-all ease-in-out transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-0'}`}
        style={{
          transitionDuration: `${fadeDuration}ms`,
          willChange: 'opacity, transform' // Hardware-Beschleunigung
        }}>
        <Icon name={icons[currentIndex]} {...iconProps} />
      </div>
    </div>
  );
};

export default SequentialIcons;
