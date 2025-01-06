import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {useCursor, MeshReflectorMaterial, Image, Text, Environment, CameraControls} from '@react-three/drei'
import ShowRoom from "./three/ShowRoom.jsx";
import Stars from "./Stars.jsx";
import VideoText from "./VideoText.jsx";

export const NoImages = () => (
    <Canvas dpr={[1, 1.5]} camera={{fov: 70, position: [0, 10, 20]}}>
        <VideoText position={[0, 8, 0]}/>
        <color attach="background" args={['#191920']}/>
        {/*<fog attach="fog" args={['#191920', 0, 15]} />*/}
        <group position={[0, -0.5, 0]}>
            {/*<mesh rotation={[-Math.PI / 2, 0, 0]}>*/}
            {/*    <planeGeometry args={[50, 50]} />*/}
            {/*    <MeshReflectorMaterial*/}
            {/*        blur={[300, 100]}*/}
            {/*        resolution={2048}*/}
            {/*        mixBlur={1}*/}
            {/*        mixStrength={80}*/}
            {/*        roughness={1}*/}
            {/*        depthScale={1.2}*/}
            {/*        minDepthThreshold={0.4}*/}
            {/*        maxDepthThreshold={1.4}*/}
            {/*        color="#050505"*/}
            {/*        metalness={0.5}*/}
            {/*    />*/}
            {/*</mesh>*/}
        </group>
        <Environment preset="city"/>
        <ShowRoom/>
        <CameraControls/>
        {/*<ambientLight intensity={1} />*/}
        <directionalLight position={[0, 20, 0]} intensity={10}/>
        {/*<directionalLight position={[0, 40, 0]} intensity={10} />*/}
        <Stars/>
    </Canvas>
)
