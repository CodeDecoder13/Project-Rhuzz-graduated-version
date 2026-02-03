'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Coffee, Tv, Music, Camera, BookOpen, Dumbbell, Plane } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

const interests = [
  {
    icon: Gamepad2,
    label: 'Gaming',
    description: 'PC & Console',
    color: 'electric-cyan',
  },
  {
    icon: Coffee,
    label: 'Coffee',
    description: 'Fuel for coding',
    color: 'neon-teal',
  },
  {
    icon: Tv,
    label: 'Anime',
    description: 'Slice of life fan',
    color: 'electric-cyan',
  },
  {
    icon: Music,
    label: 'Music',
    description: 'Lo-fi & Chill',
    color: 'neon-teal',
  },
  {
    icon: Camera,
    label: 'Photography',
    description: 'Capturing moments',
    color: 'electric-cyan',
  },
  {
    icon: BookOpen,
    label: 'Learning',
    description: 'Always curious',
    color: 'neon-teal',
  },
];

export default function AboutInterests() {
  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">Beyond Code</h2>
            <div className="w-16 h-1 bg-linear-to-r from-electric-cyan to-neon-teal mx-auto mb-4" />
            <p className="text-cool-gray max-w-2xl mx-auto">
              When I&apos;m not coding, you&apos;ll find me exploring these interests.
            </p>
          </motion.div>

          {/* Interests Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group rounded-2xl bg-midnight-navy/60 backdrop-blur-sm border border-soft-white/10 p-3 sm:p-5 text-center transition-all duration-300 hover:shadow-lg hover:shadow-${interest.color}/20 hover:border-${interest.color}/30 hover:-translate-y-2 cursor-default`}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`mx-auto w-12 h-12 rounded-xl bg-${interest.color}/10 text-${interest.color} flex items-center justify-center mb-3 group-hover:bg-${interest.color}/20 transition-colors`}>
                  <interest.icon size={24} />
                </div>
                <h4 className="text-sm font-semibold text-soft-white mb-1">{interest.label}</h4>
                <p className="text-xs text-cool-gray">{interest.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Fun fact */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="inline-block rounded-2xl bg-linear-to-r from-electric-cyan/10 to-neon-teal/10 border border-electric-cyan/20 px-6 py-4">
              <p className="text-soft-white/90 text-sm">
                <span className="text-electric-cyan font-semibold">Fun fact:</span> I believe the best code is written with a cup of coffee and lo-fi beats playing in the background.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
