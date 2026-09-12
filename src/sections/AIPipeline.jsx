import React from 'react';
import { motion } from 'framer-motion';
import { Network, ArrowRight } from 'lucide-react';
import { aiPipelineSteps } from '../data/portfolioData';
import { soundFx } from '../components/AudioController';

export default function AIPipeline() {
  return (
    <section id="pipeline" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#FFC700]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC700]/10 border border-[#FFC700]/25 text-[#FFC700] text-xs font-mono mb-4">
          <Network className="w-3.5 h-3.5" />
          <span>PARADIGM // 04</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-[-0.03em]">
          Building Toward <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD000] via-[#FFE066] to-[#F59E0B]">AI Engineering</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mt-4 font-sans font-light">
          How foundational code, web engineering, LLM primitives, and autonomous automation connect into scalable intelligent systems.
        </p>
      </div>

      {/* Visual Pipeline Flow */}
      <div className="relative">
        {/* Horizontal Connector Line (desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFC700]/20 via-[#F59E0B]/30 to-[#FB923C]/30 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
          {aiPipelineSteps.map((step, idx) => {
            const isCompleted = step.status.includes('Active') || step.status.includes('Mastering');
            const isTarget = step.status.includes('Target');
            
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                onMouseEnter={() => soundFx.playHover()}
                className="glass-card rounded-2xl p-5 flex flex-col justify-between relative group border border-white/[0.08] hover:border-[#FFC700]/40"
              >
                <div>
                  {/* Step Number & Status Indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/[0.05] text-[#FFC700] border border-[#FFC700]/25">
                      {step.step}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${
                      isCompleted ? 'bg-[#10B981]' : isTarget ? 'bg-[#FB923C]' : 'bg-[#FFC700] animate-pulse'
                    }`} />
                  </div>

                  <h3 className="text-sm font-display font-bold text-white mb-1 group-hover:text-[#FFC700] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-[11px] font-mono text-slate-400 mb-2.5">
                    {step.focus}
                  </p>

                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    {step.status}
                  </span>
                  {idx < aiPipelineSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FFC700] transition-colors" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
