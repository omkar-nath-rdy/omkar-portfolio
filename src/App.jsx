import React, { useState, useEffect } from 'react';
import SceneContainer from './canvas/SceneContainer';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import AIPipeline from './sections/AIPipeline';
import Journey from './sections/Journey';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState(null);

  // Scroll spy for active navbar indicator
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'pipeline', 'journey', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (toastData) => {
    setToast(toastData);
  };

  return (
    <div className="relative bg-[#05070D] text-slate-100 min-h-screen overflow-x-hidden selection:bg-[#00F0FF]/30 selection:text-[#00F0FF]">
      
      {/* Smooth Cosmic Aurora Ambient Layer */}
      <div className="aurora-bg">
        <div className="aurora-blob-1" />
        <div className="aurora-blob-2" />
        <div className="aurora-blob-3" />
      </div>

      {/* Smooth 3D WebGL Neural Wave Scene */}
      <SceneContainer />

      {/* Subtle Cyber Grid Matrix Overlay */}
      <div className="fixed inset-0 cyber-dots pointer-events-none opacity-30 z-0" />

      {/* Sticky Navigation Bar */}
      <Navbar 
        activeSection={activeSection}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <AIPipeline />
        <Journey />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Micro Notification Toast */}
      <Toast 
        toast={toast} 
        onClose={() => setToast(null)} 
      />
    </div>
  );
}
