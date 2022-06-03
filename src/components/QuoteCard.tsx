import React from 'react'
import upvote from '../assets/icons/upvote.svg'
import downvote from '../assets/icons/downvote.svg'
import styled from 'styled-components'
import { ImgST } from '../assets/Img.style'
import { ImgVars } from '../assets/Vars'


interface Props{
    content: string,
    author: string,
    score: number,
    img?: string,
}

const QuoteCard: React.FC<Props> = ({content, score, author, img}) => {
  return (
    <Card>
        <div>
            <img src={upvote} alt="logo.svg" />
            <p>{score}</p>
            <img src={downvote} alt="" />
        </div>
        <div>
            <div>
                <p>{content}</p>
                <p><ImgST width={ImgVars.small} url={img}/> {author}</p>
            </div>
        </div>
    </Card>
  )
}

const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-self: stretch;
    gap: 21px;
    width: 420px;
    min-height: 131px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 16px 32px 16px 16px;
    & div{
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        justify-content: center;
        & div {
            display: flex;
            align-items: baseline;
            gap: 18px;
            & :nth-child(2) {
                font-size: 12px;
            }
            & img, p{
                max-width: 323px;
                overflow-wrap: break-word;
                margin-right: 8px;
                vertical-align: middle;
            }
        }
    }
`

export default QuoteCard