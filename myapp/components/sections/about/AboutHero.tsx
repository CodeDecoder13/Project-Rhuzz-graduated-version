'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const frameY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] flex items-center py-16 md:py-20 overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-electric-cyan/5 blur-[120px]" />
        <div className="absolute -bottom-1/2 -right-1/4 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-neon-teal/5 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section with Geometric Frame */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image Container */}
            <motion.div className="relative z-20" style={{ y: imageY }}>
              <div className="relative w-full aspect-3/4 max-w-sm mx-auto lg:max-w-md">
                <Image
                  src="/aboutme-dp.JPG"
                  alt="Rhuzzel Paramio - Graduation Photo"
                  fill
                  className="object-cover object-top rounded-2xl shadow-2xl"
                  priority
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-midnight-navy/40 via-transparent to-transparent rounded-2xl" />
              </div>
            </motion.div>

            {/* Geometric Frame - Offset */}
            <motion.div
              className="absolute inset-0 max-w-sm mx-auto lg:max-w-md aspect-3/4 -translate-x-4 translate-y-4 border-2 border-electric-cyan/50 rounded-2xl z-10 hidden md:block"
              style={{ y: frameY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Second Frame - Smaller offset */}
            <motion.div
              className="absolute inset-0 max-w-sm mx-auto lg:max-w-md aspect-3/4 translate-x-4 -translate-y-4 border border-neon-teal/30 rounded-2xl z-10 hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Floating Profile Picture */}
            <motion.div
              className="absolute -bottom-6 -right-2 md:-right-6 z-30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-midnight-navy shadow-xl shadow-electric-cyan/20">
                <Image
                  src="/rhuzz-icon-dp.jpg"
                  alt="Rhuzz Profile"
                  fill
                  className="object-cover object-top rounded-full"
                />
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-full bg-linear-to-br from-electric-cyan/20 to-neon-teal/20 blur-sm -z-10" />
              </div>
            </motion.div>

            {/* Decorative dot pattern */}
            <div className="absolute -top-8 -left-8 w-24 h-24 opacity-20 hidden lg:block">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-electric-cyan" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="order-1 lg:order-2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Section Label */}
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-2 rounded-full bg-electric-cyan/10 text-electric-cyan text-sm font-medium border border-electric-cyan/20 mb-6"
            >
              About Me
            </motion.span>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-soft-white mb-4"
            >
              Rhuzzel Paramio
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-electric-cyan to-neon-teal mb-6"
            >
              Full-Stack Software Engineer & QA Specialist
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-cool-gray max-w-lg mx-auto lg:mx-0 mb-8"
            >
              Building scalable applications and ensuring they work flawlessly through
              comprehensive testing and quality assurance.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-electric-cyan">4+</p>
                <p className="text-sm text-cool-gray">Years Coding</p>
              </div>
              <div className="w-px h-12 bg-soft-white/10 hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-neon-teal">15+</p>
                <p className="text-sm text-cool-gray">Technologies</p>
              </div>
              <div className="w-px h-12 bg-soft-white/10 hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-electric-cyan">2</p>
                <p className="text-sm text-cool-gray">Specializations</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-cool-gray/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-electric-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
