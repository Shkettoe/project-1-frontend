import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { OrangeText } from '../assets/Common.style'
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

const Profile = styled.div`
    margin-top: 80px;
    border: 1px solid #cde;
    padding: 32px;
    border-radius: 20px;
    width: 593px;
    max-height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    & .title{
        font-size: 35px;
    }
    & div a{
        text-decoration: none;
        padding: 32px;
        color: #111;
    }
`

export default ProfilePage