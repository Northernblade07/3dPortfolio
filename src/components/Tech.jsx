import React from 'react'
import {BallCanvas} from './Balls'
import { tech } from '../constant' 
// import { div } from 'three/webgpu'
const Tech = () => {
  return (
    <section >
        <p className='hero_tag text-gray_gradient uppercase'>Tech Stack </p>
   < div className='flex flex-wrap justify-center gap-10 text-white h-fit w-full  '>

        {tech.map((technology)=>(
            <div className='w-28 h-28 flex flex-col justify-center items-center' key={technology.name}>
                <BallCanvas icon={technology.icon}/>
                <p>{technology.name}</p>
            </div>
        ))}
    </div>
    </section>
  )
}

export default Tech
