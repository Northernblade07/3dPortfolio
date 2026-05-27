import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// Imported Preload from drei to cache models
import { PerspectiveCamera, Preload } from '@react-three/drei'; 
import { useMediaQuery } from 'react-responsive';

import CanvasLoader from './CanvasLoader';
import HeroCamera from './HeroCamera';
import HeroImage from './HeroImage';
import ReactLogo from './ReactLogo';
import Cube from './Cube';
import Rings from './Ring';
import Button from './Button';

import { calculateSizes } from '../constant';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="min-h-screen flex flex-col relative w-full">
      {/* TEXT */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10 pointer-events-none">
        <p className="sm:text-3xl text-xl text-white font-medium text-center pointer-events-auto">
          Hi, I am Prashant <span className="waving-hand">✌️</span>
        </p>
        <p className="hero_tag text-gray_gradient text-center">
          A WEB DEVELOPER
        </p>
      </div>

      {/* 3D CANVAS */}
      <div className="w-full h-full absolute inset-0">
        <Canvas
          className="w-full h-full"
          // OPTIMIZATION 1: Cap the Device Pixel Ratio to prevent mobile GPUs from choking
          dpr={[1, 1.5]} 
          // OPTIMIZATION 2: Disable expensive antialiasing entirely on mobile screens
          gl={{ antialias: !isMobile, powerPreference: 'high-performance' }}
          onCreated={({ gl }) => gl.setClearColor('#000000')}
        >
          <Suspense fallback={<CanvasLoader />}>
            {/* Camera */}
            <PerspectiveCamera makeDefault position={[0, 0, 12]} />

            {/* Camera parallax */}
            {/* Ensure HeroCamera disables mouse-tracking completely if isMobile is true inside that component */}
            <HeroCamera isMobile={isMobile} />

            {/* HERO IMAGE */}
            <HeroImage
              position={[0, -1, 12]}
              scale={isMobile ? [3, 2, 1] : [4.5, 3, 1]}
            />

            {/* Floating icons */}
            <group>
              <ReactLogo
                scale={0.4}
                position={sizes.reactLogoPosition}
              />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
              <ReactLogo
                scale={0.5}
                position={sizes.targetPosition}
              />
            </group>

            {/* Lighting */}
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
          
          {/* OPTIMIZATION 3: Preload models into GPU memory so they don't pop out when resizing */}
          <Preload all />
        </Canvas>
      </div>

      {/* CTA */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit mx-auto block">
          <Button
            name="lets work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;