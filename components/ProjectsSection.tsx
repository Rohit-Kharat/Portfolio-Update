'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Cpu, Layers, Sparkles, X, CheckCircle2, ShieldAlert, Globe } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  architecture: string;
  repoUrl: string;
  liveUrl?: string;
  accentColor: string;
  borderColor: string;
  gradient: string;
}

const projects: Project[] = [
  {
    id: 'agrovision',
    title: 'Agrovision',
    subtitle: 'AI-Assisted Geospatial Crop Monitoring Platform',
    year: '2025',
    category: 'AI / Geospatial ML',
    description:
      'Satellite-based agricultural monitoring system combining Sentinel satellite NDVI imagery with LLaMA-3 & Mistral 7B LLM intelligence to evaluate crop health and soil quality.',
    stack: [
      'Python',
      'FastAPI',
      'LLaMA-3',
      'Mistral 7B',
      'Sentinel Satellite Data',
      'NDVI Analysis',
      'Docker',
      'AWS EC2',
      'S3',
      'Leaflet.js',
      'React.js',
    ],
    highlights: [
      'Built ML-assisted geospatial analysis pipeline processing Sentinel satellite data for NDVI crop health index.',
      'Integrated LLM-based narrative insights (LLaMA-3, Mistral 7B) via FastAPI microservices.',
      'Applied responsible AI principles to validate model responses and prevent agricultural recommendation hallucination.',
      'Containerized with Docker and deployed on AWS EC2 with scalable S3 bucket storage.',
    ],
    architecture: 'Satellite Stream -> Python NDVI Engine -> FastAPI Service -> LLaMA-3 LLM -> React Map UI',
    repoUrl: 'https://github.com',
    accentColor: 'text-cyber-cyan',
    borderColor: 'border-cyber-cyan/30',
    gradient: 'from-cyber-cyan/10 to-blue-600/10',
  },
  {
    id: 'snapsphere',
    title: 'SnapSphere',
    subtitle: 'Scalable Social Media & Moderation Platform',
    year: '2026',
    category: 'Microservices & Responsible AI',
    description:
      'High-concurrency event-driven social network featuring NestJS microservices, Redis Pub/Sub WebSockets, OAuth 2.0, and Hugging Face Transformers for automated content moderation.',
    stack: [
      'TypeScript',
      'Next.js',
      'NestJS',
      'PostgreSQL',
      'Redis Pub/Sub',
      'WebSockets',
      'Hugging Face Transformers',
      'OAuth 2.0',
      'GitHub Actions CI/CD',
      'Docker',
    ],
    highlights: [
      'Architected event-driven real-time system using WebSockets & Redis Pub/Sub for sub-second messaging.',
      'Built Hugging Face LLM content moderation pipeline detecting toxic text, spam, and abuse in real-time.',
      'Designed modular NestJS microservices schema with PostgreSQL for high concurrency.',
      'Configured automated CI/CD workflows with GitHub Actions for unit testing and Docker container builds.',
    ],
    architecture: 'Next.js App -> NestJS Gateway -> Redis Pub/Sub -> Hugging Face Moderation -> PostgreSQL',
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    accentColor: 'text-cyber-violet',
    borderColor: 'border-cyber-violet/30',
    gradient: 'from-cyber-violet/10 to-pink-600/10',
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative z-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyber-cyan/30 text-xs font-mono text-cyber-cyan">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED PORTFOLIO PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Production & <span className="text-gradient-cyan">AI Systems</span>
          </h2>
          <p className="max-w-2xl text-slate-300 text-base">
            End-to-end engineered applications showcasing LLM integration, geospatial data processing, microservices, and responsible AI guardrails.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`glass-panel p-8 rounded-3xl border ${project.borderColor} hover:border-cyber-cyan transition-all group flex flex-col justify-between relative overflow-hidden bg-gradient-to-br ${project.gradient}`}
            >
              <div>
                {/* Top Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    {project.category} • {project.year}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-surface hover:text-cyber-cyan text-slate-300 transition-colors"
                      title="Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-surface hover:text-cyber-cyan text-slate-300 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-cyber-cyan transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-cyber-cyan/90 mb-4 font-mono">
                  {project.subtitle}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Architecture Pipeline Snippet */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-emerald-400 mb-6">
                  <span className="text-slate-500 font-bold">FLOW: </span>
                  {project.architecture}
                </div>

                {/* Key Highlights list */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-surface-light text-[11px] font-mono text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="px-2 py-1 rounded-md bg-surface-light text-[11px] font-mono text-slate-400">
                      +{project.stack.length - 5} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 rounded-xl bg-surface-light hover:bg-cyber-cyan hover:text-black border border-white/10 text-xs font-bold text-white transition-all whitespace-nowrap"
                >
                  View Details & Architecture
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-panel max-w-3xl w-full rounded-3xl border border-cyber-cyan/40 p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-surface-light hover:bg-red-500/20 text-slate-300 hover:text-red-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-cyber-cyan">
                      {selectedProject.category} • {selectedProject.year}
                    </span>
                    <h3 className="text-3xl font-bold font-display text-white mt-1">
                      {selectedProject.title}
                    </h3>
                    <p className="text-base text-slate-300 font-mono">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                      System Architecture & Flow
                    </h4>
                    <div className="p-4 rounded-xl bg-black/60 border border-cyber-cyan/30 font-mono text-xs text-cyber-cyan">
                      {selectedProject.architecture}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Technical Accomplishments
                    </h4>
                    <div className="space-y-2.5">
                      {selectedProject.highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Complete Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-lg bg-surface-light text-xs font-mono text-slate-200 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-light hover:bg-white/10 text-slate-200 text-sm font-semibold border border-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyber-cyan text-black text-sm font-bold shadow-lg shadow-cyber-cyan/20 hover:brightness-110 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Deployment</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
