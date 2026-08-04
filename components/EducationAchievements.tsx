'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, Code, Users, CheckCircle, Sparkles } from 'lucide-react';

export function EducationAchievements() {
  const education = [
    {
      institution: 'JSPM Imperial College of Engineering, Pune',
      degree: 'BE in Electronics & Telecommunication',
      period: 'Oct 2022 – Jun 2026',
      grade: 'CGPA: 7.62 / 10',
      badge: 'GRADUATING 2026',
      isCurrent: true,
    },
    {
      institution: 'Nowrosjee Wadia College, Pune',
      degree: 'Higher Secondary School (HSC)',
      period: 'Mar 2022',
      grade: 'Percentage: 65%',
      isCurrent: false,
    },
    {
      institution: 'ERIN N Nagarvala Day School, Pune',
      degree: 'Secondary School (SSC)',
      period: 'Mar 2020',
      grade: 'Percentage: 79.20%',
      isCurrent: false,
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'TCS CodeVita Season 13 Global Rank 2069',
      description: 'Secured global rank among 100,000+ competitive programming participants worldwide, proving algorithmic proficiency in C++ and Python.',
      color: 'text-yellow-400',
      border: 'border-yellow-500/30',
      badge: 'Competitive Coding',
    },
    {
      icon: Code,
      title: '500+ Data Structures & Algorithms Solved',
      description: 'Solved over 500 DSA problems on LeetCode and HackerRank focusing on graphs, dynamic programming, trees, and system design logic.',
      color: 'text-cyber-cyan',
      border: 'border-cyber-cyan/30',
      badge: 'LeetCode & HackerRank',
    },
    {
      icon: Users,
      title: 'GDSC & Microsoft Learn Student Ambassador',
      description: 'Active technical community member organizing tech events, workshops, and student mentorship initiatives for developer communities.',
      color: 'text-cyber-violet',
      border: 'border-cyber-violet/30',
      badge: 'Community Leadership',
    },
    {
      icon: Award,
      title: 'Microsoft UI/UX Bootcamp Certified',
      description: 'Completed Microsoft certified UI/UX Bootcamp, mastering design systems, layout wireframing, and user-centric frontend experiences.',
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      badge: 'Certified',
    },
  ];

  return (
    <section id="achievements" className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-yellow-500/30 text-xs font-mono text-yellow-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>ACADEMICS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Global Achievements</span>
          </h2>
          <p className="max-w-2xl text-slate-300 text-base">
            Academic foundation at JSPM ICE Pune combined with competitive programming milestones and community leadership roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-cyber-cyan" />
              <h3 className="text-xl font-bold font-display text-white">Academic Journey</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-surface-border space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline node */}
                  <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 bg-background ${
                    edu.isCurrent ? 'border-cyber-cyan bg-cyber-cyan/30 animate-pulse' : 'border-slate-600'
                  }`} />

                  <div className="glass-panel p-6 rounded-2xl border-white/5 hover:border-cyber-cyan/40 transition-all">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                      {edu.badge && (
                        <span className="px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan text-[10px] font-mono border border-cyber-cyan/30">
                          {edu.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors">
                      {edu.institution}
                    </h4>
                    <p className="text-sm text-slate-300 font-medium mt-1">{edu.degree}</p>
                    <div className="mt-3 pt-3 border-t border-white/5 text-xs font-mono font-bold text-emerald-400">
                      {edu.grade}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Badges */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-yellow-400" />
              <h3 className="text-xl font-bold font-display text-white">Certifications & Ranks</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((ach, idx) => {
                const Icon = ach.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`glass-panel p-6 rounded-2xl border ${ach.border} hover:scale-[1.02] transition-all flex flex-col justify-between group`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2.5 rounded-xl bg-surface-light ${ach.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-slate-300 text-[10px] font-mono border border-white/10">
                          {ach.badge}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyber-cyan transition-colors mb-2">
                        {ach.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
