import styled from "styled-components";
import Button from "../components/Button";

export const ButtonST = styled(Button)`
    height: 40px;
    padding: 8px 16px;
    border-radius: 32px;
    border: ${props => props.color?.border || "none"};
    color: ${props => props.color?.fg};
    background-color: ${props => props.color?.bg};
    &:hover{
        background-color: ${(props) => props.color?.bg && `#${(parseInt(props.color.bg.substring(1), 16) - parseInt('070707', 16)).toString(16)}`};
    }
`