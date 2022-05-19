import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './layouts/Footer'
import { ButtonVars } from './assets/Vars'
import { ButtonST } from './assets/Button.style'

const App = () => {
  return (
    <div className='App'>
        <ButtonST content='text' color={ButtonVars.white}/>
        <Routes>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App