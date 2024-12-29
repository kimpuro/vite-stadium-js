import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {CameraControls, OrbitControls, RandomizedLight} from "@react-three/drei";
import * as THREE from "three";

export default function ShowRoom() {
    const gltf = useLoader(GLTFLoader, './models/yankee_stadium_new_york_gltf/scene.gltf')
    return (
        <>
            {/*<gridHelper args={[100, 100]}/>*/}
            {/*<axesHelper args={[100]}/>*/}
            {/*<ambientLight intensity={1}*/}
            {/*/>*/}
            {/*<directionalLight*/}
            {/*    position={[0, 100, 100]} // 빛의 위치*/}
            {/*    intensity={100} // 빛의 강도*/}
            {/*    // castShadow // 그림자 활성화*/}
            {/*    // shadow-camera-left={-1000} // 그림자 영역의 왼쪽 범위*/}
            {/*    // shadow-camera-right={1000} // 그림자 영역의 오른쪽 범위*/}
            {/*    // shadow-camera-top={1000} // 그림자 영역의 위쪽 범위*/}
            {/*    // shadow-camera-bottom={-1000} // 그림자 영역의 아래쪽 범위*/}
            {/*    // shadow-camera-near={0.5} // 그림자 카메라의 near 값*/}
            {/*    // shadow-camera-far={50} // 그림자 카메라의 far 값*/}
            {/*    // shadow-mapSize-width={1024} // 그림자 해상도 너비*/}
            {/*    // shadow-mapSize-height={1024} // 그림자 해상도 높이*/}
            {/*/>*/}
            <primitive object={gltf.scene}/>
        </>
    )
}