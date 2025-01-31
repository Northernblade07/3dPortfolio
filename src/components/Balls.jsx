import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Suspense } from 'react'
import { Decal ,Float,OrbitControls,Preload,useTexture } from '@react-three/drei'
import CanvasLoader from './CanvasLoader'
const Balls = (props) => {
    const [decal] = useTexture([props.imageUrl])
  return (
    <Float rotationIntensity={1} floatIntensity={2} speed={1.75}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh scale={2.75} castShadow receiveShadow>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial color={"#fff8eb"}
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading/>
        <Decal map={decal} position={[0,0,1]} rotation={[2*Math.PI,0,6.25]} flatShading/>
      </mesh>

    </Float>
  )
}

export const BallCanvas = ({icon})=>{
    return(
        <Canvas frameloop='demand'gl={{preserveDrawingBuffer:true}}>
            <Suspense fallback={<CanvasLoader/>}/>
            <OrbitControls enableZoom={false}/>
            <Balls imageUrl={icon} />
            <Preload all/>
        </Canvas>
    )
}

export default BallCanvas
