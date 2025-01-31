import React, { useState } from 'react'
import Globe from 'react-globe.gl'
// import { color } from 'three/webgpu'
import Button from './Button'
import { useRef } from 'react'
// import gsap from 'gsap'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('prashantbhandaricr07@gmail.com')
        setHasCopied(true)

        setTimeout(() => {
            setHasCopied(false)
        }, 20000);
    }

    const BentoTilt = ({ children, className }) => {
        const [Transform, setTransform] = useState(" ");
        const aboutRef = useRef();
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, height, width } = aboutRef.current.getBoundingClientRect();

            const relativeX = (clientX - left) / width;
            const relativeY = (clientY - top) / height;

            const tiltX = (relativeY - 0.5) * 5;
            const tiltY = (relativeX - 0.5) * -5;

            const newtransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`

            setTransform(newtransform)
        }

        const handleMouseLeave = () => {
            setTransform(" ")
        }

        return (
            <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={className} ref={aboutRef} style={{ transform: Transform }}>{children}</div>
        )
    }

    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-2 gap-5 h-full '>

                <BentoTilt
                    className='col-span-1 xl:row-span-3 md:row-span-1' >
                    <div className='grid-container'>

                        <img
                            src="/assets/grid1.png" alt="" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi  , i am Prashant Bhandari</p>
                            <p className='grid-subtext'> i am a web developer focusing on fullstack web development and animated 3d websites</p>
                        </div>
                    </div>
                </BentoTilt>


                <BentoTilt className='col-span-1 xl:row-span-3 sm:row-span-1'>
                    <div className='grid-container'>
                        <img src="https://imgs.search.brave.com/-CvqeZUFi64amV7y3rBcW-6r5EInU-VwyQC0LGgkHQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lMS5w/eGZ1ZWwuY29tL2Rl/c2t0b3Atd2FsbHBh/cGVyLzczMC81MTAv/ZGVza3RvcC13YWxs/cGFwZXItbWVybi1z/dGFjay5qcGc" alt="" className='w-full sm:h-[266px] object-contain h-fit' />
                        <div>
                            <p className='grid-headtext'>Mern stack</p>
                            <p className='grid-subtext'>
                                i am proficient in  mern stack with some knowledge about animated 3d websites and next js framework
                            </p>
                        </div>
                    </div>
                </BentoTilt>

                <BentoTilt className='xl:col-span-1 col-span-2 xl:row-span-4' >
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full 
                        sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe height={326} width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 40, lng: -100,
                                    text: "iam here",
                                    color: 'white',
                                    size: 20,
                                }]}
                            />

                        </div>
                        <div>
                            <p className='grid-headtext'>location</p>
                        </div>
                        <p className='grid-subtext'> i live in Delhi,India and can work in different time zone</p>
                        <a href="#contact">

                            <Button name='contact me ' isBeam containerClass='w-full mt-10'></Button>
                        </a>
                    </div>
                </BentoTilt>



                <BentoTilt className='col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="" className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'> My passion for coding</p>
                            <p className='grid-subtext'>
                                for now , my interest in coding is mainly towards web development using MERN and integrating 3d models with animation in it for provinding better user experience.
                                I am always looking to learn something new if it can help me improve myself
                            </p>
                        </div>
                    </div>
                </BentoTilt>


                <BentoTilt className='xl:col-span-1 md:col-span-1 col-span-2 xl:row-span-2' id='contact'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png" alt="" className='w-full md:h-[126px] h-fit object-cover sm:object-top sm:h-[276px]' />

                        <div className='space-y-2'>
                            <p className='grid-headtext text-center'> Contact me </p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                                <p className='lg:text-xl text-white'>prashantbhandaricr07@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </BentoTilt>
            </div>
        </section>
    )
}

export default About
