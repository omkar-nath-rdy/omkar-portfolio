import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, CheckCircle2, Clock, Flag } from 'lucide-react';
import { journeyRoadmap } from '../data/portfolioData';
import { soundFx } from '../components/AudioController';

export default function Journey() {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return {
          bg: 'bg-[#10B981]/15',
          text: 'text-[#10B981]',
          border: 'border-[#10B981]/30',
          dot: 'bg-[#10B981]',
          icon: CheckCircle2
        };
      case 'Current Focus':
        return {
          bg: 'bg-[#FFC700]/15',
          text: 'text-[#FFC700]',
          border: 'border-[#FFC700]/40',
          dot: 'bg-[#FFC700] animate-ping',
          icon: Clock
        };
      case 'In Progress':
        return {
          bg: 'bg-[#FB923C]/15',
          text: 'text-[#FB923C]',
          border: 'border-[#FB923C]/30',
          dot: 'bg-[#FB923C]',
          icon: Clock
        };
      default:
        return {
          bg: 'bg-white/[0.04]',
          text: 'text-slate-400',
          border: 'border-white/[0.08]',
          dot: 'bg-slate-600',
          icon: Flag
        };
    }
  };

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#FFC700]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC700]/10 border border-[#FFC700]/25 text-[#FFC700] text-xs font-mono mb-4">
          <Milestone className="w-3.5 h-3.5" />
          <span>ROADMAP // 05</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-[-0.03em]">
          Learning & Engineering <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD000] via-[#FFE066] to-[#F59E0B]">Journey</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mt-4 font-sans font-light">
          A transparent 10-stage roadmap charting past mastery, current rigorous practice, and future milestones in AI engineering.
        </p>
      </div>

      {/* Timeline Tree */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Timeline Track */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#10B981] via-[#FFC700] to-[#F59E0B]/30 -translate-x-1/2" />

        <div className="space-y-8">
          {journeyRoadmap.map((stage, idx) => {
            const isEven = idx % 2 === 0;
            const badge = getStatusBadge(stage.status);
            const Icon = badge.icon;

            return (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                } gap-6 pl-10 sm:pl-0`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-4 sm:left-1/2 top-5 -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full bg-[#08080A] border-2 ${badge.border} flex items-center justify-center shadow-md`}>
                    <div className={`w-2 h-2 rounded-full ${badge.dot}`} />
                  </div>
                </div>

                {/* Stage Content Card */}
                <div className="w-full sm:w-1/2 sm:px-6">
                  <div 
                    onMouseEnter={() => soundFx.playHover()}
                    className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-[#FFC700]/40 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#FFC700]">
                          STAGE {stage.stage}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {stage.timeline}
                        </span>
                      </div>

                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${badge.bg} ${badge.text} ${badge.border} flex items-center gap-1 font-semibold`}>
                        <Icon className="w-3 h-3" />
                        <span>{stage.status}</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-[#FFC700] transition-colors">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                      {stage.summary}
                    </p>

                    {/* Skills Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                      {stage.skillsLearned.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.07] text-[10px] font-mono text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
