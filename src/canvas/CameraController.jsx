import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraController({ isMobile = false }) {
  useFrame((state) => {
    const { pointer, camera } = state;
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    const maxScroll = typeof document !== 'undefined' 
      ? Math.max(1, document.documentElement.scrollHeight - window.innerHeight) 
      : 1000;
    const scrollFraction = Math.min(1, Math.max(0, scrollY / maxScroll));

    // Dynamic camera target based on scroll progression
    const targetX = isMobile ? pointer.x * 0.3 : pointer.x * 0.8;
    const targetY = isMobile 
      ? -pointer.y * 0.3 - scrollFraction * 1.5 
      : -pointer.y * 0.6 - scrollFraction * 2.5;
    const targetZ = isMobile ? 5.8 + scrollFraction * 2 : 4.5 + scrollFraction * 2.5;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.04);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.04);

    camera.lookAt(0, -scrollFraction * 0.8, 0);
  });

  return null;
}
