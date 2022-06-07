import React from 'react'
import styled from 'styled-components'
import { Content, OrangeText } from '../assets/Common.style'
import ProfileForm from '../containers/ProfileForm'

const ProfilePage = () => {
  return (
    <Profile>
        <p className='title'>Profile <OrangeText>settings</OrangeText></p>
        <div>Change your profile settings</div>
        <ProfileForm/>
    </Profile>
  )
}

const Profile = styled.div`
    margin-top: 80px;
    border: 1px solid #cde;
    padding: 32px;
    border-radius: 20px;
    width: 593px;
    height: 440px;
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