import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {useCursor, MeshReflectorMaterial, Image, Text, Environment, CameraControls} from '@react-three/drei'
import {useRoute, useLocation, Route} from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'
import ShowRoom from "./components/three/ShowRoom.jsx";
import Stars from "./components/Stars.jsx";
import VideoText from "./components/VideoText.jsx";
import {NoImages} from "./components/NoImages.jsx";

const GOLDENRATIO = 1.61803398875

export const App = ({ images }) => (
    <>
            <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [-4, 30, 80] }}>
                <VideoText position={[0, 8, 0]} />
                <color attach="background" args={['#191920']} />
                {/*<fog attach="fog" args={['#191920', 0, 15]} />*/}
                <group position={[0, -0.5, 0]}>
                    <Frames images={images} />
                </group>
                <Environment preset="city" />
                <ShowRoom />
                {/*<CameraControls />*/}
                {/*<ambientLight intensity={1} />*/}
                <directionalLight position={[0, 20, 0]} intensity={10} />
                <Stars />
            </Canvas>
    </>
)

function Frames({
images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
    const ref = useRef()
    const clicked = useRef()
    const [, params] = useRoute('/item/:id')
    const [, setLocation] = useLocation()
    useEffect(() => {
        clicked.current = ref.current.getObjectByName(params?.id)
        if (clicked.current) {
            clicked.current.parent.updateWorldMatrix(true, true)
            clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
            clicked.current.parent.getWorldQuaternion(q)
        } else {
            p.set(-5, 8, 13)
            q.set(-0.2, -0.1, 0, 1)
        }
    })
    useFrame((state, dt) => {
        easing.damp3(state.camera.position, p, 0.6, dt)
        easing.dampQ(state.camera.quaternion, q, 0.6, dt)
    })
    return (
        <group
            ref={ref}
            onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
            onPointerMissed={() => setLocation('/')}>
            {images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
        </group>
    )
}

function Frame({ url, c = new THREE.Color(), ...props }) {
    const image = useRef()
    const frame = useRef()
    const [, params] = useRoute('/item/:id')
    const [hovered, hover] = useState(false)
    // const [rnd] = useState(() => Math.random()) // 이미지 fade 효과를 위한 상태
    const name = getUuid(url)
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
                <boxGeometry />
                <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
                <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
                    <boxGeometry />
                    <meshBasicMaterial toneMapped={false} fog={false} />
                </mesh>
                <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
            </mesh>
            <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.025}>
                {name.split('-').join(' ')}
            </Text>
        </group>
    )
}
