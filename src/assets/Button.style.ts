import styled from "styled-components";
import Button from "../components/Button";

export const ButtonST = styled(Button)`
    box-sizing: content-box;
    height: ${props => props.height || "40px"};
    font-size: 16px;
    width: ${props => props.width || "auto"};
    padding: 4px 30px 4px 24px;
    border-radius: 32px;
    border: ${props => props.style?.border || "none"};
    color: ${props => props.style?.fg};
    background-color: ${props => props.style?.bg};
    @media (max-width: 720px) {
      width: ${props => 720 - parseInt(props.width?.substring(0, props.width?.length - 2) || "420px") > 380 ? `${parseInt(props.width?.substring(0, props.width?.length - 2) || "420px") / 1.3}px` || `${parseInt(props.style?.width?.substring(0, props.style?.width?.length - 2) || "420px") / 1.3}px` : props.width || "auto"};
    }
    &:hover{
        background-color: ${(props) => props.style?.bg && `#${(parseInt(props.style.bg.substring(1), 16) - parseInt('070707', 16)).toString(16)}`};
        text-decoration: underline;
        cursor: pointer;
    }
`