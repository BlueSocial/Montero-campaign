"use client"

import { useState, useEffect } from 'react';

const words = [
  { text: 'Voice', color: 'text-golden-yellow' },
  { text: 'Vision', color: 'text-golden-yellow' },
  { text: 'Direction', color: 'text-golden-yellow' },
];

export default function AnimatedHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out before changing word
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg font-serif whitespace-nowrap">
      A New{' '}
      <span
        className={`inline-block transition-opacity duration-500 min-w-[120px] md:min-w-[180px] text-center ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        } ${words[currentIndex].color}`}
      >
        {words[currentIndex].text}
      </span>{' '}
      for Riverside
    </h1>
  );
} 