import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Cpu, CheckCircle, ShieldAlert, Lightbulb, Layers } from 'lucide-react';
import { soundFx } from './AudioController';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        soundFx.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-[#08080A]/85 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#111116] border border-white/[0.12] rounded-3xl shadow-2xl shadow-black/80 overflow-hidden z-10 my-auto text-slate-200"
        >
          {/* Top accent banner */}
          <div 
            className="h-1.5 w-full bg-gradient-to-r from-[#FFC700] via-[#F59E0B] to-[#FB923C]"
          />

          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-white/[0.08] flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-300">
                  {project.category}
                </span>
                <span 
                  className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#FFC700]/15 text-[#FFC700] border border-[#FFC700]/30"
                >
                  {project.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {project.shortDesc}
              </p>
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#08080C] border border-red-500/20">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-xs mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>THE PROBLEM</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#08080C] border border-[#FFC700]/25">
                <div className="flex items-center gap-2 text-[#FFC700] font-semibold text-xs mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>ENGINEERED SOLUTION</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Highlights */}
            {project.architecture && (
              <div className="p-4 rounded-2xl bg-[#15151C] border border-white/[0.08]">
                <div className="flex items-center gap-2 text-[#FB923C] font-semibold text-xs mb-2">
                  <Layers className="w-4 h-4" />
                  <span>ARCHITECTURE & APPROACH</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-semibold text-slate-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#FFC700]" />
                  <span>Key Modules & Capabilities</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono font-semibold text-slate-400 tracking-wider uppercase mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.1] text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metrics / Stats */}
            {project.stats && (
              <div className="p-4 rounded-2xl bg-[#08080C] border border-white/[0.06] grid grid-cols-3 gap-3 text-center">
                {Object.entries(project.stats).map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{k}</p>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">{v}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Action Links */}
          <div className="p-5 sm:p-6 bg-[#09090D] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-400 font-mono">
              Ready to collaborate or review code?
            </div>
            
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-semibold text-white transition-all shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}

              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFC700] hover:bg-[#FFD200] text-black text-xs font-bold transition-all shadow-[0_0_20px_rgba(255,199,0,0.3)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Prototype</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                  Repo / Demo in Progress
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
