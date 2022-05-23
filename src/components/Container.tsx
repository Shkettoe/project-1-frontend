import React from 'react'
import styled from 'styled-components'

const Container: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <ContainerST>
        {children}
    </ContainerST>
  )
}

const ContainerST = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 130px;
`

export default Container