"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

import { MTLLoader } from 'three/examples/jsm/Addons.js';

const Model = () => {
    const objRef = useRef<THREE.Object3D>();
    const materials = useLoader(MTLLoader, '/pool/SwimmingPool.mtl');
    const obj = useLoader(OBJLoader, '/pool/SwimmingPool.obj', (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    });
    useFrame((state, delta) => {
      if (objRef.current) {
        objRef.current.rotation.y += delta * 0.3; // Rotate the model
      }
    });
  
    return <primitive object={obj} ref={objRef} scale={[0.1, 0.1, 0.1]} />;
  };

  const Pool = () => {
    return (
      <div className='w-full sm:h-[600px] h-[400px]'>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={10} />
          <pointLight position={[10, 10, 10]} />
          <Model />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    );
  };
  
  export default Pool;