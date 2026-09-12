import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { soundFx } from './AudioController';

export default function Navbar({ activeSection, soundEnabled, setSoundEnabled }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Path', href: '#pipeline' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleSound = () => {
    const nextState = soundFx.toggle();
    setSoundEnabled(nextState);
  };

  const handleLinkClick = () => {
    soundFx.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar (Warm Golden Amber) */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#FFC700] via-[#F59E0B] to-[#FB923C] z-50 transition-all duration-75 ease-out shadow-[0_0_12px_#FFC700]"
        style={{ width: `${scrollProgress}%` }}
      />

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-[#08080A]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand with Avatar Thumbnail */}
          <a 
            href="#home"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#111116] border border-[#FFC700]/50 p-0.5 shadow-md shadow-[#FFC700]/10 group-hover:scale-105 transition-transform shrink-0">
              <img 
                src={personalData.avatarUrl} 
                alt={personalData.name} 
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => { e.currentTarget.src = './omkar-avatar.jpg'; }}
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-[#FFC700] transition-colors flex items-center gap-1.5">
                {personalData.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                AI SOFTWARE ENG
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#111116]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08] shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFC700]/20 to-[#F59E0B]/20 border border-[#FFC700]/50 shadow-[0_0_12px_rgba(255,199,0,0.2)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={() => soundFx.playHover()}
              title={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
              className="p-2 rounded-xl bg-[#111116]/80 border border-white/[0.08] text-slate-400 hover:text-[#FFC700] hover:border-[#FFC700]/30 transition-colors focus:outline-none"
              aria-label="Toggle Sound"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#FFC700] animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              onClick={handleLinkClick}
              onMouseEnter={() => soundFx.playHover()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FFC700]/15 hover:bg-[#FFC700]/25 text-[#FFC700] border border-[#FFC700]/40 hover:border-[#FFC700]/70 text-xs font-bold tracking-wide transition-all shadow-sm group"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-xl bg-[#111116] border border-white/[0.08] text-slate-300 hover:text-white focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#08080A]/95 backdrop-blur-2xl border-b border-white/[0.1] px-4 py-6 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                ))}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Status:</span>
                  <span className="text-xs text-[#FFC700] font-mono flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                    Open to Collaborations
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
