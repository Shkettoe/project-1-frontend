import React, { LegacyRef } from 'react'
import { Props } from '../interfaces/Component.interface'

const Input: React.FC<Props> = ({className, type, name, register}) => {
  return (
      <input {...register(name)} className={className} type={type || "text"} />
  )
}

export default Input