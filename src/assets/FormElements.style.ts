import styled, { css } from "styled-components";
import Input from "../components/Input";

export const scss = css`
  font-size: 80px;
`

export const InputST = styled(Input)`
    padding: 8px 30px 8px 24px;
    width: ${props => props.width || props.style?.width};
    height: ${props => props.height || "24px"};

    background: #FFFFFF;

    /* Orange */
    border: 2px solid #DE8667;
    border-radius: 32px;
`

export const TextAreaSt = styled.textarea`
  padding: 24px 30px 24px 30px;
  background: #FFFFFF;
  resize: none;

  /* Orange */
  border: 2px solid #DE8667;
  border-radius: 32px;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`

export const Form = styled.form`
  & div{
    margin-top: 8px;
    & div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      & div{
        margin-right: 22px;
        display: flex;
        flex-direction: column;
        & p {
          min-width: 100%;
        }
      }
    }
  }
`

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 20px
`

export const Label = styled.label`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  & p:nth-child(1){
    margin: 6px 0px;
    width: 25%;
  }
`