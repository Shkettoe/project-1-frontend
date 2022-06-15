import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

export const Profile = styled.div`
    margin-top: 80px;
    border: 1px solid #cde;
    padding: 32px;
    border-radius: 20px;
    width: 593px;
    
    @media (max-width: 720px){
        width: ${593 / 1.3}px;
    }


    max-height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    & .title{
        font-size: 35px;
    }
    & div a{
        text-decoration: none;
        padding: 32px;
        color: #111;
    }
`

export const OrangeText = styled.span`
    color: #DE8667;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1080px){
        grid-template-columns: 1fr;
    }
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
    display: grid;
    grid-auto-rows: minmax(150px, auto);
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (max-width: 1500px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 1080px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Heading = styled.p`
    height: 180px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-size: 80px !important;
`