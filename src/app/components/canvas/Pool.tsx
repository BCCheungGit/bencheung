"use client";
import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader, OBJLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/Addons.js';

const PoolModel = () => {
    const objRef = useRef<THREE.Object3D>();
    const obj = useLoader(GLTFLoader, 'pool.gltf');

    useFrame((state, delta) => {
      if (objRef.current) {
        objRef.current.rotation.y += delta * 0.3;
      }
    });
  
    return <primitive object={obj.scene} ref={objRef} scale={[0.12, 0.12, 0.12]} />;
};

const Pool = () => {
    return (
      <div className='w-1/2 sm:h-[400px] h-[300px]'>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={5} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <Suspense fallback={null}>
            <PoolModel />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    );
};

export default Pool;