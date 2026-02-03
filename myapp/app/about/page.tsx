'use client';

import AboutHero from '@/components/sections/about/AboutHero';
import AboutBento from '@/components/sections/about/AboutBento';
import AboutTimeline from '@/components/sections/about/AboutTimeline';
import AboutSkills from '@/components/sections/about/AboutSkills';
import AboutInterests from '@/components/sections/about/AboutInterests';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutBento />
      <AboutTimeline />
      <AboutSkills />
      <AboutInterests />
    </main>
  );
}
