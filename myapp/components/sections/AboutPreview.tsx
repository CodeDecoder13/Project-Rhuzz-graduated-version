'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Briefcase, Code2 } from 'lucide-react';
import { Container, Card, SectionTitle, Button } from '@/components/ui';

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

const highlights = [
  {
    icon: GraduationCap,
    title: 'BS Software Engineering',
    subtitle: 'FEU Institute of Technology',
  },
  {
    icon: Briefcase,
    title: 'QA & Development',
    subtitle: 'Professional Experience',
  },
  {
    icon: Code2,
    title: 'Full-Stack Developer',
    subtitle: 'Freelance & Projects',
  },
];

export default function AboutPreview() {
  return (
    <section className="w-full py-20 bg-slate-dark/30">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <SectionTitle
              title="About Me"
              subtitle="Full-Stack Software Engineer & QA Specialist with a passion for building quality software"
            />
          </motion.div>

          <div className="flex justify-center">
            <motion.div variants={itemVariants} className="w-full max-w-4xl mb-12">
              <Card className="text-center" hover={false}>
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-electric-cyan to-neon-teal flex items-center justify-center">
                    <span className="text-3xl font-bold text-midnight-navy">RP</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-soft-white mb-2">Rhuzzel Paramio</h3>
                <p className="text-electric-cyan font-medium mb-4">Full-Stack Software Engineer & QA Specialist</p>
                <p className="text-cool-gray leading-relaxed max-w-2xl mx-auto">
                  I&apos;m a software engineer who believes that great software isn&apos;t just about writing code —
                  it&apos;s about ensuring it works flawlessly. With expertise in both full-stack development and
                  quality assurance, I bring a unique perspective to building reliable, scalable applications.
                </p>
              </Card>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl w-full">
              {highlights.map((item, index) => (
                <Card key={index} className="text-center">
                  <div className="p-3 rounded-xl bg-electric-cyan/10 text-electric-cyan w-fit mx-auto mb-4">
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-lg font-semibold text-soft-white mb-1">{item.title}</h4>
                  <p className="text-cool-gray text-sm">{item.subtitle}</p>
                </Card>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Link href="/about">
              <Button variant="outline">
                Learn More About Me
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
