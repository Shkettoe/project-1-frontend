import React from 'react'
import { Props } from '../interfaces/Component.interface'

const Input: React.FC<Props> = ({className, name}) => {
  return (
      <input className={className} type="text" />
  )
}

export default Input