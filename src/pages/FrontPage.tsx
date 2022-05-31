import styled from 'styled-components'
import { ButtonST } from '../assets/Button.style'
import { Content, OrangeText } from '../assets/Common.style'
import { Form, FormContainer } from '../assets/FormElements.style'
import { ButtonVars } from '../assets/Vars'
import QuoteCard from '../components/QuoteCard'
const img = require('../assets/images/qotd.png')

const FrontPage = () => {
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
                    <QuoteCard author='f' score={777} content='https://images8.alphacoders.com/433/433731.jpg'/>
                    <QuoteCard author="unknown" score={1921680144} content="You kid have just made the biggest mistake of your pathetic life. Do you even have a fucking clue of who you are dealing with right now? My software is top of the line and I am tracking your IP address as we speak.

I will find out your address. I will find out your name. I will find every piece of information I can find out about you.

And then I'm gonna use every single resource I have to wipe you off the face of planet earth. I will send the most ruthless assassins after you. Who will not hesitate to turn you into a fine red mist you fucking sub-human piece of shit.

You will wish you were never born and you will feel unimaginable pain for the rest of your life, which mind you, will be cut short.

You're fucked, bud."/>
                    <QuoteCard author='amogus' score={9999} content="amogus"/>
                    <QuoteCard author="ሐኢለ ሠላሴ" score={10000} content='ኃጢአተኛ ነፍስህ ከመዳን በላይ ናት እናም ሰላምን ወይም ሥቃይን አታውቅም ፣ የንስሐ ቅዝቃዜ ብቻ አብቅቷል ፣ ምክንያቱም ኃጢአቶችህ ከማንኛውም ተልእኮ የላቀ ስለሆነ ፣ መጨረሻው ቀርቧል ፣ የኃጢአት መርከቦች'/>
                    <QuoteCard author="Grzegorz Brzęczyszczykiewicz" score={401} content='witam wszystkich'/>
                    <QuoteCard author='Jetstream Sam' score={0} content='memoriesbrokenthetruthgoesunspokeniveevenforgottenmynameidontknowtheseasonorwhatisthereasonimstandinghereholdingmybladeadesolateplacewithoutanytraceitsonlythecoldwindifeelitsmethatispiteasistanduptighttheonlythingiknowforrealtherewillbebloodshedthemaninthemirrornodshisheadtheonlyoneleftwillrideupondragonsbackbecausethemountainsdontgivebackwhattheytakeohnotherewillbebloodsheditstheonlythingiveeverknown'/>
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

export default FrontPage