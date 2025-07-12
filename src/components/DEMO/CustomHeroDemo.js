// "use client";

// import { motion } from "framer-motion";
// import React from "react";
// import { AuroraBackground } from "../ui/aurora-background";
// import { SparklesCore } from "../ui/sparkles";

// export function AuroraBackgroundDemo() {
//   return (
//     <AuroraBackground>
//       <motion.div
//         initial={{ opacity: 0.0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
//         className="relative flex flex-col items-center justify-center w-full h-full px-4"
//       >
//         <div className="absolute inset-0 w-full h-full">
//           <SparklesCore
//             background="transparent"
//             minSize={0.4}
//             maxSize={1.2}
//             particleDensity={500}
//             className="w-full h-full"
//             particleColor="#ffffff"
//           />
//           <div className="absolute inset-0  " />
//         </div>

//         <div className="z-20 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 1 }}
//             className="text-5xl md:text-8xl font-extrabold text-white drop-shadow-lg"
//           >
//             ZEFAZA
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="text-xl md:text-3xl text-indigo-300 mt-4"
//           >
//             Hyperlocal. Instant. Everything.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2, duration: 0.6 }}
//             className="text-lg md:text-2xl text-white mt-6 italic"
//           >
//             🚀 Coming Soon — Your Customers Are Waiting...
//           </motion.p>

//           <motion.button
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.6, duration: 0.5 }}
//             className="mt-10 px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-xl"
//           >
//             📢 Register Your Shop or Service
//           </motion.button>
//         </div>
//       </motion.div>
//     </AuroraBackground>
//   );
// }
"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { SparklesCore } from "../ui/sparkles";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden px-4"
      >
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={1000}
            className="w-full h-full"
            particleColor="#ffffff"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-indigo-900/50 to-black opacity-90" />
        </div>

        <div className="z-20 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-2xl tracking-tight animate-pulse"
          >
            ZEFAZA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-3xl text-indigo-300 mt-4 font-medium"
          >
            Hyperlocal. Instant. Everything.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-lg md:text-2xl text-white mt-6 italic"
          >
            Coming Soon — Your Customers Are Waiting...
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-4 text-white bg-gradient-to-r from-[#2e2e2e] via-[#444] to-[#1a1a1a] rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-xl hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] border border-white/20"
          >
            📢 Register Your Shop or Service
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2, duration: 1.5 }}
            className="mt-12 text-sm text-white/70 font-light"
          >
            Designed for Warangal. Powered by innovation.
          </motion.div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
