import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Interactive 3D Neural Particle Wave
 * An organic, fluid wave surface that undulates smoothly in 3D space
 * and reacts dynamically to cursor position and scrolling.
 */
export default function NeuralWave({ isMobile = false }) {
  const pointsRef = useRef();

  // Grid dimensions
  const rows = isMobile ? 32 : 54;
  const cols = isMobile ? 32 : 54;
  const count = rows * cols;
  const sep = isMobile ? 0.35 : 0.28;

  // Initialize buffer positions and colors
  const [positions, colors, basePositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);

    const amber = new THREE.Color('#FFC700');
    const gold = new THREE.Color('#FFD738');
    const orange = new THREE.Color('#F59E0B');

    let i = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c - cols / 2) * sep;
        const z = (r - rows / 2) * sep;
        const y = 0;

        pos[i * 3] = x;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = z;

        base[i * 3] = x;
        base[i * 3 + 1] = y;
        base[i * 3 + 2] = z;

        // Radial color blending: vibrant golden amber in center, warm copper/gold towards edges
        const dist = Math.sqrt(x * x + z * z);
        const maxDist = Math.sqrt((cols * sep / 2) ** 2 + (rows * sep / 2) ** 2);
        const factor = Math.min(1, Math.max(0, dist / maxDist));

        const particleColor = new THREE.Color().lerpColors(amber, factor < 0.5 ? gold : orange, factor);

        col[i * 3] = particleColor.r;
        col[i * 3 + 1] = particleColor.g;
        col[i * 3 + 2] = particleColor.b;

        i++;
      }
    }
    return [pos, col, base];
  }, [rows, cols, count, sep]);

  // Smooth animation frame
  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime() * 0.8;
    const pointer = state.pointer;
    const positionAttr = pointsRef.current.geometry.attributes.position;
    const posArray = positionAttr.array;

    for (let i = 0; i < count; i++) {
      const x = basePositions[i * 3];
      const z = basePositions[i * 3 + 2];

      // Multi-frequency smooth wave equations
      const wave1 = Math.sin(x * 0.6 + time) * 0.35;
      const wave2 = Math.cos(z * 0.5 + time * 0.7) * 0.3;
      const wave3 = Math.sin((x + z) * 0.3 + time * 0.5) * 0.2;

      // Subtle mouse ripple
      const dx = x - pointer.x * 4;
      const dz = z - (-pointer.y * 3);
      const mouseDist = Math.sqrt(dx * dx + dz * dz);
      const mouseInfluence = Math.exp(-mouseDist * 0.8) * 0.4;

      posArray[i * 3 + 1] = wave1 + wave2 + wave3 + mouseInfluence;
    }

    positionAttr.needsUpdate = true;

    // Gentle global tilt
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(
      pointsRef.current.rotation.y,
      pointer.x * 0.15,
      0.03
    );
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      0.85 + pointer.y * 0.1,
      0.03
    );
  });

  return (
    <group position={[0, -0.8, -1.2]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isMobile ? 0.045 : 0.055}
          vertexColors
          transparent
          opacity={0.75}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
