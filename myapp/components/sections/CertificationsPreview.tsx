'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Award } from 'lucide-react';
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

const featuredCerts = [
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    category: 'networking',
  },
  {
    title: 'Google Cloud Fundamentals',
    issuer: 'Google Cloud',
    category: 'cloud',
  },
  {
    title: 'IT Specialist - Python',
    issuer: 'Certiport',
    category: 'programming',
  },
  {
    title: 'IT Specialist - Java',
    issuer: 'Certiport',
    category: 'programming',
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco',
    category: 'cybersecurity',
  },
  {
    title: 'Data Science Fundamentals',
    issuer: 'IBM',
    category: 'data-science',
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  'cloud': { bg: 'bg-blue-500/20', text: 'text-blue-400' },
  'programming': { bg: 'bg-electric-cyan/20', text: 'text-electric-cyan' },
  'cybersecurity': { bg: 'bg-error/20', text: 'text-error' },
  'data-science': { bg: 'bg-purple-500/20', text: 'text-purple-400' },
  'networking': { bg: 'bg-neon-teal/20', text: 'text-neon-teal' },
};

export default function CertificationsPreview() {
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
              title="Certifications"
              subtitle="Professional certifications that validate my expertise"
            />
          </motion.div>

          <div className="flex justify-center">
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 max-w-5xl w-full">
              {featuredCerts.map((cert, index) => (
                <Card key={index} className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${categoryColors[cert.category]?.bg || 'bg-slate-dark'} flex-shrink-0`}>
                    <Award className={`w-6 h-6 ${categoryColors[cert.category]?.text || 'text-cool-gray'}`} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-soft-white font-medium truncate" title={cert.title}>
                      {cert.title}
                    </h4>
                    <p className="text-cool-gray text-sm">{cert.issuer}</p>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Link href="/certifications">
              <Button variant="outline">
                View All Certifications
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
