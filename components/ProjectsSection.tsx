'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, ChevronLeft, ChevronRight, Pause, Play, X, CheckCircle2 } from 'lucide-react';

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
  {
    id: 'zenflow-ai',
    title: 'ZenFlow-AI',
    subtitle: 'AI-Powered Mental Wellness Platform',
    year: '2025',
    category: 'AI Recommendation Engine',
    description:
      'State-aware mental wellness platform driven by a deterministic recommendation engine that analyzes mood, sleep trends, and 40+ biometric tags to generate personalized mindfulness practices.',
    stack: [
      'Hono',
      'TypeScript',
      'Next.js',
      'Chart.js',
      'Prisma',
      'MongoDB',
      'TanStack React Query',
      'Tailwind CSS',
    ],
    highlights: [
      '7-Day Trend Analysis: Track how your mood and sleep correlate over time.',
      'Activity Mix: See which mindfulness practices you engage in most frequently.',
      'Instant KPIs: Real-time feedback on your average wellness scores.',
      'State-Aware & Time-Sensitive: Automatically maps 40+ biometric tags to personalized morning & evening flows.',
    ],
    architecture: 'Next.js UI -> Hono API Gateway -> Prisma ORM -> Biometric Rules Engine -> MongoDB',
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    accentColor: 'text-cyber-emerald',
    borderColor: 'border-cyber-emerald/30',
    gradient: 'from-cyber-emerald/10 to-teal-600/10',
  },
  {
    id: 'nexcode',
    title: 'NEXCODE',
    subtitle: 'React + Vite Web3 Application',
    year: '2025',
    category: 'Web3 Application',
    description:
      'Modern React + Vite Web3 application featuring Firebase authentication, IPFS file uploads via Pinata, and Ethereum smart contract integration using Ethers.js for decentralized repository management.',
    stack: ['React', 'Firebase', 'Pinata', 'Ethereum', 'IPFS', 'Ethers.js', 'Bootstrap'],
    highlights: [
      'Firebase-based user register/login flow with MetaMask wallet connection.',
      'Smart contract methods for creating repos, submitting pull requests, and managing contributors.',
      'Decentralized IPFS file upload pipeline using Pinata API.',
    ],
    architecture: 'React UI -> Ethers.js -> Ethereum Smart Contract -> Pinata IPFS -> Firebase Auth',
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    accentColor: 'text-yellow-400',
    borderColor: 'border-yellow-500/30',
    gradient: 'from-yellow-500/10 to-amber-600/10',
  },
  {
    id: 'stockmarket',
    title: 'StockMarket-Prediction',
    subtitle: 'Machine Learning Stock Value Forecasting',
    year: '2025',
    category: 'Machine Learning Model',
    description:
      'Machine learning web application that forecasts future stock price trends using Python, Flask, scikit-learn, and Keras with an interactive dashboard for trend visualization.',
    stack: ['Python', 'Flask', 'scikit-learn', 'Keras', 'Jupyter Notebook'],
    highlights: [
      'Data Analysis: Utilizes Jupyter notebooks for exploring and visualizing stock market trends.',
      'Model Building: Implements predictive time-series models using scikit-learn and Keras.',
      'Web Dashboard: Provides a Flask-based web interface for users to interact with model forecasts.',
    ],
    architecture: 'Jupyter Analysis -> scikit-learn / Keras Models -> Flask REST API -> Interactive UI',
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    accentColor: 'text-cyber-pink',
    borderColor: 'border-cyber-pink/30',
    gradient: 'from-cyber-pink/10 to-purple-600/10',
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play interval for side-by-side slider
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="projects" className="py-24 relative z-20 bg-surface/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyber-cyan/30 text-xs font-mono text-cyber-cyan">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>FEATURED PORTFOLIO PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Production & <span className="text-gradient-cyan">AI Systems</span>
            </h2>
            <p className="text-slate-300 text-base">
              End-to-end engineered applications showcasing LLM integration, Web3, machine learning, microservices, and automated data pipelines.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-white/10 text-xs font-mono text-slate-300">
              {isPaused ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-400">PAUSED ON HOVER</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span className="text-emerald-400">AUTO SLIDING</span>
                </>
              )}
            </div>

            <button
              onClick={handlePrev}
              className="p-3 rounded-xl glass-panel hover:border-cyber-cyan text-white hover:text-cyber-cyan transition-colors"
              title="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl glass-panel hover:border-cyber-cyan text-white hover:text-cyber-cyan transition-colors"
              title="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sliding Side-By-Side Cards Track */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative overflow-hidden py-4 cursor-grab active:cursor-grabbing"
        >
          <motion.div
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="flex gap-6"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
              >
                <div
                  className={`glass-panel p-7 rounded-3xl border ${project.borderColor} hover:border-cyber-cyan transition-all group flex flex-col justify-between h-full relative overflow-hidden bg-gradient-to-br ${project.gradient}`}
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
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyber-cyan transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className={`text-xs font-medium mb-4 font-mono ${project.accentColor}`}>
                      {project.subtitle}
                    </p>
                    <p className="text-slate-300 text-xs leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Architecture Pipeline Snippet */}
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] text-emerald-400 mb-6 truncate">
                      <span className="text-slate-500 font-bold">FLOW: </span>
                      {project.architecture}
                    </div>

                    {/* Key Highlights list */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="pt-5 border-t border-white/10 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-surface-light text-[10px] font-mono text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-2 py-1 rounded-md bg-surface-light text-[10px] font-mono text-slate-400">
                          +{project.stack.length - 4} more
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 rounded-xl bg-surface-light hover:bg-cyber-cyan hover:text-black border border-white/10 text-xs font-bold text-white transition-all text-center"
                    >
                      View Details & Architecture
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? 'w-8 bg-cyber-cyan' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              title={`Go to slide ${idx + 1}`}
            />
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
                      Technical Accomplishments & Features
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
