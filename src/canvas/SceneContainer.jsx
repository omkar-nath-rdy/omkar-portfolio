import React, { Suspense, useState, useEffect, Component } from 'react';
import { Canvas } from '@react-three/fiber';
import NeuralWave from './NeuralWave';
import FloatingNodes from './FloatingNodes';
import CameraController from './CameraController';

// Error Boundary for WebGL canvas
class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL Canvas Error, falling back to CSS animation:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Elegant CSS Fallback if WebGL is unavailable
function CSSSceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="relative w-80 h-80 sm:w-96 sm:h-96">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00F0FF]/20 via-[#3B82F6]/10 to-[#8B5CF6]/20 blur-3xl animate-pulse" />
        <div className="absolute inset-10 rounded-full border border-[#00F0FF]/30 animate-spin-slow" />
        <div className="absolute inset-20 rounded-full border border-dashed border-[#8B5CF6]/40 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
        <div className="absolute inset-28 rounded-full bg-gradient-to-br from-[#00F0FF]/30 to-[#8B5CF6]/30 blur-md" />
      </div>
    </div>
  );
}

export default function SceneContainer() {
  const [isMobile, setIsMobile] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(true);

  useEffect(() => {
    // Check mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLAvailable(false);
      }
    } catch {
      setWebGLAvailable(false);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!webGLAvailable) {
    return <CSSSceneFallback />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <CanvasErrorBoundary fallback={<CSSSceneFallback />}>
        <Canvas
          camera={{ position: [0, 2.2, isMobile ? 5.2 : 4.4], fov: 50 }}
          dpr={isMobile ? [1, 1.25] : [1, 1.5]}
          gl={{
            antialias: !isMobile,
            powerPreference: 'high-performance',
            alpha: true
          }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[0, 6, 4]} intensity={1.5} color="#FFFFFF" />
          <pointLight position={[0, 2, 0]} color="#FFC700" intensity={2.2} distance={12} />
          <pointLight position={[0, -2, -2]} color="#F59E0B" intensity={1.8} distance={10} />

          <Suspense fallback={null}>
            <NeuralWave isMobile={isMobile} />
            <FloatingNodes isMobile={isMobile} />
            <CameraController isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
