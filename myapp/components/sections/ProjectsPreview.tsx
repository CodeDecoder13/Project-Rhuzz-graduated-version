'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    category: 'web-development',
    tech_stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    github_url: 'https://github.com/rhuzzel/ecommerce',
    live_url: 'https://example.com',
  },
  {
    id: '2',
    title: 'Selenium Test Framework',
    description: 'Enterprise-grade test automation framework for web applications with detailed reporting and CI/CD integration.',
    category: 'qa-automation',
    tech_stack: ['Selenium', 'C#', 'NUnit', 'ExtentReports', 'Jenkins'],
    github_url: 'https://github.com/rhuzzel/selenium-framework',
  },
  {
    id: '3',
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates, Kanban boards, and team analytics.',
    category: 'web-development',
    tech_stack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github_url: 'https://github.com/rhuzzel/taskmanager',
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
                <Card key={project.id} className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={project.category === 'web-development' ? 'cyan' : 'teal'}>
                      {project.category === 'web-development' ? 'Web Dev' : 'QA'}
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
