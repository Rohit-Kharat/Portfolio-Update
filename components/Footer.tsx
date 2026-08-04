'use client';

import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 border-t border-surface-border bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
            <Terminal className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-400 font-mono">
            © {new Date().getFullYear()} <strong className="text-white">ROHIT KHARAT</strong>. Built with Next.js, Three.js & TypeScript.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel hover:border-cyber-cyan text-xs font-mono text-slate-300 hover:text-cyber-cyan transition-colors"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
