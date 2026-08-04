'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  performanceMode?: boolean;
}

export function ParticleField({ count = 1200, performanceMode = false }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const particleCount = performanceMode ? Math.floor(count / 3) : count;

  // Generate random positions & colors for particles in 3D sphere volume
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const cyan = new THREE.Color('#00f0ff');
    const violet = new THREE.Color('#8a2be2');
    const emerald = new THREE.Color('#10b981');

    for (let i = 0; i < particleCount; i++) {
      // Spherical distribution
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 4.5 + 0.5;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Color selection
      const colorFactor = Math.random();
      let selectedColor = cyan;
      if (colorFactor > 0.6) selectedColor = violet;
      else if (colorFactor > 0.35) selectedColor = emerald;

      col[i * 3] = selectedColor.r;
      col[i * 3 + 1] = selectedColor.g;
      col[i * 3 + 2] = selectedColor.b;
    }

    return [pos, col];
  }, [particleCount]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    // Gentle rotation over time
    pointsRef.current.rotation.y += delta * 0.08;
    pointsRef.current.rotation.x += delta * 0.04;

    // React to pointer
    const targetX = state.pointer.x * 0.4;
    const targetY = state.pointer.y * 0.4;
    pointsRef.current.rotation.y += (targetX - pointsRef.current.rotation.y) * 0.05;
    pointsRef.current.rotation.x += (-targetY - pointsRef.current.rotation.x) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={performanceMode ? 0.04 : 0.03}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
