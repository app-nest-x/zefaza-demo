"use client";

import { Home, Star, Rocket, Phone } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { icon: Home, label: "Home" },
  { icon: Rocket, label: "Launch" },
  { icon: Star, label: "Vision" },
  { icon: Phone, label: "Contact" },
];

export default function CrownNav() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex gap-6 px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_4px_30px_rgba(255,255,255,0.1)] rounded-full"
        style={{
          WebkitBackdropFilter: "blur(10px)",
          backdropFilter: "blur(10px)",
        }}
      >
        {links.map(({ icon: Icon, label }) => (
          <motion.button
            key={label}
            className="pointer-events-auto relative flex flex-col items-center text-white group"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 shadow-md group-hover:shadow-white/20 transition duration-300"
              whileHover={{
                boxShadow: "0px 0px 20px rgba(255,255,255,0.3)",
              }}
            >
              <Icon className="w-5 h-5 text-white/90" />
            </motion.div>
            <span className="text-xs opacity-50 mt-1 group-hover:opacity-100 transition duration-300">
              {label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
