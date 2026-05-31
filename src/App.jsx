import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import Community from './pages/Community'
import Draft from './pages/Draft'
import Login from './pages/Login'
import StudentZone from './pages/StudentZone'
import NotFound from './pages/not-found'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='features' element={<Features />} />
        <Route path='community' element={<Community />} />
        <Route path='draft' element={<Draft />} />

        {/* NEW */}
        <Route path='login' element={<Login />} />
        <Route path='student-zone' element={<StudentZone />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App