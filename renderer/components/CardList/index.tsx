import React from 'react'

import { Filter } from 'lucide-react'
import { Split } from '../Split'
import { Card } from './Card'

export const CardList = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-start mt-4">
      <Split />

      <a href="#" className="flex flex-row items-center justify-center self-start cursor-pointer">
        <Filter size={20} />
        <p className="text-sm text-primary font-bold pr-2">Filtro</p>
      </a>

      <div id="scroll" className="flex flex-col w-full h-[39rem] overflow-y-scroll px-3">
        {Array.from({ length: 20 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  )
}
