'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Zap, Menu, X, FileText, Sparkles } from 'lucide-react';

interface NavbarProps {
  performanceMode: boolean;
  setPerformanceMode: (val: boolean) => void;
}

export function Navbar({ performanceMode, setPerformanceMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass-panel border-b border-surface-border/50 shadow-2xl backdrop-blur-xl' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo. */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyber-cyan/20 to-cyber-violet/20 border border-cyber-cyan/40 flex items-center justify-center group-hover:border-cyber-cyan transition-colors shadow-lg shadow-cyber-cyan/10">
              <Terminal className="w-5 h-5 text-cyber-cyan group-hover:rotate-12 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
                ROHIT KHARAT
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                AI & FULL-STACK
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/60 backdrop-blur-md p-1.5 rounded-full border border-white/5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Tools & Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Performance Mode Toggle */}
            <button
              onClick={() => setPerformanceMode(!performanceMode)}
              title={performanceMode ? 'Low Graphics Mode Active' : 'High Quality 3D Mode Active'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                performanceMode
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  : 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/30 hover:bg-cyber-cyan/20'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{performanceMode ? 'PERF' : 'ULTRA 3D'}</span>
            </button>

            {/* Resume Button */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyber-cyan to-blue-600 text-black hover:brightness-110 shadow-lg shadow-cyber-cyan/20 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4 fill-black" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-surface border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-surface-border px-4 pt-4 pb-6 mt-2 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-slate-200 hover:bg-cyber-cyan/10 hover:text-cyber-cyan font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setPerformanceMode(!performanceMode)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-light text-xs font-mono border border-cyber-cyan/30 text-cyber-cyan"
                >
                  <Zap className="w-4 h-4" />
                  <span>3D Mode: {performanceMode ? 'PERF' : 'ULTRA'}</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-lg bg-cyber-cyan text-black font-bold text-sm"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
