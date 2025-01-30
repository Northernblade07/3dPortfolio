import React, { useState ,Suspense } from 'react'
import { myProjects } from '../constant'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import CanvasLoader from './CanvasLoader'
import ComputerDemo from './ComputerDemo'
const Projects = () => {
    const projectLength = myProjects.length
const [selectedProjectIndex,setSelectedProjectIndex] = useState(0)
const handleNavigation=(direction)=>{
setSelectedProjectIndex((prevIndex)=>{
if (direction==='previous') {
    return prevIndex === 0? projectLength-1 : prevIndex-1 ;
}else{
    return prevIndex === projectLength-1 ? 0 : prevIndex+1;
}
})
}

    const currentProject = myProjects[selectedProjectIndex];


    return (
        <section className='c-space my-20' id='work'>
            <p className='head-text text-white '> My projects</p>

            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>

            
            <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>

                <div className='absolute top-0 right-0'>
                    <img src={myProjects[0].spotlight} alt="" className='w-full h-96 object-cover rounded-xl ' />
                </div>

                <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>

                    <img src={currentProject.logo} alt="" className='w-10 h-10 shadow-sm' />
                </div>

                <div className='flex flex-col gap-5 text-white-600 my-5 '>

                        <p className='text-2xl font-semibold animatedText text-white' > {currentProject.title}</p>

                        <p className='animatedText '>{currentProject.desc}</p>

                        <p className='animatedText'>
                            {currentProject.subdesc}
                        </p>
                </div>

                <div className='flex items-center justify-between flex-wrap gap-5 '>

                        <div className='flex items-center gap-3 '>
                            {currentProject.tags.map((tag,index)=>{
                                return(
                                    <div key={index} className='tech-logo'>
                                        <img src={tag.path} alt={tag.name} />
                                    </div>
                                )
                            })}
                        </div>

                            <a className='flex items-center gap-2 cursor-pointer' href={currentProject.href} 
                            >
                                <p className='text-white'>check live site</p>
                                <img className='w-3 h-3' src="/assets/arrow-up.png" alt="" />
                            </a>
                </div>

{/* buttons to navigate between different projects  */}
                <div className='mt-7  flex justify-between items-center'>
                    <button className='arrow-btn' onClick={()=>handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="" />
                    </button>

                    <button className='arrow-btn' onClick={()=>handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="" />
                    </button>
                </div>
            </div>

{/* from here its going to be the 3d model  */}
            <div className='border border-black-300 bg-black-200 rounded-lg md:h-full  h-96
            '>
                    <Canvas>
                        <ambientLight intensity={Math.PI}/>
                        <directionalLight intensity={Math.PI} position={[10,10,5]}/>

                        <Center>
                                <Suspense fallback={<CanvasLoader/>}>

                                    <group scale={2} position={[0,-2,0]} rotation={[0,0,0]}>
                                        <ComputerDemo
                                         texture={currentProject.texture}/>

                                    </group>
                                </Suspense>
                        </Center>
                        {/* math.pi/2 does not allow the model to rotate in the bottom angle  */}
                        <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
                    </Canvas>
            </div>
            </div>
        </section>
    )
}

export default Projects
