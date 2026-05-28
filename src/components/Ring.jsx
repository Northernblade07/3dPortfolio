import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Center, useTexture } from '@react-three/drei';

const Rings = ({ position }) => {
  const groupRef = useRef();
  const texture = useTexture('/textures/rings.png');

  // Rotate the rings natively based on delta time to keep speed consistent regardless of device refresh rate
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    
    groupRef.current.children.forEach((mesh, index) => {
      mesh.rotation.y += delta * 0.5 * (index + 1);
      mesh.rotation.x -= delta * 0.25 * (index + 1);
    });
  });

  return (
    <Center position={position}>
      <group scale={0.5} ref={groupRef}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;