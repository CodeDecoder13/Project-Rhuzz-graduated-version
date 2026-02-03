'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { Container, Card, SectionTitle, Badge } from '@/components/ui';
import type { Certification } from '@/types';

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

// Placeholder certifications - will be replaced with Supabase data
const certifications: Certification[] = [
  {
    id: '1',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    year: 2023,
    category: 'networking',
    credential_url: 'https://www.credly.com/badges/998e9099-f6e8-40fd-8def-7d240fd86efc/public_url',
  },
  {
    id: '2',
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud Badge',
    year: 2024,
    category: 'cloud',
    credential_url: 'https://www.cloudskillsboost.google',
  },
  {
    id: '3',
    title: 'IT Specialist - Python',
    issuer: 'Certiport',
    year: 2022,
    category: 'programming',
    credential_url: 'https://www.credly.com/badges/192e302a-7f5a-44af-a1dd-56d676a9ea63/public_url',
  },
  {
    id: '4',
    title: 'IT Specialist - Java',
    issuer: 'Certiport',
    year: 2022,
    category: 'programming',
    credential_url: 'https://www.credly.com/badges/48368c9a-47e1-4d59-9fac-622f5b0e258e/public_url',
  },
  {
    id: '5',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    year: 2023,
    category: 'cybersecurity',
    credential_url: 'https://www.credly.com/badges/35038e26-7cb0-49ad-a0cb-1eb88d041900/public_url',
  },
  {
    id: '6',
    title: 'Introduction to Data Science',
    issuer: 'Cisco',
    year: 2024,
    category: 'data-science',
    credential_url: 'https://www.credly.com/badges/a6644a3e-c5f5-4214-bbf2-e993e94534d6/public_url',
  },
   {
    id: '7',
    title: 'DevNet Associate',
    issuer: 'Cisco',
    year: 2022,
    category: 'networking',
    credential_url: 'https://www.credly.com/badges/4f0a24d2-4484-41e9-921c-37f6781f235b/public_url',
  },
];

const categoryColors = {
  'cloud': { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
  'programming': { bg: 'bg-electric-cyan/20', text: 'text-electric-cyan', border: 'border-electric-cyan/30' },
  'cybersecurity': { bg: 'bg-error/20', text: 'text-error', border: 'border-error/30' },
  'data-science': { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
  'networking': { bg: 'bg-neon-teal/20', text: 'text-neon-teal', border: 'border-neon-teal/30' },
};

const categoryLabels = {
  'cloud': 'Cloud',
  'programming': 'Programming',
  'cybersecurity': 'Cybersecurity',
  'data-science': 'Data Science',
  'networking': 'Networking',
};

export default function CertificationsPage() {
  // Group certifications by category
  const groupedCerts = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, Certification[]>);

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
              title="Certifications"
              subtitle="Professional certifications and credentials that validate my expertise"
            />
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Total Certifications', value: certifications.length },
              { label: 'Categories', value: Object.keys(groupedCerts).length },
              { label: 'Issuers', value: [...new Set(certifications.map(c => c.issuer))].length },
              { label: 'Latest Year', value: Math.max(...certifications.map(c => c.year)) },
            ].map((stat, index) => (
              <Card key={index} className="text-center" hover={false}>
                <p className="text-3xl font-bold text-electric-cyan mb-1">{stat.value}</p>
                <p className="text-cool-gray text-sm">{stat.label}</p>
              </Card>
            ))}
          </motion.div>

          {/* Certifications by Category */}
          {Object.entries(groupedCerts).map(([category, certs]) => (
            <motion.div key={category} variants={itemVariants} className="mb-10">
              <h3 className="text-xl font-bold text-soft-white mb-6 flex items-center gap-3">
                <span className={`px-3 py-1 rounded-lg ${categoryColors[category as keyof typeof categoryColors]?.bg || 'bg-slate-dark'} ${categoryColors[category as keyof typeof categoryColors]?.text || 'text-cool-gray'}`}>
                  {categoryLabels[category as keyof typeof categoryLabels] || category}
                </span>
                <span className="text-cool-gray text-sm font-normal">({certs.length} certifications)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certs.map((cert) => (
                  <Card key={cert.id} className="group">
                    <div className="flex items-start gap-4">
                      {/* Badge Icon */}
                      <div className={`p-3 rounded-xl ${categoryColors[cert.category]?.bg || 'bg-slate-dark'} flex-shrink-0`}>
                        <Award className={`w-6 h-6 ${categoryColors[cert.category]?.text || 'text-cool-gray'}`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-soft-white font-semibold mb-1 truncate" title={cert.title}>
                          {cert.title}
                        </h4>

                        <div className="flex items-center gap-2 text-cool-gray text-sm mb-2">
                          <Building2 className="w-4 h-4" />
                          <span>{cert.issuer}</span>
                        </div>

                        <div className="flex items-center gap-2 text-cool-gray text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Credential Link */}
                    {cert.credential_url && (
                      <a
                        href={cert.credential_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center gap-2 text-sm text-electric-cyan hover:text-neon-teal transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Credential
                      </a>
                    )}
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Card className="inline-block" hover={false}>
              <p className="text-cool-gray mb-2">Want to verify my credentials?</p>
              <p className="text-soft-white">
                All certifications can be verified through their respective issuing organizations.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
