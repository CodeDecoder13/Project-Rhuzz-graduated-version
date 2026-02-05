'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, FolderKanban, Eye, X, Sparkles } from 'lucide-react';

const STORAGE_KEY = 'rhuzz_welcomed';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem(STORAGE_KEY);
    if (!hasVisited) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsOpen(false);
  };

  const handleOption = (type: 'job' | 'project' | 'browse') => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsOpen(false);
    if (type === 'job' || type === 'project') {
      router.push(`/contact?reason=${type}`);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-midnight-navy/90 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative w-full max-w-md bg-slate-dark rounded-2xl border border-soft-white/10 shadow-2xl shadow-electric-cyan/5 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glow accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-electric-cyan to-neon-teal rounded-b-full" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-cool-gray hover:text-soft-white hover:bg-soft-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="p-6 pt-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-flex p-3 rounded-2xl bg-electric-cyan/10 text-electric-cyan mb-4"
              >
                <Sparkles size={28} />
              </motion.div>

              <h2 className="text-xl font-bold text-soft-white mb-2">
                Welcome to My Portfolio!
              </h2>
              <p className="text-cool-gray text-sm mb-6 leading-relaxed">
                Thanks for stopping by! What brings you here today?
              </p>

              {/* Options */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOption('job')}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-midnight-navy border border-soft-white/10 hover:border-electric-cyan/40 hover:shadow-lg hover:shadow-electric-cyan/10 transition-all duration-300 group text-left"
                >
                  <div className="p-2.5 rounded-xl bg-electric-cyan/10 text-electric-cyan group-hover:bg-electric-cyan/20 transition-colors">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-soft-white">Job Opportunity</p>
                    <p className="text-xs text-cool-gray">I&apos;d like to discuss a role</p>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOption('project')}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-midnight-navy border border-soft-white/10 hover:border-neon-teal/40 hover:shadow-lg hover:shadow-neon-teal/10 transition-all duration-300 group text-left"
                >
                  <div className="p-2.5 rounded-xl bg-neon-teal/10 text-neon-teal group-hover:bg-neon-teal/20 transition-colors">
                    <FolderKanban size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-soft-white">Project Collaboration</p>
                    <p className="text-xs text-cool-gray">I have a project idea to discuss</p>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOption('browse')}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-midnight-navy border border-soft-white/10 hover:border-cool-gray/40 hover:shadow-lg hover:shadow-cool-gray/5 transition-all duration-300 group text-left"
                >
                  <div className="p-2.5 rounded-xl bg-cool-gray/10 text-cool-gray group-hover:bg-cool-gray/20 transition-colors">
                    <Eye size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-soft-white">Just Browsing</p>
                    <p className="text-xs text-cool-gray">I&apos;m exploring your work</p>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
