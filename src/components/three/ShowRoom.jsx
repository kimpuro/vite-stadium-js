import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

export default function ShowRoom() {
    const gltf = useLoader(GLTFLoader, './models/yankee_stadium_new_york_gltf/scene.gltf')
    return (
        <>
            {/*<gridHelper args={[100, 100]}/>*/}
            {/*<axesHelper args={[100]}/>*/}
            <primitive object={gltf.scene}/>
        </>
    )
}