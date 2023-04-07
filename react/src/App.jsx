import Home from '../src/pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Profile from '../src/pages/profile/Profile'


import React, { useContext } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
redirect
} from "react-router-dom"
import { AuthContext } from './context/AuthContxt'


const App = () => {

  const {user} = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={user? <Home /> : <Register/>} />
        <Route path= '/login' element={user? redirect('/') : <Login />} />
        <Route path='/register' element={user? redirect('/'):<Register />} />
        <Route path='/profile/:username' element={<Profile />} /> */}

        <Route path='/' element={user? <Home /> : <Register/>} />
        <Route path='/login' element={user? <Home/>: <Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:username' element={<Profile />} />
        
      </Routes>
    </BrowserRouter>

  )
}

export default App