import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Github, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { soundFx } from '../components/AudioController';

export default function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    onShowToast({
      title: "Email Copied!",
      message: `${personalData.email} is on your clipboard.`,
      type: "success"
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    soundFx.playSuccess();

    const emailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const emailBody = encodeURIComponent(
      `Hello Omkar,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from your portfolio.`
    );

    // Trigger client-side mailto
    window.location.href = `mailto:${personalData.email}?subject=${emailSubject}&body=${emailBody}`;

    onShowToast({
      title: "Opening Email Client",
      message: "Composing your message directly to Omkar...",
      type: "info"
    });
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFC700]/10 via-[#F59E0B]/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC700]/10 border border-[#FFC700]/25 text-[#FFC700] text-xs font-mono mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>START A CONVERSATION // 06</span>
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white tracking-[-0.035em] leading-[1.05] max-w-4xl">
          Let's build something{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD000] via-[#FFE066] to-[#F59E0B]">
            intelligent.
          </span>
        </h2>
        <p className="text-slate-300 text-base sm:text-xl max-w-xl mt-5 font-sans font-light leading-relaxed">
          Whether you want to discuss AI software, collaborate on student hackathons, explore an open-source build, or connect — my inbox is open.
        </p>
      </div>

      {/* Main Grid: Direct Channels + Functional Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        
        {/* Left Column: Direct Links & Copy Card (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Quick Action Card */}
          <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFC700]/10 border border-[#FFC700]/30 text-[#FFC700] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  DIRECT EMAIL
                </span>
                <p className="text-xs font-semibold text-white font-mono truncate max-w-[200px] sm:max-w-none">
                  {personalData.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => soundFx.playHover()}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-semibold text-white transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#10B981]" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${personalData.email}`}
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="p-2.5 rounded-xl bg-[#FFC700] hover:bg-[#FFD200] text-black transition-all shadow-[0_0_15px_rgba(255,199,0,0.3)]"
                title="Send Email"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="glass-card rounded-2xl p-5 flex flex-col justify-between group hover:border-[#FFC700]/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <Github className="w-6 h-6 text-slate-300 group-hover:text-[#FFC700] transition-colors" />
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#FFC700] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Code Repository</span>
                <p className="text-xs font-bold text-white mt-0.5">GitHub</p>
              </div>
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="glass-card rounded-2xl p-5 flex flex-col justify-between group hover:border-[#F59E0B]/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-[#F59E0B] transition-colors" />
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#F59E0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Network</span>
                <p className="text-xs font-bold text-white mt-0.5">LinkedIn</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Mailto Form (7 cols) */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleFormSubmit}
            className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 border border-white/[0.08]"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
              <span className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-[#FFC700]" />
                <span>COMPOSE MESSAGE</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Direct to Client
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Rivera"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#08080C] border border-white/[0.1] focus:border-[#FFC700] focus:outline-none text-xs text-white placeholder:text-slate-600 font-sans transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#08080C] border border-white/[0.1] focus:border-[#FFC700] focus:outline-none text-xs text-white placeholder:text-slate-600 font-sans transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Collaboration / Project Inquiry"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#08080C] border border-white/[0.1] focus:border-[#FFC700] focus:outline-none text-xs text-white placeholder:text-slate-600 font-sans transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Omkar, I'd like to talk about building..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#08080C] border border-white/[0.1] focus:border-[#FFC700] focus:outline-none text-xs text-white placeholder:text-slate-600 font-sans transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              onMouseEnter={() => soundFx.playHover()}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFC700] hover:bg-[#FFD200] text-black font-display font-black text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(255,199,0,0.3)] hover:shadow-[0_0_30px_rgba(255,199,0,0.5)] hover:scale-[1.01] active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
