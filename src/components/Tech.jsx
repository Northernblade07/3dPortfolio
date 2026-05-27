import React, { useState, useEffect } from 'react';
import { BallCanvas } from './Balls'; 
import { tech } from '../constant'; 

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the user is on a mobile/tablet device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section>
      <p className='hero_tag text-gray_gradient uppercase text-center mb-10'>Tech Stack</p>
      
      <div className='flex flex-wrap justify-center gap-10 text-white h-fit w-full'>
        {tech.map((technology) => (
          <div 
            className='w-28 h-30 flex flex-col justify-center items-center' 
            key={technology.name}
            style={{
              animation: 'float 3s ease-in-out infinite',
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {/* Fallback to standard 2D images on mobile to save WebGL contexts! */}
            {isMobile ? (
              <div className="w-20 h-20 bg-[#fff8eb] rounded-full flex justify-center items-center shadow-lg">
                 <img src={technology.icon} alt={technology.name} className="w-12 h-12 object-contain" />
              </div>
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
            <p className='font-serif mt-3 text-center'>{technology.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tech;