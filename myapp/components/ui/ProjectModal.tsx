'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/types';
import Badge from './Badge';
import Button from './Button';
import ImageLightbox from './ImageLightbox';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Get all images (main image + gallery images)
  const allImages = project
    ? [project.image_url, ...(project.gallery_images || [])].filter(Boolean) as string[]
    : [];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !lightboxOpen) onClose();
    },
    [onClose, lightboxOpen]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  // Reset selected image when modal opens
  useEffect(() => {
    if (isOpen) setSelectedImageIndex(0);
  }, [isOpen, project]);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  if (!project) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-midnight-navy/95 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-dark rounded-2xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-midnight-navy/80 text-cool-gray hover:text-soft-white hover:bg-midnight-navy transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Cover Image - Full Width Landscape */}
              {allImages[0] && (
                <div
                  className="relative w-full aspect-video sm:aspect-[21/9] cursor-pointer group"
                  onClick={() => openLightbox(0)}
                >
                  <Image
                    src={allImages[0]}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center rounded-t-2xl">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                      Click to expand
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge
                      variant={
                        project.category === 'web-development' ? 'cyan' :
                        project.category === 'qa-automation' ? 'teal' : 'warning'
                      }
                    >
                      {project.category === 'web-development' ? 'Web Development' :
                       project.category === 'qa-automation' ? 'QA & Automation' : 'Capstone'}
                    </Badge>
                    {project.featured && <Badge variant="success">Featured</Badge>}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-soft-white">{project.title}</h2>
                </div>

                {/* Description */}
                <p className="text-cool-gray text-base md:text-lg mb-6 leading-relaxed">{project.description}</p>

                {/* Problem/Solution/Result */}
                {project.problem && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-error/10 border border-error/20">
                      <span className="text-error font-semibold text-sm uppercase tracking-wide">Problem</span>
                      <p className="text-cool-gray text-sm mt-2 leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-warning/10 border border-warning/20">
                      <span className="text-warning font-semibold text-sm uppercase tracking-wide">Solution</span>
                      <p className="text-cool-gray text-sm mt-2 leading-relaxed">{project.solution}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                      <span className="text-success font-semibold text-sm uppercase tracking-wide">Result</span>
                      <p className="text-cool-gray text-sm mt-2 leading-relaxed">{project.result}</p>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-soft-white mb-3 uppercase tracking-wide">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech, index) => (
                      <Badge key={index} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Gallery Thumbnails */}
                {allImages.length > 1 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-soft-white mb-3 uppercase tracking-wide">Screenshots</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                      {allImages.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => openLightbox(index)}
                          className="relative aspect-video rounded-lg overflow-hidden group transition-all hover:ring-2 hover:ring-electric-cyan hover:ring-offset-2 hover:ring-offset-slate-dark"
                        >
                          <Image
                            src={img}
                            alt={`Screenshot ${index + 1}`}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2">
                        <Github size={18} />
                        View Code
                      </Button>
                    </a>
                  )}
                  {project.live_url && (
                    <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                      <Button className="gap-2">
                        <ExternalLink size={18} />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <ImageLightbox
        images={allImages}
        currentIndex={selectedImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
