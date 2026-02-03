'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { Code2, TestTube2, Layers } from 'lucide-react';

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

function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  {
    icon: Code2,
    value: 4,
    suffix: '+',
    label: 'Years Experience',
    description: 'Building web applications',
    color: 'electric-cyan',
  },
  {
    icon: Layers,
    value: 15,
    suffix: '+',
    label: 'Technologies',
    description: 'Across the full stack',
    color: 'neon-teal',
  },
  {
    icon: TestTube2,
    value: 2,
    suffix: '',
    label: 'Specializations',
    description: 'Dev + QA dual focus',
    color: 'electric-cyan',
  },
];

export default function AboutBento() {
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
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Profile Image Card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-4 md:row-span-2 rounded-2xl overflow-hidden relative min-h-[300px] border border-soft-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-electric-cyan/20 hover:border-electric-cyan/30 hover:-translate-y-1"
            >
              <Image
                src="/rhuzz-icon-dp.jpg"
                alt="Rhuzzel Paramio"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-midnight-navy via-midnight-navy/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="text-electric-cyan text-sm font-medium mb-1">Software Engineer</p>
                <h3 className="text-xl font-bold text-soft-white">Rhuzzel Paramio</h3>
              </div>
            </motion.div>

            {/* Bio Card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-8 rounded-2xl bg-midnight-navy/60 backdrop-blur-sm border border-soft-white/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-electric-cyan/10 hover:border-electric-cyan/30 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-soft-white mb-4">My Story</h3>
              <p className="text-cool-gray leading-relaxed mb-4">
                I&apos;m a software engineer who believes that great software isn&apos;t just about writing code —
                it&apos;s about ensuring it works flawlessly. With expertise in both full-stack development and
                quality assurance, I bring a unique perspective to building reliable, scalable applications.
              </p>
              <p className="text-cool-gray leading-relaxed mb-4">
                My journey in tech started at FEU Institute of Technology, where I developed a deep appreciation
                for software engineering principles and automated testing. Today, I combine my development skills
                with a QA mindset to deliver production-ready solutions.
              </p>
              <div className="pt-4 border-t border-soft-white/10">
                <p className="text-soft-white/80 text-sm italic flex items-start gap-2">
                  <span className="text-electric-cyan text-xl leading-none">&ldquo;</span>
                  Quality is not an act, it&apos;s a habit. I build with testing in mind from day one.
                  <span className="text-electric-cyan text-xl leading-none">&rdquo;</span>
                </p>
              </div>
            </motion.div>

            {/* Stats Cards */}
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`md:col-span-4 rounded-2xl bg-midnight-navy/60 backdrop-blur-sm border border-soft-white/10 p-5 group transition-all duration-300 hover:shadow-lg hover:shadow-${stat.color}/10 hover:border-${stat.color}/30 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-${stat.color}/10 text-${stat.color} group-hover:bg-${stat.color}/20 transition-colors`}>
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className={`text-3xl font-bold text-${stat.color}`}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </p>
                    <h4 className="text-sm font-semibold text-soft-white">{stat.label}</h4>
                    <p className="text-xs text-cool-gray">{stat.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
