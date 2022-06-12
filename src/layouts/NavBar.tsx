import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonST } from '../assets/Button.style'
import { ImgST } from '../assets/Img.style'
import { ButtonVars, ImgVars } from '../assets/Vars'
import { Logout } from '../helpers/Logout.helper'
import { unsetUser } from '../interfaces/models/reducers/User.reducer'
import plus from '../assets/icons/plus.svg'
const logo = require('../assets/images/Logo.png')

const NavBar = () => {
  const location = useLocation().pathname
  const user = useSelector((state: any) => state?.user.value)
  const dispatch = useDispatch()

  const authBtns = () =>
  <AnchorContainer>
    <div>
        <NavLink to={'/home'}><ButtonST content='Home' style={ButtonVars.head} /></NavLink>
        <NavLink to={'/settings'}><ButtonST content='Settings' style={ButtonVars.head} /></NavLink>
        <NavLink to={'/login'} onClick={() => {Logout(); dispatch(unsetUser())}}><ButtonST content='Logout' style={ButtonVars.head}/></NavLink>
        <NavLink style={{"display" : "flex", "alignItems": "center", "marginRight": "24px"}} to={'/home'}><ImgST url={user.avatar} width={ImgVars.medium} /></NavLink>
        <NavLink to={'/'}><ImgST url={plus} width={ImgVars.small}/></NavLink>
    </div>
  </AnchorContainer>

  const btns = () => {
    switch(location){
      case "/register":
        return (<AnchorContainer>
          <NavLink to={'/login'}><ButtonST width='100px' height='30px' content='Login' style={ButtonVars.white}/></NavLink>
        </AnchorContainer>)
      case "/login":
        return (<AnchorContainer>
            <NavLink to={'/register'}><ButtonST width='100px' height='30px' content='Sign up' style={ButtonVars.darkorange}/></NavLink>
          </AnchorContainer>
        )
      default:
        return (
          <AnchorContainer>
            <NavLink to={'/register'}><ButtonST width='100px' height='30px' content='Sign up' style={ButtonVars.darkorange}/></NavLink>
            <NavLink to={'/login'}><ButtonST width='100px' height='30px' content='Login' style={ButtonVars.white}/></NavLink>
          </AnchorContainer>
        )  
    }
  }

  return (
    <nav className='navbar'>
      <div>
        <div><NavLink to={'/'}><ImgST url={logo} /></NavLink></div>
        {user ? authBtns() : btns()}
      </div>
    </nav>
  )
}

const AnchorContainer = styled.div`
  & div{
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  width: auto !important;
`

export default NavBar