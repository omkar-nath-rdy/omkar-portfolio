import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, ArrowUpRight, Cpu } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { soundFx } from '../components/AudioController';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient warm radial lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FFC700]/10 via-[#F59E0B]/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Headline, Bio, CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Eyebrow Badge */}
            <motion.div variants={itemVariants} className="mb-6 w-full flex justify-center lg:justify-start">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-2xl sm:rounded-full bg-[#111116]/90 border border-white/[0.1] shadow-lg text-xs font-mono text-slate-300 backdrop-blur-md max-w-full text-center">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
                <span>{personalData.status}</span>
                <span className="text-slate-600 hidden sm:inline">/</span>
                <span className="text-[#FFC700] flex items-center gap-1 font-semibold shrink-0">
                  <Sparkles className="w-3 h-3" />
                  {personalData.availability}
                </span>
              </div>
            </motion.div>

            {/* Main Headline - Clean & Crisp (No Neon Glows) */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-[-0.035em] text-white leading-[1.0] mb-6"
            >
              Hi, I'm{' '}
              <span className="text-white">
                Omkar
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD000] via-[#FFE066] to-[#F59E0B]">
                AI Software Engineer
              </span>
            </motion.h1>

            {/* Authentic Student Bio Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-xl text-slate-300/90 max-w-xl font-sans font-normal leading-relaxed mb-8"
            >
              B.Tech student building toward AI engineering through foundational computer science, 
              interactive web systems, intelligent agents, and real-world software.
            </motion.p>

            {/* Floating Technical Micro-Badges */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
            >
              {personalData.heroPills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 rounded-lg text-[11px] font-mono tracking-wider uppercase bg-[#14141B] border border-white/[0.08] text-slate-300 shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FFC700] hover:bg-[#FFD200] text-black font-display font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(255,199,0,0.3)] hover:shadow-[0_0_35px_rgba(255,199,0,0.5)] hover:scale-105 active:scale-95 group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#111116] hover:bg-[#181820] border border-white/[0.12] hover:border-[#FFC700]/50 text-white font-display font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 group"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#FFC700]" />
              </a>
            </motion.div>

            {/* Functional Social Links Bar */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 bg-[#111116]/80 border border-white/[0.08] backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-lg"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-1">
                Connect:
              </span>
              
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#FFC700] transition-colors group"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-slate-400 group-hover:text-[#FFC700] transition-colors" />
                <span className="hidden sm:inline font-mono">GitHub</span>
              </a>

              <span className="text-slate-700">|</span>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#FFC700] transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-[#FFC700] transition-colors" />
                <span className="hidden sm:inline font-mono">LinkedIn</span>
              </a>

              <span className="text-slate-700">|</span>

              <a
                href={`mailto:${personalData.email}`}
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#FFC700] transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-[#FFC700] transition-colors" />
                <span className="hidden sm:inline font-mono">Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Prominent Avatar Showcase (5 cols) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 w-full flex justify-center items-center relative py-4"
          >
            {/* Ambient golden aura behind the avatar */}
            <div className="absolute inset-0 max-w-[320px] sm:max-w-md mx-auto bg-gradient-to-tr from-[#FFC700]/30 via-[#F59E0B]/15 to-transparent rounded-full blur-[100px] -z-10 scale-90" />

            {/* Avatar Card Container - Perfectly Centered with flex-col */}
            <div className="relative group p-1.5 rounded-[2.5rem] bg-gradient-to-b from-[#FFC700]/60 via-[#FFC700]/20 to-white/[0.08] shadow-[0_0_45px_rgba(255,199,0,0.22)] transition-all duration-500 hover:scale-[1.02] mx-auto w-fit max-w-full flex flex-col items-center">
              
              {/* Inner Image Frame - Perfectly centered squircle */}
              <div className="relative w-[280px] xs:w-72 sm:w-80 md:w-96 aspect-square rounded-[2.2rem] overflow-hidden bg-[#FFC700] shadow-2xl mx-auto">
                <img 
                  src={personalData.avatarUrl} 
                  alt={personalData.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => { e.currentTarget.src = './omkar-avatar.jpg'; }}
                />

                {/* Floating Mini Badge Top Right */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FFC700] text-black text-xs font-mono font-black shadow-xl flex items-center gap-1.5 animate-bounce z-10 border border-black/20">
                  <Sparkles className="w-3.5 h-3.5 fill-black" />
                  <span>BUILDER</span>
                </div>
              </div>

              {/* Clean Bottom Meta Card - Exact same width as avatar squircle */}
              <div className="w-full mt-3 px-3.5 py-2.5 rounded-2xl bg-[#111116]/95 backdrop-blur-md border border-white/[0.1] flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
                  <p className="text-xs font-display font-bold text-white tracking-wide truncate">
                    {personalData.name}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#FFC700] font-semibold shrink-0">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI Engineer</span>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Downward Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-4 h-7 rounded-full border border-slate-600 flex justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-[#FFC700] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
