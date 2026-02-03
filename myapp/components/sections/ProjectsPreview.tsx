'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Container, Card, SectionTitle, Badge, Button } from '@/components/ui';

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

const featuredProjects = [
  {
    id: '1',
    title: 'Selenium Test Framework V2',
    description: 'Enterprise-grade test automation framework for web applications with detailed reporting and CI/CD integration.',
    category: 'qa-automation',
    tech_stack: ['Selenium', 'C#', 'NUnit', 'ExtentReports'],
    github_url: 'https://github.com/CodeDecoder13/Selenium-V.2',
    image_url: '/projects/selenium-v2.png',
  },
  {
    id: '2',
    title: 'Portfolio Website V2',
    description: 'Modern, responsive portfolio showcasing full-stack development and QA automation skills.',
    category: 'web-development',
    tech_stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
    github_url: 'https://github.com/CodeDecoder13/Project-Webportfolio',
    live_url: 'https://project-rhuzzparamio.vercel.app',
    image_url: '/projects/web-v2.png',
  },
  {
    id: '3',
    title: 'Project Airzen',
    description: 'A comprehensive automation solution for Indoor Air Quality monitoring IoT devices with recommendation engine.',
    category: 'capstone',
    tech_stack: ['Python', 'Docker', 'Kubernetes', 'CodeIgniter', 'Flutter'],
    github_url: 'https://github.com/rhuzzel/cicd-templates',
    image_url: '/projects/Capstone.jpg',
  },
];

export default function ProjectsPreview() {
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
              title="Featured Projects"
              subtitle="A showcase of my work in web development and test automation"
            />
          </motion.div>

          <div className="flex justify-center">
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-5xl">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="h-full flex flex-col !p-0 overflow-hidden">
                  {/* Project Image */}
                  {project.image_url && (
                    <div className="relative w-full aspect-video">
                      <Image
                        src={project.image_url}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/80 via-transparent to-transparent" />
                    </div>
                  )}

                  {/* Card Content with padding */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant={
                        project.category === 'web-development' ? 'cyan' :
                        project.category === 'qa-automation' ? 'teal' : 'warning'
                      }>
                        {project.category === 'web-development' ? 'Web Dev' :
                         project.category === 'qa-automation' ? 'QA' : 'Capstone'}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-soft-white mb-2">{project.title}</h3>
                    <p className="text-cool-gray mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech_stack.slice(0, 4).map((tech, index) => (
                        <Badge key={index} variant="default" size="sm">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech_stack.length > 4 && (
                        <Badge variant="default" size="sm">+{project.tech_stack.length - 4}</Badge>
                      )}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-cool-gray hover:text-electric-cyan transition-colors"
                        >
                          <Github size={18} />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-cool-gray hover:text-electric-cyan transition-colors"
                        >
                          <ExternalLink size={18} />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Link href="/projects">
              <Button variant="outline">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
