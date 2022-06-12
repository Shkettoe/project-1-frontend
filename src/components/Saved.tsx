import { ButtonST } from '../assets/Button.style'
import { ButtonVars } from '../assets/Vars'

const Saved = () => {
  return (
    <div>
        <p>Your settings are saved</p>
        <a href={'/'}><ButtonST style={ButtonVars.darkorange} content={"Close"}/></a>
    </div>
  )
}

export default Saved