import React from 'react'
import styled from 'styled-components'
import { ButtonST } from '../assets/Button.style'
import { InputST } from '../assets/Input.style'
import { ButtonVars } from '../assets/Vars'

const RegisterForm = () => {
  return (
    <Form>
        <div>
          <Label htmlFor="email"><p>Email</p></Label>
          <InputST width='420px' name='email' />
        </div>
        <div>
          <div>
            <div>
              <Label htmlFor="firstname"><p>First Name</p></Label>
              <InputST width='170px' name='firstname' />
            </div>
            <div>
              <Label htmlFor="lastname"><p>Last Name</p></Label>
              <InputST width='170px' name='lastname' />
            </div>
          </div>
        </div>
        <div>
          <Label htmlFor="pswd"><p>Password</p></Label>
          <InputST width='420px' name='pswd' />
        </div>
        <div>
          <Label htmlFor="pswdConf"><p>Confirm Password</p></Label>
          <InputST width='420px' name='pswdConf' />
        </div>
        <div style={{"marginTop": "16px"}}>
          <ButtonST content='Sign up' width='420px' style={ButtonVars.darkorange}/>
        </div>
        <div style={{"marginTop": "18px"}}>
          <div>
            <p>
              Already have an account?
            </p>
            <p style={{"color": `${ButtonVars.lightorange.bg}`}}>
              Sign in!
            </p>
          </div>
        </div>
    </Form>
  )
}

const Form = styled.form`
  margin: 20px 10px;
  & div{
    margin-top: 8px;
    & div {
      display: flex;
      width: 100%;
      flex-direction: row;
      gap: 16px;
      justify-content: space-between;
      & div{
        margin: 0px;
        padding: 0px;
        width: 100%;
        display: block;
      }
    }
  }
`

const Label = styled.label`
  font-size: 12px;
  line-height: 14px;
  & p:nth-child(1){
    margin: 6px 0px;
    width: 25%;
  }
`

export default RegisterForm