import { NavLink, useLocation } from 'react-router-dom'
import { ButtonST } from '../assets/Button.style'
import { ImgST } from '../assets/Img.style'
import { ButtonVars, ImgVars } from '../assets/Vars'
const img = require('../assets/images/default.png')
const logo = require('../assets/images/Logo.png')

const NavBar = () => {
  const location = useLocation().pathname

  const authBtns = () =>
  <div style={{"display": "flex"}}>
    <NavLink to={'/home'}><ButtonST content='Home' style={ButtonVars.head} /></NavLink>
    <NavLink to={'/settings'}><ButtonST content='Settings' style={ButtonVars.head} /></NavLink>
    <NavLink to={'/login'}><ButtonST content='Logout' style={ButtonVars.head} /></NavLink>
    <NavLink style={{"display" : "flex", "alignItems": "center"}} to={'/home'}><ImgST url={img} width={ImgVars.medium} /></NavLink>
  </div>

  const btns = () => {
    switch(location){
      case "/register":
        return <NavLink to={'/login'}><ButtonST width='100px' height='30px' content='Login' style={ButtonVars.white}/></NavLink>
      case "/login":
        return <NavLink to={'/register'}><ButtonST width='100px' height='30px' content='Sign up' style={ButtonVars.darkorange}/></NavLink>
      default:
        return (
          <div style={{"display": "flex"}}>
            <NavLink to={'/register'}><ButtonST width='100px' height='30px' content='Sign up' style={ButtonVars.darkorange}/></NavLink>
            <NavLink to={'/login'}><ButtonST width='100px' height='30px' content='Login' style={ButtonVars.white}/></NavLink>
          </div>
        )  
    }
  }

  return (
    <nav className='navbar'>
      <NavLink to={'/home'}><ImgST url={logo} /></NavLink>
      {btns()}
    </nav>
  )
}

export default NavBar