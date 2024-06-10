import React from 'react'
import { CornerDownRight, Trash2 } from 'lucide-react'
import { ThemeColors } from '../../styles/colors'

export const Card = () => {
  return (
    <div className="flex flex-row w-full h-12 items-center justify-between px-3 py-1 my-2 bg-purple-extra-light border-2 border-primary rounded-lg shadow-md shadow-gray">
      <div className="flex flex-col items-start justify-center">
        <p className="text-sm">Versão: v4.10.0</p>
        <p className="text-sm">Data: 24/05/2024</p>
      </div>

      <div className="flex flex-row w-1/6 items-center justify-evenly">
        <a href="#" className="cursor-point">
          <Trash2 size={22} color={ThemeColors.red} />
        </a>

        <a href="#" className="cursor-point">
          <CornerDownRight size={22} color={ThemeColors.primary} />
        </a>
      </div>
    </div>
  )
}
