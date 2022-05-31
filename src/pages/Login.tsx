import React from 'react'
import { Content, OrangeText } from '../assets/Common.style'
import { ImgST } from '../assets/Img.style'
import { ButtonVars, ImgVars } from '../assets/Vars'
import LoginForm from '../containers/LoginForm'

const Login = () => {
  return (
    <Content>
        <div>
            <h1>Welcome <OrangeText>back!</OrangeText></h1>
            <h6>Thank you for coming back. Hope you have a good day and inspire others.</h6>
        </div>
        <LoginForm/>
    </Content>
  )
}

export default Login