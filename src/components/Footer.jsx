import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { soundFx } from './AudioController';

export default function Footer() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060608] border-t border-white/[0.08] text-slate-400 text-xs overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#FFC700]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Left: Bio / Identity with Avatar */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#111116] border border-[#FFC700]/40 p-0.5 shrink-0 shadow-md">
              <img 
                src={personalData.avatarUrl} 
                alt={personalData.name} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-sm tracking-wide">
                  {personalData.name}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#FFC700]/15 text-[#FFC700] text-[10px] font-mono border border-[#FFC700]/30 font-semibold">
                  AI DEV
                </span>
              </div>
              <p className="text-slate-400 text-xs max-w-sm">
                {personalData.status}
              </p>
            </div>
          </div>

          {/* Center: System Status & Time */}
          <div className="flex items-center gap-4 bg-[#111116]/90 border border-white/[0.08] px-4 py-2 rounded-xl text-[11px] font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-slate-300">SYSTEMS ACTIVE</span>
            </div>
            <span className="text-slate-600">|</span>
            <div className="text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#FFC700]" />
              <span>TIME: {localTime || "LIVE"}</span>
            </div>
          </div>

          {/* Right: Social icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2.5 rounded-xl bg-[#111116] border border-white/[0.08] text-slate-400 hover:text-white hover:border-[#FFC700]/40 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2.5 rounded-xl bg-[#111116] border border-white/[0.08] text-slate-400 hover:text-white hover:border-[#FFC700]/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2.5 rounded-xl bg-[#111116] border border-white/[0.08] text-slate-400 hover:text-white hover:border-[#FFC700]/40 transition-all"
              aria-label="Email Omkar"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2.5 rounded-xl bg-[#FFC700]/15 border border-[#FFC700]/40 text-[#FFC700] hover:bg-[#FFC700]/25 hover:scale-105 transition-all shadow-sm"
              aria-label="Scroll to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-[11px] gap-3">
          <p>© {new Date().getFullYear()} Omkar Nath Reddy. Designed & built with React, Three.js & Tailwind.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <Sparkles className="w-3 h-3 text-[#FFC700]" />
            Continuous Learning & Real-World Building
          </p>
        </div>
      </div>
    </footer>
  );
}
