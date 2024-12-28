import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'

const pexel = (id) => `./images/${id}.png`
const images = [
    // 왼쪽
    { position: [7, 1, 3], rotation: [0, -Math.PI / 4, 0], url: pexel(1) },
    { position: [8, 1, -2], rotation: [0, -Math.PI / 4, 0], url: pexel(2) },

    // 오른쪽
    { position: [-6, 1, 2], rotation: [0, 0, 0], url: pexel(3) },
    { position: [-2, 1, -6], rotation: [0, 0, 0], url: pexel(4) }
]

createRoot(document.getElementById('root')).render(<App images={images} />)
