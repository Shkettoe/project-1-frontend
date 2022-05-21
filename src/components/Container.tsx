import React from 'react'
import styled from 'styled-components'

const Container: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div style={{"width": "100%", "margin": "auto"}}>
        <ContainerST>
            {children}
        </ContainerST>
    </div>
  )
}

const ContainerST = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Container