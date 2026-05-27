// ComputerDemo.jsx
import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ComputerDemo = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/computer.glb');
  
  const txt = useTexture(props.texture ? props.texture : '/textures/project/project1.png');

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        {/* The Monitor Screen */}
        <mesh
          name="monitor-screen"
          // Removed useless castShadow / receiveShadow
          geometry={nodes['monitor-screen'].geometry}
          material={nodes['monitor-screen'].material}
          position={[0.127, 1.831, 0.511]}
          rotation={[1.6, 3.12, -0.05]}
          scale={[0.661, 0.608, 0.401]}
        >
          <meshBasicMaterial map={txt} />
        </mesh>

        {/* Removed the 148 empty Screen groups that were bloating the React Tree! */}
        <group
          name="RootNode"
          position={[0, 1.093, 0]}
          rotation={[-Math.PI / 2, 0, -0.033]}
          scale={0.045}
        >
          {/* Kept only the actual geometry groups */}
          <group
            name="Tower-light-007"
            position={[16.089, -3.47, -14.495]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.963}
          />
          <group
            name="Tower-light-008"
            position={[15.155, -3.47, -14.495]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.963}
          />
        </group>

        {/* The main computer body parts */}
        <group
          name="Monitor-B-_computer_0"
          position={[0.266, 1.132, 0.051]}
          rotation={[0, -0.033, 0]}
          scale={[0.042, 0.045, 0.045]}
        >
          {/* Removed useless castShadow / receiveShadow from all parts */}
          <mesh geometry={nodes['Monitor-B-_computer_0_1'].geometry} material={materials.computer} />
          <mesh geometry={nodes['Monitor-B-_computer_0_2'].geometry} material={materials.base__0} />
          <mesh geometry={nodes['Monitor-B-_computer_0_3'].geometry} material={materials.Material_36} />
          <mesh geometry={nodes['Monitor-B-_computer_0_4'].geometry} material={materials.Material_35} />
          <mesh geometry={nodes['Monitor-B-_computer_0_5'].geometry} material={materials.Material_34} />
          <mesh geometry={nodes['Monitor-B-_computer_0_6'].geometry} material={materials.keys} />
          <mesh geometry={nodes['Monitor-B-_computer_0_7'].geometry} material={materials.keys2} />
          <mesh geometry={nodes['Monitor-B-_computer_0_8'].geometry} material={materials.Material_37} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/computer.glb');
export default ComputerDemo;