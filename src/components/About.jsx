import React, { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import Button from './Button';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile screens to optimize assets
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText('prashantbhandaricr07@gmail.com');
        setHasCopied(true);

        // Reduced from 20000ms (20s) to 2000ms (2s) for better UX and to avoid memory leaks
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    const BentoTilt = ({ children, className }) => {
        const aboutRef = useRef();

        const handleMouseMove = (e) => {
            // Disable heavy tilt calculations on mobile to save CPU/Battery
            if (window.innerWidth <= 768) return; 

            if (!aboutRef.current) return;

            const { clientX, clientY } = e;
            const { left, top, height, width } = aboutRef.current.getBoundingClientRect();

            const relativeX = (clientX - left) / width;
            const relativeY = (clientY - top) / height;

            const tiltX = (relativeY - 0.5) * 5;
            const tiltY = (relativeX - 0.5) * -5;

            // Direct DOM manipulation avoids React re-renders
            aboutRef.current.style.transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`;
        };

        const handleMouseLeave = () => {
            if (aboutRef.current) {
                aboutRef.current.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
            }
        };

        return (
            <div 
                onMouseMove={handleMouseMove} 
                onMouseLeave={handleMouseLeave} 
                className={`${className} transition-transform duration-300 ease-out`} // Added Tailwind transition for smooth return
                ref={aboutRef}
            >
                {children}
            </div>
        );
    };

    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-2 gap-5 h-full '>

                <BentoTilt className='col-span-1 xl:row-span-3 md:row-span-1' >
                    <div className='grid-container'>
                        <img
                            src="/assets/grid1.png" 
                            alt="Prashant Bhandari" 
                            loading="lazy" // Lazy load added
                            className='w-full sm:h-[276px] h-fit object-contain' 
                        />
                        <div>
                            <p className='grid-headtext'>Hi, I am Prashant Bhandari</p>
                            <p className='grid-subtext'>I am a web developer focusing on full-stack web development and animated 3D websites.</p>
                        </div>
                    </div>
                </BentoTilt>

                <BentoTilt className='col-span-1 xl:row-span-3 sm:row-span-1'>
                    <div className='grid-container'>
                        <img 
                            src='/assets/mern.webp' 
                            alt="MERN Stack" 
                            loading="lazy" 
                            className='w-full sm:h-[266px] object-contain h-fit' 
                        />
                        <div>
                            <p className='grid-headtext'>MERN stack</p>
                            <p className='grid-subtext'>
                                I am proficient in the MERN stack with knowledge about animated 3D websites and the Next.js framework.
                            </p>
                        </div>
                    </div>
                </BentoTilt>

                <BentoTilt className='xl:col-span-1 col-span-2 xl:row-span-4' >
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            {/* Wait to render Globe until client side to avoid hydration mismatch, and utilize isMobile for texture logic if needed */}
                            <Globe 
                                height={326} 
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundOpacity={0.5}
                                showAtmosphere={!isMobile} // Turn off atmosphere on mobile to save rendering power
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg" // Consider downloading this and using a lower-res version locally
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 28.6139, lng: 77.2090, // Delhi Coordinates for accuracy
                                    text: "I am here",
                                    color: 'white',
                                    size: 20,
                                }]}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>Location</p>
                        </div>
                        <p className='grid-subtext'>I live in Delhi, India and can work in different time zones.</p>
                        <a href="#contact">
                            <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
                        </a>
                    </div>
                </BentoTilt>

                <BentoTilt className='col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img 
                            src="/assets/grid3.png" 
                            alt="Coding Passion" 
                            loading="lazy" 
                            className='w-full sm:h-[266px] h-fit object-contain' 
                        />
                        <div>
                            <p className='grid-headtext'>My passion for coding</p>
                            <p className='grid-subtext'>
                                For now, my interest in coding is mainly towards web development using MERN and integrating 3D models with animation to provide a better user experience.
                            </p>
                        </div>
                    </div>
                </BentoTilt>

                <BentoTilt className='xl:col-span-1 md:col-span-1 col-span-2 xl:row-span-2'>
                    <div id='contact' className='grid-container'>
                        <img 
                            src="/assets/grid4.png" 
                            alt="Contact" 
                            loading="lazy" 
                            className='w-full md:h-[126px] h-fit object-cover sm:object-top sm:h-[276px]' 
                        />
                        <div className='space-y-2'>
                            <p className='grid-headtext text-center'>Contact me</p>
                            <div className='copy-container cursor-pointer' onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                                <p className='lg:text-xl text-white'>prashantbhandaricr07@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </BentoTilt>
            </div>
        </section>
    );
}

export default About;