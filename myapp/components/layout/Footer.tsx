'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/CodeDecoder13', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rhuzz-6904b7187/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:boyparamio@gmail.com', label: 'Email' },
];

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-dark/50 border-t border-white/10 mt-auto">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="flex justify-center">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Brand Section */}
              <div className="text-center md:text-left">
                <Link href="/" className="text-2xl font-bold text-soft-white hover:text-electric-cyan transition-colors">
                  <span className="text-electric-cyan">R</span>huzzel
                </Link>
                <p className="mt-4 text-cool-gray text-sm leading-relaxed">
                  Full-Stack Software Engineer & QA Specialist. Building scalable, tested, and automated web systems.
                </p>
              </div>

              {/* Quick Links */}
              <div className="text-center md:text-left">
                <h3 className="text-soft-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-cool-gray hover:text-electric-cyan transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="text-center md:text-left">
                <h3 className="text-soft-white font-semibold mb-4">Connect</h3>
                <div className="flex gap-4 justify-center md:justify-start">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-midnight-navy text-cool-gray hover:text-electric-cyan hover:bg-electric-cyan/10 transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="h-px bg-white/10 mb-8 w-full max-w-5xl" />
          </div>

          {/* Copyright */}
          <div className="flex justify-center">
            <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-cool-gray">
              <p>&copy; {currentYear} Rhuzzel Paramio. All rights reserved.</p>
              <p className="flex items-center gap-1">
                Built with
                <span className="text-electric-cyan">Next.js</span>
                &
                <span className="text-neon-teal">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
