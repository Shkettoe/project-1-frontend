import React from 'react'
import { Props } from '../interfaces/Component.interface'

const Button: React.FC<Props> = ({className, content, pd}: Props) => {
  return (
    <button type={pd ? "button" : "submit"} className={className}>
      {content}
    </button>
  )
}

export default Button