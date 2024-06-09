import React from 'react'
import { IIpuntProps } from './types'

export const TextInput = ({ label = 'Login', ...rest }: IIpuntProps) => {
  return (
    <div className="flex flex-col w-full shadow-xl my-2">
      <label className="text-base font-bold text-primary" htmlFor={label}>
        {label}
      </label>

      <input
        id={label}
        className="w-auto h-10 text-xs border-2 border-primary rounded-md mt-2 pl-3 placeholder:text-xs"
        {...rest}
      />
    </div>
  )
}
