'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

export default function AboutPreview() {
  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-dark/50" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">About Me</h2>
            <div className="w-16 h-1 bg-linear-to-r from-electric-cyan to-neon-teal mx-auto" />
          </motion.div>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(80px,auto)] gap-4">

            {/* Image Card - Left, spans full height */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-4 md:row-span-4 rounded-2xl overflow-hidden relative bg-midnight-navy border border-soft-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-electric-cyan/20 hover:border-electric-cyan/30 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-linear-to-t from-midnight-navy via-midnight-navy/30 to-transparent z-10 pointer-events-none" />
              <Image
                src="/aboutme.JPG"
                alt="Rhuzzel Paramio"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-xl font-bold text-soft-white">Rhuzzel Paramio</h3>
                <p className="text-electric-cyan text-sm font-medium">Full-Stack Engineer & QA</p>
              </div>
            </motion.div>

            {/* Bio Card - Top right */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-8 md:row-span-2 rounded-2xl bg-midnight-navy/60 backdrop-blur-sm border border-soft-white/10 p-5 md:p-6 flex flex-col justify-center transition-all duration-300 hover:shadow-lg hover:shadow-electric-cyan/10 hover:border-electric-cyan/30 hover:-translate-y-1"
            >
              <p className="text-cool-gray leading-relaxed text-sm md:text-base">
                I&apos;m a software engineer who believes that great software isn&apos;t just about writing code
                it&apos;s about ensuring it works flawlessly. With expertise in both full-stack development and
                quality assurance, I bring a unique perspective to building reliable, scalable applications.
              </p>
              <div className="mt-4 pt-4 border-t border-soft-white/10">
                <p className="text-soft-white/80 text-sm italic">
                  &quot;Building applications and ensuring they work flawlessly.&quot;
                </p>
              </div>
            </motion.div>

            {/* QA Card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 md:row-span-2 rounded-2xl bg-midnight-navy/60 backdrop-blur-sm border border-soft-white/10 p-4 group flex flex-col justify-center transition-all duration-300 hover:shadow-lg hover:shadow-neon-teal/10 hover:border-neon-teal/30 hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-neon-teal/10 text-neon-teal w-fit mb-3 group-hover:bg-neon-teal/20 transition-colors">
                <Briefcase size={22} />
              </div>
              <h4 className="text-sm font-semibold text-soft-white mb-1">QA & Development</h4>
              <p className="text-cool-gray text-xs">Professional Experience</p>
            </motion.div>

            {/* Education Card - Right side, full height */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-6 md:row-span-2 rounded-2xl bg-midnight-navy/60 backdrop-blur-sm border border-soft-white/10 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-electric-cyan/10 hover:border-electric-cyan/30 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-electric-cyan/10 text-electric-cyan">
                  <GraduationCap size={20} />
                </div>
                <h4 className="text-base font-semibold text-soft-white">Education</h4>
              </div>

              {/* Timeline - Horizontal on larger screens */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* College */}
                <div className="relative pl-4 border-l-2 border-electric-cyan">
                  <p className="text-xs text-electric-cyan font-medium">2020 - 2025</p>
                  <h5 className="text-sm font-semibold text-soft-white mt-1">BS Software Engineering</h5>
                  <p className="text-cool-gray text-xs">FEU Institute of Technology</p>
                </div>

                {/* SHS */}
                <div className="relative pl-4 border-l-2 border-neon-teal">
                  <p className="text-xs text-neon-teal font-medium">2018 - 2020</p>
                  <h5 className="text-sm font-semibold text-soft-white mt-1">TVL - ICT</h5>
                  <p className="text-cool-gray text-xs">Panpacific University</p>
                </div>

                {/* Junior High School */}
                <div className="relative pl-4 border-l-2 border-cool-gray/50">
                  <p className="text-xs text-cool-gray font-medium">2014 - 2018</p>
                  <h5 className="text-sm font-semibold text-soft-white mt-1">Junior High School</h5>
                  <p className="text-cool-gray text-xs">Tayug Foundational Academy</p>
                </div>
              </div>
            </motion.div>


          </div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="text-center mt-8 md:mt-10">
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
