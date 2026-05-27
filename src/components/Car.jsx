// Car.jsx
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Car = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/free_cyberpunk_hovercar.glb');
  const { actions } = useAnimations(animations, group);

  // OPTIMIZATION: Replaced GSAP with useFrame for buttery smooth, native WebGL continuous rotation
  useFrame((state, delta) => {
    if (group.current) {
      // delta ensures the rotation speed is consistent regardless of screen refresh rate
      group.current.rotation.y += delta * 0.5; 
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.208}>
          <group name="Root">
            {/* OPTIMIZATION: Removed all castShadow and receiveShadow from every mesh below */}
            <group position={[5.638, 0.672, 3.939]} rotation={[0.062, 0.041, -0.035]} scale={[0.896, 1.767, 0.799]}>
              <mesh geometry={nodes.Cube010_0.geometry} material={materials.white_light} />
            </group>
            <group position={[1.458, 14.952, 3.951]}>
              <mesh geometry={nodes.Cube005_0.geometry} material={materials.cdp_metal} />
            </group>
            <group position={[5.773, -2.749, 1.017]} rotation={[0, -0.349, -1.215]} scale={0.131}>
              <mesh geometry={nodes.Cylinder_0.geometry} material={materials.cdp_metal} />
            </group>
            <group position={[5.965, -3.927, 1.485]} rotation={[0, -0.349, -1.215]} scale={0.131}>
              <mesh geometry={nodes.Cylinder001_0.geometry} material={materials.cdp_body} />
              <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.gloss} />
              <mesh geometry={nodes.Cylinder001_2.geometry} material={materials.white_light} />
              <mesh geometry={nodes.Cylinder001_3.geometry} material={materials.cdp_plastic} />
              <group position={[21.97, -12.672, -2.085]} rotation={[0.001, -0.001, -1.773]} scale={6.122}>
                <mesh geometry={nodes.Cylinder005_0.geometry} material={materials.cdp_metal} morphTargetDictionary={nodes.Cylinder005_0.morphTargetDictionary} morphTargetInfluences={nodes.Cylinder005_0.morphTargetInfluences} />
              </group>
            </group>
            <group position={[5.773, -2.749, 1.017]} rotation={[0, -0.349, 0.094]} scale={0.131}>
              <mesh geometry={nodes.Cylinder002_0.geometry} material={materials.cdp_metal} />
            </group>
            <group position={[4.836, -0.934, 0.803]} rotation={[0, -Math.PI / 9, 0.053]} scale={0.801}>
              <mesh geometry={nodes.Cylinder003_0.geometry} material={materials.cdp_metal} morphTargetDictionary={nodes.Cylinder003_0.morphTargetDictionary} morphTargetInfluences={nodes.Cylinder003_0.morphTargetInfluences} />
            </group>
            <group position={[2.514, -10.75, 1.388]} rotation={[-1.8, 1.145, 1.513]} scale={0.175}>
              <mesh geometry={nodes.Cylinder006_0.geometry} material={materials.cdp_body} />
              <mesh geometry={nodes.Cylinder006_1.geometry} material={materials.gloss} />
              <mesh geometry={nodes.Cylinder006_2.geometry} material={materials.cdp_plastic} />
              <mesh geometry={nodes.Cylinder006_3.geometry} material={materials.cdp_metal} />
              <mesh geometry={nodes.Cylinder006_4.geometry} material={materials.white_light} />
            </group>
            <group position={[2.413, -10.795, 1.399]} rotation={[1.342, -1.145, -1.811]} scale={0.175}>
              <mesh geometry={nodes.Cylinder007_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group>
              <mesh geometry={nodes.car011_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group>
              <mesh geometry={nodes.car002_0.geometry} material={materials.cdp_body} />
            </group>
            <group>
              <mesh geometry={nodes.car004_0.geometry} material={materials.white_light} />
            </group>
            <group position={[4.637, -8.238, 0]}>
              <mesh geometry={nodes.Plane006_0.geometry} material={materials.cdp_metal} />
            </group>
            <group position={[4.637, -8.238, 0]}>
              <mesh geometry={nodes.Plane001_0.geometry} material={materials.cdp_metal} />
            </group>
            <group position={[4.637, -8.238, -0.153]}>
              <mesh geometry={nodes.Plane003_0.geometry} material={materials.cdp_metal} />
            </group>
            <group position={[5.289, 4.289, 1.612]} rotation={[-0.873, 0, 0]}>
              <mesh geometry={nodes.Cylinder012_0.geometry} material={materials.cdp_metal} />
              <group position={[0, 1.635, -0.547]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.Cylinder004_0.geometry} material={materials.cdp_metal} />
                <mesh geometry={nodes.Cylinder004_1.geometry} material={materials.white_light} />
                <group position={[0.001, 2.419, -0.027]} rotation={[-1.584, -1.549, -1.584]} scale={[1.266, 1, 1]}>
                  <mesh geometry={nodes.Torus000_0.geometry} material={materials.cdp_plastic} />
                  <mesh geometry={nodes.Torus000_1.geometry} material={materials.cdp_metal} />
                </group>
              </group>
            </group>
            <group position={[1.979, 0, 0]}>
              <mesh geometry={nodes.car014_0.geometry} material={materials.cdp_metal} />
              <mesh geometry={nodes.car014_1.geometry} material={materials.white_light} />
              <mesh geometry={nodes.car014_2.geometry} material={materials.cdp_plastic} />
            </group>
            <group position={[4.761, 11.355, 3.661]} rotation={[0.205, -0.172, 0.183]}>
              <mesh geometry={nodes.Cylinder017_0.geometry} material={materials.cdp_metal} />
              <group rotation={[0, 0.262, 0]}>
                <mesh geometry={nodes.Cylinder015_0.geometry} material={materials.cdp_metal} />
                <mesh geometry={nodes.Cylinder015_1.geometry} material={materials.cdp_body} />
                <mesh geometry={nodes.Cylinder015_2.geometry} material={materials.gloss} />
                <mesh geometry={nodes.Cylinder015_3.geometry} material={materials.white_light} />
              </group>
            </group>
            <group position={[3.821, 14.727, 4.705]} rotation={[-0.237, 0.99, 0.386]}>
              <mesh geometry={nodes.Cylinder018_0.geometry} material={materials.cdp_metal} />
              <group rotation={[0, -0.593, 0]}>
                <mesh geometry={nodes.Cylinder019_0.geometry} material={materials.cdp_metal} />
                <mesh geometry={nodes.Cylinder019_1.geometry} material={materials.cdp_body} />
                <mesh geometry={nodes.Cylinder019_2.geometry} material={materials.gloss} />
              </group>
            </group>
            <group>
              <mesh geometry={nodes.Cube002_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group position={[2.812, -6.537, 0.418]} rotation={[0, 0, -1.553]} scale={0.919}>
              <mesh geometry={nodes.Cube006_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group position={[2.634, -10.819, 1.921]} scale={[0.913, 1.028, 1.07]}>
              <mesh geometry={nodes.Plane004_0.geometry} material={materials.cdp_body} />
              <mesh geometry={nodes.Plane004_1.geometry} material={materials.gloss} />
              <mesh geometry={nodes.Plane004_2.geometry} material={materials.cdp_metal} />
              <mesh geometry={nodes.Plane004_3.geometry} material={materials.cdp_plastic} />
            </group>
            <group position={[5.965, -3.927, 1.485]} rotation={[0, -0.349, -1.215]} scale={0.131}>
              <mesh geometry={nodes.Cylinder023_0.geometry} material={materials.cdp_metal} />
            </group>
            <group>
              <mesh geometry={nodes.Cube000_0.geometry} material={materials.cdp_metal} />
            </group>
            <group position={[2.812, -6.537, 0.418]} rotation={[0, 0, -1.553]} scale={0.919}>
              <mesh geometry={nodes.Cube001_0.geometry} material={materials.cdp_metal} />
            </group>
            <group position={[1.458, 14.952, 3.951]} rotation={[0.066, 0, 0.005]} scale={[1.009, 1.09, 1.009]}>
              <mesh geometry={nodes.Cube007_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group>
              <mesh geometry={nodes.Cube008_0.geometry} material={materials.cdp_metal} />
            </group>
            <group>
              <mesh geometry={nodes.Cube009_0.geometry} material={materials.cdp_metal} />
            </group>
            <group>
              <mesh geometry={nodes.Cube013_0.geometry} material={materials.cdp_metal} />
            </group>
            <group position={[1.458, 14.952, 3.951]} rotation={[0.066, 0, 0.005]} scale={[1.009, 1.09, 1.009]}>
              <mesh geometry={nodes.Cube011_0.geometry} material={materials.thruster} />
            </group>
            <group>
              <mesh geometry={nodes.car_0.geometry} material={materials.cdp_metal} />
            </group>
            <group position={[0, -10.001, 1.024]} rotation={[-0.698, 0, 0]}>
              <mesh geometry={nodes.Cylinder009_0.geometry} material={materials.cdp_plastic} />
              <group position={[0, 1.435, -0.547]} rotation={[0, 1.571, 0]}>
                <mesh geometry={nodes.Cylinder010_0.geometry} material={materials.cdp_metal} />
                <group position={[0, 2.42, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[1.266, 1, 1]}>
                  <mesh geometry={nodes.Torus001_0.geometry} material={materials.cdp_plastic} />
                  <mesh geometry={nodes.Torus001_1.geometry} material={materials.cdp_metal} />
                </group>
              </group>
            </group>
            <group position={[0, -7.4, 1.587]} rotation={[2.197, 0, 0]} scale={0.644}>
              <mesh geometry={nodes.Cylinder011_0.geometry} material={materials.cdp_metal} morphTargetDictionary={nodes.Cylinder011_0.morphTargetDictionary} morphTargetInfluences={nodes.Cylinder011_0.morphTargetInfluences} />
            </group>
            <group>
              <mesh geometry={nodes.car015_0.geometry} material={materials.cdp_metal} />
            </group>
            <group>
              <mesh geometry={nodes.Cylinder016_0.geometry} material={materials.cdp_metal} />
            </group>
            <group>
              <mesh geometry={nodes.car016_0.geometry} material={materials.cdp_metal} />
            </group>
            <group>
              <mesh geometry={nodes.Cube003_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group>
              <mesh geometry={nodes.car013_0.geometry} material={materials.cdp_metal} />
            </group>
            <group>
              <mesh geometry={nodes.Plane_0.geometry} material={materials.cdp_metal} />
            </group>
            <group>
              <mesh geometry={nodes.Cube004_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group>
              <mesh geometry={nodes.car017_0.geometry} material={materials.white_light} />
            </group>
            <group>
              <mesh geometry={nodes.car001_0.geometry} material={materials.cdp_body} />
              <mesh geometry={nodes.car001_1.geometry} material={materials.gloss} />
            </group>
            <group>
              <mesh geometry={nodes.car006_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group position={[0, 6.49, 6.724]}>
              <mesh geometry={nodes.car018_0.geometry} material={materials.cdp_body} />
              <mesh geometry={nodes.car018_1.geometry} material={materials.gloss} />
            </group>
            <group>
              <mesh geometry={nodes.car005_0.geometry} material={materials.cdp_plastic} />
              <mesh geometry={nodes.car005_1.geometry} material={materials.cdp_metal} />
            </group>
            <group>
              <mesh geometry={nodes.car019_0.geometry} material={materials.cdp_body} />
              <mesh geometry={nodes.car019_1.geometry} material={materials.gloss} />
            </group>
            <group>
              <mesh geometry={nodes.car003_0.geometry} material={materials.cdp_metal} />
            </group>
            <group position={[0, -10.001, 1.024]} rotation={[-0.698, 0, 0]}>
              <mesh geometry={nodes.Cylinder020_0.geometry} material={materials.cdp_metal} />
            </group>
            <group>
              <mesh geometry={nodes.car009_0.geometry} material={materials.cdp_metal} />
            </group>
            <group position={[-1.979, 0, 0]}>
              <mesh geometry={nodes.car007_0.geometry} material={materials.cdp_metal} />
              <mesh geometry={nodes.car007_1.geometry} material={materials.white_light} />
              <mesh geometry={nodes.car007_2.geometry} material={materials.cdp_plastic} />
            </group>
            <group position={[-5.289, 4.289, 1.612]} rotation={[-0.873, 0, 0]}>
              <mesh geometry={nodes.Cylinder021_0.geometry} material={materials.cdp_metal} />
              <group position={[0.001, 1.641, -0.53]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.Cylinder022_0.geometry} material={materials.cdp_metal} />
                <mesh geometry={nodes.Cylinder022_1.geometry} material={materials.white_light} />
                <group position={[0.008, -0.001, -2.419]} rotation={[1.549, 0, -0.008]}>
                  <mesh geometry={nodes.Torus002_0.geometry} material={materials.cdp_plastic} />
                  <mesh geometry={nodes.Torus002_1.geometry} material={materials.cdp_metal} />
                </group>
              </group>
            </group>
            <group position={[-2.634, -10.819, 1.921]} rotation={[-Math.PI, 0, 0]}>
              <mesh geometry={nodes.Plane002_0.geometry} material={materials.cdp_body} />
              <mesh geometry={nodes.Plane002_1.geometry} material={materials.gloss} />
              <mesh geometry={nodes.Plane002_2.geometry} material={materials.cdp_metal} />
              <mesh geometry={nodes.Plane002_3.geometry} material={materials.cdp_plastic} />
            </group>
            <group position={[-2.514, -10.75, 1.388]} rotation={[1.342, 1.145, 1.513]}>
              <mesh geometry={nodes.Cylinder024_0.geometry} material={materials.cdp_body} />
              <mesh geometry={nodes.Cylinder024_1.geometry} material={materials.gloss} />
              <mesh geometry={nodes.Cylinder024_2.geometry} material={materials.cdp_plastic} />
              <mesh geometry={nodes.Cylinder024_3.geometry} material={materials.cdp_metal} />
              <mesh geometry={nodes.Cylinder024_4.geometry} material={materials.white_light} />
            </group>
            <group position={[-4.836, -0.934, 0.803]} rotation={[Math.PI, -Math.PI / 9, 0.053]}>
              <mesh geometry={nodes.Cylinder025_0.geometry} material={materials.cdp_metal} morphTargetDictionary={nodes.Cylinder025_0.morphTargetDictionary} morphTargetInfluences={nodes.Cylinder025_0.morphTargetInfluences} />
            </group>
            <group position={[-5.965, -3.927, 1.485]} rotation={[3.142, -0.349, -1.215]}>
              <mesh geometry={nodes.Cylinder026_0.geometry} material={materials.cdp_body} />
              <mesh geometry={nodes.Cylinder026_1.geometry} material={materials.gloss} />
              <mesh geometry={nodes.Cylinder026_2.geometry} material={materials.white_light} />
              <mesh geometry={nodes.Cylinder026_3.geometry} material={materials.cdp_plastic} />
              <mesh geometry={nodes.Cylinder026_4.geometry} material={materials.cdp_metal} />
              <group position={[-2.875, 1.659, 0.273]} rotation={[0.001, -0.001, -1.773]}>
                <mesh geometry={nodes.Cylinder027_0.geometry} material={materials.cdp_metal} morphTargetDictionary={nodes.Cylinder027_0.morphTargetDictionary} morphTargetInfluences={nodes.Cylinder027_0.morphTargetInfluences} />
              </group>
            </group>
            <group position={[-5.773, -2.749, 1.017]} rotation={[3.142, -0.349, -1.215]}>
              <mesh geometry={nodes.Cylinder028_0.geometry} material={materials.cdp_metal} />
            </group>
            <group position={[-4.761, 11.355, 3.661]} rotation={[-2.984, 0.086, 0.181]}>
              <mesh geometry={nodes.Cylinder014_0.geometry} material={materials.cdp_metal} />
              <mesh geometry={nodes.Cylinder014_1.geometry} material={materials.cdp_body} />
              <mesh geometry={nodes.Cylinder014_2.geometry} material={materials.gloss} />
              <mesh geometry={nodes.Cylinder014_3.geometry} material={materials.white_light} />
            </group>
            <group position={[-3.821, 14.727, 4.705]} rotation={[3.137, 0.421, 0.228]}>
              <mesh geometry={nodes.Cylinder013_0.geometry} material={materials.cdp_metal} />
              <mesh geometry={nodes.Cylinder013_1.geometry} material={materials.cdp_body} />
              <mesh geometry={nodes.Cylinder013_2.geometry} material={materials.gloss} />
            </group>
            <group>
              <mesh geometry={nodes.Plane005_0.geometry} material={materials['Plane.005_0']} />
            </group>
            <group>
              <mesh geometry={nodes.car008_0.geometry} material={materials.thruster} morphTargetDictionary={nodes.car008_0.morphTargetDictionary} morphTargetInfluences={nodes.car008_0.morphTargetInfluences} />
            </group>
            <group position={[8.057, -19.92, 1.196]} scale={0}>
              <mesh geometry={nodes.Plane007_0.geometry} material={materials.thruster} />
            </group>
            <group position={[-9.164, -15.834, 1.196]} scale={0}>
              <mesh geometry={nodes.Plane008_0.geometry} material={materials.thruster} />
            </group>
            <group position={[-2.505, -25.327, -1.805]} scale={0}>
              <mesh geometry={nodes.Plane009_0.geometry} material={materials.thruster} />
            </group>
            <group position={[4.268, -20.196, 1.196]} scale={0}>
              <mesh geometry={nodes.Plane010_0.geometry} material={materials.thruster} />
            </group>
            <group position={[-4.457, -30.773, 6.362]} scale={0}>
              <mesh geometry={nodes.Plane011_0.geometry} material={materials.thruster} />
            </group>
            <group position={[-2.505, -5.961, 10.229]} scale={0}>
              <mesh geometry={nodes.Plane012_0.geometry} material={materials.thruster} />
            </group>
            <group position={[0.709, 8.7, 5.385]} scale={[0.561, 1.011, 0.561]}>
              <mesh geometry={nodes.Plane013_0.geometry} material={materials.thruster} />
            </group>
            <group position={[0.11, 8.076, 4.462]}>
              <mesh geometry={nodes.Plane014_0.geometry} material={materials.thruster} />
            </group>
            <group position={[1.494, 8.824, 4.785]} scale={[0.561, 1.011, 0.561]}>
              <mesh geometry={nodes.Plane015_0.geometry} material={materials.thruster} />
            </group>
            <group position={[-1.321, 6.89, 4.462]} scale={[0.561, 1.011, 0.561]}>
              <mesh geometry={nodes.Plane016_0.geometry} material={materials.thruster} />
            </group>
            <group position={[-0.951, 10.143, 4.462]} scale={[0.561, 1.011, 0.561]}>
              <mesh geometry={nodes.Plane017_0.geometry} material={materials.thruster} />
            </group>
            <group position={[-0.582, 6.869, 4.462]} scale={[0.561, 1.011, 0.561]}>
              <mesh geometry={nodes.Plane018_0.geometry} material={materials.thruster} />
            </group>
            <group position={[-0.582, -24.914, 7.175]} scale={0}>
              <mesh geometry={nodes.Plane019_0.geometry} material={materials.thruster} />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/free_cyberpunk_hovercar.glb');
export default Car;