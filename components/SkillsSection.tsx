'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Server, Database, Cloud, Code2, Layout, ShieldAlert } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  badge?: string;
  level: string; // e.g. 'Advanced', 'Proficient', 'Core'
}

const skillsData: Skill[] = [
  // AI / ML
  { name: 'LLaMA-3 & Mistral 7B', category: 'AI / ML', badge: 'LLM Integration', level: 'Advanced' },
  { name: 'Hugging Face Transformers', category: 'AI / ML', badge: 'Moderation Pipeline', level: 'Advanced' },
  { name: 'RAG & Vector Databases', category: 'AI / ML', level: 'Proficient' },
  { name: 'Prompt Engineering & MCP', category: 'AI / ML', level: 'Advanced' },
  { name: 'scikit-learn', category: 'AI / ML', level: 'Core' },
  { name: 'LangChain-aware', category: 'AI / ML', level: 'Proficient' },

  // Backend & APIs
  { name: 'FastAPI & Flask', category: 'Backend', badge: 'Python Microservices', level: 'Advanced' },
  { name: 'Node.js & NestJS', category: 'Backend', badge: 'Event-Driven Architecture', level: 'Advanced' },
  { name: 'REST API Design & JWT', category: 'Backend', badge: '15+ Production APIs', level: 'Advanced' },
  { name: 'Socket.io & WebSockets', category: 'Backend', level: 'Proficient' },
  { name: 'GraphQL', category: 'Backend', level: 'Proficient' },

  // Data Engineering
  { name: 'PostgreSQL & SQL', category: 'Data Eng', level: 'Advanced' },
  { name: 'MongoDB', category: 'Data Eng', level: 'Proficient' },
  { name: 'ETL Pipeline Design', category: 'Data Eng', badge: '~60% Time Saved', level: 'Advanced' },
  { name: 'Sentinel Satellite NDVI Data', category: 'Data Eng', level: 'Proficient' },
  { name: 'Apache Spark Concepts', category: 'Data Eng', level: 'Core' },

  // Cloud & DevOps
  { name: 'AWS (EC2, S3, Lambda)', category: 'Cloud / DevOps', level: 'Proficient' },
  { name: 'Docker & Containerization', category: 'Cloud / DevOps', level: 'Advanced' },
  { name: 'GitHub Actions CI/CD', category: 'Cloud / DevOps', level: 'Advanced' },
  { name: 'Git & Nginx', category: 'Cloud / DevOps', level: 'Advanced' },

  // Languages
  { name: 'Python', category: 'Languages', badge: 'Primary', level: 'Advanced' },
  { name: 'TypeScript', category: 'Languages', level: 'Advanced' },
  { name: 'JavaScript (ES6+)', category: 'Languages', level: 'Advanced' },
  { name: 'C++', category: 'Languages', badge: 'DSA 500+', level: 'Advanced' },
  { name: 'Java', category: 'Languages', level: 'Proficient' },

  // Frontend
  { name: 'Next.js & React.js', category: 'Frontend', level: 'Advanced' },
  { name: 'Three.js & R3F', category: 'Frontend', badge: '3D Graphics', level: 'Proficient' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Advanced' },
  { name: 'Zustand & TanStack Query', category: 'Frontend', level: 'Proficient' },
];

const categories = [
  { label: 'All Skills', value: 'All', icon: Code2 },
  { label: 'AI / ML', value: 'AI / ML', icon: Cpu },
  { label: 'Backend & APIs', value: 'Backend', icon: Server },
  { label: 'Data Engineering', value: 'Data Eng', icon: Database },
  { label: 'Cloud & DevOps', value: 'Cloud / DevOps', icon: Cloud },
  { label: 'Languages', value: 'Languages', icon: Code2 },
  { label: 'Frontend', value: 'Frontend', icon: Layout },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyber-violet/30 text-xs font-mono text-cyber-violet">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Skills & <span className="text-gradient-violet">Technology Stack</span>
          </h2>
          <p className="max-w-2xl text-slate-300 text-base">
            Comprehensive skill set span across AI/ML lifecycle integration, microservice backends, cloud DevOps pipelines, and interactive frontend development.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-cyber-violet text-white font-bold shadow-lg shadow-cyber-violet/20 scale-105'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-cyber-violet/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-panel glass-panel-hover p-5 rounded-2xl border-white/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyber-cyan font-medium">
                      {skill.category}
                    </span>
                    {skill.badge && (
                      <span className="px-2 py-0.5 rounded-md bg-cyber-cyan/10 text-cyber-cyan text-[10px] font-mono border border-cyber-cyan/30">
                        {skill.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors">
                    {skill.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Proficiency:</span>
                  <span className="font-mono text-emerald-400 font-semibold">{skill.level}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
