'use client';

import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  Cog,
  GitBranch,
  Bug,
  CheckCircle2,
  AlertCircle,
  XCircle,
  PlayCircle,
  ArrowRight,
  FileSearch,
  TestTube2,
  Workflow
} from 'lucide-react';
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

const testingAreas = [
  {
    icon: ClipboardCheck,
    title: 'Manual Testing',
    description: 'Comprehensive manual testing strategies including exploratory testing, regression testing, and user acceptance testing.',
    skills: ['Test Case Design', 'Exploratory Testing', 'UAT', 'Cross-browser Testing', 'Mobile Testing'],
  },
  {
    icon: Cog,
    title: 'Automation Testing',
    description: 'Building robust test automation frameworks using modern tools and best practices for reliable, maintainable tests.',
    skills: ['Selenium WebDriver', 'Playwright', 'Cypress', 'API Testing', 'Performance Testing'],
  },
  {
    icon: GitBranch,
    title: 'CI/CD Integration',
    description: 'Integrating automated tests into CI/CD pipelines for continuous quality assurance and fast feedback loops.',
    skills: ['Jenkins', 'GitHub Actions', 'Azure DevOps', 'Docker', 'Test Reporting'],
  },
];

const bugLifecycle = [
  { status: 'New', icon: Bug, color: 'text-electric-cyan', bgColor: 'bg-electric-cyan/20' },
  { status: 'Assigned', icon: FileSearch, color: 'text-warning', bgColor: 'bg-warning/20' },
  { status: 'In Progress', icon: PlayCircle, color: 'text-neon-teal', bgColor: 'bg-neon-teal/20' },
  { status: 'Fixed', icon: CheckCircle2, color: 'text-success', bgColor: 'bg-success/20' },
  { status: 'Verified', icon: TestTube2, color: 'text-success', bgColor: 'bg-success/20' },
  { status: 'Closed', icon: CheckCircle2, color: 'text-cool-gray', bgColor: 'bg-cool-gray/20' },
];

const sampleTestResults = {
  totalTests: 156,
  passed: 148,
  failed: 5,
  skipped: 3,
  duration: '4m 32s',
  coverage: 87,
};

const testCategories = [
  { name: 'Unit Tests', passed: 52, failed: 1, total: 53 },
  { name: 'Integration Tests', passed: 38, failed: 2, total: 40 },
  { name: 'E2E Tests', passed: 28, failed: 1, total: 29 },
  { name: 'API Tests', passed: 30, failed: 1, total: 31 },
];

export default function QATestingPage() {
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
              title="QA & Testing"
              subtitle="Ensuring software quality through comprehensive testing strategies and automation"
            />
          </motion.div>

          {/* Testing Areas */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {testingAreas.map((area, index) => (
              <Card key={index} className="h-full">
                <div className="p-3 rounded-xl bg-electric-cyan/10 text-electric-cyan w-fit mb-4">
                  <area.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-soft-white mb-3">{area.title}</h3>
                <p className="text-cool-gray mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="default" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </motion.div>

          {/* Bug Lifecycle */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-soft-white text-center mb-8">Bug Lifecycle</h3>
            <Card className="overflow-hidden">
              <div className="flex flex-wrap justify-center items-center gap-4 py-4">
                {bugLifecycle.map((stage, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`flex flex-col items-center p-4 rounded-xl ${stage.bgColor}`}>
                      <stage.icon className={`w-8 h-8 ${stage.color} mb-2`} />
                      <span className={`text-sm font-medium ${stage.color}`}>{stage.status}</span>
                    </div>
                    {index < bugLifecycle.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-cool-gray/50 mx-2 hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 p-6">
                <h4 className="text-lg font-semibold text-soft-white mb-3">Lifecycle Description</h4>
                <ul className="space-y-2 text-cool-gray text-sm">
                  <li><strong className="text-electric-cyan">New:</strong> Bug is reported and logged in the tracking system</li>
                  <li><strong className="text-warning">Assigned:</strong> Bug is assigned to a developer for investigation</li>
                  <li><strong className="text-neon-teal">In Progress:</strong> Developer is actively working on the fix</li>
                  <li><strong className="text-success">Fixed:</strong> Developer has implemented the fix</li>
                  <li><strong className="text-success">Verified:</strong> QA has verified the fix works correctly</li>
                  <li><strong className="text-cool-gray">Closed:</strong> Bug is confirmed resolved and closed</li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Sample Test Results */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-soft-white text-center mb-8">Sample Test Report</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Summary Card */}
              <Card>
                <h4 className="text-lg font-semibold text-soft-white mb-4 flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-electric-cyan" />
                  Test Summary
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 rounded-xl bg-midnight-navy">
                    <p className="text-3xl font-bold text-soft-white">{sampleTestResults.totalTests}</p>
                    <p className="text-cool-gray text-sm">Total Tests</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-success/10">
                    <p className="text-3xl font-bold text-success">{sampleTestResults.passed}</p>
                    <p className="text-cool-gray text-sm">Passed</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-error/10">
                    <p className="text-3xl font-bold text-error">{sampleTestResults.failed}</p>
                    <p className="text-cool-gray text-sm">Failed</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-cool-gray">Duration</span>
                    <span className="text-soft-white font-mono">{sampleTestResults.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-cool-gray">Coverage</span>
                    <span className="text-soft-white font-mono">{sampleTestResults.coverage}%</span>
                  </div>
                  <div className="w-full h-2 bg-midnight-navy rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-electric-cyan to-neon-teal rounded-full"
                      style={{ width: `${sampleTestResults.coverage}%` }}
                    />
                  </div>
                </div>
              </Card>

              {/* Categories Breakdown */}
              <Card>
                <h4 className="text-lg font-semibold text-soft-white mb-4 flex items-center gap-2">
                  <TestTube2 className="w-5 h-5 text-electric-cyan" />
                  Test Categories
                </h4>
                <div className="space-y-4">
                  {testCategories.map((category, index) => {
                    const passRate = (category.passed / category.total) * 100;
                    return (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-soft-white font-medium">{category.name}</span>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-success">{category.passed} passed</span>
                            {category.failed > 0 && (
                              <span className="text-error">{category.failed} failed</span>
                            )}
                          </div>
                        </div>
                        <div className="w-full h-2 bg-midnight-navy rounded-full overflow-hidden">
                          <div
                            className="h-full bg-success rounded-full"
                            style={{ width: `${passRate}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
