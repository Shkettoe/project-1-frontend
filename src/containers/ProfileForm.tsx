import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ButtonST } from '../assets/Button.style'
import { Form, Label, InputST } from '../assets/FormElements.style'
import { ButtonVars } from '../assets/Vars'
import ErrorMsg from '../validation/ErrorMsg'

const ProfileForm = () => {
  return (
    <Form>
        <div>
          <Label htmlFor="email"><p>Email</p></Label>
          <InputST height='40px' width='529px' name='email' />
          <ErrorMsg content={''}/>
        </div>
        <div>
          <div>
            <div>
              <Label htmlFor="firstname"><p>First Name</p></Label>
              <InputST height='40px' width='224.5px' name='first_name' />
              <ErrorMsg content={''}/>
            </div>
            <div>
              <Label htmlFor="lastname"><p>Last Name</p></Label>
              <InputST height='40px' width='224.5px' name='last_name' />
              <ErrorMsg content={''}/>
            </div>
          </div>
          <div>
            <div>
              <Label htmlFor="firstname"><p>First Name</p></Label>
              <ButtonST content='Change password' height='40px' width='227.5px' style={ButtonVars.lightorange}/>
              <ErrorMsg content={''}/>
            </div>
            <div>
              <Label htmlFor="lastname"><p>Last Name</p></Label>
              <ButtonST content='Change profile picture' height='40px' width='227.5px' style={ButtonVars.darkorange}/>
              <ErrorMsg content={''}/>
            </div>
          </div>
        </div>
        <div style={{"marginTop": "16px"}}>
          <ButtonST content='Submit' width='107px' style={ButtonVars.darkorange}/>
          <NavLink to={'/'}>Cancel</NavLink>
        </div>
        <div style={{"marginTop": "18px"}}>
          <div>
          </div>
        </div>
    </Form>
  )
}

export default ProfileForm