'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState, useMemo } from 'react';
import { Code2, Database, Server, TestTube2, Wrench, Layers, Sparkles } from 'lucide-react';

// ============================================
// ANIMATED COUNTER COMPONENT
// ============================================
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

// ============================================
// PROFICIENCY DOTS COMPONENT
// ============================================
function ProficiencyDots({ level }: { level: 'beginner' | 'intermediate' | 'advanced' | 'expert' }) {
  const levels = { beginner: 1, intermediate: 2, advanced: 3, expert: 4 };
  const filled = levels[level];

  const colors = {
    beginner: 'bg-cool-gray',
    intermediate: 'bg-warning',
    advanced: 'bg-neon-teal',
    expert: 'bg-electric-cyan',
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4].map((dot) => (
        <div
          key={dot}
          className={`w-2 h-2 rounded-full transition-colors ${
            dot <= filled ? colors[level] : 'bg-soft-white/20'
          }`}
        />
      ))}
    </div>
  );
}

// ============================================
// DATA
// ============================================
interface TechItem {
  name: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description?: string;
}

interface TechCategory {
  title: string;
  icon: typeof Code2;
  color: string;
  bgColor: string;
  items: TechItem[];
}

const techStack: TechCategory[] = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'text-electric-cyan',
    bgColor: 'bg-electric-cyan/10',
    items: [
      { name: 'Next.js', proficiency: 'expert', description: 'App Router, SSR, SSG' },
      { name: 'React', proficiency: 'expert', description: 'Hooks, Context' },
      { name: 'TypeScript', proficiency: 'advanced', description: 'Type-safe dev' },
      { name: 'Tailwind CSS', proficiency: 'expert', description: 'Utility-first' },
      { name: 'Framer Motion', proficiency: 'advanced', description: 'Animations' },
      { name: 'HTML5 / CSS3', proficiency: 'expert', description: 'Semantic markup' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-neon-teal',
    bgColor: 'bg-neon-teal/10',
    items: [
      { name: 'Node.js', proficiency: 'advanced', description: 'REST APIs' },
      { name: 'Laravel', proficiency: 'intermediate', description: 'PHP framework' },
      { name: '.NET', proficiency: 'intermediate', description: 'C# web dev' },
      { name: 'Prisma', proficiency: 'advanced', description: 'Type-safe ORM' },
      { name: 'Express.js', proficiency: 'advanced', description: 'REST APIs' },
      { name: 'GraphQL', proficiency: 'intermediate', description: 'Query language' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    items: [
      { name: 'PostgreSQL', proficiency: 'advanced', description: 'Relational DB' },
      { name: 'MySQL', proficiency: 'advanced', description: 'Relational DB' },
      { name: 'Supabase', proficiency: 'advanced', description: 'BaaS' },
      { name: 'MongoDB', proficiency: 'intermediate', description: 'NoSQL' },
      { name: 'Redis', proficiency: 'intermediate', description: 'Caching' },
    ],
  },
  {
    title: 'QA & DevOps',
    icon: TestTube2,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    items: [
      { name: 'Selenium', proficiency: 'expert', description: 'Web automation' },
      { name: 'Playwright', proficiency: 'expert', description: 'E2E testing' },
      { name: 'Jenkins', proficiency: 'advanced', description: 'CI/CD' },
      { name: 'Azure DevOps', proficiency: 'advanced', description: 'DevOps' },
      { name: 'GitHub Actions', proficiency: 'advanced', description: 'Workflows' },
      { name: 'Docker', proficiency: 'intermediate', description: 'Containers' },
      { name: 'Git', proficiency: 'expert', description: 'Version control' },
      { name: 'Jira', proficiency: 'advanced', description: 'PM tool' },
    ],
  },
];

const additionalTools = [
  'VS Code', 'Postman', 'Figma', 'Notion', 'Slack',
  'npm', 'pnpm', 'Vercel', 'Netlify', 'Linux',
  'REST APIs', 'WebSockets', 'OAuth', 'JWT', 'Agile/Scrum'
];

// Constellation nodes for visualization
const constellationNodes = [
  // Frontend cluster (top-left)
  { id: 'react', label: 'React', x: 15, y: 20, size: 'lg', color: 'cyan', category: 'frontend' },
  { id: 'nextjs', label: 'Next.js', x: 28, y: 32, size: 'lg', color: 'cyan', category: 'frontend' },
  { id: 'typescript', label: 'TS', x: 10, y: 38, size: 'md', color: 'cyan', category: 'frontend' },
  { id: 'tailwind', label: 'TW', x: 32, y: 18, size: 'md', color: 'cyan', category: 'frontend' },

  // Backend cluster (top-right)
  { id: 'nodejs', label: 'Node', x: 72, y: 20, size: 'lg', color: 'teal', category: 'backend' },
  { id: 'express', label: 'Express', x: 85, y: 32, size: 'md', color: 'teal', category: 'backend' },
  { id: 'prisma', label: 'Prisma', x: 75, y: 42, size: 'md', color: 'teal', category: 'backend' },
  { id: 'laravel', label: 'Laravel', x: 88, y: 18, size: 'sm', color: 'teal', category: 'backend' },

  // Database cluster (bottom-center)
  { id: 'postgres', label: 'PG', x: 45, y: 75, size: 'lg', color: 'purple', category: 'database' },
  { id: 'mysql', label: 'MySQL', x: 32, y: 82, size: 'md', color: 'purple', category: 'database' },
  { id: 'supabase', label: 'Supa', x: 58, y: 82, size: 'md', color: 'purple', category: 'database' },
  { id: 'mongodb', label: 'Mongo', x: 45, y: 92, size: 'sm', color: 'purple', category: 'database' },

  // QA cluster (bottom sides)
  { id: 'selenium', label: 'Selenium', x: 12, y: 72, size: 'lg', color: 'orange', category: 'qa' },
  { id: 'playwright', label: 'PW', x: 22, y: 85, size: 'md', color: 'orange', category: 'qa' },
  { id: 'jenkins', label: 'Jenkins', x: 82, y: 72, size: 'md', color: 'orange', category: 'qa' },
  { id: 'docker', label: 'Docker', x: 88, y: 85, size: 'sm', color: 'orange', category: 'qa' },

  // Central hub
  { id: 'center', label: 'Full Stack', x: 50, y: 50, size: 'xl', color: 'white', category: 'center' },
];

const connections = [
  // Frontend connections
  ['react', 'nextjs'], ['react', 'typescript'], ['nextjs', 'tailwind'], ['nextjs', 'center'],
  // Backend connections
  ['nodejs', 'express'], ['nodejs', 'prisma'], ['express', 'center'], ['prisma', 'postgres'],
  // Database connections
  ['postgres', 'mysql'], ['postgres', 'supabase'], ['postgres', 'center'],
  // QA connections
  ['selenium', 'playwright'], ['selenium', 'center'], ['jenkins', 'docker'], ['jenkins', 'center'],
  // Cross connections
  ['nextjs', 'nodejs'], ['typescript', 'nodejs'], ['prisma', 'supabase'],
];

// ============================================
// CONSTELLATION COMPONENT
// ============================================
function Constellation() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nodeColors = {
    cyan: { fill: '#00D4FF', glow: 'rgba(0, 212, 255, 0.5)' },
    teal: { fill: '#00FFC8', glow: 'rgba(0, 255, 200, 0.5)' },
    purple: { fill: '#A855F7', glow: 'rgba(168, 85, 247, 0.5)' },
    orange: { fill: '#FB923C', glow: 'rgba(251, 146, 60, 0.5)' },
    white: { fill: '#F8FAFC', glow: 'rgba(248, 250, 252, 0.5)' },
  };

  const nodeSizes = { sm: 5, md: 6, lg: 7, xl: 9 };

  const isConnected = (nodeId: string) => {
    if (!hoveredNode) return false;
    return connections.some(
      ([a, b]) => (a === hoveredNode && b === nodeId) || (b === hoveredNode && a === nodeId)
    );
  };

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[2/1] max-w-4xl mx-auto">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connection lines */}
        {mounted && connections.map(([from, to], index) => {
          const fromNode = constellationNodes.find(n => n.id === from);
          const toNode = constellationNodes.find(n => n.id === to);
          if (!fromNode || !toNode) return null;

          const isHighlighted = hoveredNode && (from === hoveredNode || to === hoveredNode);
          const isDimmed = hoveredNode && !isHighlighted;

          return (
            <motion.line
              key={`${from}-${to}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={isHighlighted ? '#00D4FF' : '#334155'}
              strokeWidth={isHighlighted ? 0.4 : 0.15}
              opacity={isDimmed ? 0.1 : isHighlighted ? 1 : 0.4}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: index * 0.05 }}
            />
          );
        })}

        {/* Nodes */}
        {mounted && constellationNodes.map((node, index) => {
          const colors = nodeColors[node.color as keyof typeof nodeColors];
          const size = nodeSizes[node.size as keyof typeof nodeSizes];
          const isHovered = hoveredNode === node.id;
          const isRelated = isConnected(node.id);
          const isDimmed = hoveredNode && !isHovered && !isRelated;

          return (
            <motion.g
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              {/* Node circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={size}
                fill={node.category === 'center' ? '#0F172A' : '#1E293B'}
                stroke={colors.fill}
                strokeWidth={isHovered || isRelated ? 0.6 : 0.3}
                opacity={isDimmed ? 0.3 : 1}
                className="transition-all duration-300"
              />
              {/* Label */}
              <text
                x={node.x}
                y={node.y + 0.5}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isDimmed ? '#475569' : colors.fill}
                fontSize={node.size === 'xl' ? 3 : node.size === 'lg' ? 2.5 : 2}
                fontWeight="600"
                className="transition-colors duration-300 pointer-events-none"
              >
                {node.label}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 md:gap-6 text-xs">
        {[
          { label: 'Frontend', color: 'bg-electric-cyan' },
          { label: 'Backend', color: 'bg-neon-teal' },
          { label: 'Database', color: 'bg-purple-400' },
          { label: 'QA/DevOps', color: 'bg-orange-400' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${item.color}`} />
            <span className="text-cool-gray">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// ANIMATION VARIANTS
// ============================================
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

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function TechStackPage() {
  const totalTechs = techStack.reduce((acc, cat) => acc + cat.items.length, 0);
  const expertCount = techStack.reduce(
    (acc, cat) => acc + cat.items.filter((i) => i.proficiency === 'expert').length,
    0
  );

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-electric-cyan/5 blur-[120px]" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-neon-teal/5 blur-[100px]" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Title */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-electric-cyan/10 text-electric-cyan text-sm font-medium border border-electric-cyan/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Technologies & Tools
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-soft-white mb-4"
            >
              Tech Stack
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-cool-gray text-lg max-w-2xl mx-auto mb-12"
            >
              Technologies I use to build robust, scalable, and thoroughly tested applications
            </motion.p>

            {/* Animated Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 max-w-xl mx-auto"
            >
              {[
                { value: totalTechs, suffix: '+', label: 'Technologies', icon: Layers },
                { value: 4, suffix: '', label: 'Categories', icon: Code2 },
                { value: expertCount, suffix: '', label: 'Expert Level', icon: Sparkles },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-midnight-navy/60 backdrop-blur-sm border border-soft-white/10 p-4 transition-all duration-300 hover:border-electric-cyan/30 hover:shadow-lg hover:shadow-electric-cyan/10"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-electric-cyan" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-electric-cyan">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-cool-gray">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Constellation Section */}
      <section className="relative w-full py-16 bg-slate-dark/30">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-soft-white mb-2">
                Technology Network
              </h2>
              <p className="text-cool-gray text-sm">
                Hover over nodes to explore connections
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="hidden md:block">
              <Constellation />
            </motion.div>

            {/* Mobile fallback - show as simple grid */}
            <motion.div variants={itemVariants} className="md:hidden text-center">
              <p className="text-cool-gray text-sm mb-4">Interactive visualization available on desktop</p>
              <div className="flex flex-wrap justify-center gap-2">
                {constellationNodes.filter(n => n.id !== 'center').map((node) => (
                  <span
                    key={node.id}
                    className="px-3 py-1.5 rounded-full bg-midnight-navy/60 border border-soft-white/10 text-soft-white text-sm"
                  >
                    {node.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="relative w-full py-16">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-soft-white mb-2">
                Skills by Category
              </h2>
              <div className="w-16 h-1 bg-linear-to-r from-electric-cyan to-neon-teal mx-auto mb-4" />
              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <ProficiencyDots level="expert" />
                  <span className="text-cool-gray">Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <ProficiencyDots level="advanced" />
                  <span className="text-cool-gray">Advanced</span>
                </div>
                <div className="flex items-center gap-2">
                  <ProficiencyDots level="intermediate" />
                  <span className="text-cool-gray">Intermediate</span>
                </div>
              </div>
            </motion.div>

            {/* Category Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  className="rounded-2xl bg-midnight-navy/60 backdrop-blur-sm border border-soft-white/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-electric-cyan/10 hover:border-electric-cyan/30 hover:-translate-y-1"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl ${category.bgColor}`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-soft-white">{category.title}</h3>
                      <p className="text-xs text-cool-gray">{category.items.length} technologies</p>
                    </div>
                  </div>

                  {/* Tech Items */}
                  <div className="space-y-3">
                    {category.items.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-dark/50 hover:bg-slate-dark/80 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-soft-white font-medium text-sm">{tech.name}</span>
                          </div>
                          {tech.description && (
                            <p className="text-cool-gray text-xs mt-0.5 truncate">{tech.description}</p>
                          )}
                        </div>
                        <ProficiencyDots level={tech.proficiency} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="relative w-full py-16 bg-slate-dark/30">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-electric-cyan" />
                <h2 className="text-xl md:text-2xl font-bold text-soft-white">
                  Other Tools & Technologies
                </h2>
              </div>
              <p className="text-cool-gray text-sm">
                Additional tools in my development workflow
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3"
            >
              {additionalTools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-full bg-midnight-navy/60 border border-soft-white/10 text-soft-white text-sm font-medium hover:border-electric-cyan/30 hover:text-electric-cyan transition-all cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
