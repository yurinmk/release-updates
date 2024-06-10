import React from 'react'

interface ISplit {
  type?: 'horizontal' | 'vertical'
}

export const Split = ({ type = 'horizontal' }: ISplit) => {
  return type === 'horizontal' ? (
    <div className="w-full h-0.5 bg-primary my-2" />
  ) : (
    <div className="w-0.5 h-auto bg-primary" />
  )
}
