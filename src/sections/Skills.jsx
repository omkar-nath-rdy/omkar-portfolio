import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Sparkles, Cpu, Terminal, ChevronRight } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { soundFx } from '../components/AudioController';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Domains', icon: Sparkles },
    { id: 'programming', label: 'Programming', icon: Code2 },
    { id: 'web', label: 'Web Tech', icon: Layout },
    { id: 'ai', label: 'AI & Agents', icon: Sparkles },
    { id: 'automation', label: 'Automation', icon: Cpu },
    { id: 'tools', label: 'Dev Tools', icon: Terminal },
  ];

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC700]/10 border border-[#FFC700]/25 text-[#FFC700] text-xs font-mono mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>CAPABILITIES // 02</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-[-0.03em]">
          Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD000] via-[#FFE066] to-[#F59E0B]">Competencies</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mt-4 font-sans font-light">
          A transparent overview of the programming languages, frameworks, AI concepts, and automated workflows I build with.
        </p>
      </div>

      {/* Central Interactive AI Topology Visualizer */}
      <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-[#0E0E14] border border-white/[0.08] relative overflow-hidden">
        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFC700]">
            SYSTEM TOPOLOGY
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
            The AI Engineer Constellation
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto mt-1">
            How foundational computer science and modern web skills connect into an integrated AI engineering practice.
          </p>
        </div>

        {/* Central Hub and Orbital Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
          
          {/* Node 1: Code */}
          <div className="p-5 rounded-2xl bg-[#111116] border border-[#FFC700]/30 flex flex-col items-center text-center shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#FFC700]/10 text-[#FFC700] flex items-center justify-center mb-3">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-display font-bold text-white">Algorithms & Core</h4>
            <p className="text-[11px] text-slate-400 mt-1">Java, C & Data Structures</p>
            <span className="mt-3 text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#FFC700]/15 text-[#FFC700] border border-[#FFC700]/30 font-semibold">
              LOGIC ENGINE
            </span>
          </div>

          {/* Node 2: Web Interface */}
          <div className="p-5 rounded-2xl bg-[#111116] border border-[#FB923C]/30 flex flex-col items-center text-center shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#FB923C]/10 text-[#FB923C] flex items-center justify-center mb-3">
              <Layout className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-display font-bold text-white">Interactive Web</h4>
            <p className="text-[11px] text-slate-400 mt-1">React, JavaScript & CSS</p>
            <span className="mt-3 text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#FB923C]/15 text-[#FB923C] border border-[#FB923C]/30 font-semibold">
              USER INTERFACE
            </span>
          </div>

          {/* Node 3: AI Core */}
          <div className="p-5 rounded-2xl bg-[#111116] border border-[#FFD738]/30 flex flex-col items-center text-center shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#FFD738]/10 text-[#FFD738] flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-display font-bold text-white">AI & Agents</h4>
            <p className="text-[11px] text-slate-400 mt-1">LLMs, Prompts, Python</p>
            <span className="mt-3 text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#FFD738]/15 text-[#FFD738] border border-[#FFD738]/30 font-semibold">
              INTELLIGENCE
            </span>
          </div>

          {/* Node 4: Automation */}
          <div className="p-5 rounded-2xl bg-[#111116] border border-[#10B981]/30 flex flex-col items-center text-center shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-display font-bold text-white">Automation Hub</h4>
            <p className="text-[11px] text-slate-400 mt-1">n8n, Webhooks & APIs</p>
            <span className="mt-3 text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 font-semibold">
              WORKFLOWS
            </span>
          </div>
        </div>
      </div>

      {/* Domain Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                soundFx.playClick();
                setActiveTab(tab.id);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-[#FFC700]/20 to-[#F59E0B]/20 text-[#FFC700] border border-[#FFC700]/50 shadow-sm font-bold'
                  : 'bg-[#111116] text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/[0.15]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Categorized Skills Grid */}
      <div className="space-y-10">
        {filteredCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div>
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <span>{category.title}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="glass-card rounded-2xl p-4 flex flex-col justify-between group hover:border-[#FFC700]/40"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-white group-hover:text-[#FFC700] transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.08]">
                        {skill.tag}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-[#FFC700] mb-2 flex items-center gap-1.5 font-semibold">
                      <ChevronRight className="w-3 h-3" />
                      <span>{skill.level}</span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {skill.note}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
