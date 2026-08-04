'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Phone, Terminal, Cpu, Award, Download } from 'lucide-react';
import { CanvasContainer } from './canvas/CanvasContainer';

interface HeroSectionProps {
  performanceMode: boolean;
}

const titles = [
  'AI / ML Systems Engineer',
  'Full-Stack Developer',
  'Former Intern @ Tata Motors',
  'Data Pipeline Architect',
];

export function HeroSection({ performanceMode }: HeroSectionProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cmdInput, setCmdInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'System ready. Type "help" or "skills" for commands.',
  ]);

  // Typing effect logic
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentTitle) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cmdInput.trim()) return;

    const cmd = cmdInput.trim().toLowerCase();
    let res = '';

    if (cmd === 'help') {
      res = 'Available commands: about, skills, projects, experience, rank, clear';
    } else if (cmd === 'about') {
      res = 'Rohit Kharat - BE in Electronics & Telecommunication @ JSPM ICE, Pune (CGPA: 7.62)';
    } else if (cmd === 'skills') {
      res = 'Python, FastAPI, LLaMA-3, TypeScript, Next.js, NestJS, PostgreSQL, AWS, Docker';
    } else if (cmd === 'projects') {
      res = '1. Agrovision (Geospatial AI) | 2. SnapSphere (Microservices Social) | 3. ZenFlow-AI (Mental Wellness AI)';
    } else if (cmd === 'experience') {
      res = 'Tata Motors Intern (Dec 2024 - Feb 2025): Built TPM platform & ETL reporting pipeline.';
    } else if (cmd === 'rank') {
      res = 'TCS CodeVita Season 13 Global Rank 2069 | 500+ Solved DSA Problems.';
    } else if (cmd === 'clear') {
      setTerminalOutput([]);
      setCmdInput('');
      return;
    } else {
      res = `Command not recognized: "${cmd}". Type "help" for options.`;
    }

    setTerminalOutput((prev) => [...prev, `> ${cmdInput}`, res]);
    setCmdInput('');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Canvas Background Layer */}
      <CanvasContainer performanceMode={performanceMode} />

      {/* Radial Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none z-10" />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-cyber-cyan/30 text-xs font-mono text-cyber-cyan w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan" />
              </span>
              <span>GRADUATING 2026 • OPEN FOR FULL-TIME ROLES</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient-cyan">Rohit Kharat</span>
              </h1>
              <div className="h-12 flex items-center">
                <p className="text-xl sm:text-2xl font-mono text-slate-300 font-medium">
                  <span className="text-cyber-cyan font-bold">&gt; </span>
                  {displayText}
                  <span className="animate-pulse text-cyber-cyan">|</span>
                </p>
              </div>
            </div>

            {/* Brief Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Electronics & Telecommunication Engineering student building production-grade AI/ML systems, 
              scalable microservices, and automated ETL pipelines. Experienced at <strong className="text-white">Tata Motors</strong> and passionate about <strong className="text-white">Responsible AI & High-Concurrency Architecture</strong>.
            </p>

            {/* Key Metric Quick Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="glass-panel p-3 rounded-xl border-white/10 flex flex-col">
                <span className="text-xs text-slate-400 font-mono">TCS CODEVITA</span>
                <span className="text-lg font-bold text-cyber-cyan">Rank 2069</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border-white/10 flex flex-col">
                <span className="text-xs text-slate-400 font-mono">DSA PROBLEMS</span>
                <span className="text-lg font-bold text-cyber-violet">500+ Solved</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border-white/10 flex flex-col">
                <span className="text-xs text-slate-400 font-mono">ACADEMIC CGPA</span>
                <span className="text-lg font-bold text-cyber-emerald">7.62 / 10</span>
              </div>
            </div>

            {/* CTA Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-cyan to-blue-600 text-black font-bold text-sm shadow-xl shadow-cyber-cyan/20 hover:scale-105 active:scale-95 transition-all"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-white hover:text-cyber-cyan border-white/10 hover:border-cyber-cyan/40 text-sm font-semibold transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4 text-cyber-cyan" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono text-slate-400">CONNECT:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg glass-panel hover:border-cyber-cyan text-slate-300 hover:text-cyber-cyan transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg glass-panel hover:border-cyber-cyan text-slate-300 hover:text-cyber-cyan transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:rohitkharat8464@gmail.com"
                  className="p-2.5 rounded-lg glass-panel hover:border-cyber-cyan text-slate-300 hover:text-cyber-cyan transition-colors"
                  title="Email Rohit"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="tel:8484090664"
                  className="p-2.5 rounded-lg glass-panel hover:border-cyber-cyan text-slate-300 hover:text-cyber-cyan transition-colors"
                  title="Call Rohit"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Terminal Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-2xl border-cyber-cyan/30 overflow-hidden shadow-2xl shadow-cyber-cyan/10">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-surface-light border-b border-surface-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">rohit@engineer-shell ~</span>
                </div>
                <Terminal className="w-4 h-4 text-cyber-cyan" />
              </div>

              {/* Terminal Body */}
              <div className="p-4 font-mono text-xs text-slate-300 space-y-3 h-64 overflow-y-auto bg-black/40">
                <div className="text-emerald-400">
                  ⚡ Interactive CLI initialized for Rohit Kharat portfolio.
                </div>
                {terminalOutput.map((line, idx) => (
                  <div
                    key={idx}
                    className={line.startsWith('>') ? 'text-cyber-cyan font-bold' : 'text-slate-300'}
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Terminal Input Form */}
              <form onSubmit={handleCommand} className="p-3 bg-surface border-t border-surface-border flex items-center gap-2">
                <span className="text-cyber-cyan font-mono font-bold">$</span>
                <input
                  type="text"
                  value={cmdInput}
                  onChange={(e) => setCmdInput(e.target.value)}
                  placeholder="Type 'help' and press Enter..."
                  className="w-full bg-transparent border-none outline-none font-mono text-xs text-white placeholder-slate-500"
                />
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
