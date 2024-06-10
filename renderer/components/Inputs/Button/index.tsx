import React from 'react'

import { IButtonProps } from './types'
import { twMerge } from 'tailwind-merge'

export const Button = ({ text, type, typeStyle, className, ...rest }: IButtonProps) => {
  const classNameStyle = {
    primary: 'bg-primary text-white text-base py-2 px-4 rounded-lg shadow-md shadow-gray mt-3 cursor-pointer',
    default:
      'bg-white text-primary text-base py-2 px-4 border-2 border-primary rounded-lg shadow-md shadow-gray mt-3 cursor-pointer',
    disabled:
      'bg-gray-400 text-white cursor-not-allowed text-base py-2 px-4 rounded-lg shadow-md shadow-gray mt-3 cursor-pointer',
  }

  return (
    <input
      className={twMerge(classNameStyle[typeStyle || 'default'], className)}
      type="submit"
      value={text}
      {...rest}
    />
  )
}
