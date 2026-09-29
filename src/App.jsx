import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About.jsx'
import Error404 from './pages/Error404.jsx'
import Home from './pages/Home.jsx'
import Lodging from './pages/Lodging.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
