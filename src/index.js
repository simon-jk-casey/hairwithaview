import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const containter = document.getElementById('root')
const root = createRoot(containter)
root.render(<App />)
registerServiceWorker()