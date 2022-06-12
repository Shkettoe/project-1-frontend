import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { setUser } from './interfaces/models/reducers/User.reducer'
import Wrap from './layouts/Wrap'
import FrontPage from './pages/FrontPage'
import Login from './pages/Login'
import ProfilePage from './pages/ProfilePage'
import Register from './pages/Register'
import { GetMe } from './services/Me.service'

const App = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    (async() => {
      const {data} = await GetMe()
      await dispatch(setUser(data))
      setLoading(true)
    })()
  },[dispatch])
  
  return (!loading ? (<div></div>) :
    (<Wrap>
      {/* <div>
        <p>
          <ButtonST content='text' width='81px' style={ButtonVars.lightorange}/>
          <InputST width='200px' />
      </p>
      </div> */}
      <Routes>
        <Route path='' element={<FrontPage/>}/>
        <Route path='home' element={<FrontPage/>}/>
        <Route path='settings' element={<ProfilePage/>}/>
        <Route path='settings/password' element={<ProfilePage/>}/>
        <Route path='settings/avatar' element={<ProfilePage/>}/>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login/>} />
      </Routes>
    </Wrap>)
  )
}

export default App