"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const hideTimer = setTimeout(() => setLoading(false), 1600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <p className="text-lg font-bold tracking-tight">
        Mabanza<span className="text-primary">.</span>
      </p>
      <h2 className="mt-6 text-sm font-medium uppercase tracking-widest text-muted">
        Chargement
      </h2>
      <p className="mt-2 text-sm text-muted">
        Préparation de votre expérience...
      </p>
      <div className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-matte">
        <div className="h-full animate-loader-bar rounded-full bg-primary" />
      </div>
    </div>
  );
}
