import styled from 'styled-components'
import { Content, OrangeText } from '../assets/Common.style'
import { ImgST } from '../assets/Img.style'
import { ImgVars, ButtonVars } from '../assets/Vars'
import RegisterForm from '../containers/RegisterForm'
const img = require('../assets/images/default.png')

const Register = () => {
  return (
    <Content>
        <div>
            <h1>What is your <OrangeText>name?</OrangeText></h1>
            <h6>Your name wil appear on quotes and your public profile.</h6>
        </div>
        <ImgST width={ImgVars.large} url={img}/>
        <RegisterForm/>
    </Content>
  )
}

export default Register