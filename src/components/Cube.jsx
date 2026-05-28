import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';

const Cube = (props) => {
  const { nodes } = useGLTF('/models/cube.glb');
  const texture = useTexture('/textures/cube.png');
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  // useFrame hooks directly into WebGL for buttery smooth rotation without React/GSAP overhead
  useFrame((state, delta) => {
    if (!cubeRef.current) return;
    
    // Adjust speed based on hover state
    cubeRef.current.rotation.y += delta * (hovered ? 1.5 : 0.5);
    cubeRef.current.rotation.x -= delta * (hovered ? 1.5 : 0.5);
    
    // Built-in float calculation
    cubeRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
  });

  return (
    <group position={[9, -4, 0]} scale={0.74} dispose={null} {...props}>
      <mesh
        ref={cubeRef}
        // Removed expensive castShadow/receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshMatcapMaterial matcap={texture} toneMapped={false} />
      </mesh>
    </group>
  );
};

useGLTF.preload('/models/cube.glb');
export default Cube;