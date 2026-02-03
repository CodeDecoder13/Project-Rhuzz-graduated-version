'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, TestTube2, Play, Globe, GitBranch, Wind, Code2 } from 'lucide-react';
import { Container, Card, SectionTitle, Badge, ProjectModal } from '@/components/ui';
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
    id: '3',
    title: 'Selenium Test Framework V2',
    description: 'Enterprise-grade test automation framework for web applications with detailed reporting and CI/CD integration.',
    category: 'qa-automation',
    problem: 'Manual testing was time-consuming and prone to human error.',
    solution: 'Developed a comprehensive Selenium C# framework with POM architecture.',
    result: 'Reduced regression testing time by 80% and caught 95% more bugs before production.',
    tech_stack: ['Selenium', 'C#', 'NUnit', 'ExtentReports'],
    github_url: 'https://github.com/CodeDecoder13/Selenium-V.2',
    image_url: '/projects/selenium-v2.png',
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
    title: 'Portfolio Website V2',
    description: 'Modern, responsive portfolio showcasing full-stack development and QA automation skills.',
    category: 'web-development',
    problem: 'Previous portfolio was outdated, lacked animations, and didn\'t effectively showcase QA expertise alongside development skills.',
    solution: 'Rebuilt from scratch using Next.js 15 with modern UI patterns, smooth Framer Motion animations, and dedicated sections for both development and QA work.',
    result: 'Increased recruiter engagement by 60% and received multiple interview requests within the first month of launch.',
    tech_stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
    github_url: 'https://github.com/CodeDecoder13/Project-Webportfolio',
    live_url: 'https://project-rhuzzparamio.vercel.app',
    image_url: '/projects/web-v2.png',
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
  {
    id: '7',
    title: 'Project Airzen',
    description: 'A comprehensive automation solution for Indoor Air Quality monitoring IoT devices with recommendation engine.',
    category: 'capstone',
    problem: 'No Indoor Air Quality monitoring system existed that has Recommendation Engine.',
    solution: 'Implemented a custom automation framework with device simulation, real-time monitoring, and intelligent recommendation engine for air quality insights.',
    result: 'Reduced testing time by 70% and improved defect detection rate by 45%. Enhanced air quality recommendations with machine learning algorithms and predictive analytics for proactive air quality management, resulting in 30% improvement in air quality decision-making.',
    tech_stack: ['Python', 'Docker', 'Kubernetes', 'CodeIgniter', 'Flutter'],
    github_url: 'https://github.com/rhuzzel/cicd-templates',
    image_url: '/projects/Capstone.jpg',
    featured: false,
    created_at: '2024-01-25',
  },
   {
    id: '8',
    title: 'Portfolio Website V1',
    description: 'Old School portfolio website built with HTML, CSS, and JavaScript. First iteration of my personal portfolio showcasing basic web development skills and static content.',
    category: 'web-development',
    problem: 'Needed a simple, static portfolio to showcase my work before moving to more advanced frameworks.',
    solution: 'Built a responsive portfolio using only HTML, CSS, and JavaScript to establish a foundation for my online presence.',
    result: 'Successfully established a basic online presence that could be easily shared and updated without complex dependencies.',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    github_url: 'https://github.com/CodeDecoder13/Project-Webportfolio',
    live_url: 'https://project-rhuzzparamio.vercel.app',
    image_url: '/projects/web-v1.png',
    featured: false,
    created_at: '2024-06-01',
  },
];

const projectFallbacks: Record<string, { icon: typeof Code2; gradient: string }> = {
  '3': { icon: TestTube2, gradient: 'from-cyan-500/20 to-blue-600/20' },
  '4': { icon: Play, gradient: 'from-purple-500/20 to-pink-600/20' },
  '5': { icon: Globe, gradient: 'from-emerald-500/20 to-teal-600/20' },
  '6': { icon: GitBranch, gradient: 'from-orange-500/20 to-amber-600/20' },
  '7': { icon: Wind, gradient: 'from-sky-500/20 to-indigo-600/20' },
  '8': { icon: Code2, gradient: 'from-teal-500/20 to-cyan-600/20' },
};

