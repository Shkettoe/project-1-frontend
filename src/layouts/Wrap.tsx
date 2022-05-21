import React from 'react'
import Container from '../components/Container'
import Footer from './Footer'
import NavBar from './NavBar'

const Wrap: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
        <NavBar/>
          <Container>
            {children}
          </Container>
        <Footer/>
    </>
  )
}

export default Wrap