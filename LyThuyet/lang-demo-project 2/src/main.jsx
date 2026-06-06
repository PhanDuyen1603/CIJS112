import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StoreBoundary from './store/index.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StoreBoundary>
    <App />
  </StoreBoundary>,
)