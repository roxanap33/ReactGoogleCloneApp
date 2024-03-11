import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<SearchPage />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
