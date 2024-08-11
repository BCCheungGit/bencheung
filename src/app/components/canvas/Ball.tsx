"use client";

import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from '@react-three/drei';


interface BallProps {
    imgUrl: string;
}

const Ball: React.FC<BallProps> = (props) => {
    const [decal] = useTexture([props.imgUrl]);
    return (
        <Float speed={1.75} rotationIntensity={0.5} floatIntensity={2}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 0.05]} intensity={1} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal 
                    position={[0, 0, 1]}
                    rotation={[2* Math.PI, 0, 6.25]}
                    scale={1.1}
                    map={decal}
                />
            </mesh>

        </Float>
    )
}


const BallCanvas = ({icon}: {icon: string}) => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense>
                <OrbitControls 
                    enableZoom={false} 
                    enableRotate={true}
                    
                    rotateSpeed={0.2}/>
                <Ball imgUrl={icon} />
            </Suspense>
        </Canvas>
    )       
}


export default BallCanvas;