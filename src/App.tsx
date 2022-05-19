import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './layouts/Footer'
import { ButtonVars } from './assets/Vars'
import { ButtonST } from './assets/Button.style'
import { InputST } from './assets/Input.style'

const App = () => {
  return (
    <div className='App'>
        <ButtonST content='text' width='81px' style={ButtonVars.white}/>
        <InputST width='200px' />
        <Routes>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App