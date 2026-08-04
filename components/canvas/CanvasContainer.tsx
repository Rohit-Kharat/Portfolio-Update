'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const Hero3DCanvas = dynamic(
  () => import('./Hero3DCanvas').then((mod) => mod.Hero3DCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-cyber-cyan/30 border-t-cyber-cyan animate-spin" />
      </div>
    ),
  }
);

interface CanvasContainerProps {
  performanceMode?: boolean;
}

export function CanvasContainer({ performanceMode = false }: CanvasContainerProps) {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-auto z-0 opacity-80 hover:opacity-100 transition-opacity duration-700">
      <Hero3DCanvas performanceMode={performanceMode} />
    </div>
  );
}
