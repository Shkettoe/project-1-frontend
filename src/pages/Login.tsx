import React from 'react'
import { FormContainer } from '../assets/FormElements.style'
import { ImgST } from '../assets/Img.style'
import { ButtonVars, ImgVars } from '../assets/Vars'
import LoginForm from '../containers/LoginForm'

const Login = () => {
  return (
    <FormContainer>
        <div>
            <h1>Welcome <span style={{"color": `${ButtonVars.darkorange.bg}`}}>back!</span></h1>
            <h6>Thank you for coming back. Hope you have a good day and inspire others.</h6>
        </div>
        <LoginForm/>
    </FormContainer>
  )
}

export default Login