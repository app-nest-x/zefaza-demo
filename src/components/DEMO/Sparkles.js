"use client";

import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { motion } from "framer-motion";

export function SparklesHero() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Particles */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1500}
        className="absolute inset-0 w-full h-full z-0"
        particleColor="#ffffff"
      />

      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/30 to-black z-10" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-4xl md:text-7xl font-bold text-center text-white z-20"
      >
        ZEFAZA
        <div className="text-lg md:text-3xl text-indigo-300 font-medium mt-2 tracking-wider">
          Hyperlocal. Instant. Everything.
        </div>
      </motion.h1>

      {/* Animated Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-white text-center z-20 mt-6"
      >
        <p className="text-lg md:text-2xl font-light italic">
          🚀 <span className="text-pink-400">Coming Soon</span> to your street…
        </p>
        <p className="mt-2 text-md md:text-xl text-indigo-200">
          🛍️ Customers are ready. Are you?
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="z-20 mt-10"
      >
        <button className="px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-lg shadow-pink-400/30">
          📢 Sellers: Register Your Shop Now
        </button>
      </motion.div>
    </div>
  );
}
