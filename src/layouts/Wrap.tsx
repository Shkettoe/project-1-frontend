import React from 'react'
import NavBar from './NavBar'

const Wrap: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
        <NavBar/>
        {children}
    </>
  )
}

export default Wrap