import React from 'react'

import { Minus, X } from 'lucide-react'
import { ThemeColors } from '../../styles/colors'

export const Header = () => {
  return (
    <div className="flex flex-row w-full items-center justify-end px-5 py-3">
      <a href="#" className="mr-1 ]">
        <Minus size={20} color={ThemeColors.primary} strokeWidth={3} />
      </a>

      <a href="#">
        <X size={20} color={ThemeColors.red} strokeWidth={3} />
      </a>
    </div>
  )
}
