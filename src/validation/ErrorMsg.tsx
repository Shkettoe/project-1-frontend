import React from 'react'
import styled from 'styled-components'

const ErrorMsg: React.FC<{content: string}> = ({content}) => {
  return (
    <Message>
        {content}
    </Message>
  )
}

const Message = styled.p`
    margin-top: 4px;
    margin-left: 24px;
    font-style: italic;
    font-size: 12px;
    color: #ef1102;
`

export default ErrorMsg