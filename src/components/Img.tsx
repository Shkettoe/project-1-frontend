import React from 'react'
import { Props } from '../interfaces/Component.interface'

const Img: React.FC<Props> = ({className, url, width}) => {
  return (
    <img className={className} src={url} width={width}/>
  )
}

export default Img