import styled from "styled-components";
import Input from "../components/Input";

export const InputST = styled(Input)`
    padding: 8px 30px 8px 24px;
    width: ${props => props.width || props.style?.width};
    height: 24px;

    background: #FFFFFF;

    /* Orange */
    border: 2px solid #DE8667;
    border-radius: 32px;
`