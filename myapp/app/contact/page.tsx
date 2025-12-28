'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, Download, CheckCircle, AlertCircle } from 'lucide-react';
import { Container, Card, SectionTitle, Button } from '@/components/ui';
import { supabase } from '@/lib/supabase';
import type { ContactMessage } from '@/types';

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

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@rhuzzel.dev',
    href: 'mailto:contact@rhuzzel.dev',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/rhuzzel',
    href: 'https://github.com/rhuzzel',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rhuzzel-paramio',
    href: 'https://linkedin.com/in/rhuzzel-paramio',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Philippines',
    href: null,
  },
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [formData, setFormData] = useState<Omit<ContactMessage, 'id' | 'created_at'>>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or email me directly.');
    }
  };

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
              title="Get In Touch"
              subtitle="Have a project in mind or just want to chat? I'd love to hear from you!"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-soft-white mb-6">Contact Information</h3>
              <p className="text-cool-gray mb-8">
                Feel free to reach out through any of these channels. I typically respond within 24-48 hours.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="flex items-center gap-4" hover={!!info.href}>
                    <div className="p-3 rounded-xl bg-electric-cyan/10 text-electric-cyan">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <p className="text-cool-gray text-sm">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('mailto') ? undefined : '_blank'}
                          rel="noopener noreferrer"
                          className="text-soft-white hover:text-electric-cyan transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-soft-white">{info.value}</p>
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Resume Download */}
              <Card className="border-2 border-dashed border-electric-cyan/30" hover={false}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-soft-white font-semibold mb-1">Download My Resume</h4>
                    <p className="text-cool-gray text-sm">Get a detailed overview of my experience</p>
                  </div>
                  <a href="/resume.pdf" download>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card hover={false}>
                <h3 className="text-2xl font-bold text-soft-white mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-soft-white font-medium mb-2">
                      Name <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-midnight-navy border border-white/10 text-soft-white placeholder-cool-gray focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-soft-white font-medium mb-2">
                      Email <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-midnight-navy border border-white/10 text-soft-white placeholder-cool-gray focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-soft-white font-medium mb-2">
                      Subject <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-midnight-navy border border-white/10 text-soft-white placeholder-cool-gray focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-soft-white font-medium mb-2">
                      Message <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-midnight-navy border border-white/10 text-soft-white placeholder-cool-gray focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="flex items-center gap-2 p-4 rounded-xl bg-success/10 text-success">
                      <CheckCircle size={20} />
                      <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-4 rounded-xl bg-error/10 text-error">
                      <AlertCircle size={20} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    isLoading={status === 'loading'}
                    disabled={status === 'loading'}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
