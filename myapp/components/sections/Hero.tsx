'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Code2, TestTube2, GitBranch } from 'lucide-react';
import { Container, Button, Card } from '@/components/ui';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building scalable web applications with modern technologies',
  },
  {
    icon: TestTube2,
    title: 'Automation & QA',
    description: 'Ensuring quality through comprehensive testing strategies',
  },
  {
    icon: GitBranch,
    title: 'CI/CD & DevOps',
    description: 'Streamlining deployment with automated pipelines',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
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

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-electric-cyan/5 blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-neon-teal/5 blur-[100px]" />
      </div>

      <Container className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-electric-cyan/10 text-electric-cyan text-sm font-medium border border-electric-cyan/20">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse mr-2" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-soft-white mb-6 leading-tight max-w-5xl"
          >
            Full-Stack Software Engineer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-neon-teal">
              & QA Specialist
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-cool-gray max-w-2xl mb-10"
          >
            Building scalable, tested, and automated web systems.{' '}
            <span className="text-soft-white">I build applications — and I make sure they work.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/projects">
              <Button size="lg" className="group">
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="/resume.pdf" download>
              <Button variant="outline" size="lg">
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </Button>
            </a>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {highlights.map((item, index) => (
              <Card key={index} className="text-left">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-electric-cyan/10 text-electric-cyan flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-soft-white mb-1">{item.title}</h3>
                    <p className="text-sm text-cool-gray">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </Container>

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
