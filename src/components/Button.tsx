import React from 'react'
import { Props } from '../interfaces/Component.interface'

const Button: React.FC<Props> = ({className, content}: Props) => {
  return (
    <button className={className}>
        {content}
    </button>
  )
}

export default Button