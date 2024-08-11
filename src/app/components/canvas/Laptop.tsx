"use client";
"use client";
import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader, OBJLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/Addons.js';

const LaptopModel = () => {
    const objRef = useRef<THREE.Object3D>();
    const obj = useLoader(GLTFLoader, 'laptop/laptop.gltf');

    // useFrame((state, delta) => {
    //   if (objRef.current) {
    //     objRef.current.rotation.y += delta * 0.3;
    //   }
    // });
  
    return <primitive object={obj.scene} ref={objRef} scale={[1.5, 1.5, 1.5]} position={[0, 0, 0]} rotation={[0.3, 1, 0]} />;
};

const Laptop = () => {
    return (
      <div className='w-full sm:h-[500px] h-[400px]'>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={5} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <Suspense fallback={null}>
            <LaptopModel />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    );
};

export default Laptop;