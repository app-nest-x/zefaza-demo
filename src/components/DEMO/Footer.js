import { Instagram, Twitter, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
];

export default function NebulaPulseFooter() {
  return (
    <footer className="relative mt-40 z-50 text-white overflow-hidden">
      {/* Background Glow Ring */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gradient-to-tr from-pink-500 to-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl px-8 py-16 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_60px_rgba(255,255,255,0.05)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Brand & Info */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              ZEF<span className="text-indigo-400">AZA</span>
            </h1>
            <p className="mt-4 text-white/60 text-sm max-w-md">
              A hyperLocal Digitalization Platform
            </p>
          </div>

          {/* Right - Socials */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <div className="flex gap-4 flex-wrap">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
                  title={label}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
            <p className="mt-8 text-xs text-white/40 md:mt-10">
              &copy; {new Date().getFullYear()} Zefaza. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
