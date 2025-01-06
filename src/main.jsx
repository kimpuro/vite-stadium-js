import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import FullScreenButton from "./components/FullScreenButton.jsx";
import {Suspense} from "react";
import LoadingButton from "./components/LoadingButton.jsx";


createRoot(document.getElementById('root')).render(<><Suspense fallback={<LoadingButton/>}><App/><FullScreenButton/></Suspense></>)
