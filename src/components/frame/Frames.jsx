import * as THREE from "three";
import {useEffect, useRef} from "react";
import {useLocation, useRoute} from "wouter";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";
import {Frame} from "./Frame.jsx";

const GOLDENRATIO = 1.61803398875

export function Frames({
                           images, q = new THREE.Quaternion(), p = new THREE.Vector3()
                       }) {
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
            {images.map((props, index) => <Frame key={props.url} index={index} {...props} />/* prettier-ignore */)}
        </group>
    )
}