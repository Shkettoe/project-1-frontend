import { ButtonST } from '../assets/Button.style'
import { ButtonVars } from '../assets/Vars'

const Test = () => {
    return (
        <div>
            <div><ButtonST height='200px' content='button' style={ButtonVars.white} /></div>
            <div><ButtonST height='200px' content='button' style={ButtonVars.white} /></div>
            <div><ButtonST height='200px' content='button' style={ButtonVars.white} /></div>
            <div><ButtonST height='200px' content='button' style={ButtonVars.white} /></div>
            <div><ButtonST height='200px' content='button' style={ButtonVars.white} /></div>
        </div>
    )
}

export default Test