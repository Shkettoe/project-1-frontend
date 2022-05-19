import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './layouts/Footer'
import { ButtonVars, ImgVars } from './assets/Vars'
import { ButtonST } from './assets/Button.style'
import { InputST } from './assets/Input.style'
import { ImgST } from './assets/Img.style'
const img = require('./assets/images/default.png')

const App = () => {
  return (
    <div className='App'>
        <ButtonST content='text' width='81px' style={ButtonVars.white}/>
        <InputST width='200px' />
        <ImgST url={img} width={ImgVars.small} />
        <Routes>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App