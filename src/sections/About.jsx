import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Compass, Target, Sparkles, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { soundFx } from '../components/AudioController';

export default function About() {
  const dossierCards = [
    {
      title: "WHO I AM",
      subtitle: "B.Tech Student & Builder",
      desc: "An undergraduate engineering student dedicated to the rigor of computer science and modern software development.",
      icon: User,
      color: "#FFC700",
      tag: "Identity"
    },
    {
      title: "WHAT I BUILD",
      subtitle: "Software + AI + Automation",
      desc: "Full-stack web applications, intelligent LLM-powered utilities, and autonomous event-driven n8n workflows.",
      icon: Code,
      color: "#FB923C",
      tag: "Craft"
    },
    {
      title: "WHAT I'M LEARNING",
      subtitle: "Foundations → Autonomous Agents",
      desc: "Java & DSA problem-solving, Python ecosystem, model prompting structures, and multi-agent systems.",
      icon: Compass,
      color: "#F59E0B",
      tag: "Trajectory"
    },
    {
      title: "WHAT I WANT TO BECOME",
      subtitle: "Production AI Software Engineer",
      desc: "An engineer who builds reliable, high-utility software products powered by intelligence at scale.",
      icon: Target,
      color: "#10B981",
      tag: "Mission"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC700]/10 border border-[#FFC700]/25 text-[#FFC700] text-xs font-mono mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>DOSSIER // 01</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-[-0.03em]">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD000] via-[#FFE066] to-[#F59E0B]">Omkar</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mt-4 font-sans font-light">
          An honest look into my background, engineering philosophy, and the principles guiding my journey into artificial intelligence.
        </p>
      </div>

      {/* Main Grid: Avatar & Narrative + 4-Card Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left: Narrative Bio & Avatar Showcase (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            {/* Subtle warm glow orb */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFC700]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Profile Avatar Card */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-2xl bg-[#0A0A0E] border border-[#FFC700]/40 p-0.5 overflow-hidden shadow-lg shadow-[#FFC700]/10 shrink-0">
                <img 
                  src={personalData.avatarUrl} 
                  alt={personalData.name} 
                  className="w-full h-full object-cover rounded-xl"
                />
                <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#10B981] border-2 border-[#08080A]" title="Active" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">{personalData.name}</h3>
                <p className="text-xs text-slate-400 font-mono">B.Tech Student • India</p>
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {personalData.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300/90">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Micro quote tag */}
            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-[#FFC700]">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>"Building intelligence from fundamental code."</span>
            </div>
          </div>
        </div>

        {/* Right: 4 Interactive Category Cards (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dossierCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                onMouseEnter={() => soundFx.playHover()}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${card.color}15`,
                        borderColor: `${card.color}35`,
                        borderWidth: '1px'
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: card.color }} />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                      {card.tag}
                    </span>
                  </div>

                  <span className="text-xs font-mono tracking-widest text-slate-400 block mb-1">
                    {card.title}
                  </span>
                  <h4 className="text-base font-display font-bold text-white mb-2">
                    {card.subtitle}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Subtle corner light highlight on hover */}
                <div 
                  className="absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                  style={{ backgroundColor: card.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Real Quantifiable Milestones */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {personalData.highlights.map((item, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-2xl bg-[#111116]/80 border border-white/[0.08] flex flex-col justify-between hover:border-[#FFC700]/30 transition-colors"
          >
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
              {item.label}
            </span>
            <div className="text-lg sm:text-xl font-display font-bold text-white mb-1">
              {item.value}
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
