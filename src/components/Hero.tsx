"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100" />

      <div className="section-container relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16 pt-24 pb-16">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-cream-300 ring-offset-4 ring-offset-cream-100 shadow-lg">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={224}
              height={224}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-ink-900 mb-4"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-accent font-medium tracking-wide mb-8"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-2.5 bg-ink-900 text-cream-50 rounded-full text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 border border-ink-200 text-ink-700 rounded-full text-sm font-medium hover:border-ink-400 transition-colors"
            >
              联系我
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-ink-300 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-ink-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
