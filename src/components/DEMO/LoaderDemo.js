"use client";

import { useState, useEffect } from "react";
import { MultiStepLoader } from "../ui/multi-step-loader";

const loadingStates = [
  { text: "Welcome to Zefaza" }, // Modified last step to align with brand
  { text: "Welcome to Zefaza" }, // Modified last step to align with brand
];

export function MultiStepLoaderDemo({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const totalDuration = loadingStates.length * 1000; // 2000ms per step
      const timer = setTimeout(() => {
        setLoading(false);
        if (onComplete) onComplete();
      }, totalDuration);
      return () => clearTimeout(timer);
    }
  }, [loading, onComplete]);

  return (
    <MultiStepLoader
      loadingStates={loadingStates}
      loading={loading}
      duration={1000}
      loop={false}
    />
  );
}
