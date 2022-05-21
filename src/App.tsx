import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './layouts/Footer'
import { ButtonVars, ImgVars } from './assets/Vars'
import { ButtonST } from './assets/Button.style'
import { InputST } from './assets/Input.style'
import { ImgST } from './assets/Img.style'
import NavBar from './layouts/NavBar'
import Wrap from './layouts/Wrap'
const img = require('./assets/images/default.png')

const App = () => {
  const location = useLocation()
  return (
    <Wrap>
        <ButtonST content='text' width='81px' style={ButtonVars.head2}/>
        <InputST width='200px' />
        <ImgST url={img} width={ImgVars.small} />
        <div>you are here {location.pathname}</div>
        <Routes>
          <Route path='/register'/>
          <Route path='/login'/>
        </Routes>
        <Footer/>
    </Wrap>
  )
}

export default App