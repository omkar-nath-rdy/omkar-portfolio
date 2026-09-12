import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function AICore({ isMobile = false }) {
  const groupRef = useRef();
  const innerSphereRef = useRef();
  const outerWireframeRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const satellitesRef = useRef();

  // Create static satellite positions once
  const satellites = React.useMemo(() => {
    const count = isMobile ? 6 : 14;
    const items = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.4 + Math.sin(i * 1.5) * 0.6;
      items.push({
        position: [Math.cos(angle) * radius, (Math.sin(i * 2) * 0.8), Math.sin(angle) * radius],
        size: 0.05 + Math.random() * 0.06,
        color: i % 2 === 0 ? '#00F0FF' : '#8B5CF6'
      });
    }
    return items;
  }, [isMobile]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Smooth hover tilt
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        time * 0.2 + pointer.x * 0.5,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.4,
        0.05
      );
    }

    // Inner pulsating core
    if (innerSphereRef.current) {
      const scale = 1 + Math.sin(time * 3) * 0.08;
      innerSphereRef.current.scale.set(scale, scale, scale);
      innerSphereRef.current.rotation.y = time * 0.4;
    }

    // Outer geometric wireframe
    if (outerWireframeRef.current) {
      outerWireframeRef.current.rotation.x = time * 0.15;
      outerWireframeRef.current.rotation.z = time * 0.1;
    }

    // Rotating holographic orbital rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.3;
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.5) * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -time * 0.25;
      ring2Ref.current.rotation.z = Math.PI / 6 + Math.cos(time * 0.5) * 0.1;
    }

    // Satellites cluster rotation
    if (satellitesRef.current) {
      satellitesRef.current.rotation.y = -time * 0.35;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Core: Glowing emissive energy node */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[1, isMobile ? 24 : 36, isMobile ? 24 : 36]} />
        <meshStandardMaterial
          color="#0B0F19"
          emissive="#00F0FF"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Outer Holographic Icosahedron Shell */}
      <mesh ref={outerWireframeRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Orbital Ring 1: Cyan Data Stream */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.2, 0.018, 12, isMobile ? 48 : 80]} />
        <meshStandardMaterial
          color="#00F0FF"
          emissive="#00F0FF"
          emissiveIntensity={0.9}
          roughness={0.3}
        />
      </mesh>

      {/* Orbital Ring 2: Violet Neural Path */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.5, 0.015, 12, isMobile ? 48 : 80]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Orbiting Satellite Data Nodes */}
      <group ref={satellitesRef}>
        {satellites.map((sat, i) => (
          <mesh key={i} position={sat.position}>
            <sphereGeometry args={[sat.size, 12, 12]} />
            <meshStandardMaterial
              color={sat.color}
              emissive={sat.color}
              emissiveIntensity={1.2}
            />
          </mesh>
        ))}
      </group>

      {/* Central Point Lights */}
      <pointLight color="#00F0FF" intensity={isMobile ? 1.5 : 2.5} distance={6} />
      <pointLight color="#8B5CF6" intensity={isMobile ? 1.2 : 2.0} distance={7} position={[0, -1, 0]} />
    </group>
  );
}
