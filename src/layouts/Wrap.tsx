import React from 'react'
import NavBar from './NavBar'

interface Props{
    children: JSX.Element | any
}

const Wrap = (props: Props) => {
  return (
    <>
        <NavBar/>
        {props.children}
    </>
  )
}

export default Wrap