import {Canvas} from "@react-three/fiber";
import VideoText from "./VideoText.jsx";
import {Environment} from "@react-three/drei";
import ShowRoom from "./three/ShowRoom.jsx";
import Stars from "./Stars.jsx";
import {Frames} from "./frame/Frames.jsx";


export default function HasImage() {
    // height 750 width 1260
    const imageID = (id) => `./images/${id}.jpg`

    const images = [
        // 왼쪽
        {position: [-6, 1, 2], rotation: [0, 0, 0], url: imageID(1)},
        {position: [-2, 1, -6], rotation: [0, 0, 0], url: imageID(2)},

        // 오른쪽
        {position: [8, 1, -2], rotation: [0, -Math.PI / 4, 0], url: imageID(3)},
        {position: [7, 1, 3], rotation: [0, -Math.PI / 4, 0], url: imageID(4)}
    ]
    return (
        <>
            <Canvas dpr={[1, 1.5]} camera={{fov: 70, position: [-4, 30, 80]}}>
                <VideoText position={[0, 8, 0]}/>
                <color attach="background" args={['#191920']}/>
                {/*<fog attach="fog" args={['#191920', 0, 15]} />*/}
                <group position={[0, -0.5, 0]}>
                    <Frames images={images}/>
                </group>
                <Environment preset="city"/>
                <ShowRoom/>
                {/*<CameraControls />*/}
                <directionalLight position={[0, 20, 0]} intensity={10}/>
                <Stars/>
            </Canvas>
        </>
    )
}

