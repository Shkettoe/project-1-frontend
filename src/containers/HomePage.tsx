import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonST } from '../assets/Button.style'
import { Content, Grid, Heading, OrangeText, Grid2 } from '../assets/Common.style'
import { ButtonVars } from '../assets/Vars'
import QuoteCard from '../components/QuoteCard'
import { PostsHelper } from '../helpers/Posts.helper'
import { Quote } from '../interfaces/models/Quote.interface'

const LoggedOut: React.FC<{img: string, pic: string}> = ({img, pic}) => {
    const quotes = PostsHelper()
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
                        <Link to={'/register'}>
                            <ButtonST height='40px' width='137px' content='Sign up' style={ButtonVars.darkorange}/>
                        </Link>
                    </div>
                    <div>
                        <img src={img}/>
                    </div>
                </Grid>
                <h1 style={{'fontSize': "61px", "width": "703px", "marginBottom": "124px"}}>Explore the world of <OrangeText>fantastic quotes</OrangeText></h1>
                <h1 style={{'fontSize': "32px", "marginTop": "124px"}}><OrangeText>Most Upvoted Quotes</OrangeText></h1>
                <p style={{"textAlign":"center", "fontSize": "16px", "width": "534px"}}>Most upvoted quotes on the platform. Sign up or login to like the quotes and keep them saved in your profile</p>
                <Grid2>
                    {quotes.map((q: Quote) => {
                        return (
                            <QuoteCard key={q.id} img={q.user.avatar} author={q.author} content={q.content} score={q.score}/>
                        )
                    })}
                </Grid2>
                <h1 style={{'fontSize': "32px", "marginTop": "124px"}}><OrangeText>Other Quotes</OrangeText></h1>
                <p style={{"textAlign":"center", "fontSize": "16px", "width": "534px"}}>Other quotes from other sources</p>
                <Grid2>
                    <QuoteCard img={pic} author='f' score={777} content='https://images8.alphacoders.com/433/433731.jpg'/>
                    <QuoteCard img={pic} author="unknown" score={1921680144} content="…………………………………………. ………………………………….,-~~”””’~~–,,_
………………………………………….. …………………………….,-~”-,:::::::::::::::::::”-,
………………………………………….. ………………………..,~”::::::::’,::::::: :::::::::::::|’,
………………………………………….. ………………………..|::::::,-~”’___””~~–~”’:}
………………………………………….. ………………………..’|:::::|: : : : : : : : : : : : : :
………………………………………….. ………………………..|:::::|: : :-~~—: : : —–: |
………………………………………….. ……………………….(_”~-’: : : : : : : : :
………………………………………….. ………………………..”’~-,|: : : : : : ~—’: : : :,’–never gonna
………………………………………….. ……………………………|,: : : : : :-~~–: : ::/ —–give you up!
………………………………………….. ……………………….,-”\’:\: :’~,,_: : : : : _,-’
………………………………………….. ………………….__,-’;;;;;\:”-,: : : :’~—~”/|
………………………………………….. ………….__,-~”;;;;;;/;;;;;;;\: :\: : :____/: :’,__
………………………………………….. .,-~~~””_;;;;;;;;;;;;;;;;;;;;;;;;;’,. .”-,:|:::::::|. . |;;;;”-,__
…………………………………………../;;;;;;;;;;;;;;;;;;;;;;;;;;;;,;;;;;;;;;\. . .”|::::::::|. .,’;;;;;;;;;;”-,
…………………………………………,’ ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;|;;;;;;;;;;;\. . .\:::::,’. ./|;;;;;;;;;;;;;|
………………………………………,-”;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\;;;;;;;;;;;’,: : __|. . .|;;;;;;;;;,’;;|
…………………………………….,-”;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;’,;;;;;;; ;;;; \. . |:::|. . .”,;;;;;;;;|;;/
……………………………………/;;;;;;;;;;;;;;;;;;;;;;;;;;|;;;;;;;;;;;;;;\;;;;;;;; ;;;\. .|:::|. . . |;;;;;;;;|/
…………………………………./;;,-’;;;;;;;;;;;;;;;;;;;;;;,’;;;;;;;;;;;;;;;;;,;;;;;;; ;;;|. .\:/. . . .|;;;;;;;;|
…………………………………/;;;;;;;;;;;;;;;;;;;;;;;;;;,;;;;;;;;;;;;;;;;;;;;;;; ;;;;;;;”,: |;|. . . . \;;;;;;;|
………………………………,~”;;;;;;;;;; ;;;;;;;;;;;,-”;;;;;;;;;;;;;;;;;;;;;;;;;;\;;;;;;;;|.|;|. . . . .|;;;;;;;|
…………………………..,~”;;;;;;;;;;;;;; ;;;;;;;;,-’;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;’,;;;;;;| |:|. . . . |\;;;;;;;|
………………………….,’;;;;;;;;;;;;;;;;; ;;;;;;;/;;;,-’;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,;;;;;| |:|. . . .’|;;’,;;;;;|
…………………………|;,-’;;;;;;;;;;;;;;;;;;;,-’;;;,-’;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,;;;;| |:|. . .,’;;;;;’,;;;;|_
…………………………/;;;;;;;;;;;;;;;;;,-’_;;;;;;,’;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;|;;; ;|.|:|. . .|;;;;;;;|;;;;|””~-,
………………………./;;;;;;;;;;;;;;;;;;/_”,;;;,’;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ,;;| |:|. . ./;;;;;;;;|;;;|;;;;;;|-,,__
……………………../;;;;;;;;;;;;;;;;;,-’…|;;,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;;;;| |:|._,-’;;;;;;;;;|;;;;|;;;;;;;;;;;”’-,_
……………………/;;;;;;;;;;;;;;;;,-’….,’;;,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;;;;;;;|.|:|::::”’~–~”’||;;;;;|;;;;;;;;;;,-~””~–,
………………….,’;;;;;;;;;;;;;;;;,’……/;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;|.|:|::::::::::::::|;;;;;’,;;;;;;;;;”-,: : : : : :”’~-,:”’~~–,
…………………/;;;;;;;;;;;;;;;,-’……,’;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;;;;;;;;;;;|:|:|::::::::::::::’,;;;;;;|_””~–,,-~—,,___,-~~”’__”~-
………………,-’;;;;;;;;;;;;;;;,’……../;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;;;|:|:|:::::::::::::::|;;;;;;|……………… …”-,\_”-,”-,”~"/>
                    <QuoteCard img={pic} author='amogus' score={9999} content="its morbin time"/>
                    <QuoteCard img={pic} author="ሐኢለ ሠላሴ" score={10000} content='ኃጢአተኛ ነፍስህ ከመዳን በላይ ናት እናም ሰላምን ወይም ሥቃይን አታውቅም ፣ የንስሐ ቅዝቃዜ ብቻ አብቅቷል ፣ ምክንያቱም ኃጢአቶችህ ከማንኛውም ተልእኮ የላቀ ስለሆነ ፣ መጨረሻው ቀርቧል ፣ የኃጢአት መርከቦች'/>
                    <QuoteCard img={pic} author="Grzegorz Brzęczyszczykiewicz" score={401} content='witam wszystkich'/>
                    <QuoteCard img={pic} author='Jetstream Sam' score={0} content='memoriesbrokenthetruthgoesunspokeniveevenforgottenmynameidontknowtheseasonorwhatisthereasonimstandinghereholdingmybladeadesolateplacewithoutanytraceitsonlythecoldwindifeelitsmethatispiteasistanduptighttheonlythingiknowforrealtherewillbebloodshedthemaninthemirrornodshisheadtheonlyoneleftwillrideupondragonsbackbecausethemountainsdontgivebackwhattheytakeohnotherewillbebloodsheditstheonlythingiveeverknown'/>
                </Grid2>
                <Link to={"/register"}>
                    <ButtonST height='40px' width='184px' style={ButtonVars.white} content='Sign up to see more'/>
                </Link>
        </Content>
  )
}

export const LoggedIn = () =>{
    return(
        <div>Logged in</div>
    )
}

export default LoggedOut