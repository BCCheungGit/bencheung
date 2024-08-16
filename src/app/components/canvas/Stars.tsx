"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

import * as random from "maath/random"
import { Group } from "three";
import { Instances, Instance } from "@react-three/drei";


interface StarsProps {
  [key: string]: any;
}

const Stars = (props: StarsProps) => {
  const ref = useRef(null);
  const [sphere] = useState<Float32Array>(() => random.inSphere(new Float32Array(3000), { radius: 1.2 }) as Float32Array);

  useFrame((state, delta) => {
    if (ref.current) {
      const currentRef = ref.current as Group;
      currentRef.rotation.x -= delta / 10;
      currentRef.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  return (
    <div className='w-full mt-20 h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;