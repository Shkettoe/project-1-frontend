import styled from 'styled-components'
import { FormContainer } from '../assets/FormElements.style'
import { ImgST } from '../assets/Img.style'
import { ImgVars, ButtonVars } from '../assets/Vars'
import RegisterForm from '../containers/RegisterForm'
const img = require('../assets/images/default.png')

const Register = () => {
  return (
    <FormContainer>
        <div>
            <h1>What is your <span style={{"color": `${ButtonVars.darkorange.bg}`}}>name?</span></h1>
            <h6>Your name wil appear on quotes and your public profile.</h6>
        </div>
        <ImgST width={ImgVars.large} url={img}/>
        <RegisterForm/>
    </FormContainer>
  )
}

export default Register