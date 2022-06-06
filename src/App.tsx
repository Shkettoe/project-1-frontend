import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Input from './components/Input'
import { setUser } from './interfaces/models/reducers/User.reducer'
import Wrap from './layouts/Wrap'
import FrontPage from './pages/FrontPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Test from './pages/Test'
import { GetMe } from './services/Me.service'

const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    (async() => {
      const {data} = await GetMe()
      dispatch(setUser(data))
    })()
  },[])
  
  return (
    <Wrap>
      {/* <div>
        <p>
          <ButtonST content='text' width='81px' style={ButtonVars.lightorange}/>
          <InputST width='200px' />
      </p>
      </div> */}
      <Routes>
        <Route path='' element={<FrontPage/>}/>
        <Route path='home' element={<FrontPage/>}/>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login/>} />
      </Routes>
    </Wrap>
  )
}

export default App