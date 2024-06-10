import React from 'react'

import { twMerge } from 'tailwind-merge'
import { IIpuntProps } from './types'

export const TextInput = ({ label, className = 'Login', ...rest }: IIpuntProps) => {
  return (
    <div className="flex flex-col w-full my-1">
      <label className="text-base text-primary" htmlFor={label}>
        {label}
      </label>

      <input
        id={label}
        className={twMerge(
          'w-auto h-10 text-sm border-2 border-primary rounded-lg mt-2 pl-3 placeholder:text-sm shadow-md shadow-gray',
          className,
        )}
        {...rest}
      />
    </div>
  )
}
