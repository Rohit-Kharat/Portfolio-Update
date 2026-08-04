'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function WireframeOrb() {
  const outerMeshRef = useRef<THREE.Mesh>(null!);
  const innerMeshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.x += delta * 0.15;
      outerMeshRef.current.rotation.y += delta * 0.25;
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x -= delta * 0.2;
      innerMeshRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group>
      {/* Outer Wireframe Geometric Orb */}
      <mesh ref={outerMeshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner Glowing Morphing Core */}
      <mesh ref={innerMeshRef} scale={0.95}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshWobbleMaterial
          color="#8a2be2"
          factor={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}
