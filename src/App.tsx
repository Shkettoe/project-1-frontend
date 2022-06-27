import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { setUser } from './interfaces/models/reducers/User.reducer'
import Loading from './layouts/Loading'
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
  const user = useSelector((state: any) => state?.user.value)


  useEffect(() => {
    (async () => {
      const { data } = await GetMe()
      if (data.id) {
        await dispatch(setUser(data))
      }
      setLoading(true)
    })()
  }, [dispatch])

  return (!loading ? (<Loading/>) :
    (<Wrap>
      <Routes>
        <Route path='*' element={<FrontPage />} />
        {!user ? (<>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </>) : <>
          <Route path='settings' element={<ProfilePage />}>
            <Route path='password' element={<ProfilePage />} />
            <Route path='avatar' element={<ProfilePage />} />
          </Route>
          <Route path='myquote' element={<PostPage />} />
          <Route path='myquote/:id' element={<PostPage />} />
          <Route path='profile' element={<UserPage />} />
          <Route path='profile/:id' element={<UserPage />} />
        </>}
      </Routes>
    </Wrap>)
  )
}

export default App