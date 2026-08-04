'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationAchievements } from '@/components/EducationAchievements';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [performanceMode, setPerformanceMode] = useState(false);

  return (
    <main className="min-h-screen bg-background text-slate-100 relative overflow-x-hidden selection:bg-cyber-cyan selection:text-black">
      {/* Glass Navbar */}
      <Navbar performanceMode={performanceMode} setPerformanceMode={setPerformanceMode} />

      {/* 3D Hero Section */}
      <HeroSection performanceMode={performanceMode} />

      {/* About & Engineering Philosophy */}
      <AboutSection />

      {/* 3D Tech Skills Matrix */}
      <SkillsSection />

      {/* Work Experience (Tata Motors) */}
      <ExperienceSection />

      {/* Featured Projects (Agrovision & SnapSphere) */}
      <ProjectsSection />

      {/* Education & Achievements (CodeVita, GDSC, DSA) */}
      <EducationAchievements />

      {/* Contact & Dispatch Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
