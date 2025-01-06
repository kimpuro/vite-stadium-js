import { Canvas} from '@react-three/fiber'
import {Environment, CameraControls} from '@react-three/drei'
import ShowRoom from "./three/ShowRoom.jsx";
import Stars from "./Stars.jsx";
import VideoText from "./VideoText.jsx";

export const NoImages = () => (
    <Canvas dpr={[1, 1.5]} camera={{fov: 70, position: [0, 10, 20]}}>
        <VideoText position={[0, 8, 0]}/>
        <color attach="background" args={['#191920']}/>
        <group position={[0, -0.5, 0]}>
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
