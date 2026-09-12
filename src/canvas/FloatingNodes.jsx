import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingNodes({ isMobile = false }) {
  const groupRef = useRef();
  const count = isMobile ? 12 : 24;

  const nodes = useMemo(() => {
    const items = [];
    const colors = ['#FFC700', '#FFD738', '#F59E0B'];

    for (let i = 0; i < count; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 12,
          Math.random() * 4 - 1,
          (Math.random() - 0.5) * 8
        ],
        speed: 0.2 + Math.random() * 0.4,
        offset: Math.random() * Math.PI * 2,
        size: 0.04 + Math.random() * 0.05,
        color: colors[i % colors.length]
      });
    }
    return items;
  }, [count]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    groupRef.current.children.forEach((child, i) => {
      const node = nodes[i];
      if (node) {
        child.position.y = node.position[1] + Math.sin(time * node.speed + node.offset) * 0.4;
        child.position.x = node.position[0] + Math.cos(time * 0.2 + node.offset) * 0.2;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[node.size, 16, 16]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={1.2}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}
