import {NoImages} from "./components/NoImages.jsx";
import useStore from "./store/useStore.js";
import HasImage from "./components/HasImage.jsx";

export default function App() {
    const fullScreen = useStore((state) => state.isActive)
    return fullScreen ? <NoImages/> : <HasImage/>
}
