import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonST } from '../assets/Button.style'
import { ImgST } from '../assets/Img.style'
import { ButtonVars, ImgVars } from '../assets/Vars'
import { Logout } from '../helpers/Logout.helper'
import { unsetUser } from '../interfaces/models/reducers/User.reducer'
import plus from '../assets/icons/whiteplus.svg'
const logo = require('../assets/images/Logo.png')
const whitelogo = require('../assets/images/WhiteLogo.png')

const NavBar = () => {
  const location = useLocation().pathname
  const user = useSelector((state: any) => state?.user.value)
  const dispatch = useDispatch()

  const authBtns = () =>
  <AnchorContainer>
    <div>
        <NavLink to={'/home'}><ButtonST content='Home' style={location === "/profile" ? ButtonVars.head2 : ButtonVars.head} /></NavLink>
        <NavLink to={'/settings'}><ButtonST content='Settings' style={location === "/profile" ? ButtonVars.head2 : ButtonVars.head} /></NavLink>
        <a href={'/'} onClick={() => {Logout(); dispatch(unsetUser())}}><ButtonST content='Logout' style={location === "/profile" ? ButtonVars.head2 : ButtonVars.head}/></a>
        <NavLink style={{"display" : "flex", "alignItems": "center", "marginRight": "24px"}} to={'/profile'}><ImgST url={user.avatar} width={ImgVars.medium} /></NavLink>
        <NavLink to={'/myquote'}><img src={plus} alt="plus" /></NavLink>
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
        <div className='logo'><NavLink to={'/'}><ImgST url={location === '/profile' ? whitelogo : logo} /></NavLink></div>
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