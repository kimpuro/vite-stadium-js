import * as THREE from 'three'
import {useEffect, useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {useCursor, MeshReflectorMaterial, Image, Text, Environment, CameraControls, Html} from '@react-three/drei'
import {useRoute, useLocation, Route} from 'wouter'
import {easing} from 'maath'
import getUuid from 'uuid-by-string'
import ShowRoom from "./components/three/ShowRoom.jsx";
import Stars from "./components/Stars.jsx";
import VideoText from "./components/VideoText.jsx";
import {NoImages} from "./components/NoImages.jsx";
import useStore from "./store/useStore.js";
import HasImage from "./components/HasImage.jsx";

export default function App() {
    const fullScreen = useStore((state) => state.isActive)
    return fullScreen ? <NoImages/> : <HasImage/>
}
