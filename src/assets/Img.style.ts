import styled from "styled-components";
import Img from "../components/Img";

export const ImgST = styled(Img)`
    width: ${props => props.width};
    height: ${props => props.width};
    border-radius: 32px;
`