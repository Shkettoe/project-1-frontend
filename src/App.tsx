import { Routes, Route } from 'react-router-dom'
import './App.css'
import { ButtonST } from './assets/Button.style'
import { ImgST } from './assets/Img.style'
import { InputST } from './assets/Input.style'
import { ButtonVars, ImgVars } from './assets/Vars'
import Wrap from './layouts/Wrap'
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
        <Route path='/home' element={<Test/>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' />
      </Routes>
    </Wrap>
  )
}

export default App