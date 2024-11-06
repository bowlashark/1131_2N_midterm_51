import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage_51 from './pages/HomePage_51'
import BlogStaticPage_51 from './pages/BlogStaticPage_51'
import BlogNodePage_51 from './pages/BlogNodePage_51'
import BlogSupaPage_51 from './pages/BlogSupaPage_51'
import BlogSupaPage2_51 from './pages/BlogSupaPage2_51'

import MidP1Page_51 from './pages/mid_51/P1Page_51'
import MidP2Page_51 from './pages/mid_51/P2Page_51'
import MidP3Page_51 from './pages/mid_51/P3Page_51'

const App_51 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_51 />} />
        <Route path='/static_51' element={<BlogStaticPage_51 />} />
        <Route path='/node_51' element={<BlogNodePage_51 />} />
        <Route path='/supa_51' element={<BlogSupaPage_51 />} />
        <Route path='/supa2_51' element={<BlogSupaPage2_51 />} />
      </Routes>
      <Routes>
        <Route path='/mid_51/p1_51' element={<MidP1Page_51 />} />
        <Route path='/mid_51/p2_51' element={<MidP2Page_51 />} />
        <Route path='/mid_51/p3_51' element={<MidP3Page_51 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App_51
