import { Routes, Route } from 'react-router-dom'
import './App.css'
import Input from './components/Input'
import Wrap from './layouts/Wrap'
import FrontPage from './pages/FrontPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Test from './pages/Test'

const App = () => {
  return (
    <Wrap>
      {/* <div>
        <p>
          <ButtonST content='text' width='81px' style={ButtonVars.lightorange}/>
          <InputST width='200px' />
      </p>
      </div> */}
      <Routes>
        <Route path={'/'} element={<FrontPage/>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Wrap>
  )
}

export default App