import React from 'react'
import { Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import { PerspectiveCamera} from '@react-three/drei'
import HackerRoom from './HackerRoom'
import CanvasLoader from './CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constant'
import Target from './Target'
import ReactLogo from './ReactLogo'
// import AnotherReact from './AnotherReact'
import Cube from './Cube'
import Rings from './Ring'
import HeroCamera from './HeroCamera'
import Button from './Button'
// import { is } from '@react-three/fiber/dist/declarations/src/core/utils'
// import { OrbitControls } from 'three/examples/jsm/Addons.js'
const Hero = () => {
const isSmall = useMediaQuery({maxWidth:440})
const isMobile = useMediaQuery({maxWidth:768})
const isTablet = useMediaQuery({minWidth:768 , maxWidth:1024})

const sizes = calculateSizes(isSmall,isMobile,isTablet)


// const Controls = useControls('HackerRoom',{
//   positionX : {
//     value:1,
//     min:-10,
//     max:10,
//   },
//   positionY : {
//     value:-8,
//     min:-10,
//     max:10,
//   },
//   positionZ : {
//     value:1.3,
//     min:-10,
//     max:10,
//   },
//   scale:{
//     value:0.1,
//     min:-10,
//     max:10,
//   },
//   // scaleX : {
//   //   value:2.5,
//   //   min:-10,
//   //   max:10,
//   // },
//   // scaleY : {
//   //   value:2.5,
//   //   min:-10,
//   //   max:10,
//   // },
//   // scaleZ : {
//   //   value:2.5,
//   //   min:-10,
//   //   max:10,
//   // },
//   rotationX : {
//     value:0,
//     min:-10,
//     max:10,
//   },
//   rotationY : {
//     value: -Math.PI,
//     min:-10,
//     max:10,
//   },
//   rotationZ : {
//     value:0,
//     min:-10,
//     max:10,
//   },
// })

  return (
    <section id='home' className='min-h-screen flex flex-col relativew-full'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 '>
      <p className='sm:text-3xl  text-xl text-white font-medium text-center font-generalsans'>Hi , I am prashant <span className='waving-hand'>✌️</span></p>
      <p className='hero_tag text-gray_gradient'>A WEB DEVELOPER </p>
        </div>

        <div className='w-full h-full absolute inset-0 '>
                  {/* <Leva /> */}
                <Canvas className='w-full h-full'>
{/* Important Note --- 

eslint does not recognise the props given to the elements inside a canvas even tho they do exists 
for that write a command in the terminal 

npm install @react-three/eslint-plugin --save-dev


after that change the plugins in eslint.config.js 
and add a new plugin

'@react-three' : ReactThreeFibre from r@eact-three/fibre
*/}
                  <Suspense fallback={<CanvasLoader/>}>

                  {/* camera  */}
                    <PerspectiveCamera makeDefault position={[0,0,20]}/>
                    
                    <HeroCamera isMobile={isMobile}>
                    {/* mesh or the main model  */}
                    <HackerRoom
                     scale = {sizes.deskScale}

                     position={sizes.deskPosition}
                     
                     rotation = {[0,-Math.PI,0]} 
                     />
                     </HeroCamera>
                    

                      {/* other models are added here */}
                      <group>
                          <Target scale={1.3} rotation={[0,Math.PI/5,0]} position={sizes.targetPosition}/>
                          <ReactLogo scale={0.4} position={sizes.reactLogoPosition}/>
                          {/* <AnotherReact position={[1,1,1]} scale={0.4}/> */}
  
                          <Cube position={sizes.cubePosition} />
                          <Rings position={sizes.ringPosition} />
                      </group>


                    {/* lights */}
                      <ambientLight intensity={1}/>
                    
                      <directionalLight position={[10,10,10]} intensity={1}/>
                    
                    
                    {/* <OrbitControls/> */}
                  </Suspense>
                </Canvas>
        </div> 

        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
          <a href="#about" className='w-fit'>

            <Button name='lets work together' isBeam containerClass='sm:w-fit  w-full sm:min-w-96'>

            </Button>
          </a>
          
          </div>        
    </section>
  )
}

export default Hero
