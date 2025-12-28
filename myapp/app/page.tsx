import {
  Hero,
  AboutPreview,
  ProjectsPreview,
  CertificationsPreview,
  ContactPreview
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProjectsPreview />
      <CertificationsPreview />
      <ContactPreview />
    </>
  );
}
