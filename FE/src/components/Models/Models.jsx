import React, { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,CameraControls, PerspectiveCamera,useGLTF,useAnimations } from '@react-three/drei';
import gltfmodel from '../../../public/Characters/startingmodel.glb'
// import { useGLTF, useAnimations } from '@react-three/drei'
import { LoopOnce } from 'three';


export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(gltfmodel)
  const { actions } = useAnimations(animations, group)


  useEffect(() => {
    console.log(actions);
    if (actions) {
      const actionNames = Object.keys(actions);
      if (actionNames.length > 0) {
        const firstAnimationName = actionNames[0];
        const action = actions[firstAnimationName];
        // action.setLoop(LoopOnce);       // 애니메이션을 한 번만 실행
        // action.clampWhenFinished = true; // 애니메이션이 끝나면 마지막 상태로 고정
        action.play();
      }
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 10]} scale={0.012}>
          <skinnedMesh
            name="Ch03"
            geometry={nodes.Ch03.geometry}
            material={materials.Material}
            skeleton={nodes.Ch03.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(gltfmodel)




function Models() {
  return (
    <Canvas
      style={{ width: "100%", height: "60vh" }}
      camera={{ position: [5, 5, 5], fov: 30 }}> {/* 카메라 위치 수정 */}
    {/* <CameraControls minPolarAngle={1.5} maxPolarAngle={Math.PI / 7} /> */}
    <directionalLight
          position={[1, 1, 1]}
          castShadow
          intensity={2}
        ></directionalLight>
      <ambientLight intensity={1.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
        <Model/>
        <OrbitControls
          makeDefault
          minAzimuthAngle={3}
          maxAzimuthAngle={4.5}
          minPolarAngle={1}
          maxPolarAngle={2}
          enableZoom={false}
          enablePan={false}
          enableRotate={false} // 회전 비활성화
          zoomSpeed={1}
        />
    </Canvas>
  );
}

export default Models;
