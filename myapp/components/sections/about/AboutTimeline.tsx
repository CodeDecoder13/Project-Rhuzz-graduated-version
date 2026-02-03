'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Users } from 'lucide-react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const timeline = [
  {
    icon: GraduationCap,
    title: 'BS Software Engineering',
    subtitle: 'FEU Institute of Technology',
    period: '2020 - 2025',
    description: 'Focused on software development, quality assurance, and engineering principles. Graduated with honors.',
    type: 'education',
    color: 'electric-cyan',
  },
  {
    icon: Users,
    title: 'Technical Lead',
    subtitle: 'University Projects',
    period: '2022 - 2024',
    description: 'Led development teams for capstone and thesis projects. Mentored junior developers in best practices.',
    type: 'leadership',
    color: 'neon-teal',
  },
  {
    icon: Briefcase,
    title: 'QA Intern / Software Developer',
    subtitle: 'Tech Company',
    period: '2023 - 2024',
    description: 'Developed test automation frameworks using Selenium and Playwright. Built internal tools with React and Node.js.',
    type: 'experience',
    color: 'electric-cyan',
  },
  {
    icon: Code2,
    title: 'Freelance Developer',
    subtitle: 'Self-Employed',
    period: '2022 - Present',
    description: 'Building web applications for clients using Next.js, React, and various backend technologies.',
    type: 'experience',
    color: 'neon-teal',
  },
];

export default function AboutTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
            <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">My Journey</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-electric-cyan to-neon-teal mx-auto" />
          </motion.div>

          {/* Horizontal Timeline - Desktop */}
          <div className="hidden md:block">
            {/* Timeline Line */}
            <div className="relative mb-8">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-cyan via-neon-teal to-electric-cyan transform -translate-y-1/2" />

              {/* Year markers */}
              <div className="flex justify-between relative">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-${item.color} border-4 border-midnight-navy shadow-lg shadow-${item.color}/30 cursor-pointer transition-transform hover:scale-125`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    />
                    <p className={`text-sm font-medium text-${item.color} mt-2`}>{item.period.split(' - ')[0]}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline Cards */}
            <div className="grid grid-cols-4 gap-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`rounded-2xl bg-midnight-navy/60 backdrop-blur-sm border p-5 transition-all duration-300 cursor-pointer ${
                    activeIndex === index
                      ? `border-${item.color}/50 shadow-lg shadow-${item.color}/20 -translate-y-2`
                      : 'border-soft-white/10 hover:border-soft-white/20'
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className={`p-2.5 rounded-xl bg-${item.color}/10 text-${item.color} w-fit mb-3`}>
                    <item.icon size={20} />
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${item.color}/10 text-${item.color}`}>
                    {item.type}
                  </span>
                  <h4 className="text-base font-semibold text-soft-white mt-3 mb-1">{item.title}</h4>
                  <p className={`text-sm text-${item.color} mb-1`}>{item.subtitle}</p>
                  <p className="text-xs text-cool-gray mb-2">{item.period}</p>
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0.7,
                      height: 'auto',
                    }}
                    className="text-xs text-cool-gray leading-relaxed"
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vertical Timeline - Mobile */}
          <div className="md:hidden">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-cyan via-neon-teal to-electric-cyan" />

              {/* Timeline items */}
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative flex gap-4"
                  >
                    {/* Icon */}
                    <div className={`relative z-10 w-12 h-12 rounded-full bg-slate-dark border-2 border-${item.color}/50 flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-5 h-5 text-${item.color}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 rounded-2xl bg-midnight-navy/60 backdrop-blur-sm border border-soft-white/10 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-${item.color}/10 text-${item.color}`}>
                          {item.type}
                        </span>
                        <span className="text-xs text-cool-gray">{item.period}</span>
                      </div>
                      <h4 className="text-base font-semibold text-soft-white mb-1">{item.title}</h4>
                      <p className={`text-sm text-${item.color} mb-2`}>{item.subtitle}</p>
                      <p className="text-sm text-cool-gray">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
