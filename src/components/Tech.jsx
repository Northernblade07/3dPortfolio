// Tech.jsx
import React from 'react';
import { BallCanvas } from './Balls'; // Ensure path is correct
import { tech } from '../constant';

const Tech = () => {
  return (
    <section>
      <p className="hero_tag text-gray_gradient uppercase text-center mb-10">Tech Stack</p>
      
      <div className="flex flex-wrap justify-center gap-10 text-white h-fit w-full">
        {tech.map((technology) => (
          <div
            className="w-28 h-30 flex flex-col justify-center items-center"
            key={technology.name}
            // CSS floating animation replaces the expensive R3F <Float>
            style={{
              animation: 'float 3s ease-in-out infinite',
              // Add a slight random delay so they don't all float in perfect sync
              animationDelay: `${Math.random() * 2}s` 
            }}
          >
            <BallCanvas icon={technology.icon} />
            <p className="font-serif mt-3 text-center">{technology.name}</p>
          </div>
        ))}
      </div>
      
      {/* Add this to your global CSS file (e.g., index.css):
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      */}
    </section>
  );
};

export default Tech;