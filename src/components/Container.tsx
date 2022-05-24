import React from 'react'
import styled from 'styled-components'

const Container: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <ContainerST className='Container'>
        {children}
    </ContainerST>
  )
}

const ContainerST = styled.div`
    height: 60%;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 130px;
`

export default Container