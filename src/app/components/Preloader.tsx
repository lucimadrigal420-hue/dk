'use client';

import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const steps = [20, 45, 70, 90, 100];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
    }, 280);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-600 ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob-primary blob-morph absolute w-96 h-96 top-1/4 left-1/4 opacity-30" />
        <div className="blob-secondary blob-morph-slow absolute w-80 h-80 bottom-1/4 right-1/4 opacity-20" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo mark */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center glow-green">
            <span className="text-primary font-display font-black text-2xl">D</span>
          </div>
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-muted-foreground">
            Loading Portfolio
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-px bg-border overflow-hidden rounded-full">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 ease-spring"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-muted-foreground/40 text-xs font-mono tabular-nums">{progress}%</p>
      </div>
    </div>
  );
}
