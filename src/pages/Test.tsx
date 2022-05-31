import styled from 'styled-components'
import { ButtonST } from '../assets/Button.style'
import { Content, OrangeText } from '../assets/Common.style'
import { Form, FormContainer } from '../assets/FormElements.style'
import { ButtonVars } from '../assets/Vars'
const img = require('../assets/images/qotd.png')

const Test = () => {
    return (
        <Content style={{"marginBottom": "200px"}}>
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
                <p style={{"textAlign":"center", "fontSize": "16px", "width": "534px"}}>Most upvoted quotes on the platform. Sign up or login to like the quotes and keep them saved in your profile</p>
                <Grid2>
                    <div>foikrsakg</div>
                    <div>foikrsakg</div>
                    <div>foikrsakg</div>
                </Grid2>
                <ButtonST height='40px' width='184px' style={ButtonVars.white} content='Sign up to see more'/>
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

const Grid2 = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 80px;
`

const Heading = styled.p`
    height: 180px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-size: 80px !important;
`

export default Test