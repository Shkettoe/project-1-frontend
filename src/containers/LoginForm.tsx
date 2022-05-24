import { ButtonST } from '../assets/Button.style'
import { Form, InputST, Label } from '../assets/FormElements.style'
import { ButtonVars } from '../assets/Vars'

const LoginForm = () => {
  return (
    <Form>
        <div>
          <Label htmlFor="email"><p>Email</p></Label>
          <InputST width='420px' name='email' />
        </div>
        <div>
          <Label htmlFor="pswd"><p>Password</p></Label>
          <InputST width='420px' name='pswd' />
        </div>
        <div style={{"marginTop": "16px"}}>
          <ButtonST content='Login' width='420px' style={ButtonVars.white2}/>
        </div>
        <div style={{"marginTop": "18px"}}>
          <div>
            <p>
              Don't have an account?
            </p>
            <p style={{"color": `${ButtonVars.lightorange.bg}`}}>
              Sign up!
            </p>
          </div>
        </div>
    </Form>
  )
}

export default LoginForm