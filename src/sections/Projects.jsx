import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { soundFx } from '../components/AudioController';

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FFC700]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC700]/10 border border-[#FFC700]/25 text-[#FFC700] text-xs font-mono mb-4">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>PORTFOLIO // 03</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-[-0.03em]">
          Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD000] via-[#FFE066] to-[#F59E0B]">Projects</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mt-4 font-sans font-light">
          Practical architectures, student productivity platforms, and intelligent agent prototypes built with clean code and modern stacks.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={() => {
              soundFx.playClick();
              onSelectProject(project);
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between cursor-pointer relative overflow-hidden group border border-white/[0.08] hover:border-[#FFC700]/50 shadow-xl"
          >
            {/* Top Accent Gradient Line */}
            <div 
              className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
              style={{ background: `linear-gradient(90deg, ${project.accentColor === '#00F0FF' ? '#FFC700' : project.accentColor || '#FFC700'}, transparent)` }}
            />

            <div>
              {/* Card Meta Header */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {project.category}
                </span>
                <span 
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-full font-semibold"
                  style={{
                    backgroundColor: 'rgba(255, 199, 0, 0.12)',
                    color: '#FFC700',
                    border: '1px solid rgba(255, 199, 0, 0.3)'
                  }}
                >
                  {project.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-[#FFC700] transition-colors flex items-center justify-between mb-3">
                <span>{project.title}</span>
                <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-slate-400 group-hover:text-black group-hover:bg-[#FFC700] group-hover:border-[#FFC700] transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                {project.shortDesc}
              </p>

              {/* Problem/Solution Preview Box */}
              <div className="p-4 rounded-2xl bg-[#0A0A0E] border border-white/[0.05] space-y-2 mb-6">
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="text-[#FFC700] font-mono font-bold text-[10px] uppercase shrink-0 mt-0.5">
                    SOLVES:
                  </span>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {project.problem}
                  </p>
                </div>
              </div>
            </div>

            <div>
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.08] text-slate-300 group-hover:border-white/[0.15] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-[#FFC700] font-mono font-semibold flex items-center gap-1 group-hover:underline">
                  <span>Explore Architecture & Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>

                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    soundFx.playClick();
                    window.open(project.githubUrl, '_blank');
                  }}
                  className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
                  title="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
