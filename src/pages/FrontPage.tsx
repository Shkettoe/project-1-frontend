import pic from '../assets/images/default.png'
import { useSelector } from 'react-redux'
import LoggedOut, {LoggedIn} from '../containers/HomePage'
const img = require('../assets/images/qotd.png')

const FrontPage = () => {
    const user = useSelector((state: any) => state?.user.value)

    return (!user ? 
        <LoggedOut img={img} pic={pic}/> : <LoggedIn/>
    )
}

export default FrontPage