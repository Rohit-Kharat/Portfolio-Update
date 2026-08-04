'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Linkedin, Github, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00f0ff', '#8a2be2', '#10b981'],
    });
  };

  return (
    <section id="contact" className="py-24 relative z-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyber-cyan/30 text-xs font-mono text-cyber-cyan">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="max-w-2xl text-slate-300 text-base">
            Looking for AI/ML lifecycle engineering, full-stack microservices, or data pipeline roles. Feel free to reach out directly or send a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 space-y-6">
              <h3 className="text-xl font-bold font-display text-white">Direct Contact Info</h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-surface-light/80 border border-white/5 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyber-cyan/10 text-cyber-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">EMAIL</span>
                    <p className="text-sm font-bold text-white font-mono">rohitkharat8464@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('rohitkharat8464@gmail.com', 'email')}
                  className="p-2 rounded-lg bg-surface hover:bg-cyber-cyan hover:text-black text-slate-300 transition-all"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-surface-light/80 border border-white/5 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyber-violet/10 text-cyber-violet">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">PHONE</span>
                    <p className="text-sm font-bold text-white font-mono">+91 8484090664</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('8484090664', 'phone')}
                  className="p-2 rounded-lg bg-surface hover:bg-cyber-violet hover:text-black text-slate-300 transition-all"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-surface-light/80 border border-white/5 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyber-emerald/10 text-cyber-emerald">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">LOCATION</span>
                  <p className="text-sm font-bold text-white">Pune, Maharashtra, India</p>
                </div>
              </div>

              {/* Quick Social Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass-panel hover:border-cyber-cyan text-slate-200 hover:text-cyber-cyan text-xs font-mono transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass-panel hover:border-cyber-cyan text-slate-200 hover:text-cyber-cyan text-xs font-mono transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border-cyber-cyan/30 relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan flex items-center justify-center">
                    <Sparkles className="w-8 h-8 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md">
                    Thank you for reaching out, <strong className="text-cyber-cyan">{formData.name}</strong>. Rohit will respond to your inquiry shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-surface-light text-xs font-mono text-slate-300 hover:text-white border border-white/10"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold font-display text-white mb-2">Send a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Barclays Hiring Team"
                        className="w-full px-4 py-3 rounded-xl bg-surface-light border border-white/10 text-white text-sm focus:outline-none focus:border-cyber-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">YOUR EMAIL *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface-light border border-white/10 text-white text-sm focus:outline-none focus:border-cyber-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">SUBJECT</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-surface-light border border-white/10 text-white text-sm focus:outline-none focus:border-cyber-cyan transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">MESSAGE *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Rohit, we are interested in discussing an AI & Software Engineering role..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-light border border-white/10 text-white text-sm focus:outline-none focus:border-cyber-cyan transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyber-cyan to-blue-600 text-black font-bold text-sm shadow-xl shadow-cyber-cyan/20 hover:brightness-110 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4 fill-black" />
                    <span>Dispatch Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
