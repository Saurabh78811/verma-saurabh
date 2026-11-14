import { useState } from 'react';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import ResumeModal from '../components/ResumeModal';
import Services from '../components/Services';
import Skills from '../components/Skills';
import WhyWorkWithMe from '../components/WhyWorkWithMe';
import { useActiveSection } from '../hooks/useActiveSection';

const SECTION_IDS = [
  'home',
  'about',
  'services',
  'skills',
  'projects',
  'certifications',
  'experience',
  'contact',
];

export default function Home() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080B14] text-white">
      <Navbar activeSection={activeSection} onOpenResume={() => setResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
