'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { ParticleField } from './ParticleField';
import { WireframeOrb } from './WireframeOrb';

interface Hero3DCanvasProps {
  performanceMode?: boolean;
}

export function Hero3DCanvas({ performanceMode = false }: Hero3DCanvasProps) {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 60 }}
        dpr={performanceMode ? 1 : [1, 2]}
        gl={{ antialias: !performanceMode, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#00f0ff" />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#8a2be2" />

        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
            <WireframeOrb />
          </Float>
          <ParticleField count={1400} performanceMode={performanceMode} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
