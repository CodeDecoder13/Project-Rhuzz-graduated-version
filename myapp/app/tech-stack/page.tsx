'use client';

import { motion } from 'framer-motion';
import { Container, Card, SectionTitle, Badge } from '@/components/ui';

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

interface TechItem {
  name: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description?: string;
}

interface TechCategory {
  title: string;
  icon: string;
  color: string;
  items: TechItem[];
}

const techStack: TechCategory[] = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-electric-cyan to-blue-500',
    items: [
      { name: 'Next.js', proficiency: 'expert', description: 'App Router, SSR, SSG' },
      { name: 'React', proficiency: 'expert', description: 'Hooks, Context, Custom Hooks' },
      { name: 'TypeScript', proficiency: 'advanced', description: 'Type-safe development' },
      { name: 'Tailwind CSS', proficiency: 'expert', description: 'Utility-first styling' },
      { name: 'Framer Motion', proficiency: 'advanced', description: 'Animations & gestures' },
      { name: 'HTML5 / CSS3', proficiency: 'expert', description: 'Semantic markup' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-neon-teal to-green-500',
    items: [
      { name: 'Node.js', proficiency: 'advanced', description: 'REST APIs, Express' },
      { name: 'Laravel', proficiency: 'intermediate', description: 'PHP framework' },
      { name: '.NET', proficiency: 'intermediate', description: 'C# web development' },
      { name: 'Prisma', proficiency: 'advanced', description: 'Type-safe ORM' },
      { name: 'Express.js', proficiency: 'advanced', description: 'REST API development' },
      { name: 'GraphQL', proficiency: 'intermediate', description: 'API query language' },
    ],
  },
  {
    title: 'Database',
    icon: '🗃️',
    color: 'from-purple-500 to-pink-500',
    items: [
      { name: 'PostgreSQL', proficiency: 'advanced', description: 'Relational database' },
      { name: 'MySQL', proficiency: 'advanced', description: 'Relational database' },
      { name: 'Supabase', proficiency: 'advanced', description: 'Backend as a service' },
      { name: 'MongoDB', proficiency: 'intermediate', description: 'NoSQL database' },
      { name: 'Redis', proficiency: 'intermediate', description: 'Caching & sessions' },
    ],
  },
  {
    title: 'QA & DevOps',
    icon: '🧪',
    color: 'from-orange-500 to-red-500',
    items: [
      { name: 'Selenium', proficiency: 'expert', description: 'Web automation (C#/Java)' },
      { name: 'Playwright', proficiency: 'expert', description: 'Modern E2E testing' },
      { name: 'Jenkins', proficiency: 'advanced', description: 'CI/CD pipelines' },
      { name: 'Azure DevOps', proficiency: 'advanced', description: 'DevOps platform' },
      { name: 'GitHub Actions', proficiency: 'advanced', description: 'CI/CD workflows' },
      { name: 'Docker', proficiency: 'intermediate', description: 'Containerization' },
      { name: 'Git', proficiency: 'expert', description: 'Version control' },
      { name: 'Jira', proficiency: 'advanced', description: 'Project management' },
    ],
  },
];

const proficiencyColors = {
  beginner: 'bg-cool-gray/20 text-cool-gray border-cool-gray/30',
  intermediate: 'bg-warning/20 text-warning border-warning/30',
  advanced: 'bg-neon-teal/20 text-neon-teal border-neon-teal/30',
  expert: 'bg-electric-cyan/20 text-electric-cyan border-electric-cyan/30',
};

const proficiencyWidth = {
  beginner: 'w-1/4',
  intermediate: 'w-2/4',
  advanced: 'w-3/4',
  expert: 'w-full',
};

export default function TechStackPage() {
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
              title="Tech Stack"
              subtitle="Technologies and tools I use to build robust, scalable applications"
            />
          </motion.div>

          {/* Proficiency Legend */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(proficiencyColors).map(([level, colors]) => (
              <div key={level} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${colors.split(' ')[0]}`} />
                <span className="text-cool-gray text-sm capitalize">{level}</span>
              </div>
            ))}
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={itemVariants}>
                <Card className="h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-xl font-bold text-soft-white">{category.title}</h3>
                  </div>

                  {/* Tech Items */}
                  <div className="space-y-4">
                    {category.items.map((tech, techIndex) => (
                      <div key={techIndex} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-soft-white font-medium">{tech.name}</span>
                            <Badge
                              className={`${proficiencyColors[tech.proficiency]} text-xs`}
                              size="sm"
                            >
                              {tech.proficiency}
                            </Badge>
                          </div>
                        </div>
                        {tech.description && (
                          <p className="text-cool-gray text-sm mb-2">{tech.description}</p>
                        )}
                        {/* Proficiency Bar */}
                        <div className="w-full h-1.5 bg-midnight-navy rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-500 ${proficiencyWidth[tech.proficiency]}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Tools */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-xl font-bold text-soft-white text-center mb-6">Other Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'VS Code', 'Postman', 'Figma', 'Notion', 'Slack',
                'npm', 'pnpm', 'Vercel', 'Netlify', 'Linux',
                'REST APIs', 'WebSockets', 'OAuth', 'JWT', 'Agile/Scrum'
              ].map((tool, index) => (
                <Badge key={index} variant="default" size="md" className="px-4 py-2">
                  {tool}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
