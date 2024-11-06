import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post" element={<Single />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router >
  )
}

export default App
