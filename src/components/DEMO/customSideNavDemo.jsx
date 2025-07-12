"use client";

import { Home, Settings, Phone, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Home, label: "Home" },
  { icon: Settings, label: "Settings" },
  { icon: Lightbulb, label: "Ideas" },
  { icon: Phone, label: "Contact" },
];

export default function DnaNavbar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
      {items.map(({ icon: Icon, label }, i) => (
        <motion.div
          key={label}
          animate={{
            y: [0, -5, 0, 5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + i * 0.3,
            ease: "easeInOut",
          }}
          className="group relative"
        >
          <button className="bg-black text-white p-3 rounded-full hover:scale-110 transition">
            <Icon className="w-5 h-5" />
          </button>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-sm bg-white text-black px-2 py-1 rounded-md shadow transition-all duration-300">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
