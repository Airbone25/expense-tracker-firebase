import React, { useContext } from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import TrackerPage from './pages/TrackerPage'
import { AuthContext } from './contexts/AuthContext'

function App() {
  const authContext = useContext(AuthContext)
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/auth' element={!authContext.token ? <AuthPage/> : <Navigate to={'/tracker'}/>}/>
          <Route path='/tracker' element={authContext.token ? <TrackerPage/> : <Navigate to={'/auth'}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App