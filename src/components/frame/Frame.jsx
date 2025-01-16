import * as THREE from "three";
import {useRef, useState} from "react";
import {useRoute} from "wouter";
import getUuid from "uuid-by-string";
import {Image, Text, useCursor} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";

const GOLDENRATIO = 1.61803398875
const ImageDescription = [
    '스마트티켓 안내',
    '티볼 체험 안내',
    '응원 플래그',
    '아구DAY',
]

export function Frame({url, index, c = new THREE.Color(), ...props}) {
    const image = useRef()
    const frame = useRef()
    const [, params] = useRoute('/item/:id')
    const [hovered, hover] = useState(false)
    // const [rnd] = useState(() => Math.random()) // 이미지 fade 효과를 위한 상태
    const name = getUuid(url)
    const description = ImageDescription[index]
    const isActive = params?.id === name
    useCursor(hovered)
    useFrame((state, dt) => {
        // image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2 // 이미지를 클릭한 이후에 이미지가 fade in 되는 효과
        easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
        easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
    })
    return (
        <group {...props}>
            <mesh
                name={name}
                onPointerOver={(e) => (e.stopPropagation(), hover(true))}
                onPointerOut={() => hover(false)}
                scale={[1, GOLDENRATIO, 0.05]}
                position={[0, GOLDENRATIO / 2, 0]}>
                <boxGeometry/>
                <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2}/>
                <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
                    <boxGeometry/>
                    <meshBasicMaterial toneMapped={false} fog={false}/>
                </mesh>
                <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url}/>
            </mesh>
            <Text maxWidth={0.5} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.05}>
                {description}
            </Text>
        </group>
    )
}