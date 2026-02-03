'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code2, TestTube2, GitBranch } from 'lucide-react';
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
        <div className="absolute -top-1/2 -right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-electric-cyan/5 blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-neon-teal/5 blur-[100px]" />
      </div>

      {/* Background Image - Responsive */}
      {/* Mobile: Full width, bottom positioned, subtle */}
      <div className="absolute inset-0 md:hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-t from-midnight-navy via-midnight-navy/90 to-midnight-navy/70 z-10" />
        <Image
          src="/rhuzz-icon-dp.jpg"
          alt="Rhuzz Profile"
          fill
          className="object-cover object-top opacity-30"
          priority
        />
      </div>

      {/* Tablet: Right side, medium width */}
      <div className="absolute inset-y-0 right-0 w-[50%] hidden md:block lg:hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-midnight-navy via-midnight-navy/85 to-transparent z-10" />
        <Image
          src="/rhuzz-icon-dp.jpg"
          alt="Rhuzz Profile"
          fill
          className="object-cover object-top opacity-50"
          priority
        />
      </div>

      {/* Desktop: Right side, larger */}
      <div className="absolute inset-y-0 right-0 w-[45%] hidden lg:block pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-midnight-navy via-midnight-navy/80 to-transparent z-10" />
        <Image
          src="/rhuzz-icon-dp.jpg"
          alt="Rhuzz Profile"
          fill
          className="object-cover object-top opacity-60"
          priority
        />
      </div>

      <Container className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center text-center md:items-start md:text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-electric-cyan/10 text-electric-cyan text-sm font-medium border border-electric-cyan/20">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse mr-2" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-soft-white mb-2 leading-tight"
          >
            Rhuzzel Paramio
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-electric-cyan to-neon-teal mb-6"
          >
            Full-Stack Software Engineer & QA Specialist
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-cool-gray max-w-xl mb-8"
          >
            Building scalable, tested, and automated web systems.{' '}
            <span className="text-soft-white">I build applications and ensure they work flawlessly.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-12"
          >
            <Link href="/projects">
              <Button size="lg" className="group">
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            {highlights.map((item, index) => (
              <Card key={index} className="text-left backdrop-blur-sm bg-slate-dark/50">
                <div className="flex items-center sm:items-start gap-3">
                  <div className="p-2 rounded-lg bg-electric-cyan/10 text-electric-cyan shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-soft-white text-sm mb-0 sm:mb-1">{item.title}</h3>
                    <p className="text-xs text-cool-gray hidden sm:block">{item.description}</p>
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
