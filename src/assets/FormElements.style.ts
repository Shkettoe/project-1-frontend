import styled, { css } from "styled-components";
import Input from "../components/Input";

export const scss = css`
  font-size: 80px;
`

export const InputST = styled(Input)`
    padding: 8px 30px 8px 24px;
    width: ${props => props.width || props.style?.width};
    height: 24px;

    background: #FFFFFF;

    /* Orange */
    border: 2px solid #DE8667;
    border-radius: 32px;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
  margin: 20px 10px;
  & div{
    margin-top: 8px;
    & div {
      display: flex;
      width: 100%;
      flex-direction: row;
      gap: 16px;
      justify-content: space-between;
      & div{
        margin: 0px;
        padding: 0px;
        width: 100%;
        display: block;
      }
    }
  }
`

export const Label = styled.label`
  font-size: 12px;
  line-height: 14px;
  & p:nth-child(1){
    margin: 6px 0px;
    width: 25%;
  }
`