type FilterType = 'all' | 'web-development' | 'qa-automation' | 'capstone';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
              { value: 'capstone', label: 'Capstone' },
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
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                  <Card
                    className="h-full p-0! overflow-hidden cursor-pointer"
                    onClick={() => openProjectModal(project)}
                  >
                    <div className="flex flex-col sm:flex-row h-full">
                      {/* Project Image - Left Side */}
                      <div className="relative w-full sm:w-[40%] aspect-video sm:aspect-auto sm:min-h-[280px] shrink-0">
                        {project.image_url ? (
                          <>
                            <Image
                              src={project.image_url}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t sm:bg-linear-to-r from-slate-dark/60 via-transparent to-transparent" />
                          </>
                        ) : (() => {
                          const fb = projectFallbacks[project.id];
                          const FallbackIcon = fb?.icon ?? Code2;
                          return (
                            <div className={`absolute inset-0 bg-gradient-to-br ${fb?.gradient ?? 'from-slate-700/50 to-slate-800/50'} flex items-center justify-center border-r border-white/5`}>
                              <div className="flex flex-col items-center gap-3">
                                <FallbackIcon size={48} className="text-soft-white/30" strokeWidth={1.5} />
                                <span className="text-soft-white/20 text-xs font-medium tracking-wider uppercase">{project.category.replace('-', ' ')}</span>
                              </div>
                            </div>
                          );
                        })()}
                      </div>

                      {/* Card Content - Right Side */}
                      <div className="p-5 flex flex-col flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div className="min-w-0">
                            <h3 className="text-lg font-bold text-soft-white mb-1 truncate">{project.title}</h3>
                            <div className="flex gap-2 flex-wrap">
                              <Badge
                                variant={
                                  project.category === 'web-development' ? 'cyan' :
                                  project.category === 'qa-automation' ? 'teal' : 'warning'
                                }
                                size="sm"
                              >
                                {project.category === 'web-development' ? 'Web Dev' :
                                 project.category === 'qa-automation' ? 'QA' : 'Capstone'}
                              </Badge>
                              {project.featured && <Badge variant="success" size="sm">Featured</Badge>}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-cool-gray text-sm mb-3 line-clamp-2">{project.description}</p>

                        {/* Problem/Solution/Result - Compact */}
                        {project.problem && (
                          <div className="grid grid-cols-1 gap-1 mb-3 text-xs">
                            <div className="flex gap-2">
                              <span className="text-error font-medium shrink-0">Problem:</span>
                              <span className="text-cool-gray line-clamp-1">{project.problem}</span>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-warning font-medium shrink-0">Solution:</span>
                              <span className="text-cool-gray line-clamp-1">{project.solution}</span>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-success font-medium shrink-0">Result:</span>
                              <span className="text-cool-gray line-clamp-1">{project.result}</span>
                            </div>
                          </div>
                        )}

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech_stack.slice(0, 5).map((tech, index) => (
                            <Badge key={index} variant="default" size="sm">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech_stack.length > 5 && (
                            <Badge variant="default" size="sm">+{project.tech_stack.length - 5}</Badge>
                          )}
                        </div>

                        {/* Links */}
                        <div className="flex gap-4 mt-auto">
                          {project.github_url && (
                            <a
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 text-cool-gray hover:text-electric-cyan transition-colors text-sm"
                            >
                              <Github size={16} />
                              <span>Code</span>
                            </a>
                          )}
                          {project.live_url && (
                            <a
                              href={project.live_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 text-cool-gray hover:text-electric-cyan transition-colors text-sm"
                            >
                              <ExternalLink size={16} />
                              <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </Container>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </section>
  );
}
