'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Database, Layers, Code, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  const principles = [
    {
      icon: Cpu,
      title: 'AI & LLM Lifecycle Integration',
      description: 'Experience connecting LLaMA-3 & Mistral 7B models into FastAPI/Node.js microservices with prompt engineering and structured JSON outputs.',
      color: 'text-cyber-cyan',
      border: 'border-cyber-cyan/30',
    },
    {
      icon: ShieldCheck,
      title: 'Responsible AI & Safety',
      description: 'Implementing LLM content moderation, output validation, bias awareness, and abuse detection pipelines using Hugging Face Transformers.',
      color: 'text-cyber-violet',
      border: 'border-cyber-violet/30',
    },
    {
      icon: Layers,
      title: 'Production REST & Microservices',
      description: 'Designing modular NestJS/FastAPI backends with JWT-based Role-Based Access Control (RBAC) and clean separation of concerns.',
      color: 'text-cyber-emerald',
      border: 'border-cyber-emerald/30',
    },
    {
      icon: Database,
      title: 'Data Pipelines & Automation',
      description: 'Building automated ETL pipelines processing structured data, images, and satellite geospatial metadata (NDVI analysis).',
      color: 'text-cyber-pink',
      border: 'border-cyber-pink/30',
    },
  ];

  const metrics = [
    { label: 'TCS CodeVita Global Rank', value: '2069', sub: 'Season 13 Competitive Coding' },
    { label: 'DSA Problems Solved', value: '500+', sub: 'LeetCode & HackerRank' },
    { label: 'Production REST APIs', value: '15+', sub: 'Built during Tata Motors Internship' },
    { label: 'ETL Effort Reduction', value: '~60%', sub: 'Automated reporting pipeline' },
  ];

  return (
    <section id="about" className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyber-cyan/30 text-xs font-mono text-cyber-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Architecting <span className="text-gradient-cyan">Intelligent & Scalable</span> Systems
          </h2>
          <p className="max-w-3xl text-slate-300 text-base sm:text-lg">
            Final-year Electronics & Telecommunication Engineering student at JSPM Imperial College of Engineering, Pune. 
            Focused on bridging the gap between machine learning models and robust software engineering.
          </p>
        </div>

        {/* Highlight Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border-white/10 hover:border-cyber-cyan/40 transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-white group-hover:text-cyber-cyan transition-colors mb-1">
                {m.value}
              </div>
              <div className="text-sm font-semibold text-slate-200">{m.label}</div>
              <div className="text-xs text-slate-400 font-mono mt-1">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-panel p-8 rounded-2xl border ${item.border} hover:bg-surface-light/80 transition-all flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-surface-light flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Production Ready Practices</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
