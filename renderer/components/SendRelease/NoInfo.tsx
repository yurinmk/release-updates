import React from 'react'

import { Info } from 'lucide-react'
import { ThemeColors } from '../../styles/colors'

export const NoInfo = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Info color={ThemeColors.primary} />

      <p className="ml-1 text-primary">Sem informações </p>
    </div>
  )
}
