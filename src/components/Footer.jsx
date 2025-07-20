import { Canvas} from '@react-three/fiber'
import {OrbitControls } from '@react-three/drei'
import React from 'react'
import { Suspense } from 'react'
import Car from './Car'
import CanvasLoader from './CanvasLoader'
import { navLinks } from '../constant'
// import { OrbitControls } from 'three/examples/jsm/Addons.js'
const Footer = () => {
    return (
        <div className='text-white'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <Canvas>
                        {/* <perspectiveCamera position={[0,0,0]}/> */}
                        <ambientLight intensity={Math.PI}/>
                        <directionalLight intensity={Math.PI} position={[20,0,2]}/>
                        <Suspense fallback={<CanvasLoader/>}>
                                <Car scale={1.4} position={[0,0,0]} rotation={[0,Math.PI/2,0]}/>
                        </Suspense>
                        <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
                    </Canvas>
                </div>

                <div className=''>
                    <p className='text-xl font-medium mb-5'> This was about me  </p>
                    <ul className='flex flex-col gap-1 '>
                       {
                                 navLinks.map((item)=>{
                                   return <li  key={item.id}>
                                     <a href={item.href}>
                                     {item.name}
                                     </a>
                                     </li>
                                 })
                               }
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='font-medium text-xl mb-5'>Get in touch</p>
                    <ul className='flex flex-col gap-1 '>
                        <li>+123334445</li>
                        <li className='flex flex-wrap'>prashantbhandaricr07@gmail.com</li>

                    </ul>
                </div>


            </div>
            <div >
                <hr className='h-1 bg-white' />
                {/* <p className='w-full py-5 text-sm text-center'> Copyright 2024@ LocaLink - All right reserved </p> */}
            </div>

        </div>
    )
}

export default Footer 
