'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield } from 'lucide-react';

const COOKIE_KEY = 'rhuzz_cookie_consent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ accepted: true, date: new Date().toISOString() }));
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ accepted: false, date: new Date().toISOString() }));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50 bg-slate-dark border border-soft-white/10 rounded-2xl shadow-2xl shadow-midnight-navy/50 overflow-hidden"
        >
          {/* Top accent line */}
          <div className="h-0.5 bg-gradient-to-r from-electric-cyan to-neon-teal" />

          <div className="p-5">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-xl bg-electric-cyan/10 text-electric-cyan shrink-0 mt-0.5">
                <Cookie size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-soft-white mb-1">Cookie Notice</h3>
                <p className="text-xs text-cool-gray leading-relaxed">
                  This site uses cookies and local storage to improve your browsing experience,
                  analyze site traffic, and understand visitor interactions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Shield size={12} className="text-neon-teal shrink-0" />
              <p className="text-[11px] text-cool-gray/70">
                Your data is never sold or shared with third parties.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl bg-electric-cyan text-midnight-navy hover:bg-neon-teal transition-colors duration-300"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl border border-soft-white/10 text-cool-gray hover:text-soft-white hover:border-soft-white/20 transition-colors duration-300"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
