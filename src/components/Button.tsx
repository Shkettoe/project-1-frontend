import React from 'react'

interface Props {
  content?: string
  className?: string
  color?: {
      bg?: string,
      fg?: string,
      border?: string | null
  }
}

const Button: React.FC<Props> = ({className, content}: Props) => {
  return (
    <button className={className}>
        {content}
    </button>
  )
}

export default Button