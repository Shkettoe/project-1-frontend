import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { setUser } from './interfaces/models/reducers/User.reducer'
import Wrap from './layouts/Wrap'
import FrontPage from './pages/FrontPage'
import Login from './pages/Login'
import PostPage from './pages/PostPage'
import ProfilePage from './pages/ProfilePage'
import Register from './pages/Register'
import UserPage from './pages/UserPage'
import { GetMe } from './services/Me.service'

const App = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [auth, setAuth] = useState(false)

  useEffect(()=>{
    setAuth(false)
  },[])

  useEffect(() => {
    (async () => {
      const { data } = await GetMe()
      if (data.id) {
        await dispatch(setUser(data))
        setAuth(true)
      }
      setLoading(true)
    })()
  }, [dispatch])

  return (!loading ? (<div></div>) :
    (<Wrap>
      {/* <div>
        <p>
          <ButtonST content='text' width='81px' style={ButtonVars.lightorange}/>
          <InputST width='200px' />
      </p>
      </div> */}
      <Routes>
        <Route path='*' element={<FrontPage />} />
        <Route path='settings' element={<ProfilePage />}>
          <Route path='password' element={<ProfilePage />} />
          <Route path='avatar' element={<ProfilePage />} />
        </Route>
        <Route path='myquote' element={<PostPage />} />
        <Route path='myquote/:id' element={<PostPage />} />
        <Route path='profile' element={<UserPage />} />
        {!auth ? (<>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </>) : <></>}
      </Routes>
    </Wrap>)
  )
}

export default App