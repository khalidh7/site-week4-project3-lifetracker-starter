import './App.css'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ActivityPage from '../ActivityPage/ActivityPage'
import ExercisePage from '../ExercisePage/ExercisePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path="/excerciseDashbo" element={<ExercisePage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
