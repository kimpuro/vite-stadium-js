import { createRoot } from 'react-dom/client'
import './index.css'
import App  from './App'
import FullScreenButton from "./components/FullScreenButton.jsx";


createRoot(document.getElementById('root')).render(<><App/><FullScreenButton/></>)
