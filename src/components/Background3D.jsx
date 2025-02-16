import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import * as THREE from 'three';

const Particles = ({ count = 200 }) => {
  const mesh = useRef();
  const { viewport } = useThree();

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * viewport.width * 2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 2;
    positions[i * 3 + 2] = Math.random() * -10;

    // Softer purple colors
    colors[i * 3] = 0.18;     // R (46/255)
    colors[i * 3 + 1] = 0.06; // G (16/255)
    colors[i * 3 + 2] = 0.4;  // B (101/255)
  }

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.025;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          itemSize={3}
          array={positions}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          itemSize={3}
          array={colors}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <Particles />
        <Environment preset="city" />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Background3D;