import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/about.jsx'
import Error404 from '../pages/error404.jsx'
import Home from '../pages/home.jsx'
import Lodging from '../pages/lodging.jsx'
import Layout from './layout.jsx'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="lodging/:id" element={<Lodging />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
