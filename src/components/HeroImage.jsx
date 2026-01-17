import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

const HeroImage = ({ position = [10, 10, 10], scale = [4, 2.5, 1] }) => {
  const meshRef = useRef()
  const texture = useTexture('/hero.gif') // 👈 your image

  useFrame(({ mouse }) => {
    if (!meshRef.current) return

    meshRef.current.rotation.y = mouse.x * 0.25
    meshRef.current.rotation.x = mouse.y * 0.15
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial
        map={texture}
        transparent
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  )
}

export default HeroImage
