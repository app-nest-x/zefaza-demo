import { motion } from "framer-motion";
import { ArrowRight, Store, Users } from "lucide-react";

export default function ComingSoonHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center px-6 md:px-12 pt-24">
      {/* Ambient Glow */}
      <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-20%] right-[5%] w-[400px] h-[400px] bg-emerald-500/20 blur-[100px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-12">
        {/* Left Text Content */}
        <div className="max-w-xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Your Local Market <br />
            <span className="text-lime-400">Reimagined.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-lg"
          >
            🚀 We’re launching soon in your area. Customers are already waiting.
            Are you a shop owner or a local service expert?
            <br />
            Time to get onboard.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              <Store className="w-5 h-5" />
              Register Your Shop
            </button>

            <button className="flex items-center gap-2 bg-transparent border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              <Users className="w-5 h-5" />
              See Why Sellers Love Us
            </button>
          </motion.div>

          <p className="text-sm text-white/40 mt-4 italic">
            Only a few seller spots left in your locality ⚡
          </p>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-sm rounded-3xl overflow-hidden shadow-xl border border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1591375275271-9b53d3164c84?auto=format&fit=crop&w=800&q=80"
            alt="Local Seller"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
