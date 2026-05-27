// Balls.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';

const Ball = ({ imageUrl }) => {
  const [decal] = useTexture([imageUrl]);

  return (
    // Removed <Float> to allow frameloop="demand" to actually work and save battery
    <mesh scale={2.75}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {/* Removed castShadow/receiveShadow as there are no lights casting shadows */}
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        map={decal}
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
      />
    </mesh>
  );
};

export const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand" // Only renders when the user drags the ball
      dpr={[1, 1.5]} // Crucial for mobile performance
      gl={{ antialias: false }} // Disabled antialiasing on these small icons to save GPU
      // Removed preserveDrawingBuffer (major memory hog)
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imageUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;