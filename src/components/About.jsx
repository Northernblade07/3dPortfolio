import React, { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const [isMobile, setIsMobile] = useState(false);

    const containerRef = useRef();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);

        checkMobile();

        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useGSAP(() => {
        gsap.from('.bento-card', {
            opacity: 0,
            y: 50,
            stagger: 0.12,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
            }
        });
    }, { scope: containerRef });

    const BentoTilt = ({ children, className }) => {
        const cardRef = useRef();

        const handleMouseMove = (e) => {
            if (window.innerWidth <= 768 || !cardRef.current) return;

            const { left, top, width, height } = cardRef.current.getBoundingClientRect();

            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            const rotateX = (y - 0.5) * 6;
            const rotateY = (x - 0.5) * -6;

            gsap.to(cardRef.current, {
                rotateX,
                rotateY,
                scale: 0.98,
                transformPerspective: 700,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cardRef.current, {
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power3.out'
            });
        };

        return (
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={className}
            >
                {children}
            </div>
        );
    };

    return (
        <section className='c-space my-24' id='about' ref={containerRef}>

            <div className='mb-14'>
                <p className='head-text text-white'>
                    About Me
                </p>

                <p className='text-neutral-400 mt-4 max-w-2xl leading-relaxed'>
                    Passionate full stack developer focused on building immersive,
                    high-performance web applications with modern UI/UX and scalable architecture.
                </p>
            </div>

            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 auto-rows-[minmax(250px,auto)]'>

                {/* INTRO */}
                <BentoTilt className='bento-card'>
                    <div className='grid-container'>
                        <img
                            src="/assets/grid1.png"
                            alt="Profile"
                            className='w-full h-[250px] object-contain'
                        />

                        <div>
                            <p className='grid-headtext'>
                                Hi, I'm Prashant Bhandari
                            </p>

                            <p className='grid-subtext'>
                                Full stack developer specializing in MERN stack,
                                scalable systems, and animated 3D experiences.
                            </p>
                        </div>
                    </div>
                </BentoTilt>

               {/* TECH STACK VERTICAL CARD */}
<BentoTilt className='bento-card xl:row-span-2'>
    <div className='grid-container h-full'>

        <div className='flex items-center justify-between'>
            <div>
                <p className='grid-headtext'>
                    Tech Stack
                </p>

                <p className='grid-subtext'>
                    Technologies I work with to build scalable and modern applications.
                </p>
            </div>
        </div>

        <div className='flex flex-col gap-5 mt-4'>

            {/* MERN */}
            <div className='flex flex-col items-center gap-4 bg-black-300/40 border border-white/5 rounded-2xl p-4 hover:border-white/20 transition-all duration-300'>

                <div className='w-36 h-36 rounded-xl bg-black-200 flex items-center justify-center p-2'>
                    <img
                        src='/assets/mern.webp'
                        alt='MERN'
                        className='w-full h-full object-contain'
                    />
                </div>

                <div>
                    <h3 className='text-white font-semibold text-lg'>
                        MERN Stack
                    </h3>

                    <p className='text-[#afb0b6] text-sm leading-relaxed mt-1'>
                        MongoDB, Express.js, React.js, and Node.js for full stack applications.
                    </p>
                </div>

            </div>

            {/* NEXT JS */}
            <div className='flex flex-col items-center gap-4 bg-black-300/40 border border-white/5 rounded-2xl p-4 hover:border-white/20 transition-all duration-300'>

                <div className='w-36 h-36 rounded-xl bg-black-200 flex items-center justify-center p-3'>
                    <img
                        src='/assets/nextjs.png'
                        alt='Next.js'
                        className='w-full h-full object-contain'
                    />
                </div>

                <div>
                    <h3 className='text-white font-semibold text-lg'>
                        Next.js
                    </h3>

                    <p className='text-[#afb0b6] text-sm leading-relaxed mt-1'>
                        Production-ready React framework with SSR, routing, and performance optimization.
                    </p>
                </div>

            </div>

            {/* SPRING BOOT */}
            <div className='flex flex-col items-center gap-4 bg-black-300/40 border border-white/5 rounded-2xl p-4 hover:border-white/20 transition-all duration-300'>

                <div className='w-36 h-36 rounded-xl bg-black-200 flex items-center justify-center p-2'>
                    <img
                        src='/assets/Spring_boot.png'
                        alt='Spring Boot'
                        className='w-full h-full object-contain'
                    />
                </div>

                <div>
                    <h3 className='text-white font-semibold text-lg'>
                        Spring Boot
                    </h3>

                    <p className='text-[#afb0b6] text-sm leading-relaxed mt-1'>
                        Backend development with REST APIs, scalable services, and enterprise architecture.
                    </p>
                </div>

            </div>

        </div>

    </div>
</BentoTilt>

{/* EXPERIENCE CARD */}
<BentoTilt className='bento-card'>
    <div className='grid-container justify-between h-full'>

        <div>

            <div className='flex items-start justify-between gap-4 flex-wrap'>
                <div>
                    <p className='grid-headtext'>
                        Experience
                    </p>

                    <h3 className='text-white text-xl font-semibold mt-3 leading-snug'>
                        Full Stack Developer Intern
                    </h3>

                    <p className='text-neutral-400 text-sm mt-1'>
                        Zenith Education Solutions Pvt. Ltd.
                    </p>

                    <p className='text-neutral-500 text-sm mt-1'>
                        Aug 2025 — Dec 2025 · On-site
                    </p>
                </div>

                <div className='px-4 py-2 rounded-full bg-white/10 text-white text-xs whitespace-nowrap'>
                    4 Months
                </div>
            </div>

            <div className='mt-6 space-y-4 text-[#afb0b6] text-sm leading-relaxed'>

                <p>
                    Enhanced frontend UI/UX for Freepare,
                    a platform used by 1,000+ students preparing for aptitude,
                    CAT, GMAT, and competitive exams.
                </p>

                <p>
                    Improved deployment workflows using Docker and Redis,
                    reducing server load by 20%.
                </p>

                <p>
                    Contributed backend development for a Library Management System,
                    improving efficiency by 15%.
                </p>

            </div>

        </div>

        <div className='mt-6 flex items-center justify-between border-t border-white/5 pt-4'>

            <div>
                <p className='text-xs uppercase tracking-[3px] text-neutral-500'>
                    Stipend
                </p>

                <p className='text-white font-semibold mt-1'>
                    ₹20,000/month
                </p>
            </div>

            <div className='w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center'>
                <span className='text-green-400 text-xl'>↗</span>
            </div>

        </div>

    </div>
</BentoTilt>    

                {/* GLOBE */}
                <BentoTilt className='bento-card'>
                    <div className='grid-container justify-center'>

                        <div className='flex justify-center items-center min-h-[240px]'>

                            <Globe
                                height={isMobile ? 240 : 300}
                                width={isMobile ? 240 : 300}
                                backgroundColor='rgba(0,0,0,0)'
                                showAtmosphere={!isMobile}
                                showGraticules={!isMobile}
                                globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                                bumpImageUrl={!isMobile ? "//unpkg.com/three-globe/example/img/earth-topology.png" : null}
                                labelsData={[
                                    {
                                        lat: 28.6139,
                                        lng: 77.2090,
                                        text: 'Delhi',
                                        color: 'white',
                                        size: 0.4
                                    }
                                ]}
                            />

                        </div>

                        <div>
                            <p className='grid-headtext'>
                                Based in Delhi, India
                            </p>

                            <p className='grid-subtext'>
                                Open to remote opportunities,
                                freelance projects, and full-time roles.
                            </p>
                        </div>

                    </div>
                </BentoTilt>

                {/* PASSION + RESUME */}
                <BentoTilt className='bento-card'>
                    <div className='grid-container justify-between h-full'>

                        <div>
                            <p className='grid-headtext'>
                                Passion for Building
                            </p>

                            <p className='grid-subtext'>
                                I enjoy creating performant full stack applications
                                with immersive animations and intuitive user experiences.
                            </p>
                        </div>

                        <a
                            href='/assets/Prashant_Bhandari_Resume.pdf'
                            download='Prashant_Bhandari_Resume.pdf'
                            className='w-full mt-6'
                        >
                            <Button
                                name='Download Resume'
                                isBeam
                                containerClass='w-full'
                            />
                        </a>

                    </div>
                </BentoTilt>

            </div>
        </section>
    );
};

export default About;