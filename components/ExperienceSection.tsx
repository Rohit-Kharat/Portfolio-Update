'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, ShieldCheck, Zap, Server } from 'lucide-react';

export function ExperienceSection() {
  const highlights = [
    {
      title: 'Production TPM & Kaizen Platform',
      detail: 'Digitized 10+ maintenance and continuous improvement workflows in a live manufacturing environment at Tata Motors.',
      metric: '10+ Workflows Digitized',
      icon: Zap,
    },
    {
      title: '15+ Secure REST APIs & RBAC',
      detail: 'Designed & deployed 15+ REST APIs with JWT-based role-access control (3+ role levels) for 25+ active plant users.',
      metric: '3+ Role Levels (RBAC)',
      icon: ShieldCheck,
    },
    {
      title: 'Automated ETL Reporting Pipeline',
      detail: 'Built data pipeline processing structured data, imagery, and metadata, resulting in massive efficiency gains.',
      metric: '~60% Manual Effort Reduced',
      icon: TrendingUp,
    },
    {
      title: 'Sub-Second Real-Time Collaboration',
      detail: 'Engineered real-time issue notification features using Socket.io with sub-second latency across teams.',
      metric: '~40% Faster Response Time',
      icon: Server,
    },
  ];

  return (
    <section id="experience" className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header main*/}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyber-emerald/30 text-xs font-mono text-cyber-emerald">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRIAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Work Experience & <span className="text-gradient-emerald">Impact</span>
          </h2>
          <p className="max-w-2xl text-slate-300 text-base">
            Demonstrated capability to deliver production-grade, AI & data-adjacent software solutions in live enterprise environments.
          </p>
        </div>

        {/* Tata Motors Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 sm:p-10 rounded-3xl border-cyber-emerald/30 hover:border-cyber-emerald/60 transition-all shadow-2xl relative overflow-hidden"
        >
          {/* Background Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-emerald/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10 relative z-10">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Intern – Tata Motors
                </h3>
                <span className="px-3 py-1 rounded-full bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald/40 text-xs font-mono font-bold">
                  LIVE PRODUCTION SYSTEM
                </span>
              </div>
              <p className="text-slate-300 font-medium text-base mt-1">
                TPM & Kaizen Digital Platform Development
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-light border border-white/5">
                <Calendar className="w-4 h-4 text-cyber-emerald" />
                <span>Dec 2024 – Feb 2025</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-light border border-white/5">
                <MapPin className="w-4 h-4 text-cyber-cyan" />
                <span>Manufacturing Division, India</span>
              </div>
            </div>
          </div>

          {/* Key Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8 relative z-10">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div
                  key={idx}
                  className="bg-surface-light/60 p-5 rounded-2xl border border-white/5 hover:border-cyber-emerald/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <Icon className="w-5 h-5 text-cyber-emerald" />
                    <h4 className="font-bold text-white text-sm">{h.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{h.detail}</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-white/5 text-xs font-mono font-bold text-cyber-emerald">
                    {h.metric}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Bullet Points */}
          <div className="space-y-3 pt-4 border-t border-white/10 relative z-10 text-slate-200 text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyber-emerald mt-1 shrink-0" />
              <p>
                Architected and deployed 15+ REST APIs with role-based authorization (3+ roles), providing secure access control for 25+ plant managers and floor technicians.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyber-emerald mt-1 shrink-0" />
              <p>
                Engineered an automated reporting pipeline reducing issue traceability cycles by <strong className="text-white">~70%</strong> and response latency by <strong className="text-white">~40%</strong>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyber-emerald mt-1 shrink-0" />
              <p>
                Collaborated cross-functionally with manufacturing operations teams to translate complex industrial workflows into reliable software tools.
              </p>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-6 relative z-10">
            <span className="text-xs font-mono text-slate-400 mr-2">TECH STACK:</span>
            {['Node.js', 'Express', 'Socket.io', 'JWT Auth', 'REST APIs', 'ETL Pipelines', 'GitHub Version Control'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-surface text-xs font-mono text-slate-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
