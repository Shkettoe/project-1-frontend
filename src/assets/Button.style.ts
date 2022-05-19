import styled from "styled-components";
import Button from "../components/Button";

export const ButtonST = styled(Button)`
    height: 40px;
    font-size: 16px;
    width: ${props => props.width || "auto"};
    padding: 8px 16px;
    border-radius: 32px;
    border: ${props => props.style?.border || "none"};
    color: ${props => props.style?.fg};
    background-color: ${props => props.style?.bg};
    &:hover{
        background-color: ${(props) => props.style?.bg && `#${(parseInt(props.style.bg.substring(1), 16) - parseInt('070707', 16)).toString(16)}`};
    }
`