import styled from 'styled-components'
import { ButtonST } from '../assets/Button.style'
import { Content, OrangeText } from '../assets/Common.style'
import { Form, FormContainer } from '../assets/FormElements.style'
import { ButtonVars } from '../assets/Vars'
const img = require('../assets/images/qotd.png')

const Test = () => {
    return (
        <Content>
                <Grid>
                    <div>
                        <Heading>
                            Welcome to <OrangeText>Quotastic</OrangeText>
                        </Heading>
                        <p style={{"width": "34em"}}>
                            Quotastic is free online platform for you to explore the  quips, quotes, and proverbs. Sign up and express yourself.
                        </p>
                        <ButtonST height='40px' width='137px' content='Sign up' style={ButtonVars.darkorange}/>
                    </div>
                    <div>
                        <img src={img}/>
                    </div>
                </Grid>
                <h1 style={{'fontSize': "61px", "width": "703px", "marginBottom": "124px"}}>Explore the world of <OrangeText>fantastic quotes</OrangeText></h1>
                <h1>gpoksgk</h1>
                {/* <h1>gpoksgk</h1> */}
        </Content>
    )
}


const Grid = styled.div`
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

const Heading = styled.p`
    height: 180px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-size: 80px !important;
`

export default Test