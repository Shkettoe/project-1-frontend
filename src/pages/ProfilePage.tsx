import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { OrangeText, Profile } from '../assets/Common.style'
import PasswordForm from '../containers/PasswordForm'
import PictureForm from '../containers/PictureForm'
import ProfileForm from '../containers/ProfileForm'

const ProfilePage = () => {
  const render = useLocation().pathname.split('/')[useLocation().pathname.split('/').length-1]

  const component = () => {
    switch(render){
      case "settings": return <ProfileForm/>
      case "password": return <PasswordForm/>
      case "avatar": return <PictureForm/>
    }
  }

  return (
    <Profile>
        <p className='title'>Profile <OrangeText>settings</OrangeText></p>
        {component()}
    </Profile>
  )
}

export default ProfilePage