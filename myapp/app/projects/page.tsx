'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Container, Card, SectionTitle, Badge, Button } from '@/components/ui';
import type { Project } from '@/types';

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

// Placeholder projects - will be replaced with Supabase data
const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    category: 'web-development',
    problem: 'Local businesses needed an affordable, customizable online store solution.',
    solution: 'Built a scalable Next.js application with Stripe integration and real-time updates.',
    result: 'Increased client sales by 150% within the first quarter of deployment.',
    tech_stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    github_url: 'https://github.com/rhuzzel/ecommerce',
    live_url: 'https://example.com',
    featured: true,
    created_at: '2024-01-15',
  },
  {
    id: '2',
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates, Kanban boards, and team analytics.',
    category: 'web-development',
    problem: 'Teams struggled with scattered communication and unclear task ownership.',
    solution: 'Created an intuitive Kanban-based system with real-time collaboration features.',
    result: 'Improved team productivity by 40% and reduced meeting time by 25%.',
    tech_stack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    github_url: 'https://github.com/rhuzzel/taskmanager',
    featured: true,
    created_at: '2023-11-20',
  },
  {
    id: '3',
    title: 'Selenium Test Framework',
    description: 'Enterprise-grade test automation framework for web applications with detailed reporting and CI/CD integration.',
    category: 'qa-automation',
    problem: 'Manual testing was time-consuming and prone to human error.',
    solution: 'Developed a comprehensive Selenium C# framework with POM architecture.',
    result: 'Reduced regression testing time by 80% and caught 95% more bugs before production.',
    tech_stack: ['Selenium', 'C#', 'NUnit', 'ExtentReports', 'Jenkins'],
    github_url: 'https://github.com/rhuzzel/selenium-framework',
    featured: true,
    created_at: '2024-02-10',
  },
  {
    id: '4',
    title: 'Playwright E2E Suite',
    description: 'Modern end-to-end testing suite with cross-browser support, visual regression testing, and API testing capabilities.',
    category: 'qa-automation',
    problem: 'Existing test suites were flaky and difficult to maintain.',
    solution: 'Implemented Playwright with TypeScript for reliable, fast test execution.',
    result: 'Achieved 99% test stability and 3x faster execution compared to previous suite.',
    tech_stack: ['Playwright', 'TypeScript', 'GitHub Actions', 'Allure Reports'],
    github_url: 'https://github.com/rhuzzel/playwright-suite',
    featured: false,
    created_at: '2024-03-05',
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio showcasing full-stack development and QA automation skills.',
    category: 'web-development',
    tech_stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
    github_url: 'https://github.com/rhuzzel/portfolio',
    live_url: 'https://rhuzzel.dev',
    featured: false,
    created_at: '2024-06-01',
  },
  {
    id: '6',
    title: 'CI/CD Pipeline Templates',
    description: 'Reusable CI/CD pipeline templates for automated testing, building, and deployment.',
    category: 'qa-automation',
    problem: 'Teams spent too much time setting up CI/CD from scratch.',
    solution: 'Created modular pipeline templates for Jenkins, GitHub Actions, and Azure DevOps.',
    result: 'Reduced pipeline setup time from days to hours.',
    tech_stack: ['Jenkins', 'GitHub Actions', 'Azure DevOps', 'Docker', 'Bash'],
    github_url: 'https://github.com/rhuzzel/cicd-templates',
    featured: false,
    created_at: '2024-01-25',
  },
];

type FilterType = 'all' | 'web-development' | 'qa-automation';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

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
              title="Projects"
              subtitle="A showcase of my work in web development and test automation"
            />
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { value: 'all', label: 'All Projects' },
              { value: 'web-development', label: 'Web Development' },
              { value: 'qa-automation', label: 'QA & Automation' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value as FilterType)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === option.value
                    ? 'bg-electric-cyan text-midnight-navy'
                    : 'bg-slate-dark text-cool-gray hover:text-soft-white border border-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full flex flex-col">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-soft-white mb-1">{project.title}</h3>
                        <Badge variant={project.category === 'web-development' ? 'cyan' : 'teal'}>
                          {project.category === 'web-development' ? 'Web Dev' : 'QA'}
                        </Badge>
                      </div>
                      {project.featured && (
                        <Badge variant="success">Featured</Badge>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-cool-gray mb-4 flex-1">{project.description}</p>

                    {/* Problem/Solution/Result - only if available */}
                    {project.problem && (
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex gap-2">
                          <span className="text-error font-medium">Problem:</span>
                          <span className="text-cool-gray">{project.problem}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-warning font-medium">Solution:</span>
                          <span className="text-cool-gray">{project.solution}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-success font-medium">Result:</span>
                          <span className="text-cool-gray">{project.result}</span>
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech_stack.map((tech, index) => (
                        <Badge key={index} variant="default" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
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
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
