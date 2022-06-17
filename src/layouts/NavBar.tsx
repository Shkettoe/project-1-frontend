import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonST } from '../assets/Button.style'
import { ImgST } from '../assets/Img.style'
import { ButtonVars, ImgVars } from '../assets/Vars'
import { Logout } from '../helpers/Logout.helper'
import { unsetUser } from '../interfaces/models/reducers/User.reducer'
import plus from '../assets/icons/whiteplus.svg'
import { useEffect, useRef, useState } from 'react'
const logo = require('../assets/images/Logo.png')
const whitelogo = require('../assets/images/WhiteLogo.png')
const x = require('../assets/icons/icon-x.png')

const NavBar = () => {
  const location = useLocation().pathname
  const user = useSelector((state: any) => state?.user.value)
  const dispatch = useDispatch()
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    setMenu(false)
  }, [location])


  const authBtns = () =>
    <AnchorContainer className={menu ? "menu" : ""}>
      <div style={menu ? {"height": "413px"} : {"gap": "32px"}}>
        <img onClick={() => setMenu(false)} src={x} alt="x" className="h x" />
        <NavLink to={'/home'}>
          Home <p className='vector'>&gt;</p>
        </NavLink>
        <NavLink to={'/settings'}>
          Settings <p className='vector'>&gt;</p>
        </NavLink>
        <NavLink to={'/'} onClick={() => { Logout(); dispatch(unsetUser()) }}>
          Logout <p className='vector'>&gt;</p>
        </NavLink>
        <NavLink className="profile" style={{ "display": "flex", "alignItems": "center", "marginRight": "24px" }} to={'/profile'}>
          <ImgST url={user.avatar} width={ImgVars.medium} /><p className='h'>{user.first_name} {user.last_name}</p>
        </NavLink>
        <NavLink className={"plus"} to={''}><img src={plus} alt="plus" /></NavLink>
      </div>
    </AnchorContainer>

  const btns = () => {
    switch (location) {
      case "/register":
        return (<AnchorContainer className={menu ? "menu" : ""}>
          <div>
            <img onClick={() => setMenu(false)} src={x} alt="x" className="h x" />
            {menu && <NavLink to={'/home'}>
              Home <p className='vector'>&gt;</p>
            </NavLink>}
            <NavLink to={'/login'}><ButtonST width='100px' height='30px' content='Login' style={ButtonVars.white} /></NavLink>
          </div>
        </AnchorContainer>)
      case "/login":
        return (<AnchorContainer className={menu ? "menu" : ""}>
          <div>
            <img onClick={() => setMenu(false)} src={x} alt="x" className="h x" />
            {menu && <NavLink to={'/home'}>
              Home <p className='vector'>&gt;</p>
            </NavLink>}
            <NavLink to={'/register'}><ButtonST width='100px' height='30px' content='Sign up' style={ButtonVars.darkorange} /></NavLink>
          </div>
        </AnchorContainer>
        )
      default:
        return (
          <AnchorContainer className={menu ? "menu" : ""}>
            <div>
              <img onClick={() => setMenu(false)} src={x} alt="x" className="h x" />
              {menu && <NavLink to={'/home'}>
                Home <p className='vector'>&gt;</p>
              </NavLink>}
              <NavLink to={'/register'}><ButtonST width='100px' height='30px' content='Sign up' style={ButtonVars.darkorange} /></NavLink>
              <NavLink to={'/login'}><ButtonST width='100px' height='30px' content='Login' style={ButtonVars.white} /></NavLink>
            </div>
          </AnchorContainer>
        )
    }
  }

  return (
    <nav className='navbar'>
      <div>
        <div onClick={() => setMenu(true)} className={location === "/profile" ? "toggle-button white-toggle-button" : "toggle-button"}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className='logo'><NavLink to={'/'}><ImgST url={location === '/profile' ? whitelogo : logo} /></NavLink></div>
        {user ? authBtns() : btns()}
        {user && (<NavLink className="h" to={'/myquote'}><img src={plus} alt="plus" /></NavLink>)}
      </div>
    </nav>
  )
}

const AnchorContainer = styled.div`
  @media (max-width: 1080px){
    width: 100vw;
    display: none;
    & *{
      display: none;
    }
  }
  & div{
    display: flex;
    flex-direction: row;
  }

  & a {
    color: #DE8667;
  }
  width: auto !important;
`

export default NavBar