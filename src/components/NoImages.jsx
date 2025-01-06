import { Canvas} from '@react-three/fiber'
import {Environment, CameraControls} from '@react-three/drei'
import ShowRoom from "./three/ShowRoom.jsx";
import Stars from "./Stars.jsx";
import VideoText from "./VideoText.jsx";

export const NoImages = () => (
    <Canvas dpr={[1, 1.5]} camera={{fov: 70, position: [0, 10, 20]}}>
        <VideoText position={[0, 8, 0]}/>
        <color attach="background" args={['#191920']}/>
        <Environment preset="city"/>
        <ShowRoom/>
        <CameraControls
            dollyToCursor={true}
            minDistance={5}
            maxDistance={23}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
        />
        {/*<ambientLight intensity={1} />*/}
        <directionalLight position={[0, 20, 0]} intensity={10}/>
        {/*<directionalLight position={[0, 40, 0]} intensity={10} />*/}
        <Stars/>
    </Canvas>
)
