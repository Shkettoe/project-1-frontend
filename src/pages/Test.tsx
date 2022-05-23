import React from 'react'
import styled from 'styled-components'
import { InputST } from '../assets/Input.style'
import RegisterForm from '../containers/RegisterForm'

const Test = () => {
    return (
        <div>
            
        </div>
    )
}

const Form = styled.form`
      margin: 20px 10px;
      & div{
        margin-top: 8px;
        display: table;
        width: 100%;
      }
    
      & div div{
        display: table-cell;
      }
    `

const Label = styled.label`
      font-size: 12px;
      line-height: 14px;
      & p:nth-child(1){
        margin: 6px 0px;
        width: 25%;
      }
    `

export default Test