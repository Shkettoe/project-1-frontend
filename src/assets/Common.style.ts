import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const OrangeText = styled.span`
    color: #DE8667;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 104px;
    margin-bottom: 174px;
    & div{
        display: grid;
        & p{
            font-size: 24px;
            width: 530px !important;
        }
    }
`

export const Grid2 = styled.div`
    /* display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center; */
    display: grid;
    grid-auto-rows: max-content;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 80px;
`

export const Heading = styled.p`
    height: 180px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-size: 80px !important;
`