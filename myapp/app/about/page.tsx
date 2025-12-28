'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Users, Heart, Code2, TestTube2 } from 'lucide-react';
import { Container, Card, SectionTitle, Badge } from '@/components/ui';
import type { Metadata } from 'next';

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

const skills = [
  'Problem Solving',
  'Critical Thinking',
  'Team Collaboration',
  'Communication',
  'Adaptability',
  'Attention to Detail',
  'Time Management',
  'Leadership',
];

const timeline = [
  {
    icon: GraduationCap,
    title: 'BS Software Engineering',
    subtitle: 'FEU Institute of Technology',
    period: '2020 - 2024',
    description: 'Focused on software development, quality assurance, and engineering principles. Graduated with honors.',
    type: 'education',
  },
  {
    icon: Briefcase,
    title: 'QA Intern / Software Developer',
    subtitle: 'Tech Company',
    period: '2023 - 2024',
    description: 'Developed test automation frameworks using Selenium and Playwright. Built internal tools with React and Node.js.',
    type: 'experience',
  },
  {
    icon: Code2,
    title: 'Freelance Developer',
    subtitle: 'Self-Employed',
    period: '2022 - Present',
    description: 'Building web applications for clients using Next.js, React, and various backend technologies.',
    type: 'experience',
  },
  {
    icon: Users,
    title: 'Technical Lead',
    subtitle: 'University Projects',
    period: '2022 - 2024',
    description: 'Led development teams for capstone and thesis projects. Mentored junior developers in best practices.',
    type: 'leadership',
  },
];

export default function AboutPage() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <SectionTitle
              title="About Me"
              subtitle="Full-Stack Software Engineer & QA Specialist with a passion for building quality software"
            />
          </motion.div>

          {/* Bio Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar placeholder */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-electric-cyan to-neon-teal flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-bold text-midnight-navy">RP</span>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-soft-white mb-2">Rhuzzel Paramio</h3>
                  <p className="text-electric-cyan font-medium mb-4">Full-Stack Software Engineer & QA Specialist</p>
                  <p className="text-cool-gray leading-relaxed">
                    I&apos;m a software engineer who believes that great software isn&apos;t just about writing code —
                    it&apos;s about ensuring it works flawlessly. With expertise in both full-stack development and
                    quality assurance, I bring a unique perspective to building reliable, scalable applications.
                  </p>
                  <p className="text-cool-gray leading-relaxed mt-4">
                    My journey in tech started at FEU Institute of Technology, where I developed a deep appreciation
                    for software engineering principles and automated testing. Today, I combine my development skills
                    with a QA mindset to deliver production-ready solutions.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Timeline Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-soft-white text-center mb-8">My Journey</h3>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric-cyan via-neon-teal to-transparent" />

                {/* Timeline items */}
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative flex gap-6"
                    >
                      {/* Icon */}
                      <div className="relative z-10 w-16 h-16 rounded-full bg-slate-dark border-2 border-electric-cyan/30 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-electric-cyan" />
                      </div>

                      {/* Content */}
                      <Card className="flex-1" hover={false}>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-soft-white">{item.title}</h4>
                          <Badge variant={item.type === 'education' ? 'cyan' : item.type === 'leadership' ? 'teal' : 'default'}>
                            {item.type}
                          </Badge>
                        </div>
                        <p className="text-electric-cyan text-sm mb-1">{item.subtitle}</p>
                        <p className="text-cool-gray text-sm mb-2">{item.period}</p>
                        <p className="text-cool-gray">{item.description}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-soft-white text-center mb-8">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {skills.map((skill, index) => (
                <Badge key={index} variant="cyan" size="md" className="px-4 py-2">
                  <Heart className="w-4 h-4 mr-2" />
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
