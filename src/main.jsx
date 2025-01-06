import { createRoot } from 'react-dom/client'
import './index.css'
import App  from './App'
import FullScreenButton from "./components/FullScreenButton.jsx";


// createRoot(document.getElementById('root')).render(<><NoImages/></>)
createRoot(document.getElementById('root')).render(<><App/><FullScreenButton/></>)
// createRoot(document.getElementById('root')).render(<><App images={images} /></>)
