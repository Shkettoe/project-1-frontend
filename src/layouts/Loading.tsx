import React from 'react'
import { Content } from '../assets/Common.style'
import '../assets/Loading.css'

const Loading = () => {
  return (
    <Content>
        <div className="loading"></div>
        <p>Loading....</p>
    </Content>
  )
}

export default Loading