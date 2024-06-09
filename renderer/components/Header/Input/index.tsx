import React from 'react'

export function Input() {
  return (
    <div className="flex flex-col w-full shadow-xl">
      <label className="text-base font-bold text-primary" htmlFor="">
        Login
      </label>

      <input
        className="w-auto h-10 text-xs border-2 border-primary rounded-md mt-2 pl-3 placeholder:text-xs"
        type="text"
        placeholder="Usuário"
      />
    </div>
  )
}
