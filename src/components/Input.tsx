import React, { LegacyRef } from 'react'
import { Props } from '../interfaces/Component.interface'

const Input: React.FC<Props> = ({className, type, name, register, value, onChange}) => {
  return (register?
      <input {...register(name)} value={value} className={className} type={type || "text"} />
      : <input className={className} onChange={onChange} defaultValue={value} type={type || "text"} />
  )
}

export default Input