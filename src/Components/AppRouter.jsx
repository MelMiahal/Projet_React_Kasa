import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/About.jsx'
import Error404 from '../pages/Error404.jsx'
import Home from '../pages/Home.jsx'
import Lodging from '../pages/Lodging.jsx'
import Layout from './Layout.jsx'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="lodging/:id" element={<Lodging />} />
          <Route path="404" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter