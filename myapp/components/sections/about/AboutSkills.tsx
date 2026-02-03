'use client';

import { motion } from 'framer-motion';
import { Users, Brain, MessageCircle, Target, Lightbulb, Clock, Shield, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const skillCategories = [
  {
    title: 'Leadership',
    color: 'electric-cyan',
    icon: Target,
    skills: [
      { name: 'Team Leadership', icon: Users },
      { name: 'Mentoring', icon: Lightbulb },
      { name: 'Decision Making', icon: Target },
    ],
  },
  {
    title: 'Technical',
    color: 'neon-teal',
    icon: Brain,
    skills: [
      { name: 'Problem Solving', icon: Brain },
      { name: 'Critical Thinking', icon: Lightbulb },
      { name: 'Attention to Detail', icon: Shield },
    ],
  },
  {
    title: 'Interpersonal',
    color: 'electric-cyan',
    icon: MessageCircle,
    skills: [
      { name: 'Communication', icon: MessageCircle },
      { name: 'Team Collaboration', icon: Users },
      { name: 'Adaptability', icon: Zap },
    ],
  },
];

export default function AboutSkills() {
  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-slate-dark/30" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">Soft Skills</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-electric-cyan to-neon-teal mx-auto mb-4" />
            <p className="text-cool-gray max-w-2xl mx-auto">
              Beyond technical expertise, these are the skills that help me collaborate effectively and deliver exceptional results.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className={`rounded-2xl bg-midnight-navy/60 backdrop-blur-sm border border-soft-white/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-${category.color}/10 hover:border-${category.color}/30 hover:-translate-y-1 group`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-${category.color}/10 text-${category.color} group-hover:bg-${category.color}/20 transition-colors`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-soft-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-slate-dark/50 border border-transparent hover:border-${category.color}/20 transition-all`}
                      whileHover={{ x: 5 }}
                    >
                      <skill.icon className={`w-4 h-4 text-${category.color}`} />
                      <span className="text-sm text-soft-white/90">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div variants={itemVariants} className="mt-10 text-center">
            <p className="text-sm text-cool-gray mb-4">Also proficient in:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Time Management', 'Self-Motivated', 'Fast Learner', 'Creative Thinking', 'Analytical Skills'].map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 rounded-full bg-midnight-navy/60 border border-soft-white/10 text-sm text-cool-gray hover:border-electric-cyan/30 hover:text-soft-white transition-all cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
