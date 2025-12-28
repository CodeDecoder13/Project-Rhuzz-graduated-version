'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
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

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@rhuzzel.dev',
    href: 'mailto:contact@rhuzzel.dev',
    color: 'hover:bg-error/20 hover:text-error hover:border-error/30',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/rhuzzel',
    href: 'https://github.com/rhuzzel',
    color: 'hover:bg-soft-white/10 hover:text-soft-white hover:border-soft-white/30',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rhuzzel-paramio',
    href: 'https://linkedin.com/in/rhuzzel-paramio',
    color: 'hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30',
  },
];

export default function ContactPreview() {
  return (
    <section className="w-full py-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <SectionTitle
              title="Get In Touch"
              subtitle="Have a project in mind or just want to chat? I'd love to hear from you!"
            />
          </motion.div>

          <div className="flex justify-center">
            <motion.div variants={itemVariants} className="w-full max-w-2xl">
              <Card className="text-center" hover={false}>
                <p className="text-cool-gray mb-8">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-5 py-3 rounded-xl bg-midnight-navy border border-white/10 text-cool-gray transition-all duration-300 ${social.color}`}
                    >
                      <social.icon size={20} />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>

                <Link href="/contact">
                  <Button size="lg">
                    Send Me a Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
