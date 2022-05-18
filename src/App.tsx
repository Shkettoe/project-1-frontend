import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import './App.css'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